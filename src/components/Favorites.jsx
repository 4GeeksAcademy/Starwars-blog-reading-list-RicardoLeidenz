import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";

export const Favorites = () => {

    const {store, dispatch} =useGlobalReducer()

    const resetDetails = () => {
        dispatch({
            type: "set-details",
            payload: {}
        });
    }

    const deleteFavorite = (favoriteToDelete) => {
        const updatedFavorites = store.favorites.filter(favorite => favorite.name !== favoriteToDelete);
        dispatch({
            type: "set-favorites",
            payload: updatedFavorites
        });
    }

    return(
        <div className="btn-group dropleft">
            <button className="btn btn-secondary dropdown-toggle " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Favorites
            </button>
            <ul className="dropdown-menu p-3">
                {store.favorites.map((favorite,index)=>{
                    return(
                        <li key={index} className="row">
                            <Link className="col-10" to={favorite.url}  onClick={resetDetails}>
                                {favorite.name}
                            </Link>
                            <p className="text-danger col-2" onClick={()=>deleteFavorite(favorite.name)}>X</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}