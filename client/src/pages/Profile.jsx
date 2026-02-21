import React from 'react'
import { useAuth } from '../context/AuthContext'

export default function Profile(){
  const { user } = useAuth()
  return (
    <div>
      <h1 className="text-2xl">Profile</h1>
      {user ? <pre>{JSON.stringify(user, null, 2)}</pre> : <p>Please sign in.</p>}
    </div>
  )
}
