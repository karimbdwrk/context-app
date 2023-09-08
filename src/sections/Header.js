import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../App";

const Header = () => {
	const { theme } = useContext(ThemeContext);

	return (
		<header
			style={{
				backgroundColor: theme === "dark" ? "darkgray" : "lightgray",
			}}>
			<h1>Header</h1>
			<nav>
				<Link to='/'>Home</Link>
				<Link to='/about'>About</Link>
				<Link to='/contact'>Contact</Link>
			</nav>
		</header>
	);
};

export default Header;
