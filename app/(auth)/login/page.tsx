"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const router = useRouter()

  const handleLogin = async() => {
    const res = await fetch('/api/login', {
      method: "POST",
      headers: {"content-Type": "application/json"},
      body: JSON.stringify({email, password})
    })
    const data = await res.json()
    if(!data.success){
      alert('lohin falied')
      return
    }
    localStorage.setItem("username", data.name)
    router.push("/")
  }

  return (
    <div className="border p-8 rounded-lg space-y-4 w-96">
      <h1 className='text-3xl font-bold '>login page</h1>

      <input type="text" placeholder="enter email" value={email} onChange={(e) => setEmail(e.target.value)} className="border p-2 mt-4 w-full" />
      <input type="password" placeholder="enter password" value={password} onChange={(e) => setPassword(e.target.value)} className="border p-2 mt-4 w-full" />

      <button onClick={handleLogin} className="bg-black text-white p-2 w-full mt-4 rounded">Login</button>
      <p className="text-center text-sm">Dont have an account? 
        <Link href='/signup' className="text-blue-500 text-sm block text-center w-full">Sign up</Link>
      </p>
    </div>
  )
}

export default Login
