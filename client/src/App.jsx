import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import Courses from './pages/Courses'
import CourseDetails from './pages/CourseDetails'
import Dashboard from './pages/Dashboard'
import Quiz from './pages/Quiz'
import Blog from './pages/Blog'
import Forum from './pages/Forum'
import Profile from './pages/Profile'
import Admin from './pages/Admin'
import Contact from './pages/Contact'
import FAQ from './pages/FAQ'
import ProtectedRoute from './components/ProtectedRoute'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Nav />
      <main className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:id" element={<CourseDetails />} />
          <Route path="/quiz/:id" element={<Quiz />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/admin" element={<ProtectedRoute><Admin /></ProtectedRoute>} />
        </Routes>
      </main>
    </div>
  )
}
