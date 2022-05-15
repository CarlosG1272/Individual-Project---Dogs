const { Temperaments } = require("../db")
const { getDogsApi } = require("./getDogs")
// Dice que tengo que primero guardarla en mi base de datos
async function getTemperaments (req,res) {
   
    function SortArray(x, y){
        if (x.name < y.name) {return -1;}
        if (x.name > y.name) {return 1;}
        return 0;
    }
    // Como me dice que solo tengo que guardarlo en mi base de datos en primera instancia,pues entonces procedo a verificar si mi base de datos tiene temperamentos
    
    let resultsDB = await Temperaments.findAll(); 
     if(resultsDB.length < 10) {
         
        let parcialResults = await getDogsApi(); 
        // Originalmente mis resultados contienen demasiada información, asi que solo me quedo con el temperamento de cada elemento

        parcialResults = parcialResults.map(el=> el.temperaments); 
        
        // En este punto mi parcialResult es [ "jugueton, agresivo", "agresivo, "jsad"]
 
        // Para esto uso el .flat, que me permite generar un nuevo arreglo a partir de todos los subarreglos existentes dentro de mi arreglo principal


         parcialResults = parcialResults.map(el=> el).flat()
        // parcialResults = parcialResults.filter(el => el !== " " && el !== "")
        let resultArray = parcialResults.filter((el, index) => {
            return parcialResults.indexOf(el) === index
        });
        // Aqui ya tendria mis datos tal y como yo los quiero
        // Ahora me toca guardarlo en mi base de datos

        // Para que sea ordenado alfabeticamente
        resultArray = resultArray.sort()

        // Para no generar un trabon puedo hacer promesas y usar el promise.all

        let saveDatabase = resultArray.map(el=> Temperaments.create({name: el}))
         // Estos son promesas, asi que las tengo que ejecutar
        Promise.all(saveDatabase)
       
        res.send([...resultArray, ...resultsDB])
    }
        // Pido la data a mi base de datos
    else {
        let finalResult = resultsDB.sort(SortArray)
        res.send(finalResult)
    }    
    
    
}

module.exports = getTemperaments; 