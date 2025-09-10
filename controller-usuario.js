let usuarios = [];
let proximoId = 1;

function listarUsuarios(req, res) {
    return res.json(usuarios); 
}

function criarUsuario(req, res) {
    const { nome, email } = req.body || {};

    if (!nome?.trim() || !email?.trim()) {
        return res.status(400).json({ erro: "Preencha os campos nome e email." });
    }

    const novoUsuario = {
        id: proximoId,
        nome,
        email
    };

    usuarios = [...usuarios, novoUsuario];
    proximoId++;

    return res.status(201).json(novoUsuario);
}

export { listarUsuarios, criarUsuario };
