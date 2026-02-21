const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
  author: { type: mongoose.Types.ObjectId, ref: 'User' },
  content: String,
  replies: [new mongoose.Schema({ author: { type: mongoose.Types.ObjectId, ref: 'User' }, content: String, createdAt: { type: Date, default: Date.now } })],
  createdAt: { type: Date, default: Date.now }
})

const forumSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: { type: mongoose.Types.ObjectId, ref: 'User' },
  comments: [commentSchema]
}, { timestamps: true })

module.exports = mongoose.model('ForumPost', forumSchema)
