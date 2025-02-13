import { memo, useContext, useEffect, useState } from "react";
import { DisplayCardsContext } from "../context/DisplayCardsContext";
import { IsMenuOpenContext } from "../context/IsMenuOpenContext";
import PageSwitcher from "./pageSwitcher";
import DisplayCard from "./displayCard"


const ContentSlider = memo(() => {

    const { currentCards } = useContext(DisplayCardsContext);

    //logic for tracking re-renders
     useEffect(() => {
        console.log("Content mounted");
        return () => console.log("Content unmounted");
    }, []);

    if (!currentCards) {
        return <div>Loading...</div>;
    }
    
    return (<div className="bg-radial from-stone-950 from-75% to-black w-full h-fit transition-transform md:h-screen md:w-390 ">

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