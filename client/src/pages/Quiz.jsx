import React, { useState } from 'react'

const sample = {
  questions: [
    { id: 1, text: '2+2=?', options: ['3','4','5'], answer: 1 }
  ]
}

export default function Quiz(){
  const [score, setScore] = useState(null)
  const [answers, setAnswers] = useState({})

  const submit = () => {
    let s = 0
    sample.questions.forEach(q => { if (answers[q.id] == q.answer) s++ })
    setScore(s)
  }

  return (
    <div>
      <h1 className="text-2xl">Quiz</h1>
      {sample.questions.map(q => (
        <div key={q.id} className="mt-4">
          <p>{q.text}</p>
          {q.options.map((o,i)=>(
            <label key={i} className="block"><input type="radio" name={q.id} onChange={()=>setAnswers(a=>({...a,[q.id]:i}))}/> {o}</label>
          ))}
        </div>
      ))}
      <button onClick={submit} className="mt-4 btn">Submit</button>
      {score !== null && <div className="mt-2">Score: {score}</div>}
    </div>
  )
}
