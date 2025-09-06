import { Link } from "react-router-dom";
import { Favorites } from "./Favorites";
export const Navbar = () => {

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="float-start">
				<Link to="/">
					<span className="navbar-brand m-5 h1">STAR WARS DATABANK</span>
				</Link>
			</div>
			<div className="float-end me-5">
				<Favorites/>
			</div>
		</nav>
	);
};