import { Note } from "@/lib/models/Note";
import { connectDB } from "@/lib/mongodb";
import jwt from "jsonwebtoken";


export async function POST(request: Request) {
  await connectDB();
  const body = await request.json();
  const { title, content, attachments } = body;
  try {
    const authHeader = request.headers.get("authorization");

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return Response.json(
        { success: false, message: "Unauthorized" },
        { status: 401 },
      );
    }

    const token = authHeader.split(" ")[1];

    const payload = jwt.verify(token, process.env.JWT_SECRET!) as {
      userId: string;
    };

    const userId = payload.userId;
    const note = await Note.create({ title, content, userId, attachments });
    return Response.json({ success: true, note });
  } catch (error) {
    console.log("error while creating notes", error);
    return Response.json({ success: false }, { status: 400 });
  }
}

export async function GET(request: Request) {
  await connectDB();
  try {
    const authHeader = request.headers.get("authorization");

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return Response.json(
        { success: false, message: "Unauthorized" },
        { status: 401 },
      );
    }

    const token = authHeader.split(" ")[1];

    const payload = jwt.verify(token, process.env.JWT_SECRET!) as {
      userId: string;
    };

    const userId = payload.userId;
    const notes = await Note.find({ userId }).lean();
    return Response.json({ success: true, notes });
  } catch (error) {
    console.log("error while fetching notes", error);
    return Response.json({ success: false }, { status: 400 });
  }
}
