const { Dog } = require("../db")

async function deleteDog (req,res) {

    // Me esta llegando por req.query no se porque loko XD
    let { id } = req.query; 
    let deleted = await Dog.destroy({
        where: {id}
    })
    return deleted
}


module.exports = deleteDog