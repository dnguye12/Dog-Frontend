import { useState } from "react";
import { getPrediction } from "../../../services/predict";
import { getBreed, getStats } from "../../../services/breed";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import RecommendCard from "./components/RecommendCard";
import RecommendForm from "./components/RecommendForm";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useUser } from "@clerk/clerk-react";

const RecommendBreedPage = () => {
    const { isSignedIn, user } = useUser()

    const [userInput, setUserInput] = useState({
        popularity_ranking: -1,
        size: -1,
        lifetime_cost: -1,
        intelligence: -1,
        grooming_frequency: -1,
        suitability_for_children: -1
    })
    const [stats, setStats] = useState(null)
    const [recs, setRecs] = useState([])
    const [question, setQuestion] = useState(1)

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
    }, [stats, userInput])

    const startOver = () => {
        setUserInput({
            popularity_ranking: -1,
            size: -1,
            lifetime_cost: -1,
            intelligence: -1,
            grooming_frequency: -1,
            suitability_for_children: -1
        })
        setStats(null)
        setQuestion(1)
        setRecs([])
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res = await getPrediction({ ...userInput, userId: user?.id })
            if (res) {

                const missingImages = res.filter(dog => !dog.image)

                if (missingImages.length > 0) {
                    const fetchImage = async (id) => {
                        try {
                            const res = await getBreed(id)

                            return res
                        } catch (error) {
                            console.log(error)
                        }
                    }

                    const updatedDogs = await Promise.all(res.map(async (item) => {
                        if (!item.image) {
                            const helper = await fetchImage(item._id)
                            return { ...helper, prediction: item.prediction }
                        }
                        return item
                    }))

                    res = updatedDogs
                }

                setRecs(res)
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className=" bg-base-200 flex-1 flex justify-center py-10">
                <div className="container px-10 xl:px-0 max-w-6xl mx-auto">
                    {recs.length === 0 && (
                        <RecommendForm
                            handleSubmit={handleSubmit}
                            question={question}
                            setQuestion={setQuestion}
                            stats={stats}
                            userInput={userInput}
                            setUserInput={setUserInput}
                            startOver={startOver}
                        />
                    )}

                    {recs.length > 0 &&
                        (
                            <div className="w-full">
                                <div className="label justify-center flex-col">
                                    <span className="label-text text-3xl font-bold text-accent">Your dog breed selector results</span>
                                    {
                                        isSignedIn
                                            ?
                                            <p className=" italic mt-1">You can rate if a recommendation is good or bad.</p>
                                            :
                                            <p className=" italic mt-1">You can <span className="text-lg font-bold uppercase">login</span> to rate these recommendations.</p>
                                    }

                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
                                    {
                                        recs.map((rec, idx) => (
                                            <RecommendCard
                                                key={`rec ${idx}`}
                                                breed={rec}
                                                stats={stats}
                                                userInput={userInput}
                                                isSignedIn={isSignedIn}
                                                user={user}
                                            />
                                        ))
                                    }
                                </div>
                                <div className="flex flex-col justify-center items-center">
                                    <button
                                        type="button"
                                        onClick={startOver}
                                        className="btn btn-wide btn-error shadow-md"
                                    ><FontAwesomeIcon icon="fa-solid fa-rotate" />Start Over</button>
                                </div>
                            </div>
                        )
                    }
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default RecommendBreedPage;