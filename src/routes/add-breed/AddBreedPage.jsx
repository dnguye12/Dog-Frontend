import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { useState } from "react";

const AddBreedPage = () => {
    const [mode, setMode] = useState("none") //none, add, check

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
                                <button onClick={() => {setMode("add")}} className="btn btn-lg w-96 h-24 text-xl btn-primary shadow-md"><FontAwesomeIcon icon="fa-solid fa-plus" />Add a new breed</button>
                                <div className="divider divider-horizontal">OR</div>
                                <button onClick={() => {setMode("check")}} className="btn btn-lg w-96 h-24 text-xl btn-secondary shadow-md"><FontAwesomeIcon icon="fa-solid fa-check" />Check pending submissions</button>
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