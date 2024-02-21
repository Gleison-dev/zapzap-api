import { MessageEntity } from "../entities/Message.entity.js";
import { sequelize as database } from "../database/connection.js";

const createMessage = async (message) => {
    await database.sync();
    const newMessage = await MessageEntity.create({
        message
    });
    return newMessage;
}

const getAllMessages = async () => {
    return await MessageEntity.findAll();
}

const getMessageById = async (id) => {
    return await MessageEntity.findByPk(id);
}

const updateMessage = async (req, res) => {
    const { id } = req.params;
    const { newMessage } = req.body;
    await MessageEntity.update({message: newMessage}, {
        where: {
            id
        }
    });
    const messageUpdate = await MessageEntity.findByPk(id);
    res.json({messageUpdate});
}

const deleteMessage = async (req, res) => {
    const { id } = req.params;
    await MessageEntity.destroy({
        where: {
            id
        }
    });
    res.json({
        message: "Mensagem deletada com sucesso!"
    })
}

export { createMessage, getAllMessages, getMessageById, updateMessage, deleteMessage }