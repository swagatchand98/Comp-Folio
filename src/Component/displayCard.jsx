import { useContext, useState } from "react"
import { ToolTipContext } from "../context/toolTipContext";
import ToolTip from "./toolTip";

const DisplayCard = ({compPreview, Title, Description}) => {

    const {showToolTip, setShowToolTip, handleMouseMove} = useContext(ToolTipContext);
    const [isTouched, setIsTouched] = useState(false);

    const handleOnTouch = () => {
        if(!isTouched){
            setIsTouched(true);
        }else {
            setIsTouched(false);
        }
    }

    return <div className={`group h-60 md:h-100 px-3 bg-[#130F0F] transition-all md:duration-400 duration-75
                           hover:border-1 hover:border-zinc-500 hover:shadow-[0px_0px_20px_5px_rgba(255,255,255,0.1)] 
                           ${isTouched ? "border-1 border-zinc-500 shadow-[0px_0px_20px_5px_rgba(255,255,255,0.2)]" : ""}`}
                           onMouseEnter={() => setShowToolTip(true)} onMouseLeave={() => setShowToolTip(false)} onMouseMove={handleMouseMove}
                           onTouchStart={handleOnTouch} onTouchEnd={handleOnTouch}
                           >
        
        
        <div className="flex justify-center items-center pt-5 cursor-pointer">
           <div className="w-screen h-40 md:h-80 bg-[#2F2F2F] flex justify-center items-center ">
               {compPreview}
           </div>
        </div>   
           <div className="flex justify-center items-center">
               <div>
                   {Title}
               </div>
               <div>
                   {Description}
               </div>
           </div>

        {showToolTip && <ToolTip/>}
    </div>
}

export default DisplayCard