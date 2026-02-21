const Quiz = require('../models/Quiz')
const User = require('../models/User')

exports.getQuiz = async (req, res, next) => {
  try {
    const quiz = await Quiz.findById(req.params.id)
    if (!quiz) return res.status(404).json({ message: 'Not found' })
    res.json(quiz)
  } catch (err) { next(err) }
}

exports.submitQuiz = async (req, res, next) => {
  try {
    const quiz = await Quiz.findById(req.params.id)
    if (!quiz) return res.status(404).json({ message: 'Quiz not found' })
    const answers = req.body.answers || {}
    let score = 0
    quiz.questions.forEach((q, idx) => { if (answers[idx] == q.answerIndex) score++ })
    // In production, store score and update leaderboard
    res.json({ score, total: quiz.questions.length })
  } catch (err) { next(err) }
}
