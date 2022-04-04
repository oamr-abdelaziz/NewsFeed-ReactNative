import React, {  useState } from "react";
import { themes } from "./themes";
import { ThemeContext } from "./themeContext";

const ThemeProvider=({children})=>{

    const [theme,setTheme]=useState(themes.dark);

    const toggleTheme=()=>{
        setTheme(PrevTheme=>PrevTheme==themes.light?themes.dark:themes.light);
    }

    return(
        <ThemeContext.Provider value={{theme,toggleTheme}} >
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;