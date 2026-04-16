const sqlite3 = require("sqlite3");
const { open } = require("sqlite");


const criarBanco = async () => {


    const db = await open({
        filename: "./database.db",
        driver: sqlite3.Database
    });


    // == TABELA: INSCRICOES
    await db.exec(
        `
        CREATE TABLE IF NOT EXISTS inscricao(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT,
        telefone TEXT,
        email TEXT,
        endereco TEXT,
        atuacao_desejada TEXT,
        status_aprovacao TEXT DEFAULT "Em análise"
        )
        `
    );
    console.log("Tabela de incrições criada com sucesso!");


    const checagemDeInscricoes = await db.get(
        `
        SELECT COUNT (*) AS totalDeInscricoes FROM inscricao
        `
    );
    if(checagemDeInscricoes.totalDeInscricoes === 0){

        await db.exec(
            `
            INSERT INTO inscricao (nome, telefone, email, endereco, atuacao_desejada) VALUES
            ("TESTE A","TESTE B","TESTE C","TESTE D","TESTE E")
            `
        );

    }else{
        console.log(
            `
            Banco pronto com total de ${checagemDeInscricoes.totalDeInscricoes} inscrição(s)!
            `
        );
    };
};

criarBanco();