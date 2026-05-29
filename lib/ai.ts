import Groq from "groq-sdk";

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY,
})

export async function callAI(prompt: string, maxTokens: number = 1024){
    const msg = await groq.chat.completions.create({
        messages: [{role: 'user', content: prompt}],
        model: 'llama-3.3-70b-versatile',
        max_completion_tokens: maxTokens,
    })
    return msg.choices[0]?.message?.content || ""
}