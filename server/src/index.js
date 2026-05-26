const express = require("express");
const cors = require("cors");
require("dotenv").config();

const taskRoutes = require("./routes/task.routes");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "API de TaskFlow Fullstack funcionando correctamente",
  });
});

app.use("/api/v1/tasks", taskRoutes);

app.listen(PORT, () => {
  console.log(`Servidor funcionando en http://localhost:${PORT}`);
});