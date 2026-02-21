import React from 'react'

export default function Contact(){
  return (
    <div>
      <h1 className="text-2xl">Contact</h1>
      <form className="mt-4 max-w-md">
        <input className="w-full border p-2 mb-2" placeholder="Your name" />
        <input className="w-full border p-2 mb-2" placeholder="Email" />
        <textarea className="w-full border p-2 mb-2" placeholder="Message" />
        <button className="btn">Send</button>
      </form>
    </div>
  )
}
