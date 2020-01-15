const express = require('express');
const mongoose = require('mongoose');
const authMiddleware = require('../middlewares/auth');

const Note = require('../models/note');

const router = express.Router();

router.use(authMiddleware);

router.get('/list', async (req, res) => {
    const { userId } = req;
    const notes = await Note.find({ userId });
    res.send({ notes });
});

router.post('/create', async (req, res) => {
    const { userId } = req;
    const { text } = req.body;

    const note = await Note.create({ userId, text });

    res.send({ note });
});

router.put('/update', async (req, res) => {
    const { noteId, text } = req.body;

    const noteUpdate = await Note.updateOne({ "_id": mongoose.Types.ObjectId( noteId ) }, { text });

    res.send({ noteUpdate });
});

router.delete('/destroy', async (req, res) => {
    const { noteId } = req.query;

    const note = await Note.deleteOne({ "_id" : mongoose.Types.ObjectId( noteId ) });
    if( note.n === 0  ){
        return res.status(400).send({ erro: "it was not possible delete note" });
    }

    res.send({ status: true });
})

module.exports = api => api.use('/app', router);