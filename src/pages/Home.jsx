import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import React, {useEffect, useState} from "react";
import { Card } from "../components/Card.jsx";

export const Home = () => {

  const {store, dispatch} =useGlobalReducer()

	const getPeople = () => {
		fetch(store.baseURL + "people")
		.then(
			(allPeople) => {
				return allPeople.json()
			}
		)
		.then(
			(data) => {
				dispatch({
                    type: "set-people",
                    payload: data.results
                });
			}
		)
	}
	const getPlanets = () => {
		fetch(store.baseURL + "planets")
		.then(
			(allPanets) => {
				return allPanets.json()
			}
		)
		.then(
			(data) => {
				dispatch({
                    type: "set-planets",
                    payload: data.results
                });
			}
		)
	}
	const getVehicles = () => {
		fetch(store.baseURL + "vehicles")
		.then(
			(allVehicles) => {
				return allVehicles.json()
			}
		)
		.then(
			(data) => {
				dispatch({
                    type: "set-vehicles",
                    payload: data.results
                });
			}
		)
	}

	useEffect(()=>{
		getPeople();
		getPlanets();
		getVehicles();
	},[])

	return (
		<div className="text-center mt-5">
			<h1>People</h1>
			<div className="d-flex justify-content-center bg-light p-5 scrollContainer">
				{
					store.people.length > 0 
					? store.people.map((person,index)=>{
						return(
							<div className="px-3" key={index}>
								<Card className="m-3" type="people" name={person.name} url={person.url} uid={person.uid} />
							</div>
						)
					})
					: "Loading..."
				}
			</div>
			<h1>Planets</h1>
			<div className="d-flex justify-content-center bg-light p-5 scrollContainer">
				{
					store.planets.length > 0 
					? store.planets.map((planet,index)=>{
						return(
							<div className="px-3" key={index}>
								<Card className="m-3" type="planets" name={planet.name} url={planet.url} uid={planet.uid} />
							</div>
						)
					})
					: "Loading..."
				}
			</div>
			<h1>Vehicles</h1>
			<div className="d-flex justify-content-center bg-light p-5 scrollContainer">
				{
					store.vehicles.length > 0 
					? store.vehicles.map((vehicle,index)=>{
						return(
							<div className="px-3" key={index}>
								<Card className="m-3" type="vehicles" name={vehicle.name} url={vehicle.url} uid={vehicle.uid} />
							</div>
						)
					})
					: "Loading..."
				}
			</div>
			

		</div>
	);
}; 