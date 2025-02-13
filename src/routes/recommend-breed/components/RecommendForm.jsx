/* eslint-disable react/prop-types */
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { cn } from "../../../../lib/utils";

const RecommendForm = ({ handleSubmit, stats, userInput, setUserInput, startOver }) => {
    const [question, setQuestion] = useState(1)

    if (!stats || !userInput) {
        return (
            <div className="h-96 max-w-3xl mx-auto bg-base-300 flex justify-center items-center shadow-md rounded-lg border border-neutral-200">
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        )
    }

    return (
        <form onSubmit={handleSubmit}>
            {
                question === 1 && (
                    <label className="form-control w-full">
                        <div className="label justify-center"><span className="label-text text-3xl font-bold text-accent">How big or small will your new dog be?</span></div>
                        <div className="flex items-start flex-wrap justify-center gap-x-8 my-8">
                            <div className="flex flex-col justify-center">
                                <button
                                    type="button"
                                    onClick={() => setUserInput({ ...userInput, size: 1 })}
                                    className={cn(
                                        "border-2 border-neutral rounded-full mb-1 transition",
                                        userInput.size === 1 && " border-accent "
                                    )}>
                                    <div className=" w-32 h-32 flex flex-col justify-center items-center">
                                        <FontAwesomeIcon icon="fa-solid fa-dog" className={cn(
                                            "text-2xl mb-1",
                                            userInput.size === 1 && "text-accent"
                                        )} />
                                        <span className={cn(
                                            "text-sm",
                                            userInput.size === 1 && "text-accent"
                                        )}>Small Size</span>
                                    </div>
                                </button>
                                <p className={cn(
                                    "text-center mt-2 font-bold uppercase",
                                    userInput.size === 1 && "text-accent"
                                )}  >Small Size</p>
                            </div>

                            <div className="flex flex-col justify-center">
                                <button
                                    type="button"
                                    onClick={() => setUserInput({ ...userInput, size: 2 })}
                                    className={cn(
                                        "border-2 border-neutral rounded-full mb-1 transition",
                                        userInput.size === 2 && " border-accent "
                                    )}>
                                    <div className=" w-32 h-32 flex flex-col justify-center items-center">
                                        <FontAwesomeIcon icon="fa-solid fa-dog" className={cn(
                                            "text-3xl mb-1",
                                            userInput.size === 2 && "text-accent"
                                        )} />
                                        <span className={cn(
                                            "text-sm",
                                            userInput.size === 2 && "text-accent"
                                        )}>Medium Size</span>
                                    </div>
                                </button>
                                <p className={cn(
                                    "text-center mt-2 font-bold uppercase",
                                    userInput.size === 2 && "text-accent"
                                )}  >Medium Size</p>
                            </div>

                            <div className="flex flex-col justify-center">
                                <button
                                    type="button"
                                    onClick={() => setUserInput({ ...userInput, size: 3 })}
                                    className={cn(
                                        "border-2 border-neutral rounded-full mb-1 transition",
                                        userInput.size === 3 && " border-accent "
                                    )}>
                                    <div className=" w-32 h-32 flex flex-col justify-center items-center">
                                        <FontAwesomeIcon icon="fa-solid fa-dog" className={cn(
                                            "text-4xl mb-1",
                                            userInput.size === 3 && "text-accent"
                                        )} />
                                        <span className={cn(
                                            "text-sm",
                                            userInput.size === 3 && "text-accent"
                                        )}>Large Size</span>
                                    </div>
                                </button>
                                <p className={cn(
                                    "text-center mt-2 font-bold uppercase",
                                    userInput.size === 3 && "text-accent"
                                )}  >Large Size</p>
                            </div>

                            <div className="flex flex-col justify-center">
                                <button
                                    type="button"
                                    onClick={() => setUserInput({ ...userInput, size: -1 })}
                                    className={cn(
                                        "border-2 border-neutral rounded-full mb-1 transition",
                                        userInput.size === -1 && " border-accent "
                                    )}>
                                    <div className=" w-32 h-32 flex flex-col justify-center items-center">
                                        <FontAwesomeIcon icon="fa-regular fa-circle-question" className={cn(
                                            "text-3xl mb-1",
                                            userInput.size === -1 && "text-accent"
                                        )} />
                                        <span className={cn(
                                            "text-sm",
                                            userInput.size === -1 && "text-accent"
                                        )}>No Preference</span>
                                    </div>
                                </button>
                                <p className={cn(
                                    "text-center mt-2 font-bold uppercase",
                                    userInput.size === -1 && "text-accent"
                                )}  >No Idea</p>
                            </div>
                        </div>

                    </label>
                )
            }
            {
                question === 2 && (
                    <label className="form-control w-full">
                        <div className="label justify-center flex-col">
                            <span className="label-text text-3xl font-bold text-accent">How exotic will your new dog be?</span>
                            <p className=" italic mt-1">Common dog breeds might be easier to find and cheaper.</p>
                        </div>
                        <div className="flex items-start flex-wrap justify-center gap-x-8 my-8">
                            <div className="flex flex-col justify-center">
                                <button
                                    type="button"
                                    onClick={() => setUserInput({ ...userInput, popularity_ranking: stats.lowest_popularity })}
                                    className={cn(
                                        "border-2 border-neutral rounded-full mb-1 transition",
                                        userInput.popularity_ranking === 1 && " border-accent "
                                    )}>
                                    <div className=" w-32 h-32 flex flex-col justify-center items-center">
                                        <FontAwesomeIcon icon="fa-solid fa-users" className={cn(
                                            "text-3xl mb-1",
                                            userInput.popularity_ranking === 1 && "text-accent"
                                        )} />
                                        <span className={cn(
                                            "text-sm",
                                            userInput.popularity_ranking === 1 && "text-accent"
                                        )}>Very common</span>
                                    </div>
                                </button>
                                <p className={cn(
                                    "text-center mt-2 font-bold uppercase",
                                    userInput.popularity_ranking === 1 && "text-accent"
                                )}  >Very common</p>
                            </div>

                            <div className="flex flex-col justify-center">
                                <button
                                    type="button"
                                    onClick={() => setUserInput({ ...userInput, popularity_ranking: ((stats.highest_popularity - stats.lowest_popularity) / 3) })}
                                    className={cn(
                                        "border-2 border-neutral rounded-full mb-1 transition",
                                        userInput.popularity_ranking === ((stats.highest_popularity - stats.lowest_popularity) / 3) && " border-accent "
                                    )}>
                                    <div className=" w-32 h-32 flex flex-col justify-center items-center">
                                        <FontAwesomeIcon icon="fa-solid fa-user-group" className={cn(
                                            "text-3xl mb-1",
                                            userInput.popularity_ranking === ((stats.highest_popularity - stats.lowest_popularity) / 3) && "text-accent"
                                        )} />
                                        <span className={cn(
                                            "text-sm",
                                            userInput.popularity_ranking === ((stats.highest_popularity - stats.lowest_popularity) / 3) && "text-accent"
                                        )}>Common</span>
                                    </div>
                                </button>
                                <p className={cn(
                                    "text-center mt-2 font-bold uppercase",
                                    userInput.popularity_ranking === ((stats.highest_popularity - stats.lowest_popularity) / 3) && "text-accent"
                                )}  >Common</p>
                            </div>

                            <div className="flex flex-col justify-center">
                                <button
                                    type="button"
                                    onClick={() => setUserInput({ ...userInput, popularity_ranking: ((stats.highest_popularity - stats.lowest_popularity) / 3) * 2 })}
                                    className={cn(
                                        "border-2 border-neutral rounded-full mb-1 transition",
                                        userInput.popularity_ranking === ((stats.highest_popularity - stats.lowest_popularity) / 3) * 2 && " border-accent "
                                    )}>
                                    <div className=" w-32 h-32 flex flex-col justify-center items-center">
                                        <FontAwesomeIcon icon="fa-solid fa-user" className={cn(
                                            "text-3xl mb-1",
                                            userInput.popularity_ranking === ((stats.highest_popularity - stats.lowest_popularity) / 3) * 2 && "text-accent"
                                        )} />
                                        <span className={cn(
                                            "text-sm",
                                            userInput.popularity_ranking === ((stats.highest_popularity - stats.lowest_popularity) / 3) * 2 && "text-accent"
                                        )}>Uncommon</span>
                                    </div>
                                </button>
                                <p className={cn(
                                    "text-center mt-2 font-bold uppercase",
                                    userInput.popularity_ranking === ((stats.highest_popularity - stats.lowest_popularity) / 3) * 2 && "text-accent"
                                )}  >Uncommon</p>
                            </div>

                            <div className="flex flex-col justify-center">
                                <button
                                    type="button"
                                    onClick={() => setUserInput({ ...userInput, popularity_ranking: stats.highest_popularity })}
                                    className={cn(
                                        "border-2 border-neutral rounded-full mb-1 transition",
                                        userInput.popularity_ranking === stats.highest_popularity && " border-accent "
                                    )}>
                                    <div className=" w-32 h-32 flex flex-col justify-center items-center">
                                        <FontAwesomeIcon icon="fa-solid fa-user-slash" className={cn(
                                            "text-3xl mb-1",
                                            userInput.popularity_ranking === stats.highest_popularity && "text-accent"
                                        )} />
                                        <span className={cn(
                                            "text-sm",
                                            userInput.popularity_ranking === stats.highest_popularity && "text-accent"
                                        )}>This breed exists?</span>
                                    </div>
                                </button>
                                <p className={cn(
                                    "text-center mt-2 font-bold uppercase",
                                    userInput.popularity_ranking === stats.highest_popularity && "text-accent"
                                )}  >Very exotic</p>
                            </div>

                            <div className="flex flex-col justify-center">
                                <button
                                    type="button"
                                    onClick={() => setUserInput({ ...userInput, popularity_ranking: -1 })}
                                    className={cn(
                                        "border-2 border-neutral rounded-full mb-1 transition",
                                        userInput.popularity_ranking === -1 && " border-accent "
                                    )}>
                                    <div className=" w-32 h-32 flex flex-col justify-center items-center">
                                        <FontAwesomeIcon icon="fa-regular fa-circle-question" className={cn(
                                            "text-3xl mb-1",
                                            userInput.popularity_ranking === -1 && "text-accent"
                                        )} />
                                        <span className={cn(
                                            "text-sm",
                                            userInput.popularity_ranking === -1 && "text-accent"
                                        )}>No Preference</span>
                                    </div>
                                </button>
                                <p className={cn(
                                    "text-center mt-2 font-bold uppercase",
                                    userInput.popularity_ranking === -1 && "text-accent"
                                )}  >No Idea</p>
                            </div>
                        </div>

                    </label>
                )
            }
            {
                question === 3 && (
                    <label className="form-control w-full">
                        <div className="label justify-center flex-col">
                            <span className="label-text text-3xl font-bold text-accent">How smart do you want your new dog to be?</span>
                            <p className=" italic mt-1">Derpier dogs are usually more active and have more humor rizz.</p>
                        </div>
                        <div className="flex items-start flex-wrap justify-center gap-x-8 my-8">
                            <div className="flex flex-col justify-center">
                                <button
                                    type="button"
                                    onClick={() => setUserInput({ ...userInput, intelligence: 5 })}
                                    className={cn(
                                        "border-2 border-neutral rounded-full mb-1 transition",
                                        userInput.intelligence === 5 && " border-accent "
                                    )}>
                                    <div className=" w-32 h-32 flex flex-col justify-center items-center">
                                        <FontAwesomeIcon icon="fa-solid fa-brain" className={cn(
                                            "text-lg mb-1",
                                            userInput.intelligence === 5 && "text-accent"
                                        )} />
                                        <span className={cn(
                                            "text-sm",
                                            userInput.intelligence === 5 && "text-accent"
                                        )}>Derpiest</span>
                                    </div>
                                </button>
                                <p className={cn(
                                    "text-center mt-2 font-bold uppercase",
                                    userInput.intelligence === 5 && "text-accent"
                                )}  >Derpiest</p>
                            </div>

                            <div className="flex flex-col justify-center">
                                <button
                                    type="button"
                                    onClick={() => setUserInput({ ...userInput, intelligence: 20 })}
                                    className={cn(
                                        "border-2 border-neutral rounded-full mb-1 transition",
                                        userInput.intelligence === 20 && " border-accent "
                                    )}>
                                    <div className=" w-32 h-32 flex flex-col justify-center items-center">
                                        <FontAwesomeIcon icon="fa-solid fa-brain" className={cn(
                                            "text-xl mb-1",
                                            userInput.intelligence === 20 && "text-accent"
                                        )} />
                                        <span className={cn(
                                            "text-sm",
                                            userInput.intelligence === 20 && "text-accent"
                                        )}>Fair</span>
                                    </div>
                                </button>
                                <p className={cn(
                                    "text-center mt-2 font-bold uppercase",
                                    userInput.intelligence === 20 && "text-accent"
                                )}  >Fair</p>
                            </div>

                            <div className="flex flex-col justify-center">
                                <button
                                    type="button"
                                    onClick={() => setUserInput({ ...userInput, intelligence: 45 })}
                                    className={cn(
                                        "border-2 border-neutral rounded-full mb-1 transition",
                                        userInput.intelligence === 45 && " border-accent "
                                    )}>
                                    <div className=" w-32 h-32 flex flex-col justify-center items-center">
                                        <FontAwesomeIcon icon="fa-solid fa-brain" className={cn(
                                            "text-2xl mb-1",
                                            userInput.intelligence === 45 && "text-accent"
                                        )} />
                                        <span className={cn(
                                            "text-sm",
                                            userInput.intelligence === 45 && "text-accent"
                                        )}>Average</span>
                                    </div>
                                </button>
                                <p className={cn(
                                    "text-center mt-2 font-bold uppercase",
                                    userInput.intelligence === 45 && "text-accent"
                                )}  >Average</p>
                            </div>

                            <div className="flex flex-col justify-center">
                                <button
                                    type="button"
                                    onClick={() => setUserInput({ ...userInput, intelligence: 70 })}
                                    className={cn(
                                        "border-2 border-neutral rounded-full mb-1 transition",
                                        userInput.intelligence === 70 && " border-accent "
                                    )}>
                                    <div className=" w-32 h-32 flex flex-col justify-center items-center">
                                        <FontAwesomeIcon icon="fa-solid fa-brain" className={cn(
                                            "text-3xl mb-1",
                                            userInput.intelligence === 70 && "text-accent"
                                        )} />
                                        <span className={cn(
                                            "text-sm",
                                            userInput.intelligence === 70 && "text-accent"
                                        )}>Above average</span>
                                    </div>
                                </button>
                                <p className={cn(
                                    "text-center mt-2 font-bold uppercase",
                                    userInput.intelligence === 70 && "text-accent"
                                )}  >Above average</p>
                            </div>

                            <div className="flex flex-col justify-center">
                                <button
                                    type="button"
                                    onClick={() => setUserInput({ ...userInput, intelligence: 88 })}
                                    className={cn(
                                        "border-2 border-neutral rounded-full mb-1 transition",
                                        userInput.intelligence === 88 && " border-accent "
                                    )}>
                                    <div className=" w-32 h-32 flex flex-col justify-center items-center">
                                        <FontAwesomeIcon icon="fa-solid fa-brain" className={cn(
                                            "text-4xl mb-1",
                                            userInput.intelligence === 88 && "text-accent"
                                        )} />
                                        <span className={cn(
                                            "text-sm",
                                            userInput.intelligence === 88 && "text-accent"
                                        )}>Excellent</span>
                                    </div>
                                </button>
                                <p className={cn(
                                    "text-center mt-2 font-bold uppercase",
                                    userInput.intelligence === 88 && "text-accent"
                                )}  >Excellent</p>
                            </div>

                            <div className="flex flex-col justify-center">
                                <button
                                    type="button"
                                    onClick={() => setUserInput({ ...userInput, intelligence: 98 })}
                                    className={cn(
                                        "border-2 border-neutral rounded-full mb-1 transition",
                                        userInput.intelligence === 98 && " border-accent "
                                    )}>
                                    <div className=" w-32 h-32 flex flex-col justify-center items-center">
                                        <FontAwesomeIcon icon="fa-solid fa-medal" className={cn(
                                            "text-4xl mb-1",
                                            userInput.intelligence === 98 && "text-accent"
                                        )} />
                                        <span className={cn(
                                            "text-sm",
                                            userInput.intelligence === 98 && "text-accent"
                                        )}>Brightest</span>
                                    </div>
                                </button>
                                <p className={cn(
                                    "text-center mt-2 font-bold uppercase",
                                    userInput.intelligence === 98 && "text-accent"
                                )}  >Brightest</p>
                            </div>

                            <div className="flex flex-col justify-center">
                                <button
                                    type="button"
                                    onClick={() => setUserInput({ ...userInput, intelligence: -1 })}
                                    className={cn(
                                        "border-2 border-neutral rounded-full mb-1 transition",
                                        userInput.intelligence === -1 && " border-accent "
                                    )}>
                                    <div className=" w-32 h-32 flex flex-col justify-center items-center">
                                        <FontAwesomeIcon icon="fa-regular fa-circle-question" className={cn(
                                            "text-3xl mb-1",
                                            userInput.intelligence === -1 && "text-accent"
                                        )} />
                                        <span className={cn(
                                            "text-sm",
                                            userInput.intelligence === -1 && "text-accent"
                                        )}>No Preference</span>
                                    </div>
                                </button>
                                <p className={cn(
                                    "text-center mt-2 font-bold uppercase",
                                    userInput.intelligence === -1 && "text-accent"
                                )}  >No Idea</p>
                            </div>
                        </div>

                    </label>
                )
            }
            {
                question === 4 && (
                    <label className="form-control w-full">
                        <div className="label justify-center flex-col">
                            <span className="label-text text-3xl font-bold text-accent">What is your budget for your new dog?</span>
                            <p className=" italic mt-1">This slider shows the range of the lifetime cost for all the doggos.</p>
                        </div>
                        <div className="flex items-start flex-wrap justify-center gap-x-8 my-8">
                            <div className="flex flex-col justify-center">
                                <button
                                    type="button"
                                    onClick={() => setUserInput({ ...userInput, lifetime_cost: stats.lowest_lifetime_cost })}
                                    className={cn(
                                        "border-2 border-neutral rounded-full mb-1 transition",
                                        userInput.lifetime_cost === stats.lowest_lifetime_cost && " border-accent "
                                    )}>
                                    <div className=" w-32 h-32 flex flex-col justify-center items-center">
                                        <FontAwesomeIcon icon="fa-solid fa-money-bill-1-wave" className={cn(
                                            "text-3xl mb-1",
                                            userInput.lifetime_cost === stats.lowest_lifetime_cost && "text-accent"
                                        )} />
                                        <span className={cn(
                                            "text-sm",
                                            userInput.lifetime_cost === stats.lowest_lifetime_cost && "text-accent"
                                        )}>McPoverty</span>
                                    </div>
                                </button>
                                <p className={cn(
                                    "text-center mt-2 font-bold uppercase",
                                    userInput.lifetime_cost === stats.lowest_lifetime_cost && "text-accent"
                                )}  >Low</p>
                            </div>

                            <div className="flex flex-col justify-center">
                                <button
                                    type="button"
                                    onClick={() => setUserInput({ ...userInput, lifetime_cost: (stats.highest_lifetime_cost - stats.lowest_lifetime_cost) / 2 + stats.lowest_lifetime_cost })}
                                    className={cn(
                                        "border-2 border-neutral rounded-full mb-1 transition",
                                        userInput.lifetime_cost === (stats.highest_lifetime_cost - stats.lowest_lifetime_cost) / 2 + stats.lowest_lifetime_cost && " border-accent "
                                    )}>
                                    <div className=" w-32 h-32 flex flex-col justify-center items-center text-center">
                                        <FontAwesomeIcon icon="fa-solid fa-money-bills" className={cn(
                                            "text-3xl mb-1",
                                            userInput.lifetime_cost === (stats.highest_lifetime_cost - stats.lowest_lifetime_cost) / 2 + stats.lowest_lifetime_cost && "text-accent"
                                        )} />
                                        <span className={cn(
                                            "text-sm",
                                            userInput.lifetime_cost === (stats.highest_lifetime_cost - stats.lowest_lifetime_cost) / 2 + stats.lowest_lifetime_cost && "text-accent"
                                        )}>Standard User</span>
                                    </div>
                                </button>
                                <p className={cn(
                                    "text-center mt-2 font-bold uppercase",
                                    userInput.lifetime_cost === (stats.highest_lifetime_cost - stats.lowest_lifetime_cost) / 2 + stats.lowest_lifetime_cost && "text-accent"
                                )}  >Medium</p>
                            </div>

                            <div className="flex flex-col justify-center">
                                <button
                                    type="button"
                                    onClick={() => setUserInput({ ...userInput, lifetime_cost: stats.highest_lifetime_cost })}
                                    className={cn(
                                        "border-2 border-neutral rounded-full mb-1 transition",
                                        userInput.lifetime_cost === stats.highest_lifetime_cost && " border-accent "
                                    )}>
                                    <div className=" w-32 h-32 flex flex-col justify-center items-center">
                                        <FontAwesomeIcon icon="fa-solid fa-sack-dollar" className={cn(
                                            "text-3xl mb-1",
                                            userInput.lifetime_cost === stats.highest_lifetime_cost && "text-accent"
                                        )} />
                                        <span className={cn(
                                            "text-sm",
                                            userInput.lifetime_cost === stats.highest_lifetime_cost && "text-accent"
                                        )}>Money goes zzz</span>
                                    </div>
                                </button>
                                <p className={cn(
                                    "text-center mt-2 font-bold uppercase",
                                    userInput.lifetime_cost === stats.highest_lifetime_cost && "text-accent"
                                )}  >High</p>
                            </div>

                            <div className="flex flex-col justify-center">
                                <button
                                    type="button"
                                    onClick={() => setUserInput({ ...userInput, lifetime_cost: -1 })}
                                    className={cn(
                                        "border-2 border-neutral rounded-full mb-1 transition",
                                        userInput.lifetime_cost === -1 && " border-accent "
                                    )}>
                                    <div className=" w-32 h-32 flex flex-col justify-center items-center">
                                        <FontAwesomeIcon icon="fa-regular fa-circle-question" className={cn(
                                            "text-3xl mb-1",
                                            userInput.lifetime_cost === -1 && "text-accent"
                                        )} />
                                        <span className={cn(
                                            "text-sm",
                                            userInput.lifetime_cost === -1 && "text-accent"
                                        )}>No Preference</span>
                                    </div>
                                </button>
                                <p className={cn(
                                    "text-center mt-2 font-bold uppercase",
                                    userInput.lifetime_cost === -1 && "text-accent"
                                )}  >No Idea</p>
                            </div>
                        </div>

                    </label>
                )
            }
            {
                question === 5 && (
                    <label className="form-control w-full">
                        <div className="label justify-center flex-col">
                            <span className="label-text text-3xl font-bold text-accent">Will they have any kids to snuggle with?</span>
                            <p className=" italic mt-1"></p>
                        </div>
                        <div className="flex items-start flex-wrap justify-center gap-x-8 my-8">
                            <div className="flex flex-col justify-center">
                                <button
                                    type="button"
                                    onClick={() => setUserInput({ ...userInput, suitability_for_children: -1 })}
                                    className={cn(
                                        "border-2 border-neutral rounded-full mb-1 transition",
                                        userInput.suitability_for_children === -1 && " border-accent "
                                    )}>
                                    <div className=" w-32 h-32 flex flex-col justify-center items-center">
                                        <FontAwesomeIcon icon="fa-regular fa-circle-xmark" className={cn(
                                            "text-3xl mb-1",
                                            userInput.suitability_for_children === -1 && "text-accent"
                                        )} />
                                        <span className={cn(
                                            "text-sm",
                                            userInput.suitability_for_children === -1 && "text-accent"
                                        )}>No</span>
                                    </div>
                                </button>
                                <p className={cn(
                                    "text-center mt-2 font-bold uppercase",
                                    userInput.suitability_for_children === -1 && "text-accent"
                                )}  >No</p>
                            </div>

                            <div className="flex flex-col justify-center">
                                <button
                                    type="button"
                                    onClick={() => setUserInput({ ...userInput, suitability_for_children: 1 })}
                                    className={cn(
                                        "border-2 border-neutral rounded-full mb-1 transition",
                                        userInput.suitability_for_children === 1 && " border-accent "
                                    )}>
                                    <div className=" w-32 h-32 flex flex-col justify-center items-center">
                                        <FontAwesomeIcon icon="fa-solid fa-children" className={cn(
                                            "text-3xl mb-1",
                                            userInput.suitability_for_children === 1 && "text-accent"
                                        )} />
                                        <span className={cn(
                                            "text-sm",
                                            userInput.suitability_for_children === 1 && "text-accent"
                                        )}>Yes</span>
                                    </div>
                                </button>
                                <p className={cn(
                                    "text-center mt-2 font-bold uppercase",
                                    userInput.suitability_for_children === 1 && "text-accent"
                                )}  >Yes</p>
                            </div>
                        </div>

                    </label>
                )
            }
            {
                question === 6 && (
                    <label className="form-control w-full">
                        <div className="label justify-center flex-col">
                            <span className="label-text text-3xl font-bold text-accent">How much time can you dedicate to your new dog's grooming?</span>
                            <p className=" italic mt-1"></p>
                        </div>
                        <div className="flex items-start flex-wrap justify-center gap-x-8 my-8">
                            <div className="flex flex-col justify-center">
                                <button
                                    type="button"
                                    onClick={() => setUserInput({ ...userInput, grooming_frequency: 2 })}
                                    className={cn(
                                        "border-2 border-neutral rounded-full mb-1 transition",
                                        userInput.grooming_frequency === 2 && " border-accent "
                                    )}>
                                    <div className=" w-32 h-32 flex flex-col justify-center items-center p-1">
                                        <FontAwesomeIcon icon="fa-solid fa-calendar-week" className={cn(
                                            "text-3xl mb-1",
                                            userInput.grooming_frequency === 2 && "text-accent"
                                        )} />
                                        <span className={cn(
                                            "text-sm",
                                            userInput.grooming_frequency === 2 && "text-accent"
                                        )}>Once in a few weeks</span>
                                    </div>
                                </button>
                                <p className={cn(
                                    "text-center mt-2 font-bold uppercase",
                                    userInput.grooming_frequency === 2 && "text-accent"
                                )}  >Low</p>
                            </div>

                            <div className="flex flex-col justify-center">
                                <button
                                    type="button"
                                    onClick={() => setUserInput({ ...userInput, grooming_frequency: 1 })}
                                    className={cn(
                                        "border-2 border-neutral rounded-full mb-1 transition",
                                        userInput.grooming_frequency === 1 && " border-accent "
                                    )}>
                                    <div className=" w-32 h-32 flex flex-col justify-center items-center p-1">
                                        <FontAwesomeIcon icon="fa-solid fa-calendar-days" className={cn(
                                            "text-3xl mb-1",
                                            userInput.grooming_frequency === 1 && "text-accent"
                                        )} />
                                        <span className={cn(
                                            "text-sm",
                                            userInput.grooming_frequency === 1 && "text-accent"
                                        )}>Once a week</span>
                                    </div>
                                </button>
                                <p className={cn(
                                    "text-center mt-2 font-bold uppercase",
                                    userInput.grooming_frequency === 1 && "text-accent"
                                )}  >Medium</p>
                            </div>

                            <div className="flex flex-col justify-center">
                                <button
                                    type="button"
                                    onClick={() => setUserInput({ ...userInput, grooming_frequency: 0 })}
                                    className={cn(
                                        "border-2 border-neutral rounded-full mb-1 transition",
                                        userInput.grooming_frequency === 0 && " border-accent "
                                    )}>
                                    <div className=" w-32 h-32 flex flex-col justify-center items-center p-1">
                                        <FontAwesomeIcon icon="fa-solid fa-calendar-day" className={cn(
                                            "text-3xl mb-1",
                                            userInput.grooming_frequency === 0 && "text-accent"
                                        )} />
                                        <span className={cn(
                                            "text-sm",
                                            userInput.grooming_frequency === 0 && "text-accent"
                                        )}>Daily</span>
                                    </div>
                                </button>
                                <p className={cn(
                                    "text-center mt-2 font-bold uppercase",
                                    userInput.grooming_frequency === 0 && "text-accent"
                                )}  >High</p>
                            </div>

                            <div className="flex flex-col justify-center">
                                <button
                                    type="button"
                                    onClick={() => setUserInput({ ...userInput, grooming_frequency: -1 })}
                                    className={cn(
                                        "border-2 border-neutral rounded-full mb-1 transition",
                                        userInput.grooming_frequency === -1 && " border-accent "
                                    )}>
                                    <div className=" w-32 h-32 flex flex-col justify-center items-center">
                                        <FontAwesomeIcon icon="fa-regular fa-circle-question" className={cn(
                                            "text-3xl mb-1",
                                            userInput.grooming_frequency === -1 && "text-accent"
                                        )} />
                                        <span className={cn(
                                            "text-sm",
                                            userInput.grooming_frequency === -1 && "text-accent"
                                        )}>No Preference</span>
                                    </div>
                                </button>
                                <p className={cn(
                                    "text-center mt-2 font-bold uppercase",
                                    userInput.grooming_frequency === -1 && "text-accent"
                                )}  >No Idea</p>
                            </div>
                        </div>

                    </label>
                )
            }
            <div className="flex flex-wrap justify-center items-center gap-x-96 mb-8">
                <button
                    type="button"
                    onClick={() => { setQuestion(question - 1) }}
                    className={cn(
                        "btn btn-error shadow-md",
                        question === 1 && "bg-transparent text-transparent pointer-events-none shadow-none border-none"
                    )}  ><FontAwesomeIcon icon="fa-solid fa-caret-left" />Back</button>
                <button
                    type="button"
                    onClick={() => { setQuestion(question + 1) }}
                    className={cn(
                        "btn btn-primary shadow-md",
                        question === 6 && "bg-transparent text-transparent pointer-events-none shadow-none border-none"
                    )}   >Next<FontAwesomeIcon icon="fa-solid fa-caret-right" /></button>
            </div>
            <div className="flex flex-col justify-center items-center mb-6">
                <p className="uppercase text-accent text-center font-bold">QUESTION {question} of {6}</p>
                <progress className="progress progress-accent w-[32rem] my-2" value={question} max={6}></progress>
            </div>
            <div className="flex flex-col justify-center items-center">
                <button
                    type="button"
                    onClick={startOver}
                    className="btn btn-wide btn-error shadow-md"
                ><FontAwesomeIcon icon="fa-solid fa-rotate" />Start Over</button>
                <button type="submit" className="btn btn-accent btn-wide mt-4 shadow-md">Submit</button>
            </div>

        </form>
    );
}

export default RecommendForm;