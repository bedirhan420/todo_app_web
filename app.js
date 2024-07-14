// GET /api/v1/tasks          --> get all the tasks
// POST /api/v1/tasks         --> create a new task
// GET /api/v1/tasks/:id      --> get single task
// PATCH /api/v1/tasks/:id    --> update task
// DELETE /api/v1/tasks/:id   --> delete task

const connectDB = require("./db/connetction")
const express = require("express")
const app = express() 
const tasks = require("./routes/tasks")

const port = 5000
const path = "/api/v1"

require("dotenv").config()

const start = async ()=>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port,console.log(`server is listening on port http://localhost:${port}`))
        //middleWare
        app.use(express.static("./public"))
        app.use(express.json())
        //routes
        app.get("/",(req,res)=>{
            res.send("Task Manager App")
        })
        app.use(`${path}/tasks`,tasks)
    } catch (error) {
        console.log(error)
    }
}

start()



