import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Nav() {
  const { user, logout } = useAuth()
  return (
    <nav className="bg-white dark:bg-gray-800 shadow">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <Link to="/" className="font-bold text-xl">SkillForge</Link>
        <div className="space-x-4">
          <Link to="/courses">Courses</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/forum">Community</Link>
          {user ? (
            <>
              <Link to="/dashboard">Dashboard</Link>
              <button onClick={logout}>Logout</button>
            </>
          ) : (
            <Link to="/profile">Sign In</Link>
          )}
        </div>
      </div>
    </nav>
  )
}
