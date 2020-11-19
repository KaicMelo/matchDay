
import express from 'express'
import cors from 'cors'
import routes from './routes'
import expressSession from 'express-session'
// import path from 'path';

class App{
    public express:express.Application

    public constructor (){
        this.express = express();
        this.middleware();
    }

    private middleware (): void{
        this.express.use(express.json());
        this.express.use(cors());
        this.express.use(routes);
        this.express.use(expressSession({
            secret: 'keyboard',
            resave: false,
            saveUninitialized: true,
            cookie: {secure: true}
        }));
    }
}

export default new App().express;
// var app = express();

// app.use(express.json()); 
// app.use(cors());
// app.use(routes);

// app.use('/uploads',express.static(path.resolve(__dirname,'..','uploads')))
// app.listen(3333);

