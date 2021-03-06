import {Task} from "../models/Task"

const getTasksByUser = async(req,res) => {

    const {user_id} = req.params;
    
    try {
        const results = await Task.findAll({where: {user_id}});

        let message = "";
        if (!results || results.length === 0) {
            message = "Task table is empty";
        } else {
            message = "Successfully retrieved all tasks by user id";
        }

        res.json({message, data: results});
    } catch (err) {
        res.status(500)
        res.send(err.message);
    }
}

const addTaskByUser = async(req,res) => {
    const {user_id} = req.params;
    const {tittle, description, done} = req.body;

    if (!tittle || !description) {
        return res.status(400).json({message: "Bad request. Please fill all fields."});
    }
    
    try {

        const task = {tittle, description, done, user_id}
        const results = await Task.create(task);

        res.json({message: "Task added", data: results});
    } catch (err) {
        res.status(500)
        res.send(err.message);
    }
}

const updateTaskByUser = async(req,res) => {
    const {task_id} = req.params;
    const {tittle, description, done} = req.body;

    if (!tittle || !description) {
        return res.status(400).json({message: "Bad request. Please fill all fields."});
    }
    
    try {

        const newtaskUpda = {tittle, description, done}
        const task = await Task.findOne({ where: {task_id} });

        let message;
        if (task) {
            task.tittle = newtaskUpda.tittle;
            task.description = newtaskUpda.description;
            await task.save();
            message = "Sucessfully task data updated";
        } else {
            message = "task not found";
        }

        res.json({message, data: task});
    } catch (err) {
        res.status(500)
        res.send(err.message);
    }
}

const deleteTaskByUser = async(req,res) => {
    const {task_id} = req.params;

    if (!task_id) {
        return res.status(400).json({message: "Bad request. Please fill all fields."});
    }
    
    try {

        const result = await Task.destroy({where: {task_id}});

        res.json({message: "Task Deleted", data: result});
    } catch (err) {
        res.status(500)
        res.send(err.message);
    }
}


export const taskController = {
    getTasksByUser,
    addTaskByUser,
    updateTaskByUser,
    deleteTaskByUser
}