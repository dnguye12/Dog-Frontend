/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { getPendingGroup, patchApprove } from "../../../../services/pending";
import { useUser } from "@clerk/clerk-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PendingCard from "./PendingCard";

const CheckPending = ({ setMode }) => {
    const { user } = useUser()
    const [pendingList, setPendingList] = useState(null)
    const [currentPending, setCurrentPending] = useState(-1)

    useEffect(() => {
        const fetchPending = async () => {
            const res = await getPendingGroup(user.id)
            setPendingList(res)
            setCurrentPending(0)
        }

        if (!pendingList && user) {
            fetchPending()
        }
    }, [pendingList, user])

    const handleChoice = async (approve) => {
        try {
            await patchApprove(user.id, pendingList[currentPending].id, approve)
            setCurrentPending(currentPending + 1)
        } catch (error) {
            console.log(error)
        }
    }

    if (!pendingList) {
        return (
            <div className="skeleton rounded-2xl w-full max-w-3xl flex justify-center items-center">
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        )
    }

    if (pendingList.length === 0 || currentPending >= pendingList.length) {
        return (
            <div className="container px-10 xl:px-0 max-w-6xl mx-auto w-full">
                <div className="label justify-center flex-col">
                    <h2 className="text-3xl font-bold text-accent text-center">No submissions need approvement atm.</h2>
                    <p className=" italic mt-1">Come back later!</p>
                </div>
                <div className="flex mt-8 justify-center">
                    <button onClick={() => { setMode("none") }} className="btn btn-lg btn-accent shadow-md tooltip tooltip-secondary" data-tip="Add a breed that you think is missing"><FontAwesomeIcon icon="fa-solid fa-caret-left" className="mr-1" />Go back</button>
                </div>
            </div>
        )
    }

    return (
        <div className="container px-10 xl:px-0 max-w-6xl mx-auto w-full">
            <div className="label justify-center flex-col relative">
                <button onClick={() => { setMode("none") }} className="absolute top-0 left-0 btn btn-error shadow-md"><FontAwesomeIcon icon="fa-solid fa-caret-left" />Go Back</button>
                <h2 className="text-3xl font-bold text-accent text-center">Some submissions by other users.</h2>
                <p className=" italic mt-1">You can approve/disapprove them.</p>
            </div>
            <div className="grid grid-cols-1 gap-4 mt-8">
                <PendingCard
                    breed={pendingList[currentPending]}
                    handleChoice={handleChoice}
                />
            </div>
        </div>
    );
}

export default CheckPending;