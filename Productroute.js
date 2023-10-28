const express = require('express');
const router = express.Router()
const Model = require('../model/Usermodel');

//Get All Users
Arouter.get('/getAllalbum', async (req, res) => {
    try{
        const album = await Model.find();
        res.json(album)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})



Arouter.get('/getOne/:id', async (req, res) => {
    try{
        const album = await Model.findById(req.params.id);
        res.json(album)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

