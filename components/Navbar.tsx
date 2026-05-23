"use client"

import { useRouter } from "next/navigation"

export default function Navbar() {
  const router = useRouter()
  
  const handleLogout = () => {
    localStorage.removeItem("username")
    router.push("/login")
  }
  
  return (
    <nav className="p-4 border-b flex justify-between">
      <h2 className="text-xl font-bold">AI Dashboard</h2>
      <button onClick={handleLogout} className="text-red-400 ">logout</button>
    </nav>
  )
}
