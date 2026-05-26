const express = require("express");

const taskController = require("../controllers/task.controller");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Tasks
 *   description: Endpoints para gestionar tareas
 */

/**
 * @swagger
 * /tasks:
 *   get:
 *     summary: Obtener todas las tareas
 *     tags: [Tasks]
 *     responses:
 *       200:
 *         description: Lista de tareas obtenida correctamente
 */
router.get("/", taskController.getTasks);

/**
 * @swagger
 * /tasks:
 *   post:
 *     summary: Crear una nueva tarea
 *     tags: [Tasks]
 *     responses:
 *       201:
 *         description: Tarea creada correctamente
 *       400:
 *         description: Datos inválidos
 */
router.post("/", taskController.createTask);

/**
 * @swagger
 * /tasks/{id}:
 *   patch:
 *     summary: Cambiar estado de una tarea
 *     tags: [Tasks]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: number
 *     responses:
 *       200:
 *         description: Tarea actualizada correctamente
 *       404:
 *         description: Tarea no encontrada
 */
router.patch("/:id", taskController.toggleTask);

/**
 * @swagger
 * /tasks/{id}:
 *   delete:
 *     summary: Eliminar una tarea
 *     tags: [Tasks]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: number
 *     responses:
 *       200:
 *         description: Tarea eliminada correctamente
 *       404:
 *         description: Tarea no encontrada
 */
router.delete("/:id", taskController.deleteTask);

module.exports = router;