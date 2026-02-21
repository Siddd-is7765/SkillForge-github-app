import React, { useEffect, useState } from 'react'
import io from 'socket.io-client'

const socket = io(import.meta.env.VITE_API_URL || 'http://localhost:4000')

export default function Forum(){
  const [posts, setPosts] = useState([])
  useEffect(()=>{
    socket.on('connect', ()=>{})
    socket.on('new-post', post => setPosts(p=>[post,...p]))
    return ()=>{ socket.off('new-post') }
  },[])

  return (
    <div>
      <h1 className="text-2xl">Community Forum</h1>
      <p>Real-time posts will appear here.</p>
    </div>
  )
}
