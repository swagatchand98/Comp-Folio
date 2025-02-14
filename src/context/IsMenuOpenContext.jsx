import { createContext, useState } from "react";

export const IsMenuOpenContext = createContext(null);

export const IsMenuOpenContextProvider = ({children}) => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);


    const menuOpen = () => {

        setIsMenuOpen(!isMenuOpen);
    }

    return (
    <IsMenuOpenContext.Provider value={{isMenuOpen, menuOpen}}>
        {children}
    </IsMenuOpenContext.Provider>
        
    );
}

export default IsMenuOpenContextProvider;