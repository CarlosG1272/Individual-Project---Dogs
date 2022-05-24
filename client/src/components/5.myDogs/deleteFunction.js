import axios from "axios"; 

export async function deleteDog(id) {
    let response = await axios.delete("/dog", {
        params: { id: id}
    })
    
    return response
}

