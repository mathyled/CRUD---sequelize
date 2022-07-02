// CONF DE EXPRESS

import express from "express";
import projectsRoutes from "./routes/projects.routes.js"
const app = express()
//middleware
app.use(express.json())
app.use("/projects",projectsRoutes)

export default app;