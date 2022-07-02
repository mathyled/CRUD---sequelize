import { Project } from "../models/Project.js"

export const getProjects = async (req, res) => {

    try {
        // throw new Error("Api failed") para probar errores
        const projects = await Project.findAll()
        // console.log(projects.length);
        // res.status(200).send("Getting projects")
        res.status(200).json(projects)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }

};
export const createProject = async (req, res) => {
    try {
        const { name, priority, description } = req.body

        const newProject = await Project.create({ name, priority, description })
        console.log("Creating projects");
        res.status(200).json(newProject)
    } catch (error) {
        res.status(500).json({ message: error.message })

    }

};