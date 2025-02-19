import { useEffect, useState } from "react";
import { getBreed } from "../../../../services/breed";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/* eslint-disable react/prop-types */
const SimilarCard = ({ breed, handlePickSimilar }) => {
    const [dog, setDog] = useState(breed)

    useEffect(() => {
        const fetchBreed = async () => {
            const res = await getBreed(dog.id)
            if (res) {
                setDog(res)
            }
        }

        if (!dog.image) {
            fetchBreed()
        }
    }, [dog])

    if (!dog || !dog.image) {
        return (
            <div className="skeleton rounded-2xl flex justify-center items-center">
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        )
    }

    return (
        <div className="card shadow-xl bg-base-300">
            <figure className="w-full overflow-hidden aspect-video">
                <img
                    src={breed.image}
                    alt={breed.breed}
                    className=" w-full h-full object-cover"
                />
            </figure>
            <div className="card-body p-4">
                <h2 className="card-title">
                    {breed.breed}
                    <div className="badge badge-secondary ml-auto shadow-md">{breed.type.charAt(0).toUpperCase() + breed.type.slice(1)}</div>
                </h2>
                <button onClick={handlePickSimilar} className="btn btn-primary w-full shadow-md"><FontAwesomeIcon icon="fa-regular fa-thumbs-up" /> This is the dog I&apos;m adding</button>
            </div>
        </div>
    );
}

export default SimilarCard;