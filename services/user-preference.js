import axios from "axios"

const baseUrl = import.meta.env.VITE_API_URL

export const postUserPreference = async (breedId, userId, fit, userInput) => {
    let query = `${baseUrl}/api/user-preference`;

    try {
        const request = await axios.post(query, {
            breedId,
            userId,
            fit,
            popularity_ranking: userInput.popularity_ranking,
            size: userInput.size,
            lifetime_cost: userInput.lifetime_cost,
            intelligence: userInput.intelligence,
            grooming_frequency: userInput.grooming_frequency,
            suitability_for_children: userInput.suitability_for_children,
        })
        return request.data
    } catch (error) {
        console.log(error)
        return null
    }
}

export const getUserPreferenceByInput = async(breedId, userId, userInput) => {
    let query = `${baseUrl}/api/user-preference/by-input`;

    try {
        const request = await axios.patch(query, {
            breedId,
            userId,
            popularity_ranking: userInput.popularity_ranking,
            size: userInput.size,
            lifetime_cost: userInput.lifetime_cost,
            intelligence: userInput.intelligence,
            grooming_frequency: userInput.grooming_frequency,
            suitability_for_children: userInput.suitability_for_children,
        })
        return request.data
    } catch (error) {
        console.log(error)
        return null
    }
}