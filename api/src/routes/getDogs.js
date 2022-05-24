
const axios = require("axios")
const {Dog, Temperaments} = require("../db")

 async function getDogsApi (name) {
    
    try{
        let apiResult = await axios.get(name ? 
            `https://api.thedogapi.com/v1/breeds/search?q=${name}`:
            "https://api.thedogapi.com/v1/breeds")


            
        let finalApiResult = apiResult.data.map(el=> {
            return {
                        id: el.id,
                        name: el.name,
                        height_min: parseInt(el.height.imperial.split("-")[0]),
                        height_max: parseInt(el.height.imperial.split("-")[1]),
                        weight_min: parseInt(el.weight.imperial.split("-")[0]),
                        weight_max: parseInt(el.weight.imperial.split("-")[1]),
                        min_life: parseInt(el.life_span.split("-")[0]),
                        // "11 - years"
                        max_life: parseInt(el.life_span.split("-")[1]),
                        temperaments: el.temperament && el.temperament.split(", "),
                        // En algunos no viene el link, solo la parte final
                        img_Url: el.image ? el.image.url:`https://cdn2.thedogapi.com/images/${el.reference_image_id}.jpg`,
                        
                        // Adicional information 
                         bred_for: el.bred_for,
                         breed_group: el.breed_group,
                         origin: el.origin
                    }
            })
        return finalApiResult
    } catch(e) {
        throw new Error("unsuccessful API request")
    }  
}      
        
    

async function getDogsDB(){
    try {
        let dbResult = 
        await Dog.findAll( {
            include: {
                model: Temperaments,
                attributes: ["name"] ,
                // Para excluir la tabla de relaciones
                through: {attributes: []}
            }
        })
        return dbResult
    } catch(e){
        throw new Error("unsuccessful DataBase request")
    }
    
    
}
    
async function getDogs(req,res){
    
    const { name } = req.query; 

     try{
        let result = await Promise.all([getDogsApi(name), getDogsDB(name)])
        if(result[0].length === 0 && result[1].length === 0) {
           return res.status(404).json({msg: "No information found"})
        }
        let response = {api: result[0], db: result[1]}
        return res.send(response)
     } catch(e){  
         res.status(404).json({msg: "No information found"})
     }
    
}
    
    

 

 module.exports = { getDogs, getDogsApi, getDogsDB };