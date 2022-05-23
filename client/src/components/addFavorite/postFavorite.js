import axios from "axios"

export const postFavorite = async(id)=> {
    const response = await axios.post("http://localhost:3001/favorites", {
        id
    })
    return response
}

export const deleteFavorite = async(id)=> {
    const response = await axios.delete(`http://localhost:3001/favorites?id=${id}`)
    return response
}