import React, { useState, useEffect } from 'react'
import api from '../services/api'
import CourseCard from '../components/CourseCard'

export default function Courses() {
  const [courses, setCourses] = useState([])
  const [query, setQuery] = useState('')

  useEffect(() => {
    api.get('/courses').then(r => setCourses(r.data)).catch(() => {})
  }, [])

  const filtered = courses.filter(c => c.title.toLowerCase().includes(query.toLowerCase()))

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Courses</h1>
      <input placeholder="Search courses" value={query} onChange={e => setQuery(e.target.value)} className="border p-2 mb-4" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filtered.map(c => <CourseCard key={c._id} course={c} />)}
      </div>
    </div>
  )
}
