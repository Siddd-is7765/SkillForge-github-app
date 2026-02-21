const express = require('express')
const router = express.Router()
const { authMiddleware } = require('../middleware/auth')
const { listCourses, getCourse, createCourse, updateCourse, deleteCourse } = require('../controllers/courseController')

router.get('/', listCourses)
router.post('/', authMiddleware, createCourse)
router.get('/:id', getCourse)
router.put('/:id', authMiddleware, updateCourse)
router.delete('/:id', authMiddleware, deleteCourse)

module.exports = router
