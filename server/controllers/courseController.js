const Course = require('../models/Course')
const mongoose = require('mongoose')

exports.listCourses = async (req, res, next) => {
  try {
    // If DB is not connected, return an empty list so the API is still usable
    if (mongoose.connection.readyState !== 1) return res.json([])
    const q = {}
    if (req.query.category) q.category = req.query.category
    const courses = await Course.find(q).limit(50)
    res.json(courses)
  } catch (err) { next(err) }
}

exports.getCourse = async (req, res, next) => {
  try {
    if (mongoose.connection.readyState !== 1) return res.status(503).json({ message: 'DB not connected' })
    const course = await Course.findById(req.params.id)
    if (!course) return res.status(404).json({ message: 'Not found' })
    res.json(course)
  } catch (err) { next(err) }
}

exports.createCourse = async (req, res, next) => {
  try {
    const course = await Course.create(req.body)
    res.status(201).json(course)
  } catch (err) { next(err) }
}

exports.updateCourse = async (req, res, next) => {
  try {
    const course = await Course.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.json(course)
  } catch (err) { next(err) }
}

exports.deleteCourse = async (req, res, next) => {
  try {
    await Course.findByIdAndDelete(req.params.id)
    res.json({ success: true })
  } catch (err) { next(err) }
}
