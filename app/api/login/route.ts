import { User } from "@/lib/models/User";
import { connectDB } from "@/lib/mongodb";
import bcrypt from 'bcrypt'

export async function POST(request: Request){
    await connectDB()
    const body = await request.json()
    const {email, password} = body

    try {
        const user = await User.findOne({email})
        if(!user){
            return Response.json({success: false}, {status: 404})
        }
        const isPasswordValid = await bcrypt.compare(password, user.password || "")
        if(!isPasswordValid){
            return Response.json({success: false, message: 'invalid password'}, {status: 400})
        }
        return Response.json({success: true, name: user.name, email: user.email})
    } catch (error) {
        console.log('error while login', error)
        return Response.json({success: false}, {status: 400})
    }
}