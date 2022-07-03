
import { Project } from "../models/Project.js"
import { Task } from "../models/Task.js";

export const getProjects = (req, res) => {

    try {
        // throw new Error("Api failed") para probar errores
        Project.findAll().then(response => {
            res.status(200).json(response)
        })
        // console.log(projects.length);
        // res.status(200).send("Getting projects")
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};

export const createProject = (req, res) => {
    try {
        const { name, priority, description } = req.body

        Project.create({ name, priority, description }).then(response => {
            console.log("Creating projects");
            res.status(200).json(response)
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};

export const updateProject =  (req, res) => {
    const { id } = req.params
    const { name, priority, description } = req.body


    // 1ra forma
    const update = { name, priority, description }
    Project.update(update, {
        where: {
            id: id
        }
    }).then(json => {
        // console.log(json);
        // res.json(json);
    })

    // 2da forma
    Project.findByPk(id).then(json => {
        json.name = name
        json.priority = priority
        json.description = description
        json.save().then(json => {
            res.status(200).json(json)
        })
    })
}

export const deleteProject =  (req, res) => {
    const { id } = req.params
    Project.destroy({
        where: {
            id: id
        }
    }).then(json => {
        console.log(json);
        res.json(json);
    })
}

export const getProjectId =  (req, res) => {
    const { id } = req.params
    try {

         Project.findByPk(id).then(response => {
             if (response === null) {
                 res.status(404).send('Not found!');
             } else {
                Project.findOne({
                     where: {
                         id: id
                     }
                 }).then(json => {
                     res.status(200).json(json)
                 })
             }
         })

    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const getProjectTasks =  (req, res) => {
    const { id } = req.params

    try {
        Project.findByPk(id).then(response => {
            if (response === null) {
                res.status(404).send('Not found!');
            } else {
                // si existe
                // buscar las tasks que le corresponden
               Task.findAll({
                    where: {
                        projectId: id
                    }
                }).then(response => {
                    res.json(response)
                })
            }
        })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}
