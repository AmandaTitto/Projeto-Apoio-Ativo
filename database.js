const sqlite3 = require("sqlite3");
const { open } = require("sqlite");


const criarBanco = async () => {


    const db = await open({
        filename: "./database.db",
        driver: sqlite3.Database
    });

    await db.exec("PRAGMA foreign_keys = ON;");


    // == == == == == == == == == == == ==
    // == TABELAS CADASTRAIS PRIMARIAS
    // == == == == == == == == == == == ==

    await db.exec(
        `
        CREATE TABLE IF NOT EXISTS cadastroOcorrencias (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        titulo TEXT NOT NULL,
        instituicao TEXT,
        endereco TEXT NOT NULL,
        descricao TEXT NOT NULL,
        vagas INTEGER,
        status TEXT DEFAULT "Em Análise"
        )
        `
    );
    console.log("Tabela de ocorrencias criada com sucesso!");

    await db.exec(
        `
        CREATE TABLE IF NOT EXISTS cadastroEquipes (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT NOT NULL,
        descricao TEXT NOT NULL
        )
        `
    );
    console.log("Tabela de equipes criada com sucesso!");


    // == == == == == == == == == == == ==
    // == TABELAS CADASTRAIS SEGUNDARIAS
    // == == == == == == == == == == == ==

    await db.exec(
        `
        CREATE TABLE IF NOT EXISTS cadastroGrupos (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT NOT NULL,
        equipe_id INTEGER NOT NULL,
        descricao TEXT NOT NULL,
        FOREIGN KEY (equipe_id) REFERENCES cadastroEquipes(id)
        )
        `
    );
    console.log("Tabela de grupos criada com sucesso!");


    // == == == == == == == == == == == ==
    // == TABELAS CADASTRAIS TERCIARIAS
    // == == == == == == == == == == == ==

    await db.exec(
        `
        CREATE TABLE IF NOT EXISTS cadastroCoordenadores (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT NOT NULL,
        cpf TEXT UNIQUE NOT NULL,
        telefone TEXT NOT NULL,
        email TEXT NOT NULL,
        endereco TEXT NOT NULL,
        equipe_id INTEGER,
        FOREIGN KEY (equipe_id) REFERENCES cadastroEquipes(id)
        )
        `
    );
    console.log("Tabela de coordenadores criada com sucesso!");

    await db.exec(
        `
        CREATE TABLE IF NOT EXISTS cadastroInstrutores (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT NOT NULL,
        cpf TEXT UNIQUE NOT NULL,
        telefone TEXT NOT NULL,
        email TEXT NOT NULL,
        endereco TEXT NOT NULL,
        equipe_id INTEGER,
        grupo_id INTEGER,
        FOREIGN KEY (equipe_id) REFERENCES cadastroEquipes(id),
        FOREIGN KEY (grupo_id) REFERENCES cadastroGrupos(id)
        )
        `
    );
    console.log("Tabela de instrutores criada com sucesso!");

    await db.exec(
        `
        CREATE TABLE IF NOT EXISTS cadastroVoluntarios (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT NOT NULL,
        cpf TEXT UNIQUE NOT NULL,
        telefone TEXT NOT NULL,
        email TEXT,
        endereco TEXT NOT NULL
        )
        `
    );
    console.log("Tabela de voluntarios criada com sucesso!");


};

criarBanco();