export default function orderedDog (inputDogs, descendent, height, weight) {
    // Orderb by height
    let dogsModified = inputDogs && inputDogs.map(el=>el)
    const dogsFixed = inputDogs
    
    // Mi order por default será ordenar de forma ASCDENTE
    if(height.actived) {
        
        if(height.min) {
           
            if(descendent) {
               
                dogsModified = dogsModified.sort((x,y)=> parseInt(y.height_min)-parseInt(x.height_min))    
            } else {
                dogsModified = dogsModified.sort((x,y)=> parseInt(x.height_min)-parseInt(y.height_min))
            }
            return dogsModified
        } else  {
           
            if(descendent) {
                
                dogsModified = dogsModified.sort((x,y)=> parseInt(y.height_max)-parseInt(x.height_max))    
            } else {
                dogsModified = dogsModified.sort((x,y)=> parseInt(x.height_max)-parseInt(y.height_max))
            }
            return dogsModified
        }
    }


    if(weight.actived) {
        if(weight.min) {

            if(descendent) {

                dogsModified = dogsModified.sort((x,y)=> parseInt(y.weight_min)-parseInt(x.weight_min))    
            } else {
                dogsModified = dogsModified.sort((x,y)=> parseInt(x.weight_min)-parseInt(y.weight_min))
            }
            return dogsModified
        } else  {

            if(descendent) {
     
                dogsModified = dogsModified.sort((x,y)=> parseInt(y.weight_max)-parseInt(x.weight_max))    
            } else {
                dogsModified = dogsModified.sort((x,y)=> parseInt(x.weight_max)-parseInt(y.weight_max))
            }
            return dogsModified
        }
    }

    if(descendent) {
        dogsModified = dogsModified.reverse()
        return dogsModified
    }
    return dogsFixed

}






