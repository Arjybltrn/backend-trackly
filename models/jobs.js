// MODELS
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const jobSchema = new mongoose.Schema({
    jobTitle: String,
    company: String,
    notes: String,
    salary: Number,
    completed: Boolean,
}, 
    {   
        timestamps: true
    }
)

const Jobs = mongoose.model('Jobs', jobSchema)

module.exports = Jobs