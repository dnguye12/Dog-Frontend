import axios from "axios"

const baseUrl = import.meta.env.VITE_API_URL

export const getBreed = async (id) => {
    let query = `${baseUrl}/api/breed?id=${id}`;

    try {
        const request = await axios.get(query)
        return request.data
    } catch (error) {
        console.log(error)
        return null
    }
}

export const getStats = async () => {
    let query = `${baseUrl}/api/breed/stats`

    try {
        const request = await axios.get(query)
        return request.data
    } catch (error) {
        console.log(error)
        return null
    }
}