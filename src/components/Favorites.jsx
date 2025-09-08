import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";

export const Favorites = () => {

    const {store, dispatch} =useGlobalReducer()
    //Resets the details saved to avoid showing previous information when moving from site to site using the favorites menu
    const resetDetails = () => {
        dispatch({
            type: "set-details",
            payload: {}
        });
    }
    //Deletes item from favorites when triggered
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
                            {/* Takes you to the details page of the item favorited */}
                            <Link className="col-10" to={favorite.url}  onClick={resetDetails}>
                                {favorite.name}
                            </Link>
                            {/* Deletes the item when clicked */}
                            <p className="text-danger col-2" onClick={()=>deleteFavorite(favorite.name)}>X</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}