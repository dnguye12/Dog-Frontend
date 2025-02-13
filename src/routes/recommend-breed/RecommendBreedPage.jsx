import { useState } from "react";
import { getPrediction } from "../../../services/predict";
import { getBreed, getStats } from "../../../services/breed";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import RecommendCard from "./components/RecommendCard";
import RecommendForm from "./components/RecommendForm";
import { useEffect } from "react";

const RecommendBreedPage = () => {
    const [userInput, setUserInput] = useState({
        popularity_ranking: 0,
        size: 1,
        lifetime_cost: 0,
        intelligence: 5,
        longevity: 0,
        grooming_frequency: 2,
        suitability_for_children: -1
    })
    const [stats, setStats] = useState(null)
    const [recs, setRecs] = useState([])

    useEffect(() => {
        const initStats = async () => {
            try {
                const res = await getStats()
                setStats(res)
                setUserInput({
                    ...userInput,
                    lifetime_cost: res.lowest_lifetime_cost,
                    longevity: res.lowest_longevity,
                    popularity_ranking: res.lowest_popularity
                })
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
            popularity_ranking: stats.lowest_popularity,
            size: 1,
            lifetime_cost: stats.lowest_lifetime_cos,
            intelligence: 5,
            longevity: stats.lowest_lifetime_cos,
            grooming_frequency: 2,
            suitability_for_children: -1
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await getPrediction(userInput)
            if (res) {

                res.sort((a, b) => b.prediction - a.prediction)

                let topThree = res.slice(0, 3);

                const missingImages = topThree.filter(dog => !dog.image)

                if (missingImages.length > 0) {
                    const fetchImage = async (id) => {
                        try {
                            const res = await getBreed(id)

                            return res
                        } catch (error) {
                            console.log(error)
                        }
                    }

                    const updatedDogs = await Promise.all(topThree.map(async (item) => {
                        if (!item.image) {
                            const helper = await fetchImage(item._id)
                            return helper
                        }
                        return item
                    }))

                    topThree = updatedDogs
                }


                setRecs(topThree)
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className=" bg-base-200 flex-1">
                <div className="container px-10 xl:px-0 max-w-6xl mx-auto py-16">
                    {recs.length === 0 && (
                        <RecommendForm
                            handleSubmit={handleSubmit}
                            stats={stats}
                            userInput={userInput}
                            setUserInput={setUserInput}
                            startOver={startOver}
                        />
                    )}

                    {recs.length > 0 &&
                        (
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {
                                    recs.map((rec, idx) => (
                                        <RecommendCard
                                            key={`rec ${idx}`}
                                            breed={rec}
                                        />
                                    ))
                                }
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