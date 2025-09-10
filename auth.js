export function verificarAdm(req, res, next) {
    const tipoUser = req.body?.tipoUser;

    if (tipoUser !== "admin") {
        return res.status(401).json({ mensagem: "Função não permitida a este usuário!" });
    }

    next();
}
