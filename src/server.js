import express from "express";
import { testConneciton } from "./database/connection.js";
import { routes } from "./routes/index.route.js";

const app = express();
const port = 3333;

app.use(express.json());
app.use(routes)

app.listen(port, () => {
    testConneciton();
    console.log(`Servidor rodando na port ${port}`)
});