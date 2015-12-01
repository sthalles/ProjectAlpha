var mongoose = require('mongoose');

var taskSchema = new mongoose.Schema({
    name: String,
    description: String, //hash created from password
    created_at: {type: Date, default: Date.now}
});

// declare models called Post and User
mongoose.model('Task', taskSchema);