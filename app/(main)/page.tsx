"use client"
import Card from "@/components/Card"
import { useEffect, useState } from "react"

const Page = () => {
  const [stats, setStats] = useState({users:0, notes:0})
  const [username, setusername] = useState("")
  
  useEffect(() => {
    const stored = localStorage.getItem("username")
    if(stored) setusername(stored)

    const fetchStats = async() => {
      const res = await fetch('/api/stats')
      const data = await res.json()
      setStats(data)
    }
    fetchStats()
  },[])

  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold">Welcome, {username}</h1>
      <div className="grid grid-cols-3 gap-4 mt-4">
        <Card title="users" value={stats.users.toString()} />
        <Card title="Notes" value={stats.notes.toString()} />
        <Card title="Files" value="0"/>
      </div>
    </div>
  )
}

export default Page
