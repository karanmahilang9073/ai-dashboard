"use client"

import Card from "@/components/Card"
import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"
import {  user } from "@/lib/data"


const page = () => {

  const appName = process.env.APP_NAME

  const username = typeof window !== "undefined" ? localStorage.getItem("username") : "";

  return (
    <div>
      <Navbar/>
      <div className="flex">
        <Sidebar/>
        <div className="p-6">
          <h1 className="text-3xl font-semibold">Welcome, {username || user.name}</h1>
          <div className="grid grid-cols-3 gap-4 mt-4">
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
