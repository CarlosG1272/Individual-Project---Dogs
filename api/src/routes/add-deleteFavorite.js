const { Dog, Favorites } = require("../db");
const { getDogsApi, getDogsDB } = require("./getDogs");

async function addFavorite(req,res) {
    let {id} = req.query;
  try{
    let result = await Promise.all([getDogsApi(), getDogsDB()]);
    let completeData = [...result[0], ...result[1]]

    let coincidence = completeData.find(el=> el.id.toString() === id.toString())
    
    if(coincidence) {
        let addFavorite = await Favorites.findOrCreate({ where: {
            DogId: id.toString()
        }    
        })
        if(addFavorite[1]) return res.json({msg:"Succesfully added in favorites!" })
        else return res.json({msg:"Dog is already in the favorites"})
    }
    
    return res.status(400).json({msg: "Don´t exist a dog with this ID"})
  } catch(e){
    return res.status(400).json({msg: "Error in add to favorites"})
  }
    
}


async function deleteFavorite(req,res) {
    let {id} = req.query; 
    try {
        let result = await Favorites.destroy({
            where: {DogId: id}
        })
        // El destroy devuelve 0 si no fue destruido y 1 si fue destruido
        if(result == 0) {
            return res.status(404).json({msg: `Don´t exist a dog with id ${id}`})
        }
        res.json({msg: `Dog with id ${id} successfully remove to favorites`})
    }catch(e){
        res.status(400).json({msg: `Error in delete the dog with id ${id} of favorites`})
    }   
}

module.exports = {addFavorite, deleteFavorite}