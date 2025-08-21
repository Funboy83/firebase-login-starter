import React from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { Navigate } from 'react-router-dom'
import { auth } from '../firebase'

export default function RequireAuth({ children }) {
  const [user, setUser] = React.useState(undefined) // undefined = loading

  React.useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => setUser(u ?? null))
    return () => unsub()
  }, [])

  if (user === undefined) {
    return (
      <div className="min-h-screen grid place-items-center">
        <div className="text-gray-600">Loading…</div>
      </div>
    )
  }

  if (!user) {
    return <Navigate to="/login" replace />
  }

  return children
}
