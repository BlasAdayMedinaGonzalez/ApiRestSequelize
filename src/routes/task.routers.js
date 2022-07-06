import { Router } from "express";
import { taskController } from "../controllers/task.controller";

const router = Router();

router
  .get("/:user_id", taskController.getTasksByUser)
  .post("/:user_id", taskController.addTaskByUser)
  .put("/:task_id", taskController.updateTaskByUser)
  .delete('/:task_id', taskController.deleteTaskByUser)

export default router;
