import { createContext,useContext } from "react";

export const ThemeContxet = createContext({
    themeMode: "light",
    darktheme: () =>{},
    lighttheme: () =>{}
})


export const ThemeProvider = ThemeContxet.Provider

export default function useTheme(){
    return useContext(ThemeContxet)
} 
