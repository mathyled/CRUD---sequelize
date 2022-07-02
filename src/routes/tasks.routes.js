import { Router } from "express";
import {
    createTasks,
    deleteTasks,
    getTaskId,
    getTasks,
    updateTasks
} from "../controllers/tasks.controllers.js";

const router = Router();

router.get("/", getTasks);
router.post("/", createTasks);
router.put("/:id", updateTasks);
router.delete("/:id", deleteTasks);
router.get("/:id", getTaskId);


export default router;

