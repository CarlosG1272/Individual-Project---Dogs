const { Dog } = require("../db")
const { Temperaments } = require("../db")
async function createDog(req,res){

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
        let createdDog = await Dog.create({
            name,
            height_min,
            height_max,
            weight_min,
            weight_max,
            min_life,
            max_life,
            temperaments
        })
    
        // temperaments 
        // [Intelligent, friendly]
    
        if(temperaments.length > 0) {
            let promises = temperaments.map(async el=> await Temperaments.findOrCreate({
                where: {
                    name: el[0].toUpperCase() + el.slice(1).toLowerCase()
                }
            }))
    
            Promise.all(promises).then(result=> {
                    result.forEach(el=> {createdDog.addTemperaments(el[0])} )        
            }).catch(el=> res.status(400).json({msg: "Error creating new dog"}))
        }   
       return res.status(201).json({msg: "Dog successfully created"})

} catch(e) {
    res.status(400).json(e.name)
}

}

module.exports = createDog

