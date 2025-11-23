// config.js – Configuración automática según entorno
const isLocal = window.location.hostname === 'localhost' || 
                window.location.hostname === '127.0.0.1' || 
                window.location.port !== '';

// Configuración para producción (Vercel inyecta la variable)
const SUPABASE_CONFIG = {
  url: "https://asezwpitjpsoimvfuwse.supabase.co",
  key: window.VITE_SUPABASE_ANON_KEY || null
};

// Configuración para desarrollo local (lee desde .env.local si existe)
const LOCAL_CONFIG = {
  apiUrl: "http://localhost:3000/api/contacto",  // tu backend Node.js
  enabled: isLocal
};

// Exportamos la configuración activa
window.APP_CONFIG = isLocal && LOCAL_CONFIG.enabled ? LOCAL_CONFIG : SUPABASE_CONFIG;