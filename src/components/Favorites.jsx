import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";

export const Favorites = () => {
    const {store, dispatch} =useGlobalReducer()
    return(
        <div className="dropdown-center">
            <button className="btn btn-secondary dropdown-toggle " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Favorites
            </button>
            <ul className="dropdown-menu p-3">
                {store.favorites.map((favorite,index)=>{
                    return(
                        <li key={index}>
                            <Link to={favorite.url}>
                                {favorite.name}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}