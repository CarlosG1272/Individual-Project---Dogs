
let initialState = {
    dogs: {},
    detail: {},
    favorites: [],
    temperaments: []
}


export default function rootReducer(state = initialState, action){ 
    switch (action.type){
        case "GET_DOGS":
            return {...state, dogs: action.payload}
        case "GET_DETAIL":
            return {...state, detail: action.payload}
        case "ADD_FAVORITE":
            return {...state, favorites: [...state.favorites, action.payload]}
        case "REMOVE_FAVORITE":
            return  {...state, favorites: state.favorites.filter(el=> el.id !== action.id)}
        case "DELETE_DOG":
            return {...state, dogs: {...state.dogs, db: state.dogs.db.filter(el=> el.id !== action.id)}}
        case "GET_TEMPERAMENTS":
            return {...state, temperaments: action.payload}
        case "FILTER_TEMPERAMENT":
            // Aqui tengo un array [1, 2 ,3]
            // y lo tengo que comprar con otro array [{temperament: 1, 2, 3}]
            return {...state, dogs: state.dogs.filter(el=> {
                let temperaments = action.payload
 
                for(let i = 0; i < temperaments.length; i ++) {
                    
                }
            })}
        default: return {...state}
    }
}