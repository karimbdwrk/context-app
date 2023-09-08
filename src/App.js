import React, { useState, useEffect, createContext, useContext } from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	RouterProvider,
	Link,
} from "react-router-dom";
import Header from "./sections/Header";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

import "./App.css";

export const ThemeContext = createContext();

const Footer = () => <footer>Pied de page</footer>;

const App = () => {
	const [theme, setTheme] = useState(
		localStorage.getItem("theme") || "light"
	);

	const toggleTheme = () => {
		const newTheme = theme === "dark" ? "light" : "dark";
		setTheme(newTheme);

		localStorage.setItem("theme", newTheme);
	};

	useEffect(() => {
		const storedTheme = localStorage.getItem("theme");
		if (storedTheme) {
			setTheme(storedTheme);
		}
	}, []);
	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			<Router>
				<div className={"App " + theme}>
					<Header />
					<Routes>
						<Route path='/' element={<HomePage />} />
						<Route path='/about' element={<AboutPage />} />
						<Route path='/contact' element={<ContactPage />} />
					</Routes>
					<Footer />
				</div>
			</Router>
		</ThemeContext.Provider>
	);
};

export default App;
