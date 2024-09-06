const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();

const API_KEY = process.env.API_KEY;

const generateIdeas = async (userInput) => {
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt = `Crie 5 ideias de startup com conceitos inovadores com base em "${userInput}". Preciso que escreva em português.`;

    try {
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const ideas = response.text();
        return ideas;
    } catch (error) {
        console.error('Erro ao gerar ideias:', error);
        throw new Error('Erro ao gerar ideias.');
    }
};

module.exports = { generateIdeas };