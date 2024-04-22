import app from './app';
import { initializeDb } from './services/appService';

const port = 3000;

console.log(`Server listening to port ${port}...`);

app.listen(port);
