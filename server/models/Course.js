const mongoose = require('mongoose')

const lessonSchema = new mongoose.Schema({
  title: String,
  videoUrl: String,
  duration: Number
})

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  category: String,
  instructor: { type: mongoose.Types.ObjectId, ref: 'User' },
  lessons: [lessonSchema],
  price: Number
}, { timestamps: true })

module.exports = mongoose.model('Course', courseSchema)
