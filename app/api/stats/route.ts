import { Note } from "@/lib/models/Note";
import { User } from "@/lib/models/User";
import { connectDB } from "@/lib/mongodb";

export async function GET(request: Request) {
    await connectDB()
    try {
        const userCount = await User.countDocuments()
        const noteCount = await Note.countDocuments()
        const fileStats = await Note.aggregate([
            {$project: {attachmentCount: {$size: {$ifNull: ["$attachments", []]}}}},
            {$group: {_id: null,totalFiles: { $sum: "$attachmentCount" }}}]);
        const fileCount = fileStats[0]?.totalFiles || 0;
        return Response.json({success: true, users: userCount, notes: noteCount, files: fileCount})
    } catch (error) {
        console.log('error while fetching stats', error)
        return Response.json({success: false}, {status: 400})
    }
}