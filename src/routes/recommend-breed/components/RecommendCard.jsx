/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ContributeChart from "./ContributeChart";
import SimilarityChart from "./SimilarityChart";
import { Link } from "react-router-dom";
import { getUserPreferenceByInput, postUserPreference } from "../../../../services/user-preference";
import { useEffect, useState } from "react";
import { cn } from "../../../../lib/utils";

const allNoPreferences = (userInput) => {
    const helper = Object.values(userInput).filter(value => value === -1).length
    return helper === 6
}

const maxScore = (userInput) => {
    const helper = Object.values(userInput).filter(value => value === -1).length
    return (6 - helper) + 0.5 * helper
}

const RecommendCard = ({ breed, stats, userInput, isSignedIn, user }) => {
    const [fit, setFit] = useState("NEUTRAL")
    const max = maxScore(userInput)
    const helper = breed.prediction.score / max * 100

    useEffect(() => {
        const getFit = async () => {
            try {
                const res = await getUserPreferenceByInput(breed._id, user.id, userInput)

                if (res) {
                    setFit(res.fit)
                }
            } catch (error) {
                console.log(error)
                setFit("NEUTRAL")
            }
        }

        if (breed && user && userInput) {
            getFit()
        }
    }, [breed, user, userInput])

    const handleFit = async (newFit) => {
        try {
            if (fit === newFit) {
                const response = await postUserPreference(breed._id, user.id, "NEUTRAL", userInput)
                if (response) {
                    setFit(response.fit)
                }
            } else {
                const response = await postUserPreference(breed._id, user.id, newFit, userInput)
                if (response) {
                    setFit(response.fit)
                }
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div className={cn(
                "card shadow-xl transition hover:scale-105 relative",
                fit === "NEUTRAL" && "bg-base-300",
                fit === "GOOD" && "bg-success",
                fit === "BAD" && "bg-error"
            )} >
                {
                    fit === "GOOD" && (
                        <div className="text-base bg-success rounded-md absolute left-1/2 -translate-x-1/2 w-3/4 text-center">You voted this as a <span className="italic font-bold">Good Fit</span> before</div>
                    )
                }
                {
                    fit === "BAD" && (
                        <div className="text-base bg-error rounded-md absolute left-1/2 -translate-x-1/2 w-3/4 text-center">You voted this as a <span className="italic font-bold">Bad Fit</span> before</div>
                    )
                }
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
                    <div className="mx-auto my-2 flex flex-col justify-center items-center">
                        <h3 className="text-4xl font-bold">{helper.toFixed(0)}%</h3>
                        <p>Matching your preferences</p>
                    </div>
                    <div className="card-actions justify-end">
                        <button className="btn btn-accent shadow-md tooltip tooltip-secondary flex-1 text-white flex items-center" onClick={() => document.getElementById(`${breed.breed}`).showModal()}><FontAwesomeIcon icon="fa-solid fa-circle-info" className=" text-lg" />More Info</button>
                        {
                            isSignedIn
                                ? (
                                    <>
                                        <button onClick={() => { handleFit("BAD") }} className="btn btn-square btn-error border border-violet-200 shadow-md tooltip tooltip-secondary" data-tip="Bad Match"><FontAwesomeIcon icon="fa-solid fa-thumbs-down" className=" text-lg" /></button>
                                        <button onClick={() => { handleFit("GOOD") }} className="btn btn-square btn-success border border-violet-200 shadow-md tooltip tooltip-secondary" data-tip="Strong Match"><FontAwesomeIcon icon="fa-solid fa-thumbs-up" className=" text-lg" /></button>
                                    </>
                                )
                                : (
                                    <>
                                        <button className="btn btn-square btn-error btn-disabled border border-violet-200 shadow-md"><FontAwesomeIcon icon="fa-solid fa-thumbs-down" className=" text-lg" /></button>
                                        <button className="btn btn-square btn-success btn-disabled border border-violet-200 shadow-md"><FontAwesomeIcon icon="fa-solid fa-thumbs-up" className=" text-lg" /></button>
                                    </>
                                )
                        }

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
                        <div className="">
                            <h4 className="text-2xl font-medium text-center">This dog is a <span className="font-bold text-3xl text-accent">{helper.toFixed(0)}%</span> match to your preferences.</h4>
                        </div>
                        <div className="divider px-10 divider-primary"></div>
                        {
                            !allNoPreferences(userInput) && (
                                <div>
                                    <h5 className="text-lg font-bold text-center mt-6">Results based on</h5>
                                    <p className=" italic mb-6 text-center">How each aspect contributes to the prediction.</p>
                                    <div className="grid grid-cols-6 gap-x-4">
                                        <div className="flex flex-col justify-center items-center">
                                            <p className="uppercase font-bold text-accent mb-1"><FontAwesomeIcon icon="fa-solid fa-weight-scale" /> Dog size</p>
                                            {
                                                userInput.size === -1
                                                    ?
                                                    (<div className="radial-progress text-accent bg-victoria-100" style={{ "--value": 0 }} role="progressbar">0.00%</div>)
                                                    :
                                                    (<div className="radial-progress text-accent bg-victoria-100" style={{ "--value": (breed.prediction.contributions.size / breed.prediction.score * 100) }} role="progressbar">{(breed.prediction.contributions.size / breed.prediction.score * 100).toFixed(2)}%</div>)
                                            }
                                        </div>

                                        <div className="flex flex-col justify-center items-center">
                                            <p className="uppercase font-bold text-accent mb-1">
                                                <FontAwesomeIcon icon="fa-solid fa-chart-line" /> Popularity
                                            </p>
                                            {userInput.popularity_ranking === -1 ? (
                                                <div className="radial-progress text-accent bg-victoria-100" style={{ "--value": 0 }} role="progressbar">0.00%</div>
                                            ) : (
                                                <div className="radial-progress text-accent bg-victoria-100" style={{ "--value": (breed.prediction.contributions.popularity_ranking / breed.prediction.score * 100) }} role="progressbar">
                                                    {(breed.prediction.contributions.popularity_ranking / breed.prediction.score * 100).toFixed(2)}%
                                                </div>
                                            )}
                                        </div>

                                        <div className="flex flex-col justify-center items-center">
                                            <p className="uppercase font-bold text-accent mb-1">
                                                <FontAwesomeIcon icon="fa-solid fa-dollar-sign" /> Lifetime Cost
                                            </p>
                                            {userInput.lifetime_cost === -1 ? (
                                                <div className="radial-progress text-accent bg-victoria-100" style={{ "--value": 0 }} role="progressbar">0.00%</div>
                                            ) : (
                                                <div className="radial-progress text-accent bg-victoria-100" style={{ "--value": (breed.prediction.contributions.lifetime_cost / breed.prediction.score * 100) }} role="progressbar">
                                                    {(breed.prediction.contributions.lifetime_cost / breed.prediction.score * 100).toFixed(2)}%
                                                </div>
                                            )}
                                        </div>

                                        <div className="flex flex-col justify-center items-center">
                                            <p className="uppercase font-bold text-accent mb-1">
                                                <FontAwesomeIcon icon="fa-solid fa-brain" /> Intelligence
                                            </p>
                                            {userInput.intelligence === -1 ? (
                                                <div className="radial-progress text-accent bg-victoria-100" style={{ "--value": 0 }} role="progressbar">0.00%</div>
                                            ) : (
                                                <div className="radial-progress text-accent bg-victoria-100" style={{ "--value": (breed.prediction.contributions.intelligence / breed.prediction.score * 100) }} role="progressbar">
                                                    {(breed.prediction.contributions.intelligence / breed.prediction.score * 100).toFixed(2)}%
                                                </div>
                                            )}
                                        </div>

                                        <div className="flex flex-col justify-center items-center">
                                            <p className="uppercase font-bold text-accent mb-1">
                                                <FontAwesomeIcon icon="fa-solid fa-scissors" /> Grooming
                                            </p>
                                            {userInput.grooming_frequency === -1 ? (
                                                <div className="radial-progress text-accent bg-victoria-100" style={{ "--value": 0 }} role="progressbar">0.00%</div>
                                            ) : (
                                                <div className="radial-progress text-accent bg-victoria-100" style={{ "--value": (breed.prediction.contributions.grooming_frequency / breed.prediction.score * 100) }} role="progressbar">
                                                    {(breed.prediction.contributions.grooming_frequency / breed.prediction.score * 100).toFixed(2)}%
                                                </div>
                                            )}
                                        </div>

                                        <div className="flex flex-col justify-center items-center">
                                            <p className="uppercase font-bold text-accent mb-1">
                                                <FontAwesomeIcon icon="fa-solid fa-child" /> Kids Score
                                            </p>
                                            {userInput.suitability_for_children === -1 ? (
                                                <div className="radial-progress text-accent bg-victoria-100" style={{ "--value": 0 }} role="progressbar">0.00%</div>
                                            ) : (
                                                <div className="radial-progress text-accent bg-victoria-100" style={{ "--value": (breed.prediction.contributions.suitability_for_children / breed.prediction.score * 100) }} role="progressbar">
                                                    {(breed.prediction.contributions.suitability_for_children / breed.prediction.score * 100).toFixed(2)}%
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="divider px-10 divider-primary"></div>
                                </div>
                            )
                        }
                        {
                            !allNoPreferences(userInput) && (
                                <div className="mt-4 w-[720px] mx-auto">
                                    <ContributeChart
                                        prediction={breed.prediction}
                                        userInput={userInput}
                                    />
                                </div>
                            )
                        }
                        {
                            !allNoPreferences(userInput) && (
                                <div className="divider px-10 divider-primary"></div>
                            )
                        }
                        {
                            !allNoPreferences(userInput) && (
                                <div className="mt-4 w-[720px] mx-auto">
                                    <SimilarityChart
                                        breed={breed}
                                        stats={stats}
                                        userInput={userInput}
                                    />
                                </div>
                            )
                        }
                        {
                            !allNoPreferences(userInput) && (
                                <div className="divider px-10 divider-primary"></div>
                            )
                        }
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
                        <div className="divider px-10 divider-primary"></div>
                        {
                            isSignedIn
                                ?
                                (
                                    <div className="flex flex-col items-center">
                                        <p className=" italic mb-2">You can rate this recommendation.</p>
                                        <div>
                                            <button onClick={() => { handleFit("BAD") }} className="btn btn-wide btn-error border border-violet-200 shadow-md mx-2 tooltip tooltip-secondary" data-tip="Bad Match"><FontAwesomeIcon icon="fa-solid fa-thumbs-down" className=" text-lg" /></button>
                                            <button onClick={() => { handleFit("GOOD") }} className="btn btn-wide btn-success border border-violet-200 shadow-md tooltip tooltip-secondary" data-tip="Good Match"><FontAwesomeIcon icon="fa-solid fa-thumbs-up" className=" text-lg" /></button>
                                        </div>
                                    </div>
                                )
                                :
                                (
                                    <div className="flex flex-col items-center">
                                        <p className=" italic mb-2">You can <span className="text-lg font-bold uppercase">login</span> to rate this recommendation.</p>
                                        <div>
                                            <Link to="/sign-in" className="btn btn-wide btn-success shadow-md"><FontAwesomeIcon icon="fa-solid fa-right-to-bracket" />Login</Link>
                                            <button className="btn btn-wide btn-error btn-disabled border border-violet-200 shadow-md mx-2"><FontAwesomeIcon icon="fa-solid fa-thumbs-down" className=" text-lg" /></button>
                                            <button className="btn btn-wide btn-success btn-disabled border border-violet-200 shadow-md"><FontAwesomeIcon icon="fa-solid fa-thumbs-up" className=" text-lg" /></button>
                                        </div>
                                    </div>
                                )
                        }
                    </div>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </>
    );
}

export default RecommendCard;