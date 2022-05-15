
export function getDogs(name){
    return function(dispatch){
        return fetch(!name ? 
        "http://localhost:3001/dogs":
        `http://localhost:3001/dogs?name=${name}`)
        .then(res=> res.json())
        .then( json=> {
            let dogs = json
            if(dogs[1]) {
                dogs[1] = dogs[1].map( function(el) {
                    if(el.temperaments){
                        el.temperaments = el.temperaments.map(t=> t.name)
                        return el
                    }
            } )
            }
            return dogs
        }  
        )
        .then(json=>dispatch({type: "GET_DOGS", payload: json})
        )
    }
}

export function getDetail(id){
    return function(dispatch){
        return fetch(`http://localhost:3001/dogs/${id}`)
        .then(res => res.json())
        .then(json=> dispatch({type: "GET_DETAIL", payload: json}))
    }
}

export function addFavorite(object){
    return {
        type: "ADD_FAVORITE",
        payload: object
    }
}

export function removeFavorite(id){
    return {
        type: "REMOVE_FAVORITE",
        id
    }
}

export function deleteMydogs(id) {
    return {
        type: "DELETE_DOG", 
        id
    }
}

export function getTemperaments(){
    return function (dispatch) {
        return fetch("http://localhost:3001/temperaments")
        .then(response=>response.json())
        .then(response=>{
            dispatch({type: "GET_TEMPERAMENTS", payload: response})
        })
    }
}

export function filterbyTemperament(array) {
    return {
        type: "FILTER_TEMPERAMENT",
        payload: array
    }
}
