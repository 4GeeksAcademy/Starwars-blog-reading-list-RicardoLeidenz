export const Vehicle = (props) => (
    <div>
        <div className="row bg-dark justify-content-center">
            {/* Updates image to right one based on element ID passed as a prop */}
            <img className="w-25" src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/refs/heads/master/public/images/vehicles/${props.uid}.jpg`}/>
        </div>
        <div className="row bg-dark text-white pb-3">
            <h3>Properties:</h3>
        </div>
        {/* Updates information showned based on details fetches and passed as a prop */}
        <div className="row bg-dark text-white border border-light">
            <div className="col-4 border border-top-0 border-light">
                <p className=""><strong>Name: </strong>{
                    props.vehicle
                    ? props.vehicle.name
                    :"Loading..."
                }</p>
            </div>
            <div className="col-4 border border-top-0 border-light">
                <p className=""><strong>Cargo Capacity: </strong>{
                    props.vehicle
                    ? props.vehicle.cargo_capacity
                    :"Loading..."
                }</p>
            </div>
            <div className="col-4 border border-top-0 border-light">
                <p className=""><strong>Cost In Credits: </strong>{
                    props.vehicle
                    ? props.vehicle.cost_in_credits
                    :"Loading..."
                }</p>
            </div>
        </div>
        <div className="row bg-dark text-white border border-light">
            <div className="col-4 border border-top-0 border-light">
                <p className=""><strong>Manufacturer: </strong>{
                    props.vehicle
                    ? props.vehicle.manufacturer
                    :"Loading..."
                }</p>
            </div>
            <div className="col-4 border border-top-0 border-light">
                <p className=""><strong>Crew: </strong>{
                    props.vehicle
                    ? props.vehicle.crew
                    :"Loading..."
                }</p>
            </div>
            <div className="col-4 border border-top-0 border-light">
                <p className=""><strong>Class: </strong>{
                    props.vehicle
                    ? props.vehicle.vehicle_class
                    :"Loading..."
                }</p>
            </div>
        </div>
    </div>
); 