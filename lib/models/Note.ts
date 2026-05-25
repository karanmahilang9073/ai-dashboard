import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
    title: String,
    content: String,
    createdAt: {type: Date, default: Date.now()}
}, {timestamps: true})

export const Note = mongoose.models.Note || mongoose.model('Note', noteSchema)