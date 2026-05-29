import { callAI } from "@/lib/ai";

export async function POST(req: Request) {
    try {
        const {prompt} = await req.json()
        const content = await callAI(`generate a detailed note in brief about 2-3 sentences about about: ${prompt}`, 1024)
        return Response.json({success: true, content})
    } catch (error) {
        console.log('failed to generate note', error)
        return Response.json({success: false}, {status: 400})
    }
}