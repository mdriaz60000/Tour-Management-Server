import { userService } from "./user.service.js"



const createUser = async (req, res, next) => {
    try {
        
        const result = await userService.createUser(req.body)
        res.status(201).json(result)
    } catch (error) {
        next(error)
    }
}

const getAllUsers = async (req, res, next) => {
    try {
        const result = await userService.getAllUsers()
        res.status(200).json(result)
    } catch (error) {
        next(error)
    }
}

export const userController = {
    createUser,
    getAllUsers
}