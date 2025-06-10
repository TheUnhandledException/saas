const express = require('express');
const rateLimit = require('express-rate-limit');
const fs = require('fs');

const app = express();
app.set('trust proxy', true);
const PORT = process.env.PORT || 5000; // Change the default port to 5000

// Load reasons from JSON
const reasons = JSON.parse(fs.readFileSync('./reasons.json', 'utf-8'));

// Rate limiter: 120 requests per minute per IP
const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 120,
  keyGenerator: (req, res) => {
    return req.headers['cf-connecting-ip'] || req.ip; // Fallback if header missing (or for non-CF)
  },
  message: { error: "Calma, campeão. Nem o ChatGPT consegue acompanhar tanta sede de atenção assim." }
});

app.use(limiter);

// Random rejection reason endpoint
app.get('/saas', (req, res) => {
  res.json({ diga: reasons[Math.floor(Math.random() * reasons.length)] });
});

// Start server
app.listen(PORT, () => {
  console.log(`Sarcasmos prontos para serem disparados da porta ${PORT}`);
});