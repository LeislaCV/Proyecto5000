import { Schema, model } from "mongoose";

const Esquema = new Schema({
  name: {
    type: Boolean, 
    required: true, 
  },
});


export const Modelo = model("Alumno", Esquema); 
