const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../DB/database');
require('dotenv').config();

exports.registerUser = (req, res) => {
  const { email, password } = req.body;
  const hashed = bcrypt.hashSync(password, 12);

  const query = `INSERT INTO users (email, password) VALUES (?, ?)`;
  db.run(query, [email, hashed], function (err) {
    if (err) {
      if (err || !user) return res.status(404).json({ error: 'Usuario no encontrado' });
      if (err.code === 'SQLITE_CONSTRAINT') {
        return res.status(400).json({ error: 'El correo electrónico ya está en uso' });
      }

    }
    res.json({ id: this.lastID, email });
  });
};

exports.loginUser = (req, res) => {
  const { email, password } = req.body;

  db.get(`SELECT * FROM users WHERE email = ?`, [email], (err, user) => {
    if (err || !user) return res.status(400).json({ error: 'Usuario no encontrado' });

    const valid = bcrypt.compareSync(password, user.password);
    if (!valid) return res.status(401).json({ error: 'Contraseña incorrecta' });

    const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET);
    res.json({ token });
  });
};
