import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
    title: String,
    content: String,
    attachments: [{filename: String, url: String, uploadedAt: Date}],
    createdAt: {type: Date, default: Date.now()},
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
}, {timestamps: true})

export const Note = mongoose.models.Note || mongoose.model('Note', noteSchema)