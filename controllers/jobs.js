const express = require('express')
const mongoose = require('mongoose')
const jobsRouter = express.Router()
const Jobs = require('../models/jobs.js')

// String Connection
mongoose.connect(process.env.MONGODB_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
})

// Middleware
// Body parser middleware: give us access to req.body
jobsRouter.use(express.urlencoded({ extended: false }));


// Index
jobsRouter.get("/", async (req, res) => {
    try {
       
        res.json(await Jobs.find({}))
    } catch (error) {      
        res.status(400).json(error)
    }
})

// Create
jobsRouter.post("/", async (req, res) => {
    try {
        res.json(await Jobs.create(req.body))
    } catch (error) {
        res.status(400).json(error);
    }
})


// Delete
jobsRouter.delete("/:id", async (req, res) => {
    try {
      res.json(await Jobs.findByIdAndRemove(req.params.id))
    } catch (error) {
      res.status(400).json(error)
    }
  })
  
// Update
jobsRouter.put("/:id", async (req, res) => {
    try {
      res.json(
        await Jobs.findByIdAndUpdate(req.params.id, req.body, { new: true })
      )
    } catch (error) {
      res.status(400).json(error)
    }
  })

module.exports = jobsRouter