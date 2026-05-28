"use client"
import React, { useEffect, useState } from "react"

function Notespage() {
  const [notes, setNotes] = useState<{_id: string, title: string, content: string, attachments: {url: string, filename: string}[], createdAt: string, updatedAt: string}[]>([])
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [url, setUrl] = useState("")
  const [uploading, setUploading] = useState(false)

  const [editId, setEditId] = useState("")
  const [editTitle, setEdittitle] = useState("")
  const [editContent, setEditcontent] = useState("")

  const [search, setSearch] = useState("")

  const [showForm, setShowForm] = useState(false)

  useEffect(() => {
    // eslint-disable-next-line react-hooks/immutability
    fetchNotes()
  },[])

  const fetchNotes = async() => {
    const token = localStorage.getItem('token')
    const res = await fetch(`/api/notes`,{
      headers: {"Authorization": `Bearer ${token}`}
    })
    const data = await res.json()
    setNotes(data.notes || [])
  } 

  const handleCreate = async() => {
    const token = localStorage.getItem('token')
    const attachments = url ? [{url: url, filename: 'image'}] : []
    await fetch('/api/notes', {
      method: 'POST',
      headers: {"Authorization" : `Bearer ${token}`, "Content-Type" : "application/json"},
      body: JSON.stringify({title, content, attachments})
    })
    console.log('Attachments:', attachments)
    setTitle("")
    setContent("")
    setUrl("")
    fetchNotes()
  }

  const handleEdit = (noteId: string, noteTitle: string, noteContent: string) => {
    setEditId(noteId)
    setEdittitle(noteTitle)
    setEditcontent(noteContent)
  }

  const handleSave = async() => {
    await fetch(`/api/notes/${editId}`, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({title: editTitle, content: editContent})
    })
    setEditId("")
    fetchNotes()
  }

  const upload = async(e: React.ChangeEvent<HTMLInputElement>) => {
    setUploading(true)
    const file = e.target.files?.[0]
    if(!file) {
      setUploading(false)
      return
    }
    const formData = new FormData()
    formData.append('file', file)
    const res = await fetch('/api/upload', {
      method: 'POST',
      body: formData
    })
    const data = await res.json()
    if(data.success) {
      setUrl(data.url)
      console.log('URL set:', data.url)
      alert('file uploaded')
    }
    setUploading(false)
  }

  const handleDelete = async(noteId: string) => {
    const token = localStorage.getItem('token')
    await fetch(`/api/notes/${noteId}`, {
      method: 'DELETE',
      headers: {'Authorization': `Bearer ${token}`}
    })
    fetchNotes()
  }

  const handleSummarize = async(noteContent: string) => {
    const res = await fetch('/api/ai/summarize', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({content: noteContent})
    })
    const data = await res.json()
    if(data.success) {
      alert(data.summary)
    }
  }

  return (
    <div className="p-6">
        <h1 className="text-3xl font-bold">Notes</h1>

        {showForm && (
          <div className="border p-4 mb-6 rounded">
            <div className="border p-4 mb-6 rounded">
              <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} className="border p-2 w-full mb-2" />
              <textarea placeholder="content" value={content} onChange={(e) => setContent(e.target.value)} className="border p-2 w-full mb-2"></textarea>
              <input type="file" onChange={upload} className="border p-2 w-full mb-2" key={url} />
              <div className="flex gap-3">
                <button onClick={handleCreate} disabled={uploading} className="bg-green-500 hover:bg-green-600 text-white p-2 rounded">
                  Create Note
                </button>
                <button onClick={() => setShowForm(false)} className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded">
                  cancel
                </button>
              </div>
            </div>
          </div>
        )}

        <button onClick={() => setShowForm(true)} className="bg-blue-400 px-4 py-2 text-white hover:bg-blue-600 rounded mb-4">
          create note
        </button>

        <input type="text" placeholder="search notes..." value={search} onChange={(e) => setSearch(e.target.value)} className="border p-2 w-full mb-4 rounded-3xl" />

        <div>
          {notes.filter(note => note.title.toLowerCase().includes(search.toLowerCase()) || note.content.toLowerCase().includes(search.toLowerCase())).map((note: {_id: string, title: string, content: string, attachments: {url: string, filename: string}[], createdAt: string, updatedAt: string}) => (
            
            editId === note._id ? (
              <div key={note._id} className="border p-4 mb-2 rounded">
                <input type="text" value={editTitle} onChange={(e) => setEdittitle(e.target.value)} className="border py-2 w-full mb-2" />
                <textarea value={editContent} onChange={(e) => setEditcontent(e.target.value)} className="border p-2 w-full mb-2" />
                <button onClick={handleSave} className="bg-green-500 p-2 rounded mr-2">Save</button>
                <button onClick={() => setEditId("")} className="bg-gray-500 text-white p-2 rounded">Cancel</button>
              </div>
            ) : (
              <div key={note._id} className="border p-4 mb-2 rounded flex justify-between items-center">
              <div>
                <h2 className="font-bold">{note.title}</h2>
                <p>{note.content}</p>
                {note.attachments && note.attachments[0] && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={note.attachments[0].url} alt="attachment" className="w-60 mt-2 rounded" />
                )}
                <div className="text-xs text-gray-500 mt-2">
                    createdAt: {new Date(note.createdAt).toLocaleDateString()}
                </div>
              </div>
              <div className="flex gap-2">
                <button onClick={() => handleEdit(note._id, note.title, note.content)} className="bg-blue-500 text-white p-2 rounded">Edit</button>
                <button onClick={() => handleDelete(note._id)} className="bg-red-500 text-white p-2 rounded">Delete</button>
                <button onClick={() => handleSummarize(note.content)} className="bg-green-500 text-white p-2 rounded">Summarize</button>
              </div>
            </div>
            )
          ))}
        </div>
    </div>
  )
}

export default Notespage
