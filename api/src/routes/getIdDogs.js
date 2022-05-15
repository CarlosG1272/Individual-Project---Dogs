
const {getDogsApi, getDogsDB} = require("./getDogs")
// No puedo usar de la api un endpoint que me de filtrado por id, asi que 
async function getIdDogs(req,res){
    const { id } = req.params; 

    try{
        let result = await Promise.all([getDogsApi(), getDogsDB()]);
        // el result [0], es decir el de mis dogs de la Api me viene como la mismisima mrd XD
        let combinationResult = {api: result[0], db: result[1]}

        // mi combinationResult sigue siendo un arreglo con 1 subs arreglo de db dogs si no le agrego el posicion [0]
        combinationResult = [...combinationResult.api, ...combinationResult.db]
        
        let coincidence = await combinationResult.find(el=> el.id.toString() === id.toString())
        if(!coincidence) return res.status(404).json({msg: "Don´t exist a dog with this ID"})
        return res.status(200).json(coincidence)
        
    }
    catch(e){
        res.status(400).json({msg: "Error in request data"})
    }
}


module.exports = getIdDogs