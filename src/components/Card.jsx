import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Card = (props) => {
    const {store, dispatch} =useGlobalReducer()

    const setFavorite = () =>{
        if(!store.favorites.some(name => name == props.name)){
			dispatch({
                type:"set-favorite",
                payload:{
                    name: props.name,
                    url: "/details/" + props.type + "/" + props.uid
                }
            })  
        }
        else{
            console.log("Item Already Favorited")
        }
    }

    return(
        <div className="card h-100">
            <div className="card-body">
                <img className="w-75 mb-4" src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/refs/heads/master/public/images/${props.type}/${props.uid}.jpg`}/>
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">{props.name} is a {props.type} in STAR WARS</p>
                <div className="d-flex">
                    <Link to={"/details/" + props.type + "/" + props.uid}>
                        <button className="btn btn-primary mx-3">Go to details</button>
                    </Link>
                    <button 
                        className={store.favorites.some(item => item.name == props.name)?"btn mx-3 btn-warning":"btn mx-3 btn-secondary"}
                        onClick={setFavorite}
                    >
                        {store.favorites.some(item => item.name == props.name)
                        ?"💛"
                        :"🤍"
                        }
                    </button>
                </div>
            </div>
        </div>
    )
}