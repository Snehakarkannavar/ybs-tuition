// Vercel serverless function handler
const path = require('path');
const express = require('express');
const fs = require('fs');

// Create Express app
const app = express();

// Parse JSON
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Serve static files from dist/public
const distPath = path.resolve(__dirname, '..', 'dist', 'public');
app.use(express.static(distPath));

// SPA fallback - serve index.html for all routes
app.use('*', (req, res) => {
  res.sendFile(path.resolve(distPath, 'index.html'));
});

// Export for Vercel
module.exports = app;
