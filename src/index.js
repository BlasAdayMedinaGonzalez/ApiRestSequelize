import app from "./app"
import {sequelize} from "./db/db"

import "./models/User"
import "./models/Task"

let server;
async function runServer(){
    try {
        await sequelize.sync({force: false});
        console.log('Connection has been established successfully.');
        server = app.listen(app.get("port"), () => {
            console.log(`Aplication is running...`);
            console.log('Server started on port ' + app.get("port"));
        })
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    } 
};

const stopServer = () => {
    console.log(`Received kill signall, shutting down...`);
    server.close();
    process.exit(0);
};

process.on('SIGINT', () => {stopServer()});
process.on('SIGTERM', () => {stopServer()});

runServer();