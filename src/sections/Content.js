import React, { useContext } from "react";
import { ThemeContext } from "../App";

const Content = () => {
	const { theme } = useContext(ThemeContext);

	return (
		<div className='content'>
			<h2>Contenu</h2>
			<p>Theme actuel : {theme}</p>
		</div>
	);
};

export default Content;
