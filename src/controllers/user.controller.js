import {User} from "../models/User"

const getUsers = async(req, res) => {
    try {
        const results = await User.findAll();

        let message = "";
        if (results === undefined || results.length === 0) {
            message = "users table is empty";
        } else {
            message = "Successfully retrieved all users";
        }

        res.json({message, data: results});
    } catch (err) {
        res.status(500)
        res.send(err.message);
    }
    
}

const addUser = async(req, res) => {
    const {name, email, password} = req.body;
    if (name === undefined || email === undefined || password === undefined) {
        res.status(400).json({message: "Bad request. Please fill all fields."});
    }

    try {
        const user = {name, email, password}
        const result = await User.create(user);

        res.json({message: "User added ", data: result});
    } catch (err) {
        res.status(500)
        res.send(err.message);
    }   
}

const getUserbyName = async(req, res) => {
    const {name} = req.params;

    if (name === undefined ) {
        res.status(400).json({message: "Bad request. Please fill all fields."});
    }

    try {
        const result = await User.findOne({where: {name}});
        
        let message = "";
        if (result === undefined || result === null) {
            message = "User is not found";
        } else {
            message = "Sucessfully retrieved user data";
        }

        res.json({message, data: result});
    } catch (err) {
        res.status(500)
        res.send(err.message);
    }
    
}

const getUserbyPassword = async(req, res) => {
    const {password} = req.params;
    
    if (password === undefined ) {
        res.status(400).json({message: "Bad request. Please fill all fields."});
    }

    try {
        const result = await User.findOne({where: {password}});
        
        let message = "";
        if (result === undefined || result === null) {
            message = "User is not found";
        } else {
            message = "Sucessfully retrieved user data";
        }

        res.json({message, data: result});
    } catch (err) {
        res.status(500)
        res.send(err.message);
    }
    
}

const deleteUserbyId = async(req, res) => {
    const {id} = req.params;
    if (id === undefined) {
        res.status(400).json({message: "Bad request. Please fill all fields."});
    }

    try {
        const result = await User.destroy({where: {id}});
        
        let message = "";
        if (result === undefined || result.length === 0) {
            message = "User is not found";
        } else {
            message = "Sucessfully user data deleted";
        }

        res.json({message, data: result});
    } catch (err) {
        res.status(500)
        res.send(err.message);
    }
    
}

const updateUserbyId = async(req, res) => {
    const {id} = req.params;
    const {name, email, password} = req.body;

    if (id === undefined || name === undefined || email === undefined || password === undefined) {
        res.status(400).json({message: "Bad request. Please fill all fields."});
    }

    try {
        const newData = {id,name, email, password}

        const userUpdated = await User.upsert(newData);
        
        let message = "";
        if (userUpdated === undefined || userUpdated.length === 0) {
            message = "User is not found";
        } else {
            message = "Sucessfully user data updated";
        }

        res.json({message, data: userUpdated});
    } catch (err) {
        res.status(500)
        res.send(err.message);
    }
    
}

export const userController = {
    getUsers,
    addUser,
    getUserbyName,
    getUserbyPassword,
    deleteUserbyId,
    updateUserbyId
}