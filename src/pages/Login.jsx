import React from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [error, setError] = React.useState('')
  const [loading, setLoading] = React.useState(false)
  const navigate = useNavigate()

  async function handleSubmit(e) {
  e.preventDefault();
  setError('');
  setLoading(true);
  try {
    await signInWithEmailAndPassword(auth, email, password);
    navigate('/', { replace: true });
  } catch (err) {
    const code = err?.code || "";
    let msg = "Invalid email or password. Please try again";        // safe default
    if (code === "auth/too-many-requests") msg = "Too many attempts. Please wait and try again.";
    else if (code === "auth/network-request-failed") msg = "Network error. Check your connection and try again.";
    else if (code === "auth/invalid-email") msg = "Please enter a valid email address.";
    else if (code === "auth/user-disabled") msg = "This account has been disabled. Contact support.";
    setError(msg);
  } finally {
    setLoading(false);  // <-- important
  }

  }

  return (
    <div className="min-h-screen grid place-items-center">
      <div className="card w-full max-w-md">
        <h1 className="text-2xl font-semibold mb-6 text-center">Sign in</h1>
        {error && (
          <div className="mb-4 rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              className="input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Password</label>
            <input
              type="password"
              className="input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
            />
          </div>
          <button className="btn btn-primary w-full" disabled={loading}>
            {loading ? 'Signing in…' : 'Sign in'}
          </button>
        </form>
        <p className="text-xs text-gray-500 mt-4 text-center">
          Tip: Enable <em>Email/Password</em> sign-in in Firebase Console → Authentication → Sign-in method.
        </p>
      </div>
    </div>
  )
}
