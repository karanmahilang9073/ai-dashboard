import { Note } from "@/lib/models/Note";
import { connectDB } from "@/lib/mongodb";

export async function POST(request: Request) {
    await connectDB()
    const body = await request.json()
    const {title, content} = body
    try {
        const note = await Note.create({title, content})
        return Response.json({success: true, note})
    } catch (error) {
        console.log('error while creating notes', error)
        return Response.json({success: false}, {status: 400})
    }
}

export async function GET(request: Request){
    await connectDB()

    try {
        const notes = await Note.find()
        return Response.json({success: true, notes})
    } catch (error) {
        console.log('error while fetching notes', error)
        return Response.json({success: false}, {status: 400})
    }
}