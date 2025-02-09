import { memo, useContext, useEffect, useState } from "react";
import DisplayCard from "./displayCard"
import { ContentContextProvider, ContentContext } from "./displayContent";
import PageSwitcher from "./pageSwitcher";

const ContentSlider = memo(() => {
    console.log("ContentSlider render");
    return (
        <ContentContextProvider>
            <SliderContent/>
        </ContentContextProvider>
    );
});

const SliderContent = memo(() => {

    const { cards } = useContext(ContentContext);
    

 
     useEffect(() => {
        console.log("Content mounted");
        return () => console.log("Content unmounted");
    }, []);

    if (!cards) {
        return <div>Loading...</div>;
    

    }
    
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