/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import { cn } from "../../../../lib/utils";
import { getSimilarName, getStats } from "../../../../services/breed";
import SimilarCard from "./SimilarCard";
import { postPending } from "../../../../services/pending";

const AddBreedForm = ({ setMode, user }) => {
    const [stats, setStats] = useState(null)
    const [breed, setBreed] = useState({
        breed: "",
        type: "",
        popularity_ranking: 1,
        size: 1,
        lifetime_cost: -1,
        intelligence: 5,
        longevity: -1,
        grooming_frequency: "Once in a few weeks",
        suitability_for_children: 3
    })
    const [name, setName] = useState("")
    const [similar, setSimilar] = useState([])

    useEffect(() => {
        const initStats = async () => {
            try {
                const res = await getStats()
                setStats(res)
            } catch (error) {
                console.error("Error fetching stats:", error);
            }
        }

        if (stats === null) {
            initStats()
        }
    }, [stats])

    const handleGoBack = () => {
        setBreed({
            breed: "",
            type: "",
            popularity_ranking: 1,
            size: 1,
            lifetime_cost: -1,
            intelligence: 5,
            longevity: -1,
            grooming_frequency: "Once in a few weeks",
            suitability_for_children: 3
        })
        setName("")
        setSimilar([])
        setMode("none")
    }

    const handleSubmitName = () => {
        const fetchSimilar = async () => {
            try {
                const res = await getSimilarName(name)
                if (res.length === 0) {
                    setBreed({ ...breed, breed: name })
                    setName("")
                } else {
                    setSimilar(res)
                }
            } catch (error) {
                console.log(error)
            }
        }

        fetchSimilar()
    }

    const handlePickSimilar = () => {
        setBreed({
            breed: "",
            type: "",
            popularity_ranking: 1,
            size: 1,
            lifetime_cost: -1,
            intelligence: 5,
            longevity: -1,
            grooming_frequency: "Once in a few weeks",
            suitability_for_children: 3
        })
        setName("")
        setSimilar([])
        setMode("none")
    }

    const startOver = () => {
        setBreed({
            breed: "",
            type: "",
            popularity_ranking: 1,
            size: 1,
            lifetime_cost: -1,
            intelligence: 5,
            longevity: -1,
            grooming_frequency: "Once in a few weeks",
            suitability_for_children: 3
        })
        setName("")
        setSimilar([])
    }

    const continueAdding = () => {
        setSimilar([])
        setBreed({
            ...breed,
            breed: name
        })
    }

    const filledForm = () => {
        console.log(breed)
        if (
            breed.type === "" ||
            breed.lifetime_cost === -1 ||
            breed.intelligence === -1 ||
            breed.longevity === -1 ||
            breed.grooming_frequency === "" ||
            breed.suitability_for_children === -1
        ) {
            return false
        }
        return true
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const res = await postPending(
                breed.breed,
                breed.type,
                breed.popularity_ranking,
                breed.size,
                breed.lifetime_cost,
                breed.intelligence,
                breed.longevity,
                breed.grooming_frequency,
                breed.suitability_for_children,
                user.id
            )

            if (res) {
                setBreed({
                    breed: "",
                    type: "",
                    popularity_ranking: 1,
                    size: 1,
                    lifetime_cost: -1,
                    intelligence: 5,
                    longevity: -1,
                    grooming_frequency: "Once in a few weeks",
                    suitability_for_children: 3
                })
                setName("")
                setSimilar([])
                setMode("thank")
            }
        } catch (error) {
            console.log(error)
        }
    }

    if (!stats) {
        return (
            <div className="h-96 w-full max-w-3xl mx-auto bg-base-300 flex justify-center items-center shadow-md rounded-lg border border-neutral-200">
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        )
    }

    return (
        <>
            {
                breed.breed === "" && similar.length === 0
                &&
                (
                    <div className="container px-10 xl:px-0 max-w-6xl mx-auto w-full">
                        <div className="label justify-center flex-col">
                            <h2 className="text-3xl font-bold text-accent text-center">What is the name of the breed you are adding?</h2>
                            <p className=" italic mt-1">Google Form goess zzzzzzz</p>
                        </div>
                        <div className="flex justify-center items-end mt-8">
                            <label className="form-control w-full max-w-sm">
                                <div className="label">
                                    <span className="label-text">Breed Name :</span>
                                </div>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Type here"
                                    className="input input-bordered w-full max-w-sm h-14 shadow-md"
                                />
                            </label>
                        </div>
                        <div className="flex justify-between items-center w-full max-w-sm mx-auto mt-4">
                            <button
                                onClick={() => { handleGoBack() }}
                                className="btn btn-error shadow-md"><FontAwesomeIcon icon="fa-solid fa-caret-left" />Go Back</button>
                            <button
                                onClick={() => { handleSubmitName() }}
                                className={cn(
                                    "btn btn-accent shadow-md",
                                    name === "" && "btn-disabled"
                                )}>Enter <FontAwesomeIcon icon="fa-solid fa-caret-right" /></button>
                        </div>
                    </div>
                )
            }
            {
                breed.breed !== "" && similar.length === 0 &&
                (
                    <div className="container px-10 xl:px-0 max-w-6xl mx-auto w-full">
                        <div className="label justify-center flex-col">
                            <h2 className="text-3xl font-bold text-accent text-center">Fill in the other information</h2>
                            <p className=" italic mt-1">Google Form Simulator 2025</p>
                        </div>
                        <form onSubmit={handleSubmit} className="bg-base-300 rounded max-w-3xl mx-auto w-full border border-victoria-200 shadow-md flex justify-center py-6">
                            <div>
                                <label className="form-control mb-4">
                                    <div className="label">
                                        <span className="label-text">1. What is the type? (herding, non sporting, terrier,...)</span>
                                    </div>
                                    <input type="text" placeholder="Type here"
                                        value={breed.type}
                                        onChange={(e) => { setBreed({ ...breed, type: e.target.value }) }}
                                        className="input input-bordered w-full max-w-xs"
                                    />
                                </label>

                                <label className="form-control mb-4">
                                    <div className="label">
                                        <span className="label-text">2. How common is this breed?</span>
                                    </div>
                                    <select value={breed.popularity_ranking} onChange={(e) => { setBreed({ ...breed, popularity_ranking: parseInt(e.target.value) }) }} className="select select-bordered max-w-xs">
                                        <option disabled selected>Pick one</option>
                                        <option value={stats.highest_popularity}>Exotic</option>
                                        <option value={stats.highest_popularity / 3 * 2}>Uncommon</option>
                                        <option value={stats.highest_popularity / 3}>Common</option>
                                        <option value={1}>Very Common</option>
                                    </select>
                                </label>

                                <label className="form-control mb-4">
                                    <div className="label">
                                        <span className="label-text">3. Breed size?</span>
                                    </div>
                                    <select value={breed.size} onChange={(e) => { setBreed({ ...breed, size: parseInt(e.target.value) }) }} className="select select-bordered max-w-xs">
                                        <option disabled selected>Pick one</option>
                                        <option value={1}>Small</option>
                                        <option value={2}>Medium</option>
                                        <option value={3}>Large</option>
                                    </select>
                                </label>

                                <label className="form-control mb-4">
                                    <div className="label">
                                        <span className="label-text">5. What is the life time cost?</span>
                                    </div>
                                    <input type="number" placeholder="Type here"
                                        value={breed.lifetime_cost}
                                        onChange={(e) => { setBreed({ ...breed, lifetime_cost: e.target.value }) }}
                                        className="input input-bordered w-full max-w-xs"
                                    />
                                </label>

                                <label className="form-control mb-4">
                                    <div className="label">
                                        <span className="label-text">6. Intelligence?</span>
                                    </div>
                                    <select value={breed.intelligence} onChange={(e) => { setBreed({ ...breed, intelligence: parseInt(e.target.value) }) }} className="select select-bordered max-w-xs">
                                        <option disabled selected>Pick one</option>
                                        <option value={5}>Derpy</option>
                                        <option value={20}>Fair</option>
                                        <option value={45}>Average</option>
                                        <option value={70}>Above average</option>
                                        <option value={88}>Excellent</option>
                                        <option value={98}>Brightest</option>
                                    </select>
                                </label>

                                <label className="form-control mb-4">
                                    <div className="label">
                                        <span className="label-text">7. What is the average lifespan?</span>
                                    </div>
                                    <input type="number" placeholder="Type here"
                                        value={breed.longevity}
                                        onChange={(e) => { setBreed({ ...breed, longevity: e.target.value }) }}
                                        className="input input-bordered w-full max-w-xs"
                                    />
                                </label>

                                <label className="form-control mb-4">
                                    <div className="label">
                                        <span className="label-text">8. Grooming frequency?</span>
                                    </div>
                                    <select value={breed.grooming_frequency} onChange={(e) => { setBreed({ ...breed, grooming_frequency: e.target.value }) }} className="select select-bordered max-w-xs">
                                        <option disabled selected>Pick one</option>
                                        <option value={"Once in a few weeks"}>Once in a few weeks</option>
                                        <option value={"Once a weeks"}>Once a week</option>
                                        <option value={"Daily"}>Daily</option>
                                    </select>
                                </label>

                                <label className="form-control mb-4">
                                    <div className="label">
                                        <span className="label-text">9. Suitability for children?</span>
                                    </div>
                                    <select value={breed.suitability_for_children} onChange={(e) => { setBreed({ ...breed, suitability_for_children: parseInt(e.target.value) }) }} className="select select-bordered max-w-xs">
                                        <option disabled selected>Pick one</option>
                                        <option value={3}>Bad</option>
                                        <option value={2}>Decent</option>
                                        <option value={1}>Good</option>
                                    </select>
                                </label>
                                <button type="submit" className={cn(
                                    "btn w-full max-w-xs btn-accent mt-4 shadow-md",
                                    !filledForm() && "btn-disabled"
                                )}>Submit</button>
                            </div>
                        </form>
                    </div>
                )
            }
            {
                similar.length > 0 && (
                    <div className="container px-10 xl:px-0 max-w-6xl mx-auto w-full">
                        <div className="label justify-center flex-col">
                            <h2 className="text-3xl font-bold text-accent text-center"><span className="text-neutral">&quot;{name.charAt(0).toUpperCase() + name.slice(1)}&quot;</span> might be similar to one of the breeds <br />already in our database :</h2>
                            <p className=" italic mt-1"></p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
                            {
                                similar.map((b, i) => (
                                    <SimilarCard
                                        key={`similar-card-${i}`}
                                        breed={b}
                                        handlePickSimilar={handlePickSimilar}
                                    />
                                ))
                            }
                        </div>
                        <div className="flex justify-center items-center">
                            <button onClick={startOver} className="btn btn-wide btn-error shadow-md mr-2"><FontAwesomeIcon icon="fa-solid fa-rotate" />Start Over</button>
                            <button onClick={continueAdding} className="btn btn-accent btn-wide shadow-md">Continue adding &quot;{name.charAt(0).toUpperCase() + name.slice(1)}&quot; <FontAwesomeIcon icon="fa-solid fa-caret-right" /></button>
                        </div>
                    </div>
                )
            }
        </>
    );
}

export default AddBreedForm;