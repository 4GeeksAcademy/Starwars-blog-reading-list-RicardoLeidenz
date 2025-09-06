import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Card = (props) => {
    const {store, dispatch} =useGlobalReducer()

    const setFavorite = () =>{
        if(!store.favorites.some(name => name == props.name)){
			dispatch({
                type:"set-favorite",
                payload:props.name
            })  
        }
        else{
            console.log("Item Already Favorited")
        }
    }

    return(
        <div className="card h-100">
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">{props.name} is a {props.type} in STAR WARS</p>
                <div className="d-flex">
                    <Link to={"/details/" + props.type + "/" + props.uid}>
                        <button className="btn btn-primary mx-3">Go to details</button>
                    </Link>
                    <button className="btn btn-warning mx-3" onClick={setFavorite}>Favorite</button>
                </div>
            </div>
        </div>
    )
}