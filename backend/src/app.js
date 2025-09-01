const express = require('express');
const cors = require('cors');
const aiRoutes = require('./routes/ai.routes');

const app = express();

// CORS setup for frontend

app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:3001'], // NO trailing slash
  methods: ["GET", "POST"],
  credentials: true
}));

// JSON body parser
app.use(express.json());

// Test route
app.get('/', (req, res) => {
  res.send('Hello World');
});

// AI routes
app.use('/ai', aiRoutes);

module.exports = app;
