import { useUser } from "@clerk/clerk-react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { getUser } from "../../../services/user";
import { getBreed, getBreedsSize } from "../../../services/breed";
import BreedCard from "./components/BreedCard";
import SubmitChart from "./components/SubmitChart";
import ApproveChart from "./components/ApproveChart";

const ProfilePage = () => {
    const { user } = useUser()

    const [profile, setProfile] = useState(null)
    const [submits, setSubmits] = useState(null)
    const [approves, setApproves] = useState(null)
    const [breedsSize, setBreedsSize] = useState(null)

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await getUser(user.id)
                setProfile(res)
            } catch (error) {
                console.log(error)
            }
        }

        if (!profile) {
            fetchUser()
        }
    }, [profile, user])

    useEffect(() => {
        const fetchSubmits = async () => {
            const helper = []
            try {
                for (const s of profile.submit) {
                    const breed = await getBreed(s)
                    if (breed) {
                        helper.push(breed)
                    }
                }
                setSubmits(helper)
            } catch (error) {
                console.log(error)
            }
        }

        if (profile && !submits) {
            fetchSubmits()
        }
    }, [profile, submits])

    useEffect(() => {
        const fetchApproves = async () => {
            const helper = []
            try {
                for (const a of profile.approve) {
                    const breed = await getBreed(a)
                    if (breed) {
                        helper.push(breed)
                    }
                }
                setApproves(helper)
            } catch (error) {
                console.log(error)
            }
        }

        if (profile && !approves) {
            fetchApproves()
        }
    }, [profile, approves])

    useEffect(() => {
        const fetchBreedsSize = async () => {
            try {
                const res = await getBreedsSize()
                if (res) {
                    setBreedsSize(res)
                }
            } catch (error) {
                console.log(error)
            }
        }

        if (!breedsSize) {
            fetchBreedsSize()
        }
    }, [breedsSize])

    if (!profile || !submits || !approves || !breedsSize) {
        return <div>...Loading</div>
    }

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className=" bg-base-200 flex-1 flex flex-col justify-start py-10">
                <div className="container max-w-3xl mx-auto bg-base-300 rounded-2xl shadow-md flex p-4 gap-x-4">
                    <img src={user.imageUrl} className="w-40 rounded-2xl shadow-md" />
                    <div className="flex-1 flex flex-col justify-center">
                        <h1 className="font-bold text-3xl mb-2">{user.fullName}</h1>
                        <div className="stats shadow-md w-full">
                            <div className="stat">
                                <div className="stat-figure text-accent">
                                    <FontAwesomeIcon icon="fa-solid fa-dog" className="text-3xl" />
                                </div>
                                <div className="stat-title text-xl mb-1">Breeds Submitted</div>
                                <div className="stat-value text-accent">{profile.submit.length.toLocaleString()}</div>
                            </div>

                            <div className="stat">
                                <div className="stat-figure text-accent">
                                    <FontAwesomeIcon icon="fa-regular fa-thumbs-up" className="text-3xl" />
                                </div>
                                <div className="stat-title text-xl mb-1">Breeds Approved</div>
                                <div className="stat-value text-accent">{profile.approve.length.toLocaleString()}</div>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    submits.length > 0 && (
                        <div className="container max-w-3xl mx-auto bg-base-300 rounded-2xl shadow-md flex p-4 gap-x-4 mt-6 flex-col">
                            <h2 className="font-bold text-2xl mb-2">Your submissions</h2>
                            <div className="flex overflow-x-auto whitespace-nowrap space-x-4 p-4">
                                {submits.map((s, i) => (
                                    <BreedCard key={`submit-${i}`} breed={s} />
                                ))}
                            </div>
                            <div className="divider px-4"></div>
                            <div className="flex flex-col">
                                <h2 className="font-semibold text-xl mb-2 text-center">Your submissions is <span className="text-accent text-2xl">{(submits.length / breedsSize * 100).toFixed(2)}%</span> of our database.</h2>
                                <div className="w-[376px] mx-auto">
                                    <SubmitChart createdDogs={submits.length} totalDogs={breedsSize} />
                                </div>
                            </div>
                        </div>
                    )
                }
                {
                    approves.length > 0 && (
                        <div className="container max-w-3xl mx-auto bg-base-300 rounded-2xl shadow-md flex p-4 gap-x-4 mt-6 flex-col">
                            <h2 className="font-bold text-2xl mb-2">Your approved breeds</h2>
                            <div className="flex overflow-x-auto whitespace-nowrap space-x-4 p-4">
                                {approves.map((s, i) => (
                                    <BreedCard key={`submit-${i}`} breed={s} />
                                ))}
                            </div>
                            <div className="divider px-4"></div>
                            <div className="flex flex-col">
                                <h2 className="font-semibold text-xl mb-2 text-center">Your approved <span className="text-accent text-2xl">{(approves.length / breedsSize * 100).toFixed(2)}%</span> of our database.</h2>
                                <div className="w-[376px] mx-auto">
                                    <ApproveChart createdDogs={approves.length} totalDogs={breedsSize} />
                                </div>
                            </div>
                        </div>
                    )
                }
            </main>
            <Footer />
        </div>
    );
}

export default ProfilePage;