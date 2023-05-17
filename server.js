
// DEPENDENCIES

// get .env variables
require("dotenv").config()


const { PORT = 4000, MONGODB_URL } = process.env
// import express
const express = require("express")
const app = express()
const mongoose = require("mongoose")
const cors = require("cors");
const morgan = require("morgan");



// String Connection
mongoose.connect(MONGODB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
})
// Connection Events
mongoose.connection
    .on("open", () => console.log("You are connected to mongoose"))
    .on("close", () => console.log("You are disconnected from mongoose"))
    .on("error", (error) => console.log(error))

// Middlewares
app.use(cors()); // to prevent cors errors, open access to all origins
app.use(morgan("dev")); // logging
app.use(express.json()); // parse json bodies
app.use(express.urlencoded({ extended: false }))


// Routes / Controllers

const jobsController = require('./controllers/jobs')
app.use('/jobs', jobsController)

// test route
app.get("/", (req, res) => {
    res.send("hi")
});






// LISTENER
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`))