import React from 'react'
import { signOut, onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase'

export default function Dashboard() {
  const [email, setEmail] = React.useState('')

  React.useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => setEmail(u?.email ?? ''))
    return () => unsub()
  }, [])

  return (
    <div className="min-h-screen grid place-items-center">
      <div className="card w-full max-w-lg text-center">
        <h1 className="text-3xl font-semibold mb-2">Hello, {email || 'friend'}!</h1>
        <p className="text-gray-600 mb-6">You are logged in. This page is protected.</p>
        <div className="flex items-center justify-center gap-3">
          <button className="btn" onClick={() => window.location.href = '/'}>Home</button>
          <button className="btn btn-primary" onClick={() => signOut(auth)}>Sign out</button>
        </div>
      </div>
    </div>
  )
}
