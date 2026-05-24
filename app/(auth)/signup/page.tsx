"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

function Signup() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)

    const router = useRouter()

    const handleSignup = async() => {
        setLoading(true)
        if (!name || !email || !password) {
            alert("Fill all fields");
            return;
        }
        await new Promise((resolve) => setTimeout(resolve, 2000))
        const res = await fetch('/api/signup', {
            method: 'POST',
            headers: {"content-Type": "application/json"},
            body: JSON.stringify({name, email, password})
        })
        const data = await res.json()
        console.log(data)
        localStorage.setItem("username", name)
        router.push("/")
        setLoading(false)
        setName("")
        setEmail("")
        setPassword("")
    }

  return (
    <div className='border p-8 rounded-lg space-y-4 w-96'>
      <h1 className='text-3xl font-bold'>Sign-up page</h1>

      <input type="text" placeholder='enter name' value={name} onChange={(e) => setName(e.target.value)} className='border p-2 w-full' />
      <input type="email" placeholder='enter email' value={email} onChange={(e) => setEmail(e.target.value)} className='border p-2 w-full' />
      <input type="password" placeholder='enter passowrd' value={password} onChange={(e) => setPassword(e.target.value)} className='border p-2 w-full' />
      <button onClick={handleSignup} className='bg-black text-white p-2 rounded w-full disabled:opacity-50' disabled={loading}>{loading ? "Loading" : "Sign up"}</button>
      <p className="text-center text-sm">Already have an account
        <Link href='/login' className='text-blue-500 text-sm block text-center'>
            Login
        </Link>
      </p>

    </div>
  )
}

export default Signup
