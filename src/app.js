import express from 'express';
import routes from './routes.js';

const app = express();

// Indicar para o express ler body com JSON

app.use(express.json());

// Usar o router

app.use(routes);

export default app; 
