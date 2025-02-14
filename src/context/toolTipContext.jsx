import { createContext, useState } from "react"

export const ToolTipContext = createContext(null);

export const ToolTipContextProvider = ({children}) => {
    
    const [showToolTip, setShowToolTip] = useState(false);
    const [toolTipPosition, setToolTipPostion] = useState({x: 0, y:0});

    const handleMouseMove = (e) => {

       setToolTipPostion({
            x:e.clientX,
            y:e.clientY
        });
    };

    return( 
    <ToolTipContext.Provider value={{showToolTip, setShowToolTip, toolTipPosition, setToolTipPostion, handleMouseMove}}>
        {children}
    </ToolTipContext.Provider>
    );
}

export default ToolTipContextProvider;



