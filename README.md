📌 Apoio Ativo - API

API REST desenvolvida em Node.js para gerenciamento de coordenadores, instrutores, voluntários, equipes, grupos e escalas.

🚀 Tecnologias utilizadas
Node.js
Express
SQLite
JavaScript
📂 Estrutura do projeto
📁 Projeto Apoio Ativo
 ├── server.js
 ├── database.js
 ├── database.db
 ├── package.json
⚙️ Instalação e execução
1. Clonar o repositório
git clone <URL_DO_REPOSITORIO>
2. Acessar a pasta
cd Projeto Apoio Ativo
3. Instalar dependências
npm install
4. Iniciar o servidor
node server.js

Ou com nodemon:

npx nodemon server.js
🌐 Servidor

O servidor roda em:

http://localhost:3000
📌 Rotas da API
🔹 GET (Listar dados)
/ → Página inicial
/coordenadores
/instrutores
/horarios
/equipes
/grupos
/voluntarios
/escalas
/murais
🔹 GET por ID
/coordenadores/:id
/instrutores/:id
/horarios/:id
/equipes/:id
/grupos/:id
/voluntarios/:id
/escalas/:id
/murais/:id
🔹 POST (Criar registros)
Coordenadores
{
  "nome": "",
  "cpf": "",
  "telefone": "",
  "email": "",
  "endereco": ""
}
Instrutores
{
  "nome": "",
  "cpf": "",
  "telefone": "",
  "email": "",
  "endereco": ""
}
Horários
{
  "horarioDeEntrada": "",
  "horarioDeIntervalo": "",
  "horarioDeSaida": "",
  "descricao": ""
}
Equipes
{
  "nome": "",
  "descricao": ""
}
Grupos
{
  "nome": "",
  "equipe_id": "",
  "descricao": ""
}
Voluntários
{
  "nome": "",
  "cpf": "",
  "telefone": "",
  "email": "",
  "endereco": "",
  "equipe_id": ""
}
Escalas
{
  "data": "",
  "horario_id": "",
  "equipe_id": "",
  "grupo_id": ""
}
Murais
{
  "escala_id": "",
  "voluntario_id": ""
}
✏️ PUT (Atualizar registros)

Todas as entidades possuem atualização por ID:

PUT /rota/:id
❌ DELETE (Remover registros)

Todas as entidades possuem remoção por ID:

DELETE /rota/:id
⚠️ Observações importantes
CPF é único no sistema
Algumas tabelas possuem relacionamento via foreign key
Certifique-se de que os IDs existem antes de criar vínculos
O banco SQLite é criado automaticamente na primeira execução
🧠 Possíveis melhorias futuras
Separação em MVC (controllers e routes)
Validação de dados (ex: Joi ou Zod)
Autenticação (JWT)
Deploy online (Render / Railway)
Documentação com Swagger
👨‍💻 Autor

Projeto desenvolvido para fins de estudo e prática de API REST com Node.js.