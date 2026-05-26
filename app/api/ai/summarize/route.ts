import Groq from 'groq-sdk'

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY,
})

export async function POST(request: Request) {
    try {
        const body = await request.json()
        const {content} = body
        const message = await groq.chat.completions.create({
            messages: [
                {
                    role: 'user',
                    content: `summarize this in 2-3 sentences: ${content}`,
                },
            ],
            model: 'llama-3.3-70b-versatile',
            max_tokens: 1024,
        })
        const summary = message.choices[0]?.message?.content || ""
        return Response.json({success: true, summary})
    } catch (error) {
        console.log('error while ai summarizing', error)
        return Response.json({success: false}, {status: 400})
    }
}