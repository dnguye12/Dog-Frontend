import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HomePage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="bg-base-200 flex-1">
                <div className="container pt-16 max-w-6xl mx-auto grid grid-cols-2 gap-16">
                    <div className="">
                        <div className="inline-block bg-primary px-4 py-2 rounded-full shadow-md border border-neutral-200 -rotate-1">
                            <p className="font-semibold">Welcome to Marcelle Dog</p>

                        </div>
                        <h1 className="mt-5 text-6xl font-extrabold">Finding the best dog breed for you</h1>
                        <p className="mt-3 text-xl">At Marcelle Dog, we believe everyone deserves the perfect canine companion. Our crowd-sourced database and personalized recommendations help match you with a breed that fits your lifestyle, preferences, and needs.</p>
                        <div className="mt-8 flex items-center">
                            <Link to="/recommend-breed" className="btn btn-primary btn-lg px-8 py-4 shadow-md"><FontAwesomeIcon icon="fa-solid fa-lightbulb" />Dog Recommendation</Link>
                            <Link to="/add-breed" className="btn btn-secondary btn-lg bg-base-300 border-base-300 px-8 py-4 shadow-md ml-6"><FontAwesomeIcon icon="fa-solid fa-plus" />Add A Dog</Link>
                        </div>
                        <p className=" mt-14 text-sm font-bold tracking-wider">RATED 5 STARS BY <span className="text-accent">4 STUDENTS</span></p>
                        <div className="flex mt-5 justify-between">
                            <div>
                                <div className="flex justify-center gap-x-1 text-orange-400">
                                    <FontAwesomeIcon icon="fa-solid fa-star" />
                                    <FontAwesomeIcon icon="fa-solid fa-star" />
                                    <FontAwesomeIcon icon="fa-solid fa-star" />
                                    <FontAwesomeIcon icon="fa-solid fa-star" />
                                    <FontAwesomeIcon icon="fa-solid fa-star" />
                                </div>
                                <p className="uppercase mt-2.5 text-center text-xs font-bold">trust pilot</p>
                            </div>
                            <div className="divider divider-horizontal"></div>
                            <div>
                                <div className="flex justify-center gap-x-1 text-orange-400">
                                    <FontAwesomeIcon icon="fa-solid fa-star" />
                                    <FontAwesomeIcon icon="fa-solid fa-star" />
                                    <FontAwesomeIcon icon="fa-solid fa-star" />
                                    <FontAwesomeIcon icon="fa-solid fa-star" />
                                    <FontAwesomeIcon icon="fa-solid fa-star" />
                                </div>
                                <p className="uppercase mt-2.5 text-center text-xs font-bold">your mom&apos;s review</p>
                            </div>
                            <div className="divider divider-horizontal"></div>
                            <div>
                                <div className="flex justify-center gap-x-1 text-orange-400">
                                    <FontAwesomeIcon icon="fa-solid fa-star" />
                                    <FontAwesomeIcon icon="fa-solid fa-star" />
                                    <FontAwesomeIcon icon="fa-solid fa-star" />
                                    <FontAwesomeIcon icon="fa-solid fa-star" />
                                    <FontAwesomeIcon icon="fa-solid fa-star" />
                                </div>
                                <p className="uppercase mt-2.5 text-center text-xs font-bold">Google reviews</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src="/home_image.png" alt="home image" className="drop-shadow-md" style={{ transform: "scaleX(-1)" }} />
                    </div>
                </div>
                <div className=" h-52" style={{
                    background: "linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(244,240,252,1) 100%)"
                }}></div>
                <div className=" px-24 pt-8 bg-white">
                    <div className=" container max-w-6xl mx-auto">
                        <div className=" grid grid-cols-2 gap-16">
                            <div>
                                <h2 className=" text-5xl font-bold">The recommendation for your next furry friend</h2>
                                <p className="mt-5 text-xl">Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur arcu erat, accumsan id imperdiet et.</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-16 mt-72">
                            <div className="relative">
                                <img className="block -translate-y-1/2 translate-x-0 absolute top-0 left-1/2" style={{ width: "calc(50% + 64px)" }} src="https://bright.tailwindawesome.com/_next/static/media/curved-dotted-line.38bf1b54.svg" />
                                <div className="p-12 bg-base-200 rounded-3xl relative shadow-md border border-neutral-200">
                                    <div className="flex flex-col justify-between">
                                        <div className="flex-1">
                                            <h3 className=" text-4xl font-bold tracking-tight">Crowded Source Database</h3>
                                            <p className=" text-lg mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean et tortor at risus viverra adipiscing at in.</p>
                                            <div className="relative mt-8 " style={{ paddingBottom: "calc(2 / 3 * 100%)" }}>
                                                <img className="absolute h-full w-full left-0 top-0 right-0 bottom-0 rounded-2xl shadow-md" src="https://www.zucisystems.com/wp-content/uploads/2022/09/Database-2-scaled-1-scaled.webp" width={500} height={500} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <img className="block -translate-y-1/2 translate-x-0 left-1/2  absolute h-auto align-middle" style={{ width: "calc(50% + 64px)", bottom: "-500px" }} src="https://bright.tailwindawesome.com/_next/static/media/looped-dotted-line.0214bb0b.svg" />
                            </div>

                            <div className="p-12 bg-base-300 rounded-3xl relative -translate-y-80 mt-0 shadow-md border border-neutral-200">
                                <div className="flex flex-col justify-between">
                                    <div className="flex-1">
                                        <h3 className=" text-4xl font-bold tracking-tight">Dog Recommendation</h3>
                                        <p className=" text-lg mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean et tortor at risus viverra adipiscing at in.</p>
                                        <div className="relative mt-8 " style={{ paddingBottom: "calc(2 / 3 * 100%)" }}>
                                            <img className="absolute h-full w-full left-0 top-0 right-0 bottom-0 rounded-2xl shadow-md" src="https://miro.medium.com/v2/resize:fit:900/1*SLQ2D2-17UZTERSRjV9V4g.jpeg" width={500} height={500} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-12 bg-success rounded-3xl relative -translate-y-80 mt-0 col-start-2 shadow-md border border-neutral-200">
                                <div className="flex flex-col justify-between">
                                    <div className="flex-1">
                                        <h3 className=" text-4xl font-bold tracking-tight">Interactive Machine Learning</h3>
                                        <p className=" text-lg mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean et tortor at risus viverra adipiscing at in.</p>
                                        <div className="relative mt-8 " style={{ paddingBottom: "calc(2 / 3 * 100%)" }}>
                                            <img className="absolute h-full w-full left-0 top-0 right-0 bottom-0 rounded-2xl shadow-md" src="https://www.cisco.com/c/dam/assets/swa/img/anchor-info/machine-learning-628x353.jpg" width={500} height={500} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" -mt-48 py-32 bg-base-100" style={{background: "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(254,247,231,1) 100%)"}}>
                    <div className="px-8 max-w-6xl mx-auto">
                        <h2 className=" text-6xl text-center font-bold"><FontAwesomeIcon icon="fa-solid fa-paw" /> MARCELLE DOG</h2>
                        <div className=" mt-14 flex justify-center">
                            <Link to="/recommend-breed" className="btn btn-primary btn-lg px-8 py-4 shadow-md"><FontAwesomeIcon icon="fa-solid fa-lightbulb" />Dog Recommendation</Link>
                            <Link to="/add-breed" className="btn btn-secondary btn-lg bg-base-300 border-base-300 px-8 py-4 shadow-md ml-6"><FontAwesomeIcon icon="fa-solid fa-plus" />Add A Dog</Link>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default HomePage;