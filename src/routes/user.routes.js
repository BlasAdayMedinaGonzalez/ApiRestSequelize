import {Router} from "express";
import {userController} from "../controllers/user.controller"

const router = Router();

router
    .get('/', userController.getUsers)
    .get('/:name', userController.getUserbyName)
    .post('/', userController.addUser)
    .put('/:id', userController.updateUserbyId)
    .delete('/:id', userController.deleteUserbyId)

export default router;