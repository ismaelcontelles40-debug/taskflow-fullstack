let tasks = [
  {
    id: 1,
    title: "Crear estructura inicial del proyecto",
    completed: true,
    priority: "high",
  },
  {
    id: 2,
    title: "Conectar frontend con backend",
    completed: false,
    priority: "medium",
  },
];

const getAllTasks = () => {
  return tasks;
};

const createTask = ({ title, priority }) => {
  const newTask = {
    id: Date.now(),
    title,
    completed: false,
    priority,
  };

  tasks.push(newTask);

  return newTask;
};

const toggleTask = (id) => {
  const task = tasks.find((taskItem) => taskItem.id === id);

  if (!task) {
    return null;
  }

  task.completed = !task.completed;

  return task;
};

const deleteTask = (id) => {
  const initialLength = tasks.length;

  tasks = tasks.filter((task) => task.id !== id);

  return tasks.length !== initialLength;
};

module.exports = {
  getAllTasks,
  createTask,
  toggleTask,
  deleteTask,
};