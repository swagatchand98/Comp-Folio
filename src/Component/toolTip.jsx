import { useContext } from "react";
import { ToolTipContext } from "../context/toolTipContext";

const ToolTip = () => {

    const {toolTipPosition} = useContext(ToolTipContext);

    return <div className="fixed pointer-events-none bg-black text-white px-2 py-1 rounded text-sm"
    style={{
        left: `${toolTipPosition.x + 10}px`,
        top: `${toolTipPosition.y + 20}px`,
        transform: 'translate(0, 0)',
        zIndex: 50
    }}>
        Click me
    </div>
}

export default ToolTip;