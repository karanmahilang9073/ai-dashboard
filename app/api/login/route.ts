import { User } from "@/lib/models/User";
import { connectDB } from "@/lib/mongodb";

export async function POST(request: Request){
    await connectDB()
    const body = await request.json()
    const {email, password} = body

    try {
        const user = await User.findOne({email, password})
        if(!user){
            return Response.json({success: false}, {status: 404})
        }
        return Response.json({success: true, name: user.name, email: user.email})
    } catch (error) {
        return Response.json({success: false}, {status: 400})
    }
}