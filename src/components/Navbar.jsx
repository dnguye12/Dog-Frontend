import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SignOutButton, useUser } from "@clerk/clerk-react"

const Navbar = () => {
    const { isSignedIn, user } = useUser()

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
                    <Link to="/add-breed" className="btn btn-secondary bg-base-300 border-base-300 mr-2 shadow-md"><FontAwesomeIcon icon="fa-solid fa-plus" className="mr-1" /> Add A Dog</Link>
                    <Link to="/database" className="btn btn-success mr-2 shadow-md"><FontAwesomeIcon icon="fa-solid fa-dog" className="mr-1" /> Dog Database</Link>
                    <div>
                        {
                            isSignedIn
                                ?
                                (
                                    <div className="dropdown dropdown-end">
                                        <div tabIndex={0} role="button" className="shadow-md">
                                            <img src={user.imageUrl} className="w-12 h-12 rounded-lg transition hover:scale-105" />
                                        </div>
                                        <ul tabIndex={0} className="dropdown-content bg-base-100 menu rounded-box z-[1] w-52 p-2 shadow-md mt-2">
                                            <div className="px-4 py-2">Hello, <span className="font-semibold">{user.fullName}</span></div>
                                            <div className="divider -my-2"></div>
                                            <li><Link to="/profile"><FontAwesomeIcon icon="fa-solid fa-user" /> Your Profile</Link></li>
                                            <li><SignOutButton ><button><FontAwesomeIcon icon="fa-solid fa-door-open" /> Sign out</button></SignOutButton></li>
                                        </ul>
                                    </div>
                                )
                                :
                                (
                                    <Link to="/sign-in" className="btn btn-info mr-2 shadow-md"><FontAwesomeIcon icon="fa-solid fa-right-to-bracket" />Login</Link>
                                )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;