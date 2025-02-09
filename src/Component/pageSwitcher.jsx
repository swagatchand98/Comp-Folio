import { IoMdArrowDropleftCircle, IoMdArrowDroprightCircle } from "react-icons/io";
import ContentContextProvider, { ContentContext } from "./displayContent";
import { useContext, memo, useCallback } from "react";

const PageSwitcher = () => {

    return <ContentContextProvider>
        <ArrowKeys/>
    </ContentContextProvider>
}

const ArrowKeys = memo(() => {

    const {totalSets, setCurrentSet, currentSet} = useContext(ContentContext);

    console.log(currentSet)

    const nextHandler = useCallback(() => {
        setCurrentSet(x => (x + 1) % totalSets);
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