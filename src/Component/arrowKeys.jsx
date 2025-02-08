import { IoMdArrowDropleftCircle, IoMdArrowDroprightCircle } from "react-icons/io";
import ContentContextProvider, { ContentContext } from "./displayContent";
import { useContext } from "react";

const PageSwitcher = () => {

    return <ContentContextProvider>
        <ArrowKeys/>
    </ContentContextProvider>
}

const ArrowKeys = () => {

    const {totalSets, setCurrentSet, currentSet} = useContext(ContentContext);

    return <div className="flex gap-5 pt-5 justify-center items-center">

        <div onClick={nextHandler(totalSets, setCurrentSet)}>
            <IoMdArrowDropleftCircle color="white" size={50}/>
        </div>

        <div onClick={prevHandler(totalSets, setCurrentSet, currentSet)}>
            <IoMdArrowDroprightCircle color="white" size={50}/>
        </div>
    </div>
}

const nextHandler = (totalSets, setCurrentSet) => {

    setCurrentSet(x => (x + 1) % totalSets)
}

const prevHandler = (totalSets, setCurrentSet, currentSet) => {

    currentSet === 0 ? setCurrentSet(x => x = totalSets) :  setCurrentSet(x => x = totalSets - 1)
}

export default PageSwitcher