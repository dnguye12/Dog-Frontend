import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { useState } from "react";
import AddBreedForm from "./components/AddBreedForm";
import CheckPending from "./components/CheckPending";
import { useUser } from "@clerk/clerk-react";

const AddBreedPage = () => {
    const {user} = useUser()
    const [mode, setMode] = useState("none") //none, add, check, thank

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className=" bg-base-200 flex-1 flex justify-center py-10">
                {
                    mode === "none" && (
                        <div className="container px-10 xl:px-0 max-w-6xl mx-auto w-full">
                            <div className="label justify-center flex-col">
                                <h2 className="text-3xl font-bold text-accent text-center">You can help us with expanding our database.</h2>
                                <p className=" italic mt-1">Click on one of these buttons.</p>
                            </div>
                            <div className="flex mt-8 justify-center">
                                <button onClick={() => { setMode("add") }} className="btn btn-lg w-96 h-24 text-xl btn-primary shadow-md tooltip tooltip-secondary" data-tip="Add a breed that you think is missing"><FontAwesomeIcon icon="fa-solid fa-plus" className="mr-1" />Add a new breed</button>
                                <div className="divider divider-horizontal">OR</div>
                                <button onClick={() => { setMode("check") }} className="btn btn-lg w-96 h-24 text-xl btn-secondary shadow-md tooltip tooltip-secondary" data-tip="Newly submitted breeds need to be approved before being added, you can help use quality check them"><FontAwesomeIcon icon="fa-solid fa-check" className="mr-1" />Check pending submissions</button>
                            </div>
                        </div>
                    )
                }
                {
                    mode === "add" && (
                        <AddBreedForm setMode={setMode} user={user}/>
                    )
                }
                {
                    mode === "check" && (
                        <CheckPending setMode={setMode} user={user}/>
                    )
                }
                {
                    mode === "thank" && (
                        <div className="container px-10 xl:px-0 max-w-6xl mx-auto w-full">
                            <div className="label justify-center flex-col">
                                <h2 className="text-3xl font-bold text-accent text-center">Thank you for helping expanding our database.</h2>
                                <p className=" italic mt-1">Very UWU of you.</p>
                            </div>
                            <div className="flex mt-8 justify-center">
                            <button onClick={() => { setMode("add") }} className="btn btn-lg w-96 h-24 text-xl btn-primary shadow-md tooltip tooltip-secondary" data-tip="Add a breed that you think is missing"><FontAwesomeIcon icon="fa-solid fa-plus" className="mr-1" />Add another new breed</button>
                                <div className="divider divider-horizontal">OR</div>
                                <button onClick={() => { setMode("check") }} className="btn btn-lg w-96 h-24 text-xl btn-secondary shadow-md tooltip tooltip-secondary" data-tip="Newly submitted breeds need to be approved before being added, you can help use quality check them"><FontAwesomeIcon icon="fa-solid fa-check" className="mr-1" />Check pending submissions</button>
                            </div>
                        </div>
                    )
                }
            </main>
            <Footer />
        </div>
    );
}

export default AddBreedPage;