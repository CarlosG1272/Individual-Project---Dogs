

export default function selectTemperament(iteracionDog, temperaments){

    if(temperaments) {
    let arrayTemperaments = iteracionDog.temperaments

    if(arrayTemperaments) {
        let counter = 0; 
        for(let i =0; i < temperaments.length; i ++) { 
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