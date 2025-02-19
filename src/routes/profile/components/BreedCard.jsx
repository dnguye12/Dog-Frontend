import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/* eslint-disable react/prop-types */
const BreedCard = ({ breed }) => {
    return (
        <>
            <div className="card shadow-xl transition hover:scale-105 relative bg-base-100">
                <figure className="w-full overflow-hidden aspect-video">
                    <img
                        src={breed.image}
                        alt={breed.breed}
                        className=" w-80 h-auto object-cover"
                    />
                </figure>
                <div className="card-body p-4">
                    <h2 className="card-title">
                        {breed.breed}
                        <div className="badge badge-secondary ml-auto shadow-md">{breed.type.charAt(0).toUpperCase() + breed.type.slice(1)}</div>
                    </h2>
                    <div className="card-actions justify-end">
                        <button
                            className="btn btn-accent shadow-md tooltip tooltip-secondary flex-1 text-white flex items-center"
                            onClick={() => document.getElementById(`${breed.breed}`).showModal()}
                        >
                            <FontAwesomeIcon icon="fa-solid fa-circle-info" className=" text-lg" />
                            More Info
                        </button>
                    </div>
                </div>
            </div>
            <dialog id={breed.breed} className="modal">
                <div className="modal-box max-w-5xl shadow-xl overflow-auto border border-victoria-200">
                    <h3 className="font-bold text-4xl text-center">{breed.breed}</h3>
                    <div className="relative">
                        <img src={breed.image}
                            alt={breed.breed}
                            className=" w-full h-auto object-cover shadow-xl rounded-2xl my-6"
                        />
                        <div>
                            <h5 className="text-lg font-bold text-center mt-6">Dog breed information</h5>
                            <div className="overflow-x-auto px-10">
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
                                        <tr className="hover">
                                            <th>9</th>
                                            <td>Potential Health Issues</td>
                                            <td>{breed.genetic_ailments}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </>
    );
}

export default BreedCard;