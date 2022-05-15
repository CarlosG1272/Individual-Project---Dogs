export default function orderedDog (inputDogs, descendent, height, weight) {
    // Orderb by height
    let dogsModified = inputDogs && inputDogs.map(el=>el)
    const dogsFixed = inputDogs
    
    // Mi order por default será ordenar de forma ASCDENTE, primero el menor
    // Primero validación de height
    if(height.actived) {
        // Si esta activado ordenar por height min, pues inicio
        if(height.min) {
            // Si entro aqui es porque ordenaré en base a criterio del height minimo
            if(descendent) {
                // En este punto ordenamos de forma descendente
                dogsModified = dogsModified.
                sort((x,y)=> parseInt(y.height_min)-parseInt(x.height_min))    
            } else {
                dogsModified = dogsModified.
                sort((x,y)=> parseInt(x.height_min)-parseInt(y.height_min))
            }
            return dogsModified
        } else  {
            // Si no esta activado height min, el por defecto será height max
            if(descendent) {
                // En este punto ordenamos de forma descendente
                dogsModified = dogsModified.
                sort((x,y)=> parseInt(y.height_max)-parseInt(x.height_max))    
            } else {
                dogsModified = dogsModified.
                sort((x,y)=> parseInt(x.height_max)-parseInt(y.height_max))
            }
            return dogsModified
        }
    }

    // Ahora ordenar por peso
    if(weight.actived) {
        // Si esta activado ordenar por height min, pues inicio
        if(weight.min) {
            // Si entro aqui es porque ordenaré en base a criterio del height minimo
            if(descendent) {
                // En este punto ordenamos de forma descendente
                dogsModified = dogsModified.
                sort((x,y)=> parseInt(y.weight_min)-parseInt(x.weight_min))    
            } else {
                dogsModified = dogsModified.
                sort((x,y)=> parseInt(x.weight_min)-parseInt(y.weight_min))
            }
            return dogsModified
        } else  {
            // Si no esta activado height min, el por defecto será height max
            if(descendent) {
                // En este punto ordenamos de forma descendente
                dogsModified = dogsModified.
                sort((x,y)=> parseInt(y.weight_max)-parseInt(x.weight_max))    
            } else {
                dogsModified = dogsModified.
                sort((x,y)=> parseInt(x.weight_max)-parseInt(y.weight_max))
            }
            return dogsModified
        }
    }

    // Para retornar perros sin modificar pero descendente XD 
    if(descendent) {
        dogsModified = dogsModified.reverse()
        return dogsModified
    }
    return dogsFixed

}






