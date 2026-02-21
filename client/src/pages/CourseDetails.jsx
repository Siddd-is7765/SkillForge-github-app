import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../services/api'

export default function CourseDetails() {
  const { id } = useParams()
  const [course, setCourse] = useState(null)

  useEffect(() => {
    api.get(`/courses/${id}`).then(r => setCourse(r.data)).catch(() => {})
  }, [id])

  if (!course) return <div>Loading...</div>

  return (
    <div>
      <h1 className="text-2xl font-bold">{course.title}</h1>
      <p className="mt-2">{course.description}</p>
      <section className="mt-4">
        <h3 className="font-semibold">Instructor</h3>
        <p>{course.instructorName || 'TBD'}</p>
      </section>
      <section className="mt-4">
        <h3 className="font-semibold">Lessons / Videos</h3>
        <ul>
          {(course.lessons || []).map(l => (
            <li key={l._id}>{l.title}</li>
          ))}
        </ul>
      </section>
    </div>
  )
}
