const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'API de Ideias',
    description: 'API para gerar ideias de startup usando Google Generative AI',
  },
  host: 'localhost:3000',
  schemes: ['http'],
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./app.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);
