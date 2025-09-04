import { Link } from "react-router-dom";

export const Card = (props) => (
	<div className="card h-100 position-relative">
        <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text">{props.name} is a {props.type} in STAR WARS</p>
            <Link to={"/details/" + props.type + "/" + props.uid}>
                <button className="btn btn-primary position-absolute bottom-0 start-50 translate-middle-x">Go to details</button>
            </Link>
        </div>
    </div>
);