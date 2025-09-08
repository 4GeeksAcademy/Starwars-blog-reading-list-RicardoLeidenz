import { useParams } from "react-router-dom"
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useEffect, useState } from "react";
import { Person } from "../components/Person.jsx";
import { Planet } from "../components/Planet.jsx";
import { Vehicle } from "../components/Vehicle.jsx";

export const Details = () => {
    const {store, dispatch} =useGlobalReducer()
    //Catch the element type and the ID passed as parameters
    const {elementType,elementID} = useParams()

    //Used to fetch details to show on page depending on element type and ID
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
    //Creates a Person, Planet or Vehicle component depending on the parmeter passed
    const showDetails = () =>{
        switch (elementType){
            case "people":
                return(
                    <Person person={store.details.properties} uid={elementID} />
                )
            case "planets":
                return(
                    <Planet planet={store.details.properties} uid={elementID}/>
                )
            case "vehicles":
                return(
                    
                    <Vehicle vehicle={store.details.properties} uid={elementID}/>
                )
            default:
                return(
                    <div>
                        Loading...
                    </div>
                )
        }
        
    }
    //Calls get details when firs loaded to fetch the necesary information to fill the page
    useEffect(()=>{
        if (store.details.uid != elementID){
            getDetails();
        }
    });

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
                {showDetails()} 
            </div>
        </div>
    )
}