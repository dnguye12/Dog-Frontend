import axios from 'axios'

const baseUrl = import.meta.env.VITE_API_URL

export const getUser = async(userId) => {
    let query = baseUrl + `/api/user?userId=${userId}`

    try {
        const request = await axios.get(query)
        return request.data
    } catch (error) {
        console.log(error)
        return null
    }
}

export const postUser = async (userId, name, imageUrl) => {
    let query = baseUrl + '/api/user'
    try {
        const request = await axios.post(query, {
            userId,
            name,
            imageUrl,
        })
        return request.data
    } catch (error) {
        console.log(error)
        return null
    }
}