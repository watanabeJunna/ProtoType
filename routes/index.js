const express = require('express')
const router = express.Router()

/* do Routing */
router.get('/', (req, res) => {
  res.render('pages/flont')
})

router.get('/confirm', (req, res) => {
  res.render('pages/confirm')
})

router.get('/prompt', (req, res) => {
  res.render('pages/prompt')
})

router.get('/chat', (req, res) => {
  res.render('pages/chat')
})

module.exports = router;
