const express = require('express')
const http = require('http')
const cors = require('cors')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()
const { connectDB } = require('./config/db')
const authRoutes = require('./routes/auth')
const courseRoutes = require('./routes/courses')
const quizRoutes = require('./routes/quizzes')
const forumRoutes = require('./routes/forum')
const { errorHandler } = require('./middleware/errorHandler')
const rateLimiter = require('./middleware/rateLimiter')

const app = express()
app.set('trust proxy', 'loopback')
const server = http.createServer(app)
const io = require('socket.io')(server, { cors: { origin: '*' } })

connectDB()

app.use(cors())
app.use(express.json())
app.use(rateLimiter)

app.use('/api/auth', authRoutes)
app.use('/api/courses', courseRoutes)
app.use('/api/quizzes', quizRoutes)
app.use('/api/forum', forumRoutes)

app.get('/', (req, res) => {
  res.send('<h1>SkillForge API</h1><p>API is running.</p>')
})

app.use((req, res) => res.status(404).json({ message: 'Not found' }))
app.use(errorHandler)

io.on('connection', socket => {
  socket.on('create-post', post => socket.broadcast.emit('new-post', post))
})

const PORT = process.env.PORT || 4000
server.listen(PORT, () => console.log(`Server running on port ${PORT}`))
