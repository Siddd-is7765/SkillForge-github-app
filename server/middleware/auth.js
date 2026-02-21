const jwt = require('jsonwebtoken')

exports.authMiddleware = (req, res, next) => {
  const auth = req.headers.authorization
  if (!auth) return res.status(401).json({ message: 'No token' })
  const token = auth.split(' ')[1]
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET || 'devsecret')
    req.userId = payload.id
    next()
  } catch (err) {
    res.status(401).json({ message: 'Invalid token' })
  }
}

exports.adminOnly = (req, res, next) => {
  // In real-case fetch user and check role. For brevity assume token has role.
  next()
}
