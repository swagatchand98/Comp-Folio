import { memo, useContext, useEffect, useState } from "react";
import DisplayCard from "./displayCard"
import { ContentContextProvider, ContentContext } from "./displayContent";
import PageSwitcher from "./arrowKeys";

const ContentSlider = () => {
    console.log("ContentSlider render");
    return (
        <ContentContextProvider>
            <Content />
        </ContentContextProvider>
    );
};

const Content = memo(() => {

    const { cards } = useContext(ContentContext);
    
    //this is the logic for tracking renders if you see the console y'll find that 
    //this compenent re mounting then unmounting then once more its mounting (doublme rerender)
    // const [mounted, setMounted] = useState(false);
    // useEffect(() => {
    //     setMounted(true);
    //     console.log("Content initially mounted");
        
    //     return () => {
    //         console.log("Content finally unmounted");
    //     };
    // }, []);
    // useEffect(() => {
    //     if (mounted) {
    //         console.log("Cards updated:", cards?.length);
    //     }
    // }, [cards, mounted]);

    // if (!cards) {
    //     return <div>Loading...</div>;
    // }

    
    return (<div className="bg-radial from-stone-950 from-75% to-black h-screen w-390">
                <div className="grid grid-cols-2 grid-rows-2 gap-x-10 gap-y-10 pt-7 px-5 ">
            
                 {cards.map((card) => (
                            <DisplayCard
                                key={card.id}
                                compPreview={card.compPreview}
                                Title={card.Title}
                                Description={card.Description}
                            />
                        ))}    
                </div>

                <div>
                    <PageSwitcher/>   
                </div>
            </div>
    );
})

export default ContentSlider