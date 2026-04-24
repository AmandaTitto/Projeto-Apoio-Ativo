# Projeto Apoio Ativo
A API **Apoio Ativo** foi desenvolvida para gerenciamento de ações sociais, conectando voluntários, instrutores e coordenadores em uma plataforma organizada e acessível.
O sistema permite cadastrar usuários, organizar equipes e estruturar escalas de atividades, facilitando a gestão de iniciativas de apoio.

## 🎯 Objetivo
O projeto busca criar uma solução digital que torne mais simples:
- Solicitação de apoio;
- Organização de ações sociais;
- Comunicação entre voluntários e as instituições de auxílio.

## 🚀 Funcionalidades
- Cadastro de coordenadores, instrutores e voluntários;
- Organização de equipes e grupos;
- Registro de solicitações de apoio;
- Gerenciamento de escalas;
- Interação entre usuários;
- Interface simples e acessível.

## 🛠️ Tecnologias Utilizadas
- Node.js
- Express
- SQLite/SQLite3
- Nodemon
- Postman

## ⚙️Clonagem do Projeto
Para acessar o projeto, você pode clonar o repositório. 
`git clone https://github.com/AmandaTitto/Projeto-Apoio-Ativo.git`

`cd Projeto-Apoio-Ativo`

## 📦 Instalação
Este módulo foi realizado via npm e deve ser instalado com suas dependencias. 
`npm install`

## ▶️ Execução
Atualmente a página já roda por um endereço próprio: `projeto-apoio-ativo.onrender.com` [Acessar Site](https://projeto-apoio-ativo.onrender.com)

Entretanto, caso haja necessidade, podemos rodar pelo terminal GitBash.
`npm run dev`

## 📂 Estrutura do Projeto
Composto por 7 (sete) arquivos principais e 1 (uma) pasta/biblioteca.

**Projeto-Apoio-Ativo/**
│
├── node_modules/
├── database.db
├── database.js
├── server.js
├── package.json
└── README.md

###  🗄️ Banco de Dados (Database.db)
Por motivos de segurança, o banco de dados não fica disponível para visualização ao público. Entretanto, caso necessário, após realizar uma cópia do projeto, um banco de dados é criado automaticamente, gerando o arquivo "database.db".

## 🧾 Tabelas

### Coordenadores
|Campo|Descrição|
|-|-|
|nome|Nome completo|
|cpf|CPF|
|telefone|Telefone|
|email|E-mail|
|endereco|Endereço completo|


### Instrutores
|Campo|Descrição|
|-|-|
|nome|Nome completo|
|cpf|CPF|
|telefone|Telefone|
|email|E-mail|
|endereco|Endereço completo|

### Horários
|Campo|Descrição|
|-|-|
|horarioDeEntrada|Horário de inicio da atividade|
|horarioDeIntervalo|Horário de intervalo|
|horarioDeSaida|Horário de fim da atividade|
|descricao|Descrição ou observação|

### Equipes
|Campo|Descrição|
|-|-|
|nome|Títuto da atividade|
|descricao|Descrição ou observação do tópico acima|

### Grupos
|Campo|Descrição|
|-|-|
|nome|Nome do grupo|
|equipe_id|Equipe vinculada|
|descricao|Descrição ou observação do tópico acima|

### Voluntários
|Campo|Descrição|
|-|-|
|nome|Nome completo|
|cpf|CPF|
|telefone|Telefone|
|email|E-mail|
|endereco|Endereço completo|
|equipe_id|Equipe de interesse|

### Escalas
|Campo|Descrição|
|-|-|
|data|Data da realização da atividade|
|horario_id|Horário vinculado|
|equipe_id|Equipe vinculada|
|grupo_id|Grupo vinculada|
|status|Situação da atividade|


### Escalas dos Voluntários
|Campo|Descrição|
|-|-|
|escala_id|Escala vinculada|
|voluntario_id|Voluntário direcionado|

## 🔗 Endpoints

### Rota Inicial
```http
GET /
```
Retorna uma página com informações da API.

Ex.:
/ → Página inicial
/coordenadores
/instrutores
/horarios
/equipes
/grupos
/voluntarios
/escalas
/murais

### Rota de Listagem
```json
GET /:rota
```
Retorna os registros do banco de dados.

Ex.:
/coordenadores/:id
/instrutores/:id
/horarios/:id
/equipes/:id
/grupos/:id
/voluntarios/:id
/escalas/:id
/murais/:id

### Rota para Postagem
```json
POST /:rota
```
Adiciona informações ao banco de dados. Vale ressaltar que o formato JSON é essencial para realizar essa função.

Ex.:
Coordenadores
{
  "nome": "",
  "cpf": "",
  "telefone": "",
  "email": "",
  "endereco": ""
}

### Rota para Atualização
```json
PUT /:rota/:id
```
Atualiza informações no banco de dados. Vale ressaltar que o formato JSON é essencial para realizar essa função.

Ex.:
Instrutores
{
  "nome": "",
  "cpf": "",
  "telefone": "",
  "email": "",
  "endereco": ""
}

### Rota para Remover
```json
DELETE /:rota/:id
```
Exclui informações no banco de dados. Vale ressaltar que o formato JSON é essencial para realizar essa função.

Ex.:
Voluntários
{
  "nome": "",
  "cpf": "",
  "telefone": "",
  "email": "",
  "endereco": "",
  "equipe_id": ""
}

## 🔐 Segurança
As queries utilizam parâmetros (?) para prevenir SQL Injection:
```sql
WHERE id = ?
```

## 📚 Conceitos
- CRUD (Create, Read, Update e Delete);
- Rotas com Express;
- Modelagem de banco de dados.


👨‍💻 Projeto Educacional
Projeto desenvolvido para fins de estudo e prática de API com Node.js.