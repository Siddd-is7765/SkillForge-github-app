const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

exports.register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body
    if (!email || !password) return res.status(400).json({ message: 'Missing fields' })
    const exists = await User.findOne({ email })
    if (exists) return res.status(409).json({ message: 'Email exists' })
    const hash = await bcrypt.hash(password, 10)
    const user = await User.create({ name, email, password: hash })
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET || 'devsecret')
    res.json({ token, user: { id: user._id, email: user.email, name: user.name } })
  } catch (err) { next(err) }
}

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body
    const user = await User.findOne({ email })
    if (!user) return res.status(401).json({ message: 'Invalid credentials' })
    const ok = await bcrypt.compare(password, user.password)
    if (!ok) return res.status(401).json({ message: 'Invalid credentials' })
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET || 'devsecret')
    res.json({ token, user: { id: user._id, email: user.email, name: user.name, role: user.role } })
  } catch (err) { next(err) }
}

exports.me = async (req, res, next) => {
  try {
    const user = await User.findById(req.userId).select('-password')
    res.json(user)
  } catch (err) { next(err) }
}
