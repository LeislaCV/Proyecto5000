import mongose from "mongoose";
import cors from "corse";
import express from "express";
import dotenv from "dotennv";
import { test } from "./backend/models/alumno.controller";

dotenv.config()
mongose.conect(process.env.url_db)
.then(()=>  {

    console.log("Funciona re bien la Base de Datos")

})
.catch((errors)=>{
    console.log("No funciona re bien la BD", error)
})

const app = express();
app.use(coors());
app.listen(400000, () =>{
    console.log("Si escucha el servidor")
})
test(1)