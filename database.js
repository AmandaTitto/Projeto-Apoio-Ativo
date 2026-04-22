const sqlite3 = require("sqlite3");
const { open } = require("sqlite");


const criarBanco = async () => {

    try{
        const db = await open({
            filename: "./database.db",
            driver: sqlite3.Database
        });

        await db.exec("PRAGMA foreign_keys = ON;");

        try{
            console.log("Iniciando verificação na tabela de coordenadores!");
            await db.exec(
                `
                CREATE TABLE IF NOT EXISTS cadastroDeCoordenadores (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                nome TEXT NOT NULL,
                cpf TEXT UNIQUE NOT NULL,
                telefone TEXT NOT NULL,
                email TEXT NOT NULL,
                endereco TEXT NOT NULL
                )
                `
            );
            console.log("Sucesso - Tabela de coordenadores criada/verificada com sucesso!");

        }catch(error){
            console.log("Erro - Problema na criação/verificação da tabela de coordenadores!");
        };

        try{
            console.log("Iniciando verificação na tabela de instrutores!");
            await db.exec(
            `
            CREATE TABLE IF NOT EXISTS cadastroDeInstrutores (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT NOT NULL,
            cpf TEXT UNIQUE NOT NULL,
            telefone TEXT NOT NULL,
            email TEXT NOT NULL,
            endereco TEXT NOT NULL
            )
            `
        );
        console.log("Sucesso - Tabela de instrutores criada/verificada com sucesso!");

        }catch(error){
            console.log("Erro - Problema na criação/verificação da tabela de instrutores!");
        };

        try{
            console.log("Iniciando verificação na tabela de horarios!");
            await db.exec(
            `
            CREATE TABLE IF NOT EXISTS cadastroDeHorarios (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            horarioDeEntrada TEXT NOT NULL,
            horarioDeIntervalo TEXT NOT NULL,
            horarioDeSaida TEXT NOT NULL,
            descricao TEXT
            )
            `
            );
            console.log("Sucesso - Tabela de horarios criada/verificada com sucesso!");

        }catch(error){
            console.log("Erro - Problema na criação/verificação da tabela de horarios!");
        };

        try{
            console.log("Iniciando verificação na tabela de equipes!");
            await db.exec(
            `
            CREATE TABLE IF NOT EXISTS cadastroDeEquipes (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT NOT NULL,
            descricao TEXT NOT NULL
            )
            `
        );
        console.log("Sucesso - Tabela de equipes criada/verificada com sucesso!");

        }catch(error){
            console.log("Erro - Problema na criação/verificação da tabela de equipes!");
        };

        try{
            console.log("Iniciando verificação na tabela de grupos!");
            await db.exec(
            `
            CREATE TABLE IF NOT EXISTS cadastroDeGrupos (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT NOT NULL,
            equipe_id INTEGER NOT NULL,
            descricao TEXT NOT NULL,
            FOREIGN KEY (equipe_id) REFERENCES cadastroDeEquipes (id)
            )
            `
            );
            console.log("Sucesso - Tabela de grupos criada/verificada com sucesso!");

        }catch(error){
            console.log("Erro - Problema na criação/verificação da tabela de grupos!");
        };

        try{
            console.log("Iniciando verificação na tabela de voluntarios!");
            await db.exec(
            `
            CREATE TABLE IF NOT EXISTS cadastroDeVoluntarios (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT NOT NULL,
            cpf TEXT UNIQUE NOT NULL,
            telefone TEXT NOT NULL,
            email TEXT,
            endereco TEXT NOT NULL,
            equipe_id INTEGER,
            FOREIGN KEY (equipe_id) REFERENCES cadastroDeEquipes(id)
            )
            `
            );
            console.log("Sucesso - Tabela de voluntarios criada/verificada com sucesso!");

        }catch(error){
            console.log("Erro - Problema na criação/verificação da tabela de voluntarios!");
        };

        try{
            console.log("Iniciando verificação na tabela de escalas!");
            await db.exec(
            `
            CREATE TABLE IF NOT EXISTS cadastroDeEscalas (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            data TEXT NOT NULL,
            horario_id INTEGER NOT NULL,
            equipe_id INTEGER NOT NULL,
            grupo_id INTEGER NOT NULL,
            status TEXT DEFAULT "Concluido",
            FOREIGN KEY (horario_id) REFERENCES cadastroDeHorarios(id),
            FOREIGN KEY (equipe_id) REFERENCES cadastroDeEquipes(id),
            FOREIGN KEY (grupo_id) REFERENCES cadastroDeGrupos(id)
            )
            `
            );
            console.log("Sucesso - Tabela de escalas criada/verificada com sucesso!");

        }catch(error){
            console.log("Erro - Problema na criação/verificação da tabela de escalas!");
        };

        try{
            console.log("Iniciando verificação na tabela de escala dos voluntarios!");
            await db.exec(
            `
            CREATE TABLE IF NOT EXISTS escalasDosVoluntarios (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            escala_id INTEGER,
            voluntario_id INTEGER,
            FOREIGN KEY (escala_id) REFERENCES cadastroDeEscalas(id),
            FOREIGN KEY (voluntario_id) REFERENCES cadastroDeVoluntarios(id)
            )
            `
            );
            console.log("Sucesso - Tabela de escala dos voluntarios criada/verificada com sucesso!");

        }catch(error){
            console.log("Erro - Problema na criação/verificação da tabela de escala dos voluntarios!");
        };

        return db;
    
    }catch(error){
        console.error("Erro ao criar banco");
    };
};

module.exports = {criarBanco};