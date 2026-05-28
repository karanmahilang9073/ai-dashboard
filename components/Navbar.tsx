"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"

export default function Navbar() {
  const router = useRouter()
  
  const handleLogout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("username")
    router.push("/login")
  }
  
  return (
    <nav className="bg-gray-200 border-b border-gray-200  shadow-sm sticky top-0 z-50">
      <div className="flex justify-between items-center px-6 py-4">
        <h2 className="text-2xl font-bold text-gray-900">AI Dashboard</h2>
        <div className="flex gap-4 items-center">
          <Link href="/profile" className="bg-blue-400 text-white px-4 py-2 rounded-md hover:text-blue-500 font-medium">Profile</Link>
          <button onClick={handleLogout} className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-700 transition-colors font-medium">Logout</button>
        </div>
      </div>
    </nav>
  )
}
