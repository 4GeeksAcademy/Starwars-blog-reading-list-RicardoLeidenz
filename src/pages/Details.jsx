import { useParams } from "react-router-dom"
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import {useEffect, useState} from "react";

export const Details = () => {
    const {store, dispatch} =useGlobalReducer()
    const {elementType,elementID} = useParams()
    const [details,setDetails] = useState([])

    const getDetails = () => {
		fetch(store.baseURL + elementType + "/" + elementID)
		.then(
			(allDetails) => {
				return allDetails.json()
			}
		)
		.then(
			(data) => {
				dispatch({
                    type: "set-details",
                    payload: data.result
                });
			}
		)
	}
    const showDetails = () =>{
        switch (elementType){
            case "people":
                return(
                    <div>

                    </div>
                )
            case "planets":
                return(
                    <div>

                    </div>
                )
            case "vehicles":
                return(
                    <div>

                    </div>
                )
            default:
                return(
                    <div>
                        Loading...
                    </div>
                )
        }
        
    }
    useEffect(()=>{
        getDetails()
    },[])

    return(
        <div className="text-white">
            <div className="bg-dark text-center py-3 my-5">
                <h1>{
                    store.details.properties
                    ? store.details.properties.name
                    :"Loading..."
                }  
                </h1>
            </div>
            <div className="bg-dark text-center py-3">
                <h1>{
                    showDetails()
                }  
                </h1>
            </div>
        </div>
    )
}