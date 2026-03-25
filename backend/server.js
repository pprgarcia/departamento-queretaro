const express = require("express");
const { Pool } = require("pg");
const cors = require("cors");
const path = require("path"); // <--- ESTA ES LA LÍNEA QUE FALTABA
require("dotenv").config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

console.log("Servidor iniciando...");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false, // <--- INDISPENSABLE para Vercel
  },
  connectionTimeoutMillis: 10000, // 10 segundos de espera máximo
});

// Servir archivos estáticos del frontend
// (Asumiendo que tu carpeta 'public' está un nivel arriba de 'backend')
app.use(express.static(path.join(__dirname, "../public")));

// --- RUTA 1: RECIBIR FORMULARIO DE CONTACTO ---
app.post("/api/contacto", async (req, res) => {
  const { nombre, telefono, email, comentario, horario } = req.body;

  // Validación básica
  if (!nombre || (!telefono && !email)) {
    return res
      .status(400)
      .json({ error: "Nombre y (teléfono o email) son obligatorios" });
  }

  const sql = `INSERT INTO leads (nombre, telefono, email, comentario, horario_preferido) 
               VALUES ($1, $2, $3, $4, $5)`;

  try {
    await pool.query(sql, [
      nombre,
      telefono || null,
      email || null,
      comentario || null,
      horario || null,
    ]);
    res.json({ mensaje: "¡Gracias! Nos pondremos en contacto pronto." });
  } catch (err) {
    console.error("Error al guardar lead en Supabase:", err);
    res.status(500).json({ error: "Error interno del servidor" });
  }
});

// --- RUTA 2: VER LEADS (Con clave de seguridad) ---
// Ejemplo: http://localhost:3000/api/leads?key=TU_CLAVE_DEL_ENV
app.get("/api/leads", async (req, res) => {
  const { key } = req.query;
  console.log("Petición recibida en /api/leads con key:", key);

  if (key !== process.env.ADMIN_KEY) {
    console.error("Error: Clave de admin no coincide");
    return res.status(401).json({ error: "No autorizado" });
  }

  try {
    console.log("Intentando conectar a la base de datos...");
    const result = await pool.query(
      "SELECT * FROM leads ORDER BY fecha_envio DESC",
    );
    console.log("Consulta exitosa, enviando datos...");
    res.json(result.rows);
  } catch (err) {
    console.error("ERROR CRÍTICO EN DB:", err.message);
    res
      .status(500)
      .json({
        error: "Error de conexión a la base de datos",
        details: err.message,
      });
  }
});

// NUEVA RUTA: Actualizar estado de contacto
app.patch("/api/leads/:id", async (req, res) => {
  const { key } = req.query;
  const { id } = req.params;
  const { contactado } = req.body;

  if (key !== process.env.ADMIN_KEY) {
    return res.status(401).json({ error: "No autorizado" });
  }

  try {
    await pool.query("UPDATE leads SET contactado = $1 WHERE id = $2", [
      contactado,
      id,
    ]);
    res.json({ mensaje: "Estado actualizado" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error al actualizar" });
  }
});

// NUEVA RUTA: Borrar un lead
app.delete("/api/leads/:id", async (req, res) => {
  const { key } = req.query;
  const { id } = req.params;

  if (key !== process.env.ADMIN_KEY) {
    return res.status(401).json({ error: "No autorizado" });
  }

  try {
    await pool.query("DELETE FROM leads WHERE id = $1", [id]);
    res.json({ mensaje: "Lead borrado correctamente" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error al borrar" });
  }
});

// Iniciar servidor
const PORT = process.env.PORT || 3000;
// Solo ejecutamos listen si NO estamos en Vercel
if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => {
    console.log(`🚀 Servidor local en http://localhost:${PORT}`);
  });
}

// ESTA LÍNEA ES VITAL PARA VERCEL:
module.exports = app;
