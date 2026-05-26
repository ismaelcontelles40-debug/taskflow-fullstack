const taskService = require("../services/task.service");

const getTasks = (req, res) => {
  const tasks = taskService.getAllTasks();

  res.status(200).json({
    success: true,
    data: tasks,
  });
};

const createTask = (req, res) => {
  const { title, priority } = req.body;

  if (!title || !priority) {
    return res.status(400).json({
      success: false,
      message: "El título y la prioridad son obligatorios",
    });
  }

  const newTask = taskService.createTask({ title, priority });

  res.status(201).json({
    success: true,
    data: newTask,
  });
};

const toggleTask = (req, res) => {
  const id = Number(req.params.id);

  const updatedTask = taskService.toggleTask(id);

  if (!updatedTask) {
    return res.status(404).json({
      success: false,
      message: "Tarea no encontrada",
    });
  }

  res.status(200).json({
    success: true,
    data: updatedTask,
  });
};

const deleteTask = (req, res) => {
  const id = Number(req.params.id);

  const deleted = taskService.deleteTask(id);

  if (!deleted) {
    return res.status(404).json({
      success: false,
      message: "Tarea no encontrada",
    });
  }

  res.status(200).json({
    success: true,
    message: "Tarea eliminada correctamente",
  });
};

module.exports = {
  getTasks,
  createTask,
  toggleTask,
  deleteTask,
};