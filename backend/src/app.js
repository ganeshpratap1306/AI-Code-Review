const express = require('express');
const cors = require('cors');
const aiRoutes = require('./routes/ai.routes');

const app = express();

// CORS setup for frontend

app.use(cors({
  origin: ['https://ai-code-review-rosy.vercel.app'], // NO trailing slash
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
