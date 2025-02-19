import axios from "axios"

const baseUrl = import.meta.env.VITE_API_URL

export const getPending = async (id) => {
    let query = `${baseUrl}/api/pending?id=${id}`;

    try {
        const request = await axios.get(query)
        return request.data
    } catch (error) {
        console.log(error)
        return null
    }
}

export const postPending = async (breed, type, popularity_ranking, size, lifetime_cost, intelligence, longevity, grooming_frequency, suitability_for_children, user) => {
    let query = `${baseUrl}/api/pending`

    try {
        const request = await axios.post(query, {
            breed,
            type,
            popularity_ranking,
            size,
            lifetime_cost,
            intelligence,
            longevity,
            grooming_frequency,
            suitability_for_children,
            user
        })
        return request.data
    } catch (error) {
        console.log(error)
        return null
    }
}

export const getPendingGroup = async (userId) => {
    let query = `${baseUrl}/api/pending/group?userId=${userId}`

    try {
        const request = await axios.get(query)
        return request.data
    } catch (error) {
        console.log(error)
        return null
    }
}

export const patchApprove = async (userId, pId, approve) => {
    let query = `${baseUrl}/api/pending/approve`

    try {
        const request = await axios.patch(query, {
            userId,
            pId,
            approve
        })
        return request.data
    } catch (error) {
        console.log(error)
        return null
    }
}