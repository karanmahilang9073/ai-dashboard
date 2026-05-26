import { generateToken } from "@/lib/jwt"
import { User } from "@/lib/models/User"
import { connectDB } from "@/lib/mongodb"
import bcrypt from 'bcrypt'

export async function POST(request: Request) {
    await connectDB()
    const body = await request.json()
    const {name, email, password} = body
    try {
      const hashed = await bcrypt.hash(password, 10)
      const user = await User.create({name, email, password: hashed})
      const token = generateToken(user._id.toString())
      return Response.json({success: true, token, name: user.name})
    } catch (error) {
      console.log('error while registering user', error)
      return Response.json({success: false},{status: 400})
    }
}