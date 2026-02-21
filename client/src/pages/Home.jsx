import React from 'react'
import CourseCard from '../components/CourseCard'

const featured = [{ _id: '1', title: 'Intro to AI', short: 'Start AI learning', category: 'AI' }]

export default function Home() {
  return (
    <div>
      <section className="py-12 text-center">
        <h1 className="text-4xl font-bold">SkillForge — Learn with AI</h1>
        <p className="mt-4 text-gray-600">Personalized learning, quizzes, and a community.</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Featured courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {featured.map(c => <CourseCard key={c._id} course={c} />)}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl">Testimonials</h2>
        <p className="text-gray-600">"Great platform" — Student</p>
      </section>
    </div>
  )
}
