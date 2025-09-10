import express from "express";
import { router as usuariosRouter } from "./router-usuario.js";

const servidor = express();

servidor.use(express.json());

servidor.use("/usuarios", usuariosRouter);

const PORTA = process.env.PORT || 3000;

servidor.listen(PORTA, () => {
    console.log(`Servidor rodando na porta ${PORTA}`);
});
