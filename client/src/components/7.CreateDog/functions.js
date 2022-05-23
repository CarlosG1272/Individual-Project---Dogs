import axios from "axios"; 
export const PostDog = async(input)=> {
    const response = await axios.post("http://localhost:3001/dog", {
        name: input.name,
        height_min: input.height_min,
        height_max: input.height_max,
        weight_min: input.weight_min,
        weight_max: input.weight_max,
        min_life: input.min_life,
        max_life: input.max_life,
        temperaments: input.temperaments
    })
    return response
}


// const expresiones = {
// 	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
// 	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
// 	password: /^.{4,12}$/, // 4 a 12 digitos.
// 	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
// 	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
// }

export default function validate(entrada) {
    let errors = {};
    
    if (!entrada.name) {
      errors.name = "Name is required";
    } else if(entrada.name.length < 5) {
      errors.name = "The name must be have 6 or more characters"
    } 
  
    if (!entrada.height_min) {
      errors.height_min = "Height is required";
    } 
  
    if (!entrada.height_max) {
      errors.height_max = "Height is required";
    } 
  
    if (!entrada.weight_min) {
      errors.weight_min = "weight is required";
    } 
  
    if (!entrada.weight_max) {
      errors.weight_max = "weight is required";
    } 

    if (!entrada.min_life) {
        errors.min_life = "weight is required";
      } 
    
      if (!entrada.max_life) {
        errors.max_life = "weight is required";
      } 
    return errors;
  }