
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

export const updateProject = async (req, res) => {
    const { id } = req.params
    const { name, priority, description } = req.body


    // 1ra forma
    const update = { name, priority, description }
    const projectUpdate = await Project.update(update, {
        where: {
            id: id
        }
    });
    // console.log(projectUpdate);
    // res.json(projectUpdate);

    // 2da forma
    const project = await Project.findByPk(id)
    project.name = name
    project.priority = priority
    project.description = description
    await project.save()
    res.status(200).json(project)
}

export const deleteProject = async (req, res) => {
    const { id } = req.params
    const projectUpdate = await Project.destroy({
        where: {
            id: id
        }
    });
    console.log(projectUpdate);
    res.json(projectUpdate);
}

export const getProjectId = async (req, res) => {
    const { id } = req.params
    try {
        
        const project = await Project.findByPk(id);
        if (project === null) {
            res.status(404).send('Not found!');
        } else {
            const project = await Project.findOne({
                where: {
                    id: id
                }
            });
            res.status(200).json(project)
        }

    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}
