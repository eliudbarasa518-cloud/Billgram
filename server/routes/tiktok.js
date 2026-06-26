const express = require('express');
const router = express.Router();

// TikTok integration routes
router.post('/connect', (req, res) => {
  res.json({ message: 'Connect TikTok account' });
});

router.get('/stats/:userId', (req, res) => {
  res.json({ message: 'Get TikTok stats' });
});

router.post('/sync', (req, res) => {
  res.json({ message: 'Sync TikTok data' });
});

module.exports = router;
