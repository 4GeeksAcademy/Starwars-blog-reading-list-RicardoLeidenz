import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import React, {useEffect, useState} from "react";
import { Card } from "../components/Card.jsx";
import { Jumbotron } from "../components/Jumbotron.jsx";

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
		<div className="text-center my-5">
			<Jumbotron></Jumbotron>
			<div className="row my-5 justify-content-center text-white" >
				<h1>People</h1>
				<img className="w-75 py-3" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c492f8a3-156e-401e-a3af-0bd563fb7ddd/decawt5-9a798d48-3cd3-4a23-8672-2b93f69da6c4.jpg/v1/fill/w_1280,h_720,q_75,strp/star_wars_by_revo_collage_decawt5-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvYzQ5MmY4YTMtMTU2ZS00MDFlLWEzYWYtMGJkNTYzZmI3ZGRkXC9kZWNhd3Q1LTlhNzk4ZDQ4LTNjZDMtNGEyMy04NjcyLTJiOTNmNjlkYTZjNC5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.QQe0v7eb2uEh-KpH1ypzuoQ63OPPZkWSkWCHe_pfDeU"/>
				<p>Find information on any character of the franchise!</p>
				<div className="d-flex rounded bg-dark py-5 scrollContainer">
					{
						store.people.length > 0 
						? store.people.map((person,index)=>{
							return(
								<div className="px-3" key={index}>
									<Card className="mx-3" type="people" name={person.name} url={person.url} uid={person.uid} />
								</div>
							)
						})
						: "Loading..."
					}
				</div>
			</div>
			<div className="row my-5 justify-content-center text-white" >
				<h1>Planets</h1>
				<img className="w-75 py-3" src="https://images.steamusercontent.com/ugc/2351510977210497310/15427147A5B49D7532EA30C3B4A39D704389178D/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false"/>
				<p>Find information on any character of the franchise!</p>
				<div className="d-flex rounded bg-dark py-5 scrollContainer">
					{
						store.planets.length > 0 
						? store.planets.map((planet,index)=>{
							return(
								<div className="px-3" key={index}>
									<Card type="planets" name={planet.name} url={planet.url} uid={planet.uid} />
								</div>
							)
						})
						: "Loading..."
					}
				</div>
			</div>
			<div className="row my-5 justify-content-center text-white" >
				<h1>Vehicles</h1>
				<img className="w-75 py-3" src="https://www.this-is-cool.co.uk/wp-content/uploads/2015/10/starwars-stamps-vehicles.jpeg"/>
				<p>Find information on any character of the franchise!</p>
				<div className="d-flex rounded bg-dark py-5 scrollContainer">
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
		</div>
	);
}; 