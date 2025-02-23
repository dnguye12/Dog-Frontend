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

export const getAll = async () => {
    let query = `${baseUrl}/api/breed/all`

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

export const getSimilarName = async (name) => {
    let query = baseUrl + `/api/breed/similar-name?name=${name}`

    try {
        const request = await axios.get(query)
        return request.data
    } catch (error) {
        console.log(error)
        return null
    }
}

export const getBreedsSize = async () => {
    let query = baseUrl + `/api/breed/size`

    try {
        const request = await axios.get(query)
        return request.data
    } catch (error) {
        console.log(error)
        return null
    }
}