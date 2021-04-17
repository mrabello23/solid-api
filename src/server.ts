import 'dotenv/config';
import { app } from './app';

const PORT = Number(process.env.PORT) || 3000;
const HOST = process.env.HOST || '0.0.0.0';

app.listen(PORT, HOST);
