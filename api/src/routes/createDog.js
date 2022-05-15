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

        
    if(!name || !height_min || !height_max 
        || !weight_min || !weight_max || !min_life 
        || !max_life || !temperaments)  
        return res.status(400).send("Incomplete data")

    try {
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
                // el [0], porque el otro es el true o false del findOrCreate
                    result.forEach(el=> {creation.addTemperaments(el[0])} )        
            }).catch(el=> res.status(400).json({msg: "Error creating new dog"}))
        }   
       return res.status(201).json({msg: "Dog successfully created"})

} catch(e) {
    res.status(400).json(e.name)
}

}

module.exports = createDog

