

export default function selectTemperament(iteracionDog, temperaments){

    if(temperaments) {
    let arrayTemperaments = iteracionDog.temperaments
    // Ahora mi array es [[intelligent, curious], [], []]
    // [intelligent, friendly, curious]
    // Si o si tiene que tener la cantidad de elementos
    if(arrayTemperaments) {
        let counter = 0; 
        for(let i =0; i < temperaments.length; i ++) { // para mi dog
        for(let j = 0; j < arrayTemperaments.length; j++ ) {
            if(arrayTemperaments[j] === temperaments[i]){
                counter++
            }
        }}
        if(counter === temperaments.length) return true 
        else return false 
    }    
    return false
    
    }
    
    return true
}