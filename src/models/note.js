const mongoose = require('../database/index');

const NoteSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Note = mongoose.model("Note", NoteSchema);

module.exports = Note;