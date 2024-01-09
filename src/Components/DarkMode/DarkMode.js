import React from "react";
import { ReactComponent as Sun } from "./Sun.svg";
import { ReactComponent as Moon } from "./Moon.svg";
import { AuthTheme } from "../../AuthThemeProvider";
import { useContext } from "react";
import "./DarkMode.css";

const DarkMode = () => {

    const {theme, toggleTheme } = useContext(AuthTheme);

    function changeTheme() {
     toggleTheme();
     console.log(theme);
    }
 
    return (
        <div className='dark_mode'>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
                onClick={changeTheme}
            />
            <label className='dark_mode_label' for='darkmode-toggle'>
                <Sun />
                <Moon />
            </label>
        </div>
    );
};

export default DarkMode;
