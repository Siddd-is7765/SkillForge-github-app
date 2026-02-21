import React from 'react'
import { Link } from 'react-router-dom'

export default function CourseCard({ course }) {
  return (
    <div className="border rounded p-4 bg-white dark:bg-gray-800">
      <h3 className="font-semibold">{course.title}</h3>
      <p className="text-sm text-gray-600">{course.short || 'Course summary'}</p>
      <div className="mt-2 flex justify-between items-center">
        <span className="text-xs">{course.category}</span>
        <Link to={`/courses/${course._id}`} className="text-blue-600">View</Link>
      </div>
    </div>
  )
}
