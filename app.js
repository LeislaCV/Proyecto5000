import mongoose from "mongoose";
import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import { test } from "./backend/models/alumno.controller.js";

dotenv.config()
mongoose.conect(process.env.url_db)
.then(()=>  {

    console.log("Funciona re bien la Base de Datos")

})
.catch(()=>{
    console.log("No funciona re bien la BD", error)
})

const app = express();
app.use(cors());
app.listen(400000, () =>{
    console.log("Si escucha el servidor")
})
test()