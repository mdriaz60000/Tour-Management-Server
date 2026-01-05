import { user } from "./user.model.js"



const createUser = async (userData) => {
    const result = await user.create(userData)
    return result
}

// const getUserById = async (id) => {
//     return await user.findById(id)
// }

const getAllUsers = async () => {
    return await user.find()
}

export const userService = {
    createUser,
    getAllUsers
}