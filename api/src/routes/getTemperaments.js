const { Temperaments } = require("../db")
const { getDogsApi } = require("./getDogs")

async function getTemperaments (req,res) {
   
    function SortArray(x, y){
        if (x.name < y.name) {return -1;}
        if (x.name > y.name) {return 1;}
        return 0;
    }

    try {
        let resultsDB = await Temperaments.findAll(); 
        let longit = resultsDB.length

        if(longit === 0) {
                let parcialResults = await getDogsApi(); 

                parcialResults = parcialResults.map(el=> el.temperaments); 

                parcialResults = parcialResults.map(el=> el).flat()

                // Delete repeats y Order
                let resultArray = parcialResults.filter((el, index) => {
                    return parcialResults.indexOf(el) === index
                });
                resultArray = resultArray.sort()
                // 1 value null
                resultArray.pop()


                let saveDatabase = resultArray.map(async el=> await Temperaments.create({name: el}))
                
                await Promise.all(saveDatabase)
                    
                res.json(resultArray)
                
        }
        else {
            let finalResult = resultsDB.sort(SortArray)
            res.json(finalResult)
        }    
}catch(e){
    res.status(400).json(e)
}
    
}

module.exports = getTemperaments; 