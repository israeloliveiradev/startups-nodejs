const express = require('express');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('../swagger-output.json');
const { generateIdeas } = require('./services/googleGenerativeAIService');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.post('/gerar-ideias', async (req, res) => {
    const userInput = req.body.input;

    try {
        const ideas = await generateIdeas(userInput);
        res.json({ ideias: ideas });
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro ao gerar ideias.');
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}/api-docs`);
});
