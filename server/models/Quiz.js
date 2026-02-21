const mongoose = require('mongoose')

const questionSchema = new mongoose.Schema({
  text: String,
  options: [String],
  answerIndex: Number
})

const quizSchema = new mongoose.Schema({
  course: { type: mongoose.Types.ObjectId, ref: 'Course' },
  title: String,
  questions: [questionSchema]
}, { timestamps: true })

module.exports = mongoose.model('Quiz', quizSchema)
