import { useParams } from "react-router-dom"
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import React, {useEffect, useState} from "react";

export const Details = () => {
    const {store, dispatch} =useGlobalReducer()
    const {elementType,elementID} = useParams()
    const [details,setDetails] = useState([])

    const getDetails = () => {
        console.log(store.baseURL + elementType + "/" + elementID);
		fetch(store.baseURL + elementType + "/" + elementID)
		.then(
			(allDetails) => {
				return allDetails.json()
			}
		)
		.then(
			(data) => {
            console.log("Details:", store.details);
				dispatch({
                    type: "set-details",
                    payload: data.results
                });
            console.log("Details:", store.details);
			}
		)
	}
    useEffect(()=>{
        getDetails()
    },[])
    return(
        <div>
            <h1>DETAILS SITE</h1>
            {
                store.details.properties
                ? store.details.properties.name
                :"Loading..."
            }
        </div>
    )
}