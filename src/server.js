import express from "express";
import { testConneciton } from "./database/connection.js";
import { userRoute } from "./routes/user.route.js";
import { messageRoute } from "./routes/message.route.js";

const app = express();
const port = 3333;

app.use(express.json());
app.use(userRoute);
app.use(messageRoute);

app.listen(port, () => {
    testConneciton();
    console.log(`Servidor rodando na port ${port}`)
});