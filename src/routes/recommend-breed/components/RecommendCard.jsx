import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/* eslint-disable react/prop-types */
const RecommendCard = ({ breed }) => {
    console.log(breed)

    return (
        <div className="card bg-base-100 shadow-xl transition hover:scale-105">
            <figure className="w-full overflow-hidden aspect-video">
                <img
                    src={breed.image}
                    alt={breed.breed}
                    className=" w-full h-full object-cover"
                />
            </figure>
            <div className="card-body p-4">
                <h2 className="card-title">
                    {breed.breed}
                    <div className="badge badge-secondary ml-auto shadow-md">{breed.type.charAt(0).toUpperCase() + breed.type.slice(1)}</div>
                </h2>
                <div>
                    <div className="radial-progress" style={{ "--value": 60 }} role="progressbar">60%</div>
                </div>
                <div className="card-actions justify-end">
                    <button className="btn btn-square btn-error shadow-md tooltip" data-tip="Bad Match"><FontAwesomeIcon icon="fa-solid fa-thumbs-down" className=" text-lg" /></button>
                    <button className="btn btn-square btn-primary shadow-md tooltip" data-tip="Strong Match"><FontAwesomeIcon icon="fa-solid fa-thumbs-up" className=" text-lg" /></button>
                </div>
            </div>
        </div>
    );
}

export default RecommendCard;