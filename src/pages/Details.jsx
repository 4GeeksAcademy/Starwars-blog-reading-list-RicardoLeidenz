import { useParams } from "react-router-dom"
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useEffect, useState } from "react";
import { Person } from "../components/Person.jsx";
import { Planet } from "../components/Planet.jsx";
import { Vehicle } from "../components/Vehicle.jsx";

export const Details = () => {
    const {store, dispatch} =useGlobalReducer()
    const {elementType,elementID} = useParams()
    const [details, setDetails] = useState({})

    const getDetails = () => {
		fetch(store.baseURL + elementType + "/" + elementID)
		.then(
			(allDetails) => {
				return allDetails.json()
			}
		)
		.then(
			(data) => {
				setDetails(data.result)
			}
		)
	}
    const showDetails = () =>{
        switch (elementType){
            case "people":
                return(
                    <Person person={details.properties} />
                )
            case "planets":
                return(
                    <Planet planet={details.properties}/>
                )
            case "vehicles":
                return(
                    
                    <Vehicle vehicle={details.properties}/>
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
                    details.properties
                    ? details.properties.name
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