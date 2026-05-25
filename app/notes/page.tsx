"use client"
import { useEffect, useState } from "react"

function Notespage() {
  const [notes, setNotes] = useState([])
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")

  useEffect(() => {
    fetchNotes()
  },[])

  const fetchNotes = async() => {
    const res = await fetch(`/api/notes`)
    const data = await res.json()
    setNotes(data.notes || [])
  }

  const handleCreate = async() => {
    await fetch('/api/notes', {
      method: 'POST',
      headers: {"content-Type" : "application/json"},
      body: JSON.stringify({title, content})
    })
    setTitle("")
    setContent("")
    fetchNotes()
  }

  const handleDelete = async(noteId: string) => {
    await fetch(`/api/notes/${noteId}`, {
      method: 'DELETE'
    })
    fetchNotes()
  }


  return (
    <div className="p-6">
        <h1 className="text-3xl font-bold">Notes</h1>

        <div className="border p-4 mb-6 rounded">
          <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} className="border p-2 w-full mb-2" />
          <textarea placeholder="content" value={content} onChange={(e) => setContent(e.target.value)} className="border p-2 w-full mb-2"></textarea>
          <button onClick={handleCreate} className="bg-black text-white p-2 rounded">
            Create Note
          </button>
        </div>

        <div>
          {notes.map((note: {_id:string, title: string, content: string}) => (
            <div key={note._id} className="border p-4 mb-2 rounded flex justify-between items-center">
              <div>
                <h2 className="font-bold">{note.title}</h2>
                <p>{note.content}</p>
              </div>
              <button onClick={() => handleDelete(note._id)} className="bg-red-500 text-white p-2 rounded">Delete</button>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Notespage
