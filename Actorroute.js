const express = require('express');
const Arouter = express.Router();
const Model = require('../model/actor');
const mongoose = require('mongoose');

// Connect to your MongoDB database
mongoose.connect('mongodb://your-mongodb-url', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

Arouter.post('/post', async (req, res) => {
    console.log(req.body);
    const actor = new Model({
        name: req.body.name,
        email: req.body.email,
        description: req.body.description,
    });

    console.log(actor);

    try {
        const dataToSave = await actor.save();
        res.status(200).json(dataToSave);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = Arouter;




