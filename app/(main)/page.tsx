"use client"
import Card from "@/components/Card"
import { useEffect, useState } from "react"

const Page = () => {
  const [stats, setStats] = useState({users:0, notes:0})
  const [username, setusername] = useState("")
  
  useEffect(() => {
    const stored = localStorage.getItem("username")
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if(stored) setusername(stored)

    const fetchStats = async() => {
      const res = await fetch('/api/stats')
      const data = await res.json()
      setStats(data)
    }
    fetchStats()
  },[])

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-12 space-y-8">
        <div>
          <h1 className="text-4xl font-bold text-gray-900">Welcome, {username}</h1>
          <p className="text-gray-600 mt-2">here is your dashboard overview</p>
        </div>
        <div className="grid grid-cols-3 gap-6">
          <Card title="users" value={stats.users.toString()} />
          <Card title="Notes" value={stats.notes.toString()} />
          <Card title="files" value="0" />
        </div>
      </div>
    </div>
  )
}

export default Page
