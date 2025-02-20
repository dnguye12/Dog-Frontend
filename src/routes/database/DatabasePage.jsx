import { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { getAll } from "../../../services/breed";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const convertSize = (size) => {
    if (size === 1) {
        return "Small"
    } else if (size === 2) {
        return "Medium"
    } else {
        return "Big"
    }
}

const convertForChildren = (n) => {
    if (n === 1) {
        return "Good"
    } else if (n === 2) {
        return "Average"
    } else {
        return "Bad"
    }
}
const DatabasePage = () => {
    const [breeds, setBreeds] = useState(null)
    const [shows, setShows] = useState(null)

    const [sort, setSort] = useState("release")
    const [sortOrder, setSortOrder] = useState(true) //true desc, false asc

    useEffect(() => {
        const fetchBreeds = async () => {
            try {
                const res = await getAll()
                if (res) {
                    setBreeds(res)
                    setShows(res)
                }
            } catch (error) {
                console.log(error)
            }
        }

        if (!breeds && !shows) {
            fetchBreeds()
        }
    }, [breeds, shows])

    const handleSetSort = (s) => {
        const newSortOrder = s === sort ? !sortOrder : true;
        setSort(s);
        setSortOrder(newSortOrder);
        
        sortData(s, newSortOrder);
    };

    const sortData = (sort, sortOrder) => {
        if(sort !== "release") {
        const sortedData = [...breeds].sort((a, b) => {
            let valA = a[sort]
            let valB = b[sort]

            if (typeof valA === "string") {
                valA = valA.toLowerCase()
                valB = valB.toLowerCase()
            }

            if (valA < valB) {
                return sortOrder ? -1 : 1
            }
            if (valA > valB) {
                return sortOrder ? 1 : -1
            }
            return 0
        })

        setShows(sortedData)
    }else {
        if(sortOrder) {
            setShows(breeds)
        }else {
            setShows([...breeds].reverse());
        }
    }
    }

    if (!breeds || !shows) {
        return (<div>...Loading</div>)
    }

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="bg-base-200 flex-1">
                <div className="container pt-16 max-w-6xl mx-auto">
                    <div className="label justify-center flex-col">
                        <h2 className="text-3xl font-bold text-accent text-center">Our database</h2>
                        <p className=" italic mt-1">You can change the filter.</p>
                    </div>

                    <div className="overflow-x-auto my-6">
                        <table className="table table-zebra shadow-md border border-neutral-200">
                            <thead className="bg-primary bg-opacity-35 text-neutral text-sm">
                            <tr>
                                    {["release", "breed", "type", "size", "grooming_frequency", "longevity", "intelligence", "lifetime_cost", "suitability_for_children"].map((column) => (
                                        <th
                                            key={column}
                                            onClick={() => handleSetSort(column)}
                                            className={`cursor-pointer ${sort === column ? "font-bold text-white bg-accent" : ""}`}
                                        >
                                            {column.charAt(0).toUpperCase() + column.slice(1).replace("_", " ")}
                                            {sort === column && (
                                                <FontAwesomeIcon
                                                    icon={sortOrder ? "fa-solid fa-caret-up" : "fa-solid fa-caret-down"}
                                                    className="ml-1"
                                                />
                                            )}
                                        </th>
                                    ))}
                                    <th>Image</th>
                                </tr>
                            </thead>
                            <tbody>
                                {shows && shows.map((breed, index) => (
                                    <tr key={breed.id} className="hover">
                                        <th>{index + 1}</th>
                                        <td>{breed.breed}</td>
                                        <td>{breed.type}</td>
                                        <td>{convertSize(breed.size)}</td>
                                        <td>{breed.grooming_frequency}</td>
                                        <td>{breed.longevity} years</td>
                                        <td>{breed.intelligence}</td>
                                        <td>${breed.lifetime_cost.toLocaleString()}</td>
                                        <td>{convertForChildren(breed.suitability_for_children)}</td>
                                        <td>
                                            <img src={breed.image} alt={breed.breed} className="w-32 h-32 object-cover rounded shadow-md border border-neutral-200" />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default DatabasePage;