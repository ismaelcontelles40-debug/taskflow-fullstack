const db = require("../database/db");

const getAllTasks = () => {
  const tasks = db
    .prepare("SELECT * FROM tasks ORDER BY id DESC")
    .all();

  return tasks.map((task) => ({
    ...task,
    completed: Boolean(task.completed),
  }));
};

const createTask = ({ title, priority }) => {
  const result = db
    .prepare(
      "INSERT INTO tasks (title, priority) VALUES (?, ?)"
    )
    .run(title, priority);

  return {
    id: result.lastInsertRowid,
    title,
    completed: false,
    priority,
  };
};

const toggleTask = (id) => {
  const task = db
    .prepare("SELECT * FROM tasks WHERE id = ?")
    .get(id);

  if (!task) {
    return null;
  }

  const newCompletedValue = task.completed ? 0 : 1;

  db.prepare(
    "UPDATE tasks SET completed = ? WHERE id = ?"
  ).run(newCompletedValue, id);

  return {
    ...task,
    completed: Boolean(newCompletedValue),
  };
};

const deleteTask = (id) => {
  const result = db
    .prepare("DELETE FROM tasks WHERE id = ?")
    .run(id);

  return result.changes > 0;
};

module.exports = {
  getAllTasks,
  createTask,
  toggleTask,
  deleteTask,
};