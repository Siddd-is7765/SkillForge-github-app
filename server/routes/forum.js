const express = require('express')
const router = express.Router()
const { authMiddleware } = require('../middleware/auth')
const { createPost, listPosts, commentPost } = require('../controllers/forumController')

router.get('/', listPosts)
router.post('/', authMiddleware, createPost)
router.post('/:id/comments', authMiddleware, commentPost)

module.exports = router
