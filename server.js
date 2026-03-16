const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://smarttask:<smarttask>@cluster0.m5dbtxy.mongodb.net/?appName=Cluster0")
.then(() => console.log("MongoDB Connected"))
.catch(err=> console.log(err))

app.get("/", (req, res) => {
    res.send("Task Manager API Running")
})

const PORT = 5000

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})


const taskRoutes = require("./routes/taskroutes")

app.use("/api", taskRoutes)