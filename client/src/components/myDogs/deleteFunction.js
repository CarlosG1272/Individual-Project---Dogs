import axios from "axios"; 

export async function deleteDog(id) {
    let response = await axios.delete("http://localhost:3001/dog", {
        params: { id: id}
    })
    
    return response
}

