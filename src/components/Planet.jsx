export const Planet = (props) => (
    <div>
        <div className="row bg-dark justify-content-center">
            <img className="w-25" src="https://scx2.b-cdn.net/gfx/news/hires/2015/whatsimporta.jpg" ></img>
        </div>
        <div className="row bg-dark text-white pb-3">
            <h3>Properties:</h3>
        </div>
        <div className="row bg-dark text-white border border-light">
            <div className="col-4 border border-top-0 border-light">
                <p className=""><strong>Name: </strong>{
                    props.planet
                    ? props.planet.name
                    :"Loading..."
                }</p>
            </div>
            <div className="col-4 border border-top-0 border-light">
                <p className=""><strong>Climate: </strong>{
                    props.planet
                    ? props.planet.climate
                    :"Loading..."
                }</p>
            </div>
            <div className="col-4 border border-top-0 border-light">
                <p className=""><strong>Gravity: </strong>{
                    props.planet
                    ? props.planet.gravity
                    :"Loading..."
                }</p>
            </div>
        </div>
        <div className="row bg-dark text-white border border-light">
            <div className="col-4 border border-top-0 border-light">
                <p className=""><strong>Orbital Period: </strong>{
                    props.planet
                    ? props.planet.name
                    :"Loading..."
                }</p>
            </div>
            <div className="col-4 border border-top-0 border-light">
                <p className=""><strong>Population: </strong>{
                    props.planet
                    ? props.planet.population
                    :"Loading..."
                }</p>
            </div>
            <div className="col-4 border border-top-0 border-light">
                <p className=""><strong>Terrain: </strong>{
                    props.planet
                    ? props.planet.terrain
                    :"Loading..."
                }</p>
            </div>
        </div>
    </div>
); 