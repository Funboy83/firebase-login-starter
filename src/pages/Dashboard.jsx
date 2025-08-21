// src/pages/Dashboard.jsx
export default function Dashboard() {
  return <div>Dashboard</div>
}

<div className="flex items-center justify-center gap-3">
  <button className="btn btn-outline" onClick={() => alert("Button One clicked")}>
    Button One
  </button>
  <button className="btn btn-outline" onClick={() => alert("Button Two clicked")}>
    Button Two
  </button>

  <button className="btn" onClick={() => (window.location.href = "/")}>
    Home
  </button>
  <button className="btn btn-primary" onClick={() => signOut(auth)}>
    Sign out
  </button>
</div>