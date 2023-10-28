//Task 1

const mongoose = require('mongoose');


const albumSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true, 
    },
    email: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('Album', albumSchema);
