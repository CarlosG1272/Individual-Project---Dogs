const { Dog, Favorites } = require("../db");

async function addFavorite(req,res) {
    let {id} = req.body;
    console.log(id)
    let dog = await Dog.findOne({
       where:{id}
    })

    Favorites.addDog(dog)
    res.json("Done")
}


async function deleteFavorite(req,res) {
    let {id} = req.query; 
    let result = await  Favorites.destroy({
        where: {id: DogId}
    })
    res.json(result)
}

module.exports = {addFavorite, deleteFavorite}