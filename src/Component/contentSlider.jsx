import { memo, useContext, useEffect, useState } from "react";
import DisplayCard from "./displayCard"
import { ContentContextProvider, ContentContext } from "./displayContent";
import PageSwitcher from "./pageSwitcher";

const ContentSlider = memo(() => {
    
    return (
        <ContentContextProvider>
            <SliderContent/>
        </ContentContextProvider>
    );
});

const SliderContent = memo(() => {

    const { currentCards } = useContext(ContentContext);

    //logic for tracking re-renders
     useEffect(() => {
        console.log("Content mounted");
        return () => console.log("Content unmounted");
    }, []);

    if (!currentCards) {
        return <div>Loading...</div>;
    }
    
    return (<div className="bg-radial from-stone-950 from-75% to-black h-fit md:h-screen md:w-390 transition-transform -translate-x-66 md:translate-x-0">
                <div className="grid grid-cols-1 w-screen gap-y-10 p-10 md:w-auto md:grid md:grid-cols-2 md:grid-rows-2 md:gap-x-10 md:gap-y-10 md:pt-7 md:px-5 md:p-0 ">
            
                 {currentCards.map((card) => (
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