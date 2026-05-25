import { Note } from "@/lib/models/Note";
import { connectDB } from "@/lib/mongodb";

export async function DELETE(request: Request, {params}: {params: {id: string}}){
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