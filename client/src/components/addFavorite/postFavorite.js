import axios from "axios"

export const postFavorite = async(id)=> {
    const response = await axios.post("/favorites", {
        id
    })
    return response
}

export const deleteFavorite = async(id)=> {
    const response = await axios.delete(`/favorites?id=${id}`)
    return response
}