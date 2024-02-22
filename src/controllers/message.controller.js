import { MessageEntity } from "../entities/Message.entity.js";

const createMessage = async (req, res) => {
    const { message } = req.body;
    const newMessage = await MessageEntity.create({
        message
    });
    res
    .status(201)
    .json({
        message: "Mensagem criada com sucesso!",
        newMessage
    });
}

const getAllMessages = async (req, res) => {
    const messages = await MessageEntity.findAll();
    res.json({messages});
}

const getMessageById = async (req, res) => {
    const { id } = req.params;
    const messageFindId = await MessageEntity.findByPk(id);
    res.json({messageFindId});
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