import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
    return (
        <div className="border-b-2 border-b-neutral-200 bg-base-200">
            <div className=" w-full max-w-6xl px-10 xl:px-0 py-5 mx-auto flex justify-between items-center">
                <div className="flex-1 flex items-center font-bold text-xl">
                    <Link to="/" className="btn btn-ghost text-base-content">
                        <FontAwesomeIcon className="mr-1 text-3xl" icon="fa-solid fa-paw" />
                        <p className="uppercase text-2xl font-semibold">Marcelle Dog</p>
                    </Link>
                </div>
                <div className="flex-none flex">
                    <Link to="/recommend-breed" className="btn btn-primary mr-2 shadow-md"><FontAwesomeIcon icon="fa-solid fa-lightbulb" className="mr-1" /> Dog Recommendation</Link>
                    <Link to="/add-breed" className="btn btn-secondary mr-2 shadow-md"><FontAwesomeIcon icon="fa-solid fa-plus" className="mr-1" /> Add A Dog</Link>
                </div>
            </div>
        </div>
    );
}

export default Navbar;