"use client"

import { useEffect, useState } from "react"

export default function Profilepage(){
    const [user, setUser] = useState({name:"", email: "", bio: "", avatar: ""})
    const [editing, setEditing] = useState(false)

    useEffect(() => {
        const fetchProfile = async() => {
            try {
                const token = localStorage.getItem('token')
                const res = await fetch("/api/profile", {
                    headers: {Authorization: `Bearer ${token}`}
                })
                const data = await res.json()
                setUser(data.user)
            } catch (error) {
                console.log('error while updating', error)
            }
        }
        fetchProfile()
    }, [])

    const handleUpdate = async() => {
        const token = localStorage.getItem('token')
        await fetch("/api/profile", {
            method: "PUT",
            headers: {
                Authorization : `Bearer ${token}`,
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({name: user.name, bio: user.bio, avatar: user.avatar})
        })
        localStorage.setItem('username', user.name)
        setEditing(false)
    }

    return (
        <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100">
            <div className="max-w-2xl mx-auto px-6 py-12">
                <div className="bg-white rounded-lg shadow-lg p-8">
                    <h1 className="text-3xl font-bold mb-6">Profile</h1>
                    {editing ? (
                        <div className="space-y-4">
                            <input type="text" value={user.name} onChange={(e) => setUser({...user, name: e.target.value})} placeholder="Name" className="border p-3 w-full rounded-lg" />
                            <textarea placeholder="Bio" value={user.bio} onChange={(e) => setUser({...user, bio: e.target.value})} className="border p-3 w-full rounded-lg h-24"/>
                            <div className="flex gap-2">
                                <button onClick={handleUpdate} className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Save</button>
                                <button onClick={() => setEditing(false)} className="bg-gray-400 text-white px-4 py-2 rounded-lg">Cancel</button>
                            </div>
                        </div>
                    ): (
                        <div className="space-y-4">
                            <div className="p-4 bg-gray-50 rounded-lg">
                                <p className="text-gray-600 text-sm">Name</p>
                                <p className="font-bold text-lg">{user.name}</p>
                            </div>
                            <div className="p-4 bg-gray-50 rounded-lg">
                                <p className="text-gray-600 text-sm">Bio</p>
                                <p className="font-bold text-lg">{user.bio || "No bio yet"}</p>
                            </div>
                            <button onClick={() => setEditing(true)} className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 w-full">Edit Profile</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}