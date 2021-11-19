import { DBController } from "./controllers/dbController";
import { resolve } from 'path';
const dbPath = resolve(__dirname, 'sqlite.db')
const db = new DBController(dbPath);

const query = `SELECT * FROM players`;

db.read(query);