const { Dog } = require("../db")

async function deleteDog (req,res) {
    let { id } = req.query; 
    // Me esta llegando por req.query no se porque loko XD
    try{

        let deleted = await Dog.destroy({
            where: {id}  
        })
        return res.json({msg: "deleted dog"})
    }
   catch(e){
    res.status(500).json({msg: "Error in delete"})       
}
}


module.exports = deleteDog