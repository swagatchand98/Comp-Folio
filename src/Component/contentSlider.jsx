import { memo, useContext, useEffect, useState } from "react";
import { DisplayCardsContext } from "../context/DisplayCardsContext";
import { IsMenuOpenContext } from "../context/IsMenuOpenContext";
import PageSwitcher from "./pageSwitcher";
import DisplayCard from "./displayCard"
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

const ContentSlider = memo(() => {
    
    return <SliderContent/>
});

const SliderContent = memo(() => {

    const { currentCards } = useContext(DisplayCardsContext);
    const { isMenuOpen, menuOpen } = useContext(IsMenuOpenContext);

    //logic for tracking re-renders
     useEffect(() => {
        console.log("Content mounted");
        return () => console.log("Content unmounted");
    }, []);

    if (!currentCards) {
        return <div>Loading...</div>;
    }
    
    return (<div className="bg-radial from-stone-950 from-75% to-black w-full h-fit transition-transform md:h-screen md:w-390 ">

                <div className="flex justify-between items-center pt-5 px-4 md:hidden">
                    <div>
                        <img className="w-45" src="src/assets/logo.png" alt="logo" />
                    </div>
                    <div className="pr-4" onClick={menuOpen}>
                        { isMenuOpen ? <GiHamburgerMenu size={25} color="white"/> : <ImCross size={20} color="white"/> }
                    </div>
                </div>

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