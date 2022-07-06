import express from "express";
import morgan from "morgan";
const cors = require('cors');

//Routes import
import userRoutes from "./routes/user.routes";
import taskRoutes from "./routes/task.routers";


const app = express();
app.disable(`x-powered-by`);

// Capable of read json
app.use(express.json());
// app.header( "Access-Control-Allow-Origin" );
app.use(express.urlencoded({extended: true}));
app.use(cors());
// Settings
app.set("port", 3000);
//Middleware
app.use(morgan("dev"));

//Routes 
app.use("/api/users", userRoutes);
app.use("/api/tasks", taskRoutes);


export default app;