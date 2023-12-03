import express, { Express, json } from 'express';
import cors from 'cors';
import { students } from "./database/students";
import routes from './routes';

class Server {
    server: Express

    constructor() {
        this.server = express();

        this.middlewares();
        this.routes()
    }

    middlewares() {
        this.server.use(json())
        this.server.use(cors())
    }
    
    routes() {
        this.server.use(routes)
    }
}

export default Server