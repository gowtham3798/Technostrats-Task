import express from "express";

import mongo from "./mongo.js";

import batchRoute from './routes/employees.route.js';

import cors from "cors";


const app = express();
(async () => {
    try{
        await mongo.connect();
        app.use(cors());

        //middleware
        app.use(express.json());
        
        //Routers
        app.get('/',(req, res) => {
            res.json({ status : 'Success'})
        })
        
        app.use('/employees',batchRoute)
        
        app.listen(8000,() => console.log('listening at PORT 3001'));
        
    }
    catch (err){
        console.log("Error Starting app");
    }
})();

export default app;