require('dotenv').config();
const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth');

DeviceOrientationEvent.config()

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 9001;
app.listen(PORT, () => console.log(`🚀 Backend listo en puerto ${PORT}`));
