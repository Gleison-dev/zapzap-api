import { Router } from "express";
import { 
    createMessage,
    getAllMessages,
    getMessageById
 } from "../controllers/message.controller.js";

const messageRoute = Router();

messageRoute.post("/new-message", async (req, res) => {
    const { message } = req.body;
    const newMessage = await createMessage(message);
    res
    .status(201)
    .json({
        message: "Mensagem criada com sucesso!",
        newMessage
    });
});

messageRoute.get("/messages", async (req, res) => {
    const messages = await getAllMessages();
    res
    .json({messages});
});

messageRoute.get("/message-find-id/:id", async (req, res) => {
    const id = req.params.id;
    const messageFindId = await getMessageById(id);
    res
    .json({messageFindId});
});

export { messageRoute }