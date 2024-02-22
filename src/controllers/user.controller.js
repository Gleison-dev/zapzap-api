import { UserEntity } from "../entities/User.entity.js";

const createUser = async (req, res) => {
    await UserEntity.sync();
    const { name, email, password } = req.body;
    const newUser = await UserEntity.create({
        name, email, password
    });
    res
    .status(201)
    .json({
        message: "Usuário criado com sucesso!",
        newUser
    });
}

const getAllUsers = async (req, res) => {
    const users = await UserEntity.findAll();
    res.json({users});
}

const getUserByName = async (req, res) => {
    const { name } = req.body;
    const UserFindName = await UserEntity.findOne({
        where: {
            name
        }
    });
    res.json({UserFindName});
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