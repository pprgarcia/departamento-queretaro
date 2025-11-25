# Departamento en Venta – Querétaro (Rinconada Pirules 2a Sección)

**Proyecto personal full-stack** • HTML • TailwindCSS • JavaScript • Supabase • Vercel • Leaflet

¡Bienvenido al código fuente de mi página web para vender mi departamento en Querétaro!  
Construido desde cero como ejercicio real de desarrollo full-stack, diseño responsive, SEO, seguridad y cumplimiento legal (LFPDPPP).

**Link en vivo:** <https://departamento-queretaro.vercel.app>

## Características principales

- Diseño 100 % responsive (PC, tablet, móvil)
- Galería de fotos con lightbox
- Mapa interactivo con **Leaflet + OpenStreetMap** (sin costo de API)
- Formulario de contacto con almacenamiento seguro en Supabase
- Aviso de privacidad completo y conforme a la **LFPDPPP** (modal elegante)
- Panel de administración privado y oculto:
  - Casillas “contactado” y borrado múltiple
  - Exportación a Excel con un clic
  - Protección por contraseña + URL secreta (no está en el repositorio)

## Seguridad aplicada

- La **anon key** de Supabase está inyectada directamente como variable de entorno en Vercel  
  → En producción funciona perfecto  
  → En local muestra un mensaje controlado de error (comportamiento esperado)
- Archivo `.env` eliminado del historial de Git (nunca estuvo en producción)
- Panel de administración completamente oculto del repositorio público

## Tecnologías usadas

| Tecnología           | Uso                                          |
|----------------------|----------------------------------------------|
| HTML5 + TailwindCSS  | Maquetación y diseño moderno                 |
| JavaScript (ES6+)    | Carrusel, menú móvil, lightbox, formulario   |
| Supabase             | Base de datos de leads (PostgreSQL en la nube) |
| Vercel               | Hosting + despliegue continuo + variables de entorno |
| Leaflet + OSM        | Mapa interactivo gratuito                    |

## Panel de administración (privado)

- URL secreta (solo el propietario la conoce)
- Login con contraseña fuerte
- Tabla completa de leads con casillas “contactado”
- Borrado individual o múltiple
- Exportación directa a Excel

## Cumplimiento legal

- Aviso de privacidad completo conforme a la **LFPDPPP**
- Consentimiento explícito antes de enviar el formulario
- Derechos ARCO garantizados vía correo electrónico

## Cómo ejecutar localmente

```bash
git clone https://github.com/pprgarcia/departamento-queretaro.git
cd departamento-queretaro
# Abre public/index.html con Live Server o directamente
```

El formulario solo funciona en producción (Vercel) porque la anon key de Supabase se inyecta como variable de entorno.
En local mostrará un mensaje de error controlado (es normal y seguro).

Próximos pasos (ideas futuras):
Botón directo a WhatsApp
Tour virtual 360°
Notificaciones automáticas al recibir leads

Autor
José Rodríguez García
Desarrollador full-stack • Querétaro, México
<pprgarcia.jr@gmail.com>
