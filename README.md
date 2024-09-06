# Startups-NodeJS

## Descrição do Projeto

Startups-NodeJS é uma aplicação Node.js desenvolvida como parte de um teste técnico, demonstrando a integração da API do Google Gemini. O projeto oferece um endpoint para gerar ideias inovadoras de startups com base em um input do usuário.

## Tecnologias Utilizadas

- Node.js
- Express.js
- Docker
- API do Google Gemini
- Swagger UI (para documentação da API)

## Estrutura do Projeto

```
startups-nodejs/
│
├── src/
│   ├── app.js
│   └── services/
│       └── googleGenerativeAIService.js
│
├── .gitignore
├── Dockerfile
├── docker-compose.yml
├── package.json
├── package-lock.json
├── README.md
├── swagger-output.json
└── swagger.js
```

## Pré-requisitos

- Docker e Docker Compose (recomendado)
- Node.js (para desenvolvimento local sem Docker)
- Chave de API do Google Gemini

## Configuração da API do Gemini

1. Obtenha uma chave de API do Google Gemini em [Google AI Studio](https://makersuite.google.com/app/apikey).
2. Crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo:
   ```
   API_KEY=sua_chave_de_api_aqui
   ```
   Substitua `sua_chave_de_api_aqui` pela chave que você obteve.

## Instalação e Execução

### Usando Docker (Recomendado)

1. Clone o repositório:
   ```
   git clone https://github.com/israeloliveiradev/startups-nodejs.git
   cd startups-nodejs
   ```

2. Construa a imagem Docker:
   ```
   docker-compose build
   ```

3. Inicie os contêineres:
   ```
   docker-compose up
   ```

4. O servidor estará rodando em `http://localhost:3000`

![Instalação com Docker](https://i.imgur.com/D14ap3f.gif)

### Sem Docker (Desenvolvimento Local)

1. Clone o repositório:
   ```
   git clone https://github.com/israeloliveiradev/startups-nodejs.git
   cd startups-nodejs
   ```

2. Instale as dependências:
   ```
   npm install
   ```

3. Inicie o servidor:
   ```
   npm start
   ```

4. O servidor estará rodando em `http://localhost:3000`


![Swagger](https://i.imgur.com/THOuzO2.png)

## Acessando a Documentação Swagger

1. Com o servidor rodando, abra seu navegador
2. Acesse `http://localhost:3000/api-docs`
3. Você verá a interface do Swagger UI com todas as rotas disponíveis



## Usando a API

1. No Swagger UI, localize o endpoint POST `/gerar-ideias`
2. Clique em "Try it out"
3. Insira um JSON no corpo da requisição, por exemplo:
   ```json
   {
     "input": "tecnologia sustentável"
   }
   ```
4. Clique em "Execute" para ver a resposta com as ideias geradas

Alternativamente, você pode usar curl:
```
curl -X POST http://localhost:3000/gerar-ideias \
-H "Content-Type: application/json" \
-d '{"input":"tecnologia sustentável"}'
```

![Requisição via Swagger](https://i.imgur.com/Y5i0B3d.gif))

## Desenvolvimento

Para fazer alterações no projeto:

1. Modifique o arquivo `src/app.js` conforme necessário
2. Se estiver usando Docker:
   - Reconstrua a imagem: `docker-compose build`
   - Reinicie os contêineres: `docker-compose up`
3. Se estiver desenvolvendo localmente, reinicie o servidor: `npm start`

## Troubleshooting

- Certifique-se de que a chave da API do Gemini está correta no arquivo `.env`
- Verifique se todas as portas necessárias estão livres
- Se estiver usando Docker, tente remover os contêineres e imagens e reconstruir do zero


## Contato e Suporte

Para questões ou suporte, por favor, abra uma issue no repositório do GitHub.


