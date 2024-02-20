import { UserEntity } from "../entities/User.entity.js";
import { sequelize as database } from "../database/connection.js";

const createUser = async (name, email, password) => {
    await database.sync();
    const newUser = await UserEntity.create({
        name, email, password
    });
    return newUser;
}

const getAllUsers = async () => {
    return await UserEntity.findAll();
}

const getUserByName = async (name) => {
    return await UserEntity.findOne({
        where: {
            name
        }
    })
}

export { createUser, getAllUsers, getUserByName }