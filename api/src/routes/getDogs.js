
const axios = require("axios")
const {Dog, Temperaments} = require("../db")

 async function getDogsApi (name) {
    // Puede recibir argumentos para filtrar

    // Primero realizo la petición a la API 
    // La API ya me devuelve la raza de perros incluido los temperamentos
    
    let apiResult = await axios.get(name ? 
        `https://api.thedogapi.com/v1/breeds/search?q=${name}`:
        "https://api.thedogapi.com/v1/breeds")
   
        // Tengo un error de que mis datos son circulares, asi que antes de mandar la respuesta la manejo 

        // AXIOS CUANDO DEVUELVE UNA FUNCIÓN LO HACE CON .data, no puedo acceder simplemente con apiResult.map

        // Antes de devolver la información la manejo y acomodo de tal forma que tenga la estructura que yo deseo

        // no le puedo poner try aqui dios sabra porque XD
        
    let finalApiResult = apiResult.data.map(el=> {
        return {
                    id: el.id,
                    name: el.name,
                    height_min: el.height.metric.split("-")[0],
                    height_max: el.height.metric.split("-")[1],
                    weight_min: el.weight.metric.split("-")[0],
                    weight_max: el.weight.metric.split("-")[1],
                    min_life: el.life_span.split("-")[0],
                    // La información me esta llegando "max_life": " 12 years"
                    max_life: el.life_span.split("-")[1],
                    temperaments: el.temperament && el.temperament.split(", "),
                    // Cuando buscas todo no hay problema, pero cuando buscas 1 por 1, no viene le link de la imagen. sino que su codigo
                    img_Url: el.image ? el.image.url:`https://cdn2.thedogapi.com/images/${el.reference_image_id}.jpg`
                }
        })
    return finalApiResult
}      
        
    

async function getDogsDB(name){
    
     // Dentro de mi base de datos necesito hacer la petición pero OJO que estas no incluyen los temperamentos 

    let dbResult = await Dog.findAll( {
    include: {
        model: Temperaments,
        attributes: ["name"] ,
        // Para excluir la tabla de relaciones
        through: {attributes: []}
    }
})/*name ? 
    await Dog.findOne({where: {name}, include:{Temperament}}):*/
    // Este error manejable despues, no encuentra cuando le paso name XD
    return dbResult
    
}
    
async function getDogs(req,res){
    const { name } = req.query; 
    // Ejecuto mi promesa para que al mismo tiempo estas se muestren
    let result = await Promise.all([getDogsApi(name), getDogsDB(name)])

    res.json(result)
}
    
    

 

 module.exports = { getDogs, getDogsApi, getDogsDB };