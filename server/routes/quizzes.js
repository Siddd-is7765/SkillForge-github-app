const express = require('express')
const router = express.Router()
const { authMiddleware } = require('../middleware/auth')
const { submitQuiz, getQuiz } = require('../controllers/quizController')

router.get('/:id', getQuiz)
router.post('/:id/submit', authMiddleware, submitQuiz)

module.exports = router
