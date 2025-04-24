// testDatabase.js
const sqlite3 = require('sqlite3').verbose();

// Crear o abrir la base de datos
const db = new sqlite3.Database('./users.db', (err) => {
  if (err) {
    return console.error('❌ Error abriendo base de datos:', err.message);
  }
  console.log('✅ Conectado a la base de datos SQLite.');
});

// Verificar tabla y hacer operaciones
db.serialize(() => {
  // Crear tabla si no existe
  db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT UNIQUE NOT NULL,
      password TEXT NOT NULL
    )
  `, (err) => {
    if (err) {
      console.error('❌ Error al crear la tabla:', err.message);
    } else {
      console.log('✅ Tabla "users" lista.');
    }
  });

  // Insertar usuario de prueba
  db.run(`INSERT INTO users (email, password) VALUES (?, ?)`, ['test@example.com', '1234'], function (err) {
    if (err) {
      console.warn('⚠️ Usuario de prueba no insertado (puede que ya exista):', err.message);
    } else {
      console.log('✅ Usuario insertado con ID:', this.lastID);
    }
    

    // Leer todos los usuarios
    db.all(`SELECT * FROM users`, [], (err, rows) => {
      if (err) {
        console.error('❌ Error al leer usuarios:', err.message);
      } else {
        console.log('📄 Usuarios registrados:', rows);
      }

      // Cerrar conexión
      db.close((err) => {
        if (err) console.error('❌ Error cerrando conexión:', err.message);
        else console.log('✅ Conexión cerrada.');
      });
    });
  });
});
