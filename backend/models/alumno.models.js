import {Schema, modelo} from "mongoose"

const Eshuema1 = new Schema({
    name:{
        types:Boolean
    }
})

export const modelo1 = new modelo ("Tabla de Alumnos", Eshuema1)