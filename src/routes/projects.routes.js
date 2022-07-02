import {Router} from "express";
import { getProjects, createProject,updateProject , deleteProject, getProjectId } from "../controllers/projects.controllers.js"
const router = Router();

router.get("/",getProjects)
router.post("/",createProject)
router.put("/:id",updateProject)
router.delete("/:id", deleteProject)
router.get("/:id",getProjectId)


export default router;