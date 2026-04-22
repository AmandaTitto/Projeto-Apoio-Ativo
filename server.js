// == Importações
const express = require("express");
const {criarBanco} = require("./database");

const cors = require("cors");

const app = express();

// == Ativação

app.use(express.json());

app.use(cors());


// == Rotas

app.get("/", (req, res) => {
    res.send(
        `
        <body>
        <h1> Apoio Ativo </h1>
        </body>
        `
    );
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

app.get("/coordenadores", async (req, res) => {
    const db = await criarBanco();

    const listaDeCoordenadores = await db.all(
        `
        SELECT * FROM cadastroDeCoordenadores
        `
    );

    res.json(listaDeCoordenadores);
});

app.get("/instrutores", async (req, res) => {
    const db = await criarBanco();

    const listaDeInstrutores = await db.all(
        `
        SELECT * FROM cadastroDeInstrutores
        `
    );

    res.json(listaDeInstrutores);
});

app.get("/horarios", async (req, res) => {
    const db = await criarBanco();

    const listaDeHorarios = await db.all(
        `
        SELECT * FROM cadastroDeHorarios
        `
    );

    res.json(listaDeHorarios);
});

app.get("/equipes", async (req, res) => {
    const db = await criarBanco();

    const listaDeEquipes = await db.all(
        `
        SELECT * FROM cadastroDeEquipes
        `
    );

    res.json(listaDeEquipes);
});

app.get("/grupos", async (req, res) => {
    const db = await criarBanco();

    const listaDeGrupos = await db.all(
        `
        SELECT * FROM cadastroDeGrupos
        `
    );

    res.json(listaDeGrupos);
});

app.get("/voluntarios", async (req, res) => {
    const db = await criarBanco();

    const listaDeVoluntarios = await db.all(
        `
        SELECT * FROM cadastroDeVoluntarios
        `
    );

    res.json(listaDeVoluntarios);
});

app.get("/escalas", async (req, res) => {
    const db = await criarBanco();

    const listaDeEscalas = await db.all(
        `
        SELECT * FROM cadastroDeEscalas
        `
    );

    res.json(listaDeEscalas);
});

app.get("/murais", async (req, res) => {
    const db = await criarBanco();

    const listaDeMurais = await db.all(
        `
        SELECT * FROM escalasDosVoluntarios
        `
    );

    res.json(listaDeMurais);
});

// == Rotas Especificas

app.get("/coordenadores/:id", async (req, res) => {
    const {id} = req.params

    const db = await criarBanco();

    const coordenadorEspecifico = await db.all(
        `
        SELECT * FROM cadastroDeCoordenadores WHERE id = ?
        `,
        [id]
    );

    res.json(coordenadorEspecifico);
});

app.get("/instrutores/:id", async (req, res) => {
    const {id} = req.params

    const db = await criarBanco();

    const instrutorEspecifico = await db.all(
        `
        SELECT * FROM cadastroDeInstrutores WHERE id = ?
        `,
        [id]
    );

    res.json(instrutorEspecifico);
});

app.get("/horarios/:id", async (req, res) => {
    const {id} = req.params

    const db = await criarBanco();

    const horarioEspecifico = await db.all(
        `
        SELECT * FROM cadastroDeHorarios WHERE id = ?
        `,
        [id]
    );

    res.json(horarioEspecifico);
});

app.get("/equipes/:id", async (req, res) => {
    const {id} = req.params

    const db = await criarBanco();

    const equipeEspecifico = await db.all(
        `
        SELECT * FROM cadastroDeEquipes WHERE id = ?
        `,
        [id]
    );

    res.json(equipeEspecifico);
});

app.get("/grupos/:id", async (req, res) => {
    const {id} = req.params

    const db = await criarBanco();

    const grupoEspecifico = await db.all(
        `
        SELECT * FROM cadastroDeGrupos WHERE id = ?
        `,
        [id]
    );

    res.json(grupoEspecifico);
});

app.get("/voluntarios/:id", async (req, res) => {
    const {id} = req.params

    const db = await criarBanco();

    const voluntarioEspecifico = await db.all(
        `
        SELECT * FROM cadastroDeVoluntarios WHERE id = ?
        `,
        [id]
    );

    res.json(voluntarioEspecifico);
});

app.get("/escalas/:id", async (req, res) => {
    const {id} = req.params

    const db = await criarBanco();

    const escalaEspecifico = await db.all(
        `
        SELECT * FROM cadastroDeEscalas WHERE id = ?
        `,
        [id]
    );

    res.json(escalaEspecifico);
});

app.get("/murais/:id", async (req, res) => {
    const {id} = req.params

    const db = await criarBanco();

    const muralEspecifico = await db.all(
        `
        SELECT * FROM escalasDosVoluntarios WHERE id = ?
        `,
        [id]
    );

    res.json(muralEspecifico);
});

// == Rotas Postagem

app.post("/coordenadores", async (req, res) => {
    const {nome, cpf, telefone, email, endereco} = req.body

    const db = await criarBanco();

    await db.run(
        `
        INSERT INTO cadastroDeCoordenadores(nome, cpf, telefone, email, endereco) VALUES (?, ?, ?, ?, ?)
        `,
        [nome, cpf, telefone, email, endereco]
    );

    res.send(`Coordenador(a) ${nome} registrado(a) com sucesso`);
});

app.post("/instrutores", async (req, res) => {
    const {nome, cpf, telefone, email, endereco} = req.body

    const db = await criarBanco();

    await db.run(
        `
        INSERT INTO cadastroDeInstrutores(nome, cpf, telefone, email, endereco) VALUES (?, ?, ?, ?, ?)
        `,
        [nome, cpf, telefone, email, endereco]
    );

    res.send(`Instrutor(a) ${nome} registrado(a) com sucesso`);
});

app.post("/horarios", async (req, res) => {
    const {horarioDeEntrada, horarioDeIntervalo, horarioDeSaida, descricao} = req.body

    const db = await criarBanco();

    await db.run(
        `
        INSERT INTO cadastroDeHorarios(horarioDeEntrada, horarioDeIntervalo, horarioDeSaida, descricao) VALUES (?, ?, ?, ?)
        `,
        [horarioDeEntrada, horarioDeIntervalo, horarioDeSaida, descricao]
    );

    res.send(`Horario registrado com sucesso`);
});

app.post("/equipes", async (req, res) => {
    const {nome, descricao} = req.body

    const db = await criarBanco();

    await db.run(
        `
        INSERT INTO cadastroDeEquipes(nome, descricao) VALUES (?, ?)
        `,
        [nome, descricao]
    );

    res.send(`Equipe registrada com sucesso`);
});

app.post("/grupos", async (req, res) => {
    const {nome, equipe_id, descricao} = req.body

    const db = await criarBanco();

    await db.run(
        `
        INSERT INTO cadastroDeGrupos(nome, equipe_id, descricao) VALUES (?, ?, ?)
        `,
        [nome, equipe_id, descricao]
    );

    res.send(`Grupo registrado com sucesso`);
});

app.post("/voluntarios", async (req, res) => {
    const {nome, cpf, telefone, email, endereco, equipe_id} = req.body

    const db = await criarBanco();

    await db.run(
        `
        INSERT INTO cadastroDeVoluntarios(nome, cpf, telefone, email, endereco, equipe_id) VALUES (?, ?, ?, ?, ?, ?)
        `,
        [nome, cpf, telefone, email, endereco, equipe_id]
    );

    res.send(`Voluntario(a) ${nome} registrado(a) com sucesso`);
});

app.post("/escalas", async (req, res) => {
    const {data, horario_id, equipe_id, grupo_id} = req.body

    const db = await criarBanco();

    await db.run(
        `
        INSERT INTO cadastroDeEscalas(data, horario_id, equipe_id, grupo_id) VALUES (?, ?, ?, ?)
        `,
        [data, horario_id, equipe_id, grupo_id]
    );

    res.send(`Escala registrada com sucesso`);
});

app.post("/murais", async (req, res) => {
    const {escala_id, voluntario_id} = req.body

    const db = await criarBanco();

    await db.run(
        `
        INSERT INTO escalasDosVoluntarios(escala_id, voluntario_id) VALUES (?, ?)
        `,
        [escala_id, voluntario_id]
    );

    res.send(`Mural registrado com sucesso`);
});

// == Rotas Editar

app.put("/coordenadores/:id", async (req, res) => {
    const {id} = req.params;

    const {nome, cpf, telefone, email, endereco} = req.body;

    const db = await criarBanco();

    await db.run(
        `
        UPDATE cadastroDeCoordenadores SET nome = ?, cpf = ?, telefone = ?, email = ?, endereco = ? WHERE id = ?
        `,
        [nome, cpf, telefone, email, endereco, id]
    );

    res.send(`Cadastro do coordenador(a) ${nome} editado com sucesso`);
});

app.put("/instrutores/:id", async (req, res) => {
    const {id} = req.params;

    const {nome, cpf, telefone, email, endereco} = req.body;

    const db = await criarBanco();

    await db.run(
        `
        UPDATE cadastroDeInstrutores SET nome = ?, cpf = ?, telefone = ?, email = ?, endereco = ? WHERE id = ?
        `,
        [nome, cpf, telefone, email, endereco, id]
    );

    res.send(`Cadastro do instrutor(a) ${nome} editado com sucesso`);
});

app.put("/horarios/:id", async (req, res) => {
    const {id} = req.params;

    const {horarioDeEntrada, horarioDeIntervalo, horarioDeSaida, descricao} = req.body;

    const db = await criarBanco();

    await db.run(
        `
        UPDATE cadastroDeHorarios SET horarioDeEntrada = ?, horarioDeIntervalo = ?, horarioDeSaida = ?, descricao = ? WHERE id = ?
        `,
        [horarioDeEntrada, horarioDeIntervalo, horarioDeSaida, descricao, id]
    );

    res.send(`Cadastro do horario ${id} editado com sucesso`);
});

app.put("/equipes/:id", async (req, res) => {
    const {id} = req.params;

    const {nome, descricao} = req.body;

    const db = await criarBanco();

    await db.run(
        `
        UPDATE cadastroDeEquipes SET nome = ?, descricao = ? WHERE id = ?
        `,
        [nome, descricao, id]
    );

    res.send(`Cadastro da equipe ${id} editada com sucesso`);
});

app.put("/grupos/:id", async (req, res) => {
    const {id} = req.params;

    const {nome, equipe_id, descricao} = req.body;

    const db = await criarBanco();

    await db.run(
        `
        UPDATE cadastroDeGrupos SET nome = ?, equipe_id = ?, descricao = ? WHERE id = ?
        `,
        [nome, equipe_id, descricao, id]
    );

    res.send(`Cadastro do grupo ${id} editado com sucesso`);
});

app.put("/voluntarios/:id", async (req, res) => {
    const {id} = req.params;

    const {nome, cpf, telefone, email, endereco, equipe_id} = req.body;

    const db = await criarBanco();

    await db.run(
        `
        UPDATE cadastroDeVoluntarios SET nome = ?, cpf = ?, telefone = ?, email = ?, endereco = ?, equipe_id = ? WHERE id = ?
        `,
        [nome, cpf, telefone, email, endereco, equipe_id, id]
    );

    res.send(`Cadastro do voluntário(a) ${nome} editado com sucesso`);
});

app.put("/escalas/:id", async (req, res) => {
    const {id} = req.params;

    const {data, horario_id, equipe_id, grupo_id} = req.body;

    const db = await criarBanco();

    await db.run(
        `
        UPDATE cadastroDeEscalas SET data = ?, horario_id = ?, equipe_id = ?, grupo_id = ? WHERE id = ?
        `,
        [data, horario_id, equipe_id, grupo_id, id]
    );

    res.send(`Cadastro da escala ${id} editado com sucesso`);
});

app.put("/murais/:id", async (req, res) => {
    const {id} = req.params;

    const {escala_id, voluntario_id} = req.body;

    const db = await criarBanco();

    await db.run(
        `
        UPDATE escalasDosVoluntarios SET escala_id = ?, voluntario_id = ? WHERE id = ?
        `,
        [escala_id, voluntario_id, id]
    );

    res.send(`Cadastro do mural ${id} editado com sucesso`);
});

// == Rotas Deletar

app.delete("/coordenadores/:id", async (req, res) => {
    const {id} = req.params;

    const db = await criarBanco();

    await db.run(
        `
        DELETE FROM cadastroDeCoordenadores WHERE id = ?
        `,
        [id]
    );

    res.send(`Cadastro do coordenador(a) ${id} excluido com sucesso`);
});

app.delete("/instrutores/:id", async (req, res) => {
    const {id} = req.params;

    const db = await criarBanco();

    await db.run(
        `
        DELETE FROM cadastroDeInstrutores WHERE id = ?
        `,
        [id]
    );

    res.send(`Cadastro do instrutor(a) ${id} excluido com sucesso`);
});

app.delete("/horarios/:id", async (req, res) => {
    const {id} = req.params;

    const db = await criarBanco();

    await db.run(
        `
        DELETE FROM cadastroDeHorarios WHERE id = ?
        `,
        [id]
    );

    res.send(`Cadastro do horario ${id} excluido com sucesso`);
});

app.delete("/equipes/:id", async (req, res) => {
    const {id} = req.params;

    const db = await criarBanco();

    await db.run(
        `
        DELETE FROM cadastroDeEquipes WHERE id = ?
        `,
        [id]
    );

    res.send(`Cadastro da equipe ${id} excluida com sucesso`);
});

app.delete("/grupos/:id", async (req, res) => {
    const {id} = req.params;

    const db = await criarBanco();

    await db.run(
        `
        DELETE FROM cadastroDeGrupos WHERE id = ?
        `,
        [id]
    );

    res.send(`Cadastro do grupo ${id} excluido com sucesso`);
});

app.delete("/voluntarios/:id", async (req, res) => {
    const {id} = req.params;

    const db = await criarBanco();

    await db.run(
        `
        DELETE FROM cadastroDeVoluntarios WHERE id = ?
        `,
        [id]
    );

    res.send(`Cadastro do voluntario(a) ${id} excluido com sucesso`);
});

app.delete("/escalas/:id", async (req, res) => {
    const {id} = req.params;

    const db = await criarBanco();

    await db.run(
        `
        DELETE FROM cadastroDeEscalas WHERE id = ?
        `,
        [id]
    );

    res.send(`Cadastro da escala ${id} excluido com sucesso`);
});

app.delete("/murais/:id", async (req, res) => {
    const {id} = req.params;

    const db = await criarBanco();

    await db.run(
        `
        DELETE FROM escalasDosVoluntarios WHERE id = ?
        `,
        [id]
    );

    res.send(`Cadastro do mural ${id} excluido com sucesso`);
});
