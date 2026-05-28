import { verifyToken } from "@/lib/jwt";
import { User } from "@/lib/models/User";

export async function GET(req: Request) {
    try {
        const token = req.headers.get('Authorization')?.split(" ")[1]
        if(!token){
            return Response.json({error: 'no token'}, {status: 401})
        }
        const payload = verifyToken(token)
        const user = await User.findById(payload?.userId)
        return Response.json({user})
    } catch (error) {
        console.log('unauthorized', error)
        return Response.json({success: false, error: 'unAuthorized'}, {status: 401})
    }
}

export async function PUT(req: Request) {
    try {
        const token = req.headers.get('Authorization')?.split(" ")[1]
        if(!token) {
            return Response.json({error: 'no token'}, {status: 401})
        }
        const payload = verifyToken(token)
        const {name, bio, avatar} = await req.json()
        const user = await User.findByIdAndUpdate(
            payload?.userId,
            {name, bio, avatar},
            {returnDocument : 'after'}
        )
        return Response.json({user})
    } catch (error) {
        console.log('failed to update user', error)
        return Response.json({error: 'failed to update'}, {status: 400})
    }
}