import { Link } from "react-router-dom"

const SideBar = () => {

    return <aside id="sidebar" className="top-0 left-0 z-40 w-90 h-screen transition-transform -translate-x-full sm:translate-x-0">
        <div className="h-full px-3 py-4 overflow-y-auto bg-[#000202]">
            <div className="flex justify-center items-center pb-5 my-x">
                <img className="h-12" src="/src/assets/logo.png" alt="CompFolio" />
            </div>

            <div >
                <ul className="space-y-2 font-mono text-white text-center tracking-[0.5em]">
                    <li className="p2 rounded p-3 hover:bg-[#2f2f2f]">
                        <Link to={"#"}>All Components</Link>
                    </li>

                    <li className="p2 rounded p-3 hover:bg-[#2f2f2f]">
                        <Link to={"#"}>Card</Link>
                    </li>

                    <li className="p2 rounded p-3 hover:bg-[#2f2f2f]">
                        <Link to={"#"}>Button</Link>
                    </li>

                    <li className="p2 rounded p-3 hover:bg-[#2f2f2f]">
                        <Link to={"#"}>Form</Link>
                    </li>

                    <li className="p2 rounded p-3 hover:bg-[#2f2f2f]">
                        <Link to={"#"}>Backgrounds</Link>
                    </li>

                    <li className="p2 rounded p-3 hover:bg-[#2f2f2f]">
                        <Link to={"#"}>Text</Link>
                    </li>

                    <li className="p2 rounded p-3 hover:bg-[#2f2f2f]">
                        <Link to={"#"}>Loader</Link>
                    </li>

                    <li className="p2 rounded p-3 hover:bg-[#2f2f2f]">
                        <Link to={"#"}>Slider</Link>
                    </li>

                    <li className="p2 rounded p-3 hover:bg-[#2f2f2f]">
                        <Link to={"#"}>Link Preview</Link>
                    </li>

                    <li className="p2 rounded p-3 hover:bg-[#2f2f2f]">
                        <Link to={"#"}>NavBar</Link>
                    </li>

                    <li className="p2 rounded p-3 hover:bg-[#2f2f2f]">
                        <Link to={"#"}>Icons Dock</Link>
                    </li>

                    <li className="p2 rounded p-3 hover:bg-[#2f2f2f]">
                        <Link to={"#"}>Footer</Link>
                    </li>

                    <li className="p2 rounded p-3 hover:bg-[#2f2f2f]">
                        <Link to={"#"}>PopUp</Link>
                    </li>

                    <li className="p2 rounded p-3 hover:bg-[#2f2f2f]">
                        <Link to={"#"}>OTP box</Link>
                    </li>

                    <li className="p2 rounded p-3 hover:bg-[#2f2f2f]">
                        <Link to={"#"}>Profile Box</Link>
                    </li>

                    <li className="p2 rounded p-3 hover:bg-[#2f2f2f]">
                        <Link to={"#"}>Input</Link>
                    </li>

                    <li className="p2 rounded p-3 hover:bg-[#2f2f2f]">
                        <Link to={"#"}>Login & SignUp</Link>
                    </li>

                </ul>
            </div>
        </div>
    </aside>
}

export default SideBar 