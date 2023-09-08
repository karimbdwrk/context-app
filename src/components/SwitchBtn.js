import React, { useContext } from "react";
import { ThemeContext } from "../App";

const ThemeSwitchBtn = () => {
	const { toggleTheme } = useContext(ThemeContext);

	return <button onClick={toggleTheme}>Switch theme</button>;
};

export default ThemeSwitchBtn;
