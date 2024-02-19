import React, { useContext } from "react";
import { ReactComponent as Sun } from "./Sun.svg";
import { ReactComponent as Moon } from "./Moon.svg";
import { AuthTheme } from "../../AuthThemeProvider";
import "./DarkMode.css";

const DarkMode = () => {
    const { toggleTheme } = useContext(AuthTheme);

    const changeTheme = () => {
        toggleTheme();
    };
    return (
        <div className='dark_mode'>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
                onChange={changeTheme}
            />
            <label className='dark_mode_label' for='darkmode-toggle'>
                <Sun />
                <Moon />
            </label>
        </div>
    );
};

export default DarkMode;
