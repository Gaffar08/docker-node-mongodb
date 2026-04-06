const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// IMPORTANT: use "mongo" (service name)
mongoose.connect("mongodb://mongo:27017/tasks")
  .then(() => console.log("DB connected"))
  .catch(err => console.log(err));

const Task = mongoose.model("Task", { name: String });

app.get("/tasks", async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

app.post("/tasks", async (req, res) => {
  const task = new Task(req.body);
  await task.save();
  res.json(task);
});

app.listen(5000, () => console.log("Server running"));