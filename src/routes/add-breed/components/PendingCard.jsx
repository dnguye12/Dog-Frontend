import { useEffect, useState } from "react";
import { getPending } from "../../../../services/pending";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/* eslint-disable react/prop-types */
const PendingCard = ({ breed, handleChoice }) => {
    const [dog, setDog] = useState(breed)
    useEffect(() => {
        const fetchImage = async () => {
            try {
                const res = getPending(breed.id)
                setDog(res)
            } catch (error) {
                console.log(error)
            }
        }

        if (!breed.image) {
            fetchImage()
        }
    }, [breed])


    return (
        <div className="p-4 rounded-2xl shadow-xl bg-base-300 border border-victoria-200">
            <div className="flex justify-between items-center mb-4">
                <h3 className="card-title text-2xl">{dog.breed}</h3>
                <div>
                    <button onClick={() => { handleChoice(0) }} className="btn shadow-md"><FontAwesomeIcon icon="fa-solid fa-minus" />I Don&apos;t Know</button>
                    <button onClick={() => { handleChoice(-1) }} className="btn btn-error shadow-md mx-2"><FontAwesomeIcon icon="fa-regular fa-thumbs-down" />Disapprove</button>
                    <button onClick={() => { handleChoice(1) }} className="btn btn-success shadow-md"><FontAwesomeIcon icon="fa-regular fa-thumbs-up" />Approve</button>
                </div>
            </div>
            <div className="flex gap-x-4">
                <div className="overflow-hidden aspect-square w-52">
                    <img
                        src={dog.image}
                        alt={dog.breed}
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="overflow-x-auto flex-1">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead className="bg-primary bg-opacity-35 text-neutral text-sm">
                            <tr>
                                <th></th>
                                <th>Features</th>
                                <th>Descriptions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="hover">
                                <th>1</th>
                                <td>Breed Name</td>
                                <td>{breed.breed}</td>
                            </tr>
                            <tr className="hover">
                                <th>2</th>
                                <td>Breed Type</td>
                                <td>{breed.type.charAt(0).toUpperCase() + breed.type.slice(1)}</td>
                            </tr>
                            <tr className="hover">
                                <th>3</th>
                                <td>Size</td>
                                <td>{breed.size === 3 ? "Large" : breed.size === 2 ? "Medium" : "Small"}</td>
                            </tr>
                            <tr className="hover">
                                <th>4</th>
                                <td>Average Life Span</td>
                                <td>{breed.longevity} years</td>
                            </tr>
                            <tr className="hover">
                                <th>5</th>
                                <td>Intelligence</td>
                                <td>{breed.intelligence >= 98 ? "Brightest" :
                                    breed.intelligence >= 88 ? "Excellent" :
                                        breed.intelligence >= 70 ? "Above Average" :
                                            breed.intelligence >= 45 ? "Average" :
                                                breed.intelligence >= 20 ? "Fair" :
                                                    "Derpy"}</td>
                            </tr>
                            <tr className="hover">
                                <th>6</th>
                                <td>Lifetime Cost</td>
                                <td>${breed.lifetime_cost.toLocaleString()}</td>
                            </tr>
                            <tr className="hover">
                                <th>7</th>
                                <td>Suitability For Children</td>
                                <td>{breed.suitability_for_children === 1 ? "Good" :
                                    breed.suitability_for_children === 2 ? "Average" :
                                        "Bad"}</td>
                            </tr>
                            <tr className="hover">
                                <th>8</th>
                                <td>Grooming Frequency</td>
                                <td>{breed.grooming_frequency}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default PendingCard;