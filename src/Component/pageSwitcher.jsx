import { IoMdArrowDropleftCircle, IoMdArrowDroprightCircle } from "react-icons/io";
import { DisplayCardsContext } from "../context/DisplayCardsContext";
import { useContext, memo, useCallback } from "react";

const PageSwitcher = () => {

    return <ArrowKeys/>
}

const ArrowKeys = memo(() => {

    const {totalSets, setCurrentSet, setDisplayContent} = useContext(DisplayCardsContext);

    const nextHandler = useCallback(() => {
        setCurrentSet(x => (x + 1) % totalSets);
        setDisplayContent

    }, [totalSets, setCurrentSet]);
    
    const prevHandler = useCallback(() => {
        setCurrentSet(x => x === 0 ? totalSets - 1 : x - 1);
    }, [totalSets, setCurrentSet]);

    return <div className="flex gap-10 pt-5 justify-center items-center">

        <div className="cursor-pointer" onClick={prevHandler}>
            <IoMdArrowDropleftCircle color="white" size={50}/>
        </div>

        <div className="cursor-pointer" onClick={nextHandler}>
            <IoMdArrowDroprightCircle color="white" size={50}/>
        </div>
    </div>
})



export default PageSwitcher