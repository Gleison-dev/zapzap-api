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

export { createMessage, getAllMessages, getMessageById }