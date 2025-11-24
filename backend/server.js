const express = require('express');
const mysql = require('mysql2');
const dotenv = require('dotenv');
const cors = require('cors');

const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });

console.log('DB_USER:', process.env.DB_USER);
console.log('DB_PASS:', process.env.DB_PASS ? ' (existe)' : ' (vacío)');
console.log('DB_NAME:', process.env.DB_NAME);

const app = express();

app.use(cors());
app.use(express.json());

const fs = require('fs');

// Servir archivos estáticos + inyectar variables en index.html
app.get('/', (req, res) => {
  const filePath = path.join(__dirname, '../public/index.html');
  fs.readFile(filePath, 'utf8', (err, html) => {
    if (err) return res.status(500).send('Error');

    res.send(html);
  });
});

app.use(express.static('../public'));

// Conexión a DB
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

db.connect(err => {
  if (err) throw err;
  console.log('DB conectada');
});

// Ruta de prueba
app.get('/api/test', (req, res) => {
  res.json({ mensaje: 'Backend funcionando' });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});

// Ruta: Recibir formulario de contacto
app.post('/api/contacto', (req, res) => {
  const { nombre, telefono, email, comentario, horario } = req.body;

  // Validación básica
  if (!nombre || (!telefono && !email)) {
    return res.status(400).json({ error: 'Nombre y (teléfono o email) son obligatorios' });
  }

  const sql = `INSERT INTO leads (nombre, telefono, email, comentario, horario_preferido) 
               VALUES (?, ?, ?, ?, ?)`;

  db.query(sql, [nombre, telefono || null, email || null, comentario || null, horario || null], (err, result) => {
    if (err) {
      console.error('Error al guardar lead:', err);
      return res.status(500).json({ error: 'Error interno del servidor' });
    }
    res.json({ mensaje: '¡Gracias! Nos pondremos en contacto pronto.' });
  });
});