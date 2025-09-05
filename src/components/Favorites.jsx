import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Favorites = () => {
    const {store, dispatch} =useGlobalReducer()
    return(
        <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Favorites
            </button>
            <ul className="dropdown-menu">
                {store.favorites.map((favorite,index)=>{
                    return(
                        <li key={index}><a className="dropdown-item">{favorite}</a></li>
                    )
                })}
            </ul>
        </div>
    )
}