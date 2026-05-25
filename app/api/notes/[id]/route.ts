import { Note } from "@/lib/models/Note";
import { connectDB } from "@/lib/mongodb";

export async function DELETE(request: Request, {params}: {params: Promise<{id: string}>}){
    await connectDB()
    const {id} = await params
    try {
        await Note.findByIdAndDelete(id)
        return Response.json({success: true})
    } catch (error) {
        console.log('error while deleting note', error)
        return Response.json({success: false}, {status: 400})
    }
}

export async function PUT(request: Request, {params}: {params: Promise<{id: string}>}){
    await connectDB()
    const {id} = await params
    const body = await request.json()
    const {title, content} = body
    try {
        const note = await Note.findByIdAndUpdate(id, {title, content}, {new: true})
        return Response.json({success: true, note})
    } catch (error) {
        console.log('error while updating notes', error)
        return Response.json({success: false}, {status: 400})
    }
}