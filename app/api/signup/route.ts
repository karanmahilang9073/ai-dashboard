import { User } from "@/lib/models/User"
import { connectDB } from "@/lib/mongodb"

export async function POST(request: Request) {
    await connectDB()
    const body = await request.json()
    const {name, email, password} = body
    try {
      const user = await User.create({name, email, password})
      return Response.json({success: true, user})
    } catch (error) {
      return Response.json({success: false},{status: 400})
    }
}