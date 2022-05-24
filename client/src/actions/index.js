import axios from "axios"

export function getDogs(name){
    return function(dispatch){
        return axios.get(!name ? 
        '/dogs':
        `/dogs?name=${name}`)
        .then(res=> res.data)
        .then( json=> {
            let dogs = json
            if(dogs.db ) {
                // eslint-disable-next-line
                dogs.db = dogs.db.map( function(el) {
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
        return axios.get(`/dogs/${id}`)
        .then(res => res.data)
        .then(json=> { 
            dispatch({type: "GET_DETAIL", payload: json})})
    }
}

export function addFavorite(id){
    return {
        type: "ADD_FAVORITE",
        payload: id
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
        return axios.get('/temperaments')
        .then(response=>response.data)
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

export function getFavorites() {
    return function (dispatch){
        return fetch('/favorites')
        .then(response => response.json())
        .then(data=> dispatch({type: "GET_FAVORITES", payload: data}))
    }
}

