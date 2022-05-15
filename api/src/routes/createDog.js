const { Dog } = require("../db")
const { Temperaments } = require("../db")
async function createDog(req,res){
    // Este recibirá los valores por body, que serán los siguientes respecto al modelo
    const { name, 
        height_min, 
        height_max, 
        weight_min, 
        weight_max,
        min_life, 
        max_life, 
        temperaments} = req.body
    // Ahora una vez obtenidos tengo que crearlo en mi modelo DOg
    
    let creation = await Dog.create({
        name,
        height_min,
        height_max,
        weight_min,
        weight_max,
        min_life,
        max_life,
        temperaments
    })

    // temperaments bendra como un array 
    // [Intelligent, friendly]

    if(temperaments.length > 0) {
        // Lo busco o lo creo
        let promises = temperaments.map(async el=> await Temperaments.findOrCreate({
            where: {
                // Convierto la palabra en toda minuscula, y la primera en mayuscula
                name: el[0].toUpperCase() + el.slice(1).toLowerCase()
            }
        }))

        Promise.all(promises).then(result=> {
                result.forEach(
                    el=> {
                        creation.addTemperaments(el[0])
                        }  
                        )
        })
       
}}

module.exports = createDog

