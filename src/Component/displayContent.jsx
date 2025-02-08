import { createContext, memo, useState } from "react"

const dispalyContent = [
    
   [   {id:1, compPreview:"card 1", Title:"card", Description:"This is a card"},
        {id:2, compPreview:"card 2", Title:"card", Description:"This is a card"},
         {id:3, compPreview:"card 3", Title:"card", Description:"This is a card"},
        {id:4, compPreview:"card 4", Title:"card", Description:"This is a card"},
    ],
    [   {id:5, compPreview:"card 5", Title:"card", Description:"This is a card"},
        {id:6, compPreview:"card 6", Title:"card", Description:"This is a card"},
        {id:7, compPreview:"card 7", Title:"card", Description:"This is a card"},
        {id:8, compPreview:"card 8", Title:"card", Description:"This is a card"},
    ],
    [   {id:9, compPreview:"card 9", Title:"card", Description:"This is a card"},
        {id:10, compPreview:"card 10", Title:"card", Description:"This is a card"},
        {id:11, compPreview:"card 11", Title:"card", Description:"This is a card"},
        {id:12, compPreview:"card 12", Title:"card", Description:"This is a card"},
    ],
    [   {id: 13, compPreview:"card 13", Title:"card", Description:"This is a card"},
        {id: 14, compPreview:"card 14", Title:"card", Description:"This is a card"},
        {id: 15, compPreview:"card 15", Title:"card", Description:"This is a card"},
        {id: 16, compPreview:"card 16", Title:"card", Description:"This is a card"},
    ],
    [   {id:17, compPreview:"card 17", Title:"card", Description:"This is a card"},
        {id:18, compPreview:"card 18", Title:"card", Description:"This is a card"},
        {id:19, compPreview:"card 19", Title:"card", Description:"This is a card"},
        {id:20, compPreview:"card 20", Title:"card", Description:"This is a card"},
    ],
]

export const ContentContext = createContext();

export const ContentContextProvider = ({children}) => {

    const [currentSet, setCurrentSet] = useState(0);

    const contextValue = {
        cards: dispalyContent[currentSet],
        totalSets: dispalyContent.length,
        currentSet,
        setCurrentSet
    };

    return (
        <ContentContext.Provider value={contextValue}>
            {children}
        </ContentContext.Provider>

    );    
}


export default ContentContextProvider