import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/ViewEngine.js";
import initWebRoutes from "./route/web.js";
import connectDB from './config/connectDB.js';

require('dotenv').config();

let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

viewEngine(app);
initWebRoutes(app);

connectDB();

let port = process.env.PORT || 6969;
app.listen(port, () => {
    console.log('Running in the http://localhost:' + port);
})