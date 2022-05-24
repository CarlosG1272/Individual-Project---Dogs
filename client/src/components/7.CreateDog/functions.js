import axios from "axios"; 
export const PostDog = async(input)=> {
    const response = await axios.post("/dog", {
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