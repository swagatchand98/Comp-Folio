import { Link } from "react-router-dom"

const SideBar = () => {

    return <aside id="sidebar" className="top-0 left-0 z-40 w-90 h-screen transition-transform -translate-x-full sm:translate-x-0">
        <div className="h-full px-3 py-4 overflow-y-scroll bg-[#000202] ">
            <div className="flex justify-center items-center pb-5 my-x">
                <img className="h-12" src="/src/assets/logo.png" alt="CompFolio" />
            </div>

            <div >
                <ul className="space-y-2 font-mono text-white text-center tracking-[0.5em]">
                    <li className="p2 rounded p-3 hover:bg-[#2f2f2f]">
                        <Link to={"#"}>All Components</Link>
                    </li>

                    <li className="p2 rounded p-3 hover:bg-[#2f2f2f]">
                        <Link to={"/card"}>Card</Link>
                    </li>

                    <li className="p2 rounded p-3 hover:bg-[#2f2f2f]">
                        <Link to={"/button"}>Button</Link>
                    </li>

                    <li className="p2 rounded p-3 hover:bg-[#2f2f2f]">
                        <Link to={"/form"}>Form</Link>
                    </li>

                    <li className="p2 rounded p-3 hover:bg-[#2f2f2f]">
                        <Link to={"/backgrounds"}>Backgrounds</Link>
                    </li>

                    <li className="p2 rounded p-3 hover:bg-[#2f2f2f]">
                        <Link to={"/text"}>Text</Link>
                    </li>

                    <li className="p2 rounded p-3 hover:bg-[#2f2f2f]">
                        <Link to={"/loader"}>Loader</Link>
                    </li>

                    <li className="p2 rounded p-3 hover:bg-[#2f2f2f]">
                        <Link to={"/slider"}>Slider</Link>
                    </li>

                    <li className="p2 rounded p-3 hover:bg-[#2f2f2f]">
                        <Link to={"/linkPreview"}>Link Preview</Link>
                    </li>

                    <li className="p2 rounded p-3 hover:bg-[#2f2f2f]">
                        <Link to={"/navBAr"}>NavBar</Link>
                    </li>

                    <li className="p2 rounded p-3 hover:bg-[#2f2f2f]">
                        <Link to={"/iconsDock"}>Icons Dock</Link>
                    </li>

                    <li className="p2 rounded p-3 hover:bg-[#2f2f2f]">
                        <Link to={"/footer"}>Footer</Link>
                    </li>

                    <li className="p2 rounded p-3 hover:bg-[#2f2f2f]">
                        <Link to={"/popup"}>PopUp</Link>
                    </li>

                    <li className="p2 rounded p-3 hover:bg-[#2f2f2f]">
                        <Link to={"/otpBox"}>OTP box</Link>
                    </li>

                    <li className="p2 rounded p-3 hover:bg-[#2f2f2f]">
                        <Link to={"/profileBox"}>Profile Box</Link>
                    </li>

                    <li className="p2 rounded p-3 hover:bg-[#2f2f2f]">
                        <Link to={"/inputBox"}>Input Box</Link>
                    </li>

                    <li className="p2 rounded p-3 hover:bg-[#2f2f2f]">
                        <Link to={"/login&signup"}>Login & SignUp</Link>
                    </li>

                </ul>
            </div>
        </div>
    </aside>
}

export default SideBar 