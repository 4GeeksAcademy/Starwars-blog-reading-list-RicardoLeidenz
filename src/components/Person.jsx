export const Person = (props) => (
    <div>
        <div className="row bg-dark justify-content-center">
            <img className="w-25" src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/refs/heads/master/public/images/people/${props.uid}.jpg`}/>
        </div>
        <div className="row bg-dark text-white pb-3">
            <h3>Properties:</h3>
        </div>
        <div className="row bg-dark text-white border border-light">
            <div className="col-4 border border-top-0 border-light">
                <p className=""><strong>Name: </strong>{
                    props.person
                    ? props.person.name
                    :"Loading..."
                }</p>
            </div>
            <div className="col-4 border border-top-0 border-light">
                <p className=""><strong>Gender: </strong>{
                    props.person
                    ? props.person.gender
                    :"Loading..."
                }</p>
            </div>
            <div className="col-4 border border-top-0 border-light">
                <p className=""><strong>Birth Year </strong>{
                    props.person
                    ? props.person.birth_year
                    :"Loading..."
                }</p>
            </div>
        </div>
        <div className="row bg-dark text-white border border-light">
            <div className="col-4 border border-top-0 border-light">
                <p className=""><strong>Hair Color: </strong>{
                    props.person
                    ? props.person.hair_color
                    :"Loading..."
                }</p>
            </div>
            <div className="col-4 border border-top-0 border-light">
                <p className=""><strong>Height: </strong>{
                    props.person
                    ? props.person.height
                    :"Loading..."
                }</p>
            </div>
            <div className="col-4 border border-top-0 border-light">
                <p className=""><strong>Mass: </strong>{
                    props.person
                    ? props.person.mass
                    :"Loading..."
                }</p>
            </div>
        </div>
    </div>
); 