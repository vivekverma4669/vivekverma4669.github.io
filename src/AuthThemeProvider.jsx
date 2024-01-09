import {  createContext, useState } from "react";

export const AuthTheme = createContext();

  const AuthThemeProvider = ({children})=>{
    const [theme, setTheme] = useState("day");

    const toggleTheme = () => {
      setTheme((prevTheme) => (prevTheme === "day" ? "night" : "day"));
    };

    return (
         <AuthTheme.Provider value={{ theme, toggleTheme}}>
         {children}
         </AuthTheme.Provider>
    )
}
export default AuthThemeProvider;