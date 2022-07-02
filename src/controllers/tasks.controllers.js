import { Project } from "../models/Project.js";
import { Task } from "../models/Task.js"

export const getTasks = async (req, res) => {
    try {
        const tasks = await Task.findAll()
        res.status(200).json(tasks)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
};

export const createTasks = async (req, res) => {
    const { name, done, projectId } = req.body;

    try {
        //  throw new Error("API fails")
        const project = await Project.findByPk(projectId)
        console.log(project)
        if (!project) {
            res.send("Not projectId found")
        } else {
            const newTask = await Task.create({ name, done, projectId })
            res.json(newTask)
        }
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
};

export const updateTasks = async (req, res) => {
    const { id } = req.params;
    const { name, done, projectId } = req.body;
    try {

        // verifico si hay una tarea con ese id
        const taskId = await Task.findByPk(id)

        if (taskId) {
            // si hay actualizo
            const updateTask = await Task.update({ name, done, projectId }, {
                where: {
                    id: id
                }
            })
            res.status(200).json(updateTask)

        }
        res.send("Task not found")
    } catch (error) {
        res.status(404).json({ message: error.message })

    }

};
export const deleteTasks = async (req, res) => {
    const { id } = req.params;
    try {
        const taskId = await Task.findByPk(id)
        if (taskId) {
            const task = await Task.destroy({
                where: {
                    id: id
                }
            });
            res.send("Deleted Task")
        } else {
            res.send("Task not found")
        }

    } catch (error) {
        res.status(404).json({ message: error.message })
    }
};

export const getTaskId = async (req, res) => {
    const { id } = req.params;
    const task = await Task.findOne({
        where: {
            id,
        }
    })
    if (!task) {
        res.status(404).send("Not found")
    }

    res.status(200).json(task)
};

