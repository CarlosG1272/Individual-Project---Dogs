
const {getDogsApi, getDogsDB} = require("./getDogs")

async function getIdDogs(req,res){
    const { id } = req.params; 

    try{
        let result = await Promise.all([getDogsApi(), getDogsDB()]);
        let combinationResult = [...result[0], result[1]]
        
        let coincidence = await combinationResult.find(el=> el.id.toString() === id.toString())
        if(!coincidence) return res.status(404).json({msg: "Don´t exist a dog with this ID"})
        return res.status(200).json(coincidence)
        
    }
    catch(e){
        res.status(400).json({msg: "Error in request data"})
    }
}


module.exports = getIdDogs