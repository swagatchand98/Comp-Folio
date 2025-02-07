import { memo, useContext, useEffect } from "react";
import DisplayCard from "./displayCard"
import { ContentContextProvider, ContentContext } from "./displayContent";

const ContentSlider = () => {
    return (
        <ContentContextProvider>
            <Content />
        </ContentContextProvider>
    );
};

const Content = memo(() => {

    const { cards } = useContext(ContentContext);

    useEffect(() => {
        // Add render count to track component lifecycle
        const timestamp = new Date().toISOString();
        console.log(`[${timestamp}] Content mounted with ${cards?.length} cards`);
        
        return () => {
            console.log(`[${timestamp}] Content unmounted`);
        };
    }, []);
    
    return (
    <div className="grid grid-cols-2 grid-rows-2 gap-x-10 pt-5 px-5 bg-radial from-stone-950 from-75% to-black h-screen w-390">

     {cards.map((card) => (
                <DisplayCard
                    key={card.id}
                    compPreview={card.compPreview}
                    Title={card.Title}
                    Description={card.Description}
                />
            ))}    
    </div>
    );
})

export default ContentSlider