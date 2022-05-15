
const {getDogsApi, getDogsDB} = require("./getDogs")
// No puedo usar de la api un endpoint que me de filtrado por id, asi que 
async function getIdDogs(req,res){
    const { id } = req.params; 
    let result = await Promise.all([getDogsApi(), getDogsDB()]);
    // el result [0], es decir el de mis dogs de la Api me viene como la mismisima mrd XD
    let combinationResult = [...result[0], result[1][0]]; 

    // mi combinationResult sigue siendo un arreglo con 1 subs arreglo de db dogs si no le agrego el posicion [0]


    let FinalResult = combinationResult.find(el=> el && el.id.toString() === id.toString())
    
    //  let nuevo = {...semiFinalResult, temperaments: semiFinalResult.temperaments.map(el=> ({...el, dataValues: el.dataValues.name}))}

    res.send(FinalResult)
}


module.exports = getIdDogs