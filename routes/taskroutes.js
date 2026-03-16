const express = require("express")
const router = express.Router()
const Task = require("../models/task")

// Create Task
router.post("/tasks", async (req,res)=>{
    const task = new Task({
        title:req.body.title
    })

    const savedTask = await task.save()
    res.json(savedTask)
})

// Get All Tasks
router.get("/tasks", async(req,res)=>{
    const tasks = await Task.find()
    res.json(tasks)
})

// Delete Task
router.delete("/tasks/:id", async(req,res)=>{
    await Task.findByIdAndDelete(req.params.id)
    res.json({message:"Task deleted"})
})

module.exports = router