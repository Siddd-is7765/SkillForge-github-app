const ForumPost = require('../models/ForumPost')

exports.listPosts = async (req, res, next) => {
  try {
    const posts = await ForumPost.find().sort({ createdAt: -1 }).limit(50)
    res.json(posts)
  } catch (err) { next(err) }
}

exports.createPost = async (req, res, next) => {
  try {
    const post = await ForumPost.create({ ...req.body, author: req.userId })
    // emit via socket handled in server.js when client sends socket event
    res.status(201).json(post)
  } catch (err) { next(err) }
}

exports.commentPost = async (req, res, next) => {
  try {
    const post = await ForumPost.findById(req.params.id)
    if (!post) return res.status(404).json({ message: 'Post not found' })
    post.comments.push({ author: req.userId, content: req.body.content })
    await post.save()
    res.json(post)
  } catch (err) { next(err) }
}
