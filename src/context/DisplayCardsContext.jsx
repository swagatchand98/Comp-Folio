import { createContext, memo, useMemo, useState } from "react"
import displayCardsArray from "../data/displayContent";

export const DisplayCardsContext = createContext(null);

export const DisplayCardsContextProvider = memo(({children}) => {

    const [dispalyContent, setDisplayContent] = useState(displayCardsArray);

    const cardsPerPage = 4;
    const [currentSet, setCurrentSet] = useState(0);

    const currentCards = dispalyContent.slice(

        currentSet * cardsPerPage,
        (currentSet + 1) * cardsPerPage 
    );

    const totalSets = Math.ceil(dispalyContent.length / cardsPerPage)

    const contextValue = useMemo(() => ({
        currentCards,
        totalSets,
        currentSet,
        setCurrentSet,
    }), [currentSet, dispalyContent]);


    return (
        <DisplayCardsContext.Provider value={contextValue}>
            {children}
        </DisplayCardsContext.Provider>

    );    
})


export default DisplayCardsContextProvider;