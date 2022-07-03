import {Router} from "express";
import {
     getProjects,
      createProject,
      updateProject ,
       deleteProject, 
       getProjectId,
       getProjectTasks
     } from "../controllers/projects.controllers.js"
const router = Router();

router.get("/",getProjects)
router.post("/",createProject)
router.put("/:id",updateProject)
router.delete("/:id", deleteProject)
router.get("/:id",getProjectId)
router.get("/:id/tasks",getProjectTasks)



export default router;