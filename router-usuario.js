import { Router } from "express";
import { chamarApi } from "./middleware.js";
import { listarUsuarios, criarUsuario } from "./controller-usuario.js";
import { verificarAdm } from "./auth.js";

const usuariosRouter = Router();

usuariosRouter.use(chamarApi);

usuariosRouter.get("/", listarUsuarios);
usuariosRouter.post("/", verificarAdm, criarUsuario);

export default usuariosRouter;
