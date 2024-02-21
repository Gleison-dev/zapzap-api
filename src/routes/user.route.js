import { Router } from "express";
import { 
    createUser,
    getAllUsers,
    getUserByName,
    updatePassword,
    deleteUser
 } from "../controllers/user.controller.js";

const userRoute = Router();

userRoute.post("/new-user", async (req, res) => {
    const { name, email, password } = req.body;
    const newUser = await createUser(name, email, password);
    res
    .status(201)
    .json({
        Message: "Usuário criado com sucesso!",
        newUser
    });
});

userRoute.get("/users", async (req, res) => {
    const users = await getAllUsers();
    res
    .json({users});
});

userRoute.get("/user-find-name", async (req, res) => {
    const { name } = req.body;
    const userFindName = await getUserByName(name);
    res
    .json({userFindName});
});

userRoute.patch("/update-password/:id", updatePassword);

userRoute.delete("/delete-user/:id", deleteUser);

export { userRoute }