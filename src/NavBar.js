import React from "react";
import { Link, withRouter } from "react-router-dom";

//This is the singleton instance of the Auth class you just defined.
import auth0Client from "./Auth";

function NavBar(props) {
	const signOut = () => {
		auth0Client.logout();
		props.history.replace("/");
	};

	return (
		<nav className="navbar navbar-dark bg-primary fixed-top">
			<Link className="navbar-brand" to="/">
				Home
			</Link>
			{!auth0Client.isAuthenticated() && (
				<button className="btn btn-dark" onClick={auth0Client.login}>
					Login
				</button>
			)}
			{auth0Client.isAuthenticated() && (
				<div>
					<button
						className="btn btn-dark"
						onClick={() => {
							signOut();
						}}
					>
						Logout
					</button>
				</div>
			)}
		</nav>
	);
}

//withRouter is a component provided by React Router to enhance your component
//with navigation capabilities (e.g., access to the history object).
export default withRouter(NavBar);
