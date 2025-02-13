import axios from "axios"

const baseUrl = import.meta.env.VITE_API_URL

export const getPrediction = async (userInput) => {
    let queryParams = new URLSearchParams(userInput).toString();
    let query = `${baseUrl}/api/predict?${queryParams}`;

    try {
        const request = await axios.get(query)
        return request.data
    } catch (error) {
        console.log(error)
        return null
    }
}