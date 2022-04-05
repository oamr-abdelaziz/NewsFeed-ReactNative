import React, {  useState } from "react";
import { themes } from "./themes";
import { ThemeContext } from "./themeContext";

const ThemeProvider=({children}:any)=>{

    const [theme,setTheme]=useState(themes.dark);

    const toggleTheme=():void=>{
        setTheme(PrevTheme=>PrevTheme==themes.light?themes.dark:themes.light);
    }

    return(
        <ThemeContext.Provider value={{theme,toggleTheme}} >
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;