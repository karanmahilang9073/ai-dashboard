import { callAI } from "@/lib/ai";

export async function POST(req: Request) {
    try {
        const {content} = await req.json()
        const summary = await callAI(`summarize this in 2-3 sentences: ${content}`, 1024)
        return Response.json({success: true, summary})
    } catch (error) {
        console.log('failed to  summarize note', error)
        return Response.json({success: false}, {status: 400})
    }
}