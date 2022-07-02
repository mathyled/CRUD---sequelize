import {Router} from "express";
import { getProjects, createProject,updateProject , deleteProject, getProjectId } from "../controllers/projects.controllers.js"
const router = Router();

router.get("/projects",getProjects)
router.post("/projects",createProject)
router.put("/projects/:id",updateProject)
router.delete("/projects/:id", deleteProject)
router.get("/projects/:id",getProjectId)


export default router;