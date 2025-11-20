# Departamento en Venta – Querétaro (Rinconada Pirules 2a Sección)

**Proyecto personal full-stack | HTML • TailwindCSS • JavaScript • Supabase • Vercel**

¡Bienvenido al código fuente de mi página web para la venta de mi departamento en Querétaro!  
Este proyecto lo construí desde cero como ejercicio real de desarrollo full-stack, diseño responsive, SEO, seguridad y cumplimiento legal (LFPDPPP).

**Link en vivo:** https://departamento-queretaro.vercel.app  

## Características principales

- **Diseño 100 % responsive** (PC, tablet, móvil)
- Galería de fotos con lightbox
- Mapa interactivo de leaflet Maps
- Formulario de contacto con almacenamiento seguro en Supabase
- **Aviso de privacidad completo y cumpliendo LFPDPPP** (modal elegante)
- Panel de administración privado con:
  - Casillas “contactado” y “borrar seleccionados”
  - Exportación a Excel
  - Protección por contraseña + archivo oculto
- SEO avanzado (meta tags, JSON-LD inmobiliario, palabras clave ocultas)
- Seguridad total:
  - Ninguna clave en el código fuente
  - Variables de entorno en Vercel
  - .env eliminado del historial de Git
  - Admin secreto fuera del repositorio público

## Tecnologías usadas

| Tecnología       | Uso                                      |
|------------------|------------------------------------------|
| HTML5 + TailwindCSS | Maquetación y diseño moderno            |
| JavaScript (ES6+) | Lógica del formulario, modal, admin     |
| Supabase         | Base de datos de leads (PostgreSQL)     |
| Vercel           | Hosting gratuito y despliegue continuo  |
| leaflet Maps API  | Ubicación interactiva                   |

## Panel de administración (privado)

- URL secreta (solo yo la conozco)
- Login con contraseña fuerte
- Tabla completa de leads con casillas “contactado”
- Borrar leads individuales o seleccionados
- Exportar a Excel con un clic

## Cumplimiento legal

- Aviso de privacidad completo conforme a la **LFPDPPP**
- Consentimiento explícito antes de enviar el formulario
- Derechos ARCO garantizados vía correo electrónico

## Cómo ejecutar localmente

```bash
git clone https://github.com/pprgarcia/departamento-queretaro.git
cd departamento-queretaro
# Abre public/index.html en tu navegador

Autor
José Rodríguez García
Querétaro, México
pprgarcia.jr@gmail.com
