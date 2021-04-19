import 'dotenv/config';
import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { app } from './app';

createConnection();

const PORT = Number(process.env.PORT) || 3000;
const HOST = process.env.HOST || '0.0.0.0';

app.listen(PORT, HOST);
