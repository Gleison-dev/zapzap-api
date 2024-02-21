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

const updatePassword = async (req, res) => {
    const { id } = req.params;
    const { newPassword } = req.body;
    await UserEntity.update({password: newPassword}, {
        where: {
            id
        }
    });
    const messageUpdate = await UserEntity.findByPk(id)
    res.json({messageUpdate});
}

const deleteUser = async (req, res) => {
    const { id } = req.params;
    await UserEntity.destroy({
        where: {
            id
        }
    });
    res.json({
        message: "Usuário deletado com sucesso!"
    });
}

export { createUser, getAllUsers, getUserByName, updatePassword, deleteUser }