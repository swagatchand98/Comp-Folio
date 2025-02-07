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
                        <Link >All Components</Link>
                    </li>

                    <li className="p2 rounded p-3 hover:bg-[#2f2f2f]">
                        <Link>Card</Link>
                    </li>

                    <li className="p2 rounded p-3 hover:bg-[#2f2f2f]">
                        <Link>Button</Link>
                    </li>

                    <li className="p2 rounded p-3 hover:bg-[#2f2f2f]">
                        <Link>Form</Link>
                    </li>

                    <li className="p2 rounded p-3 hover:bg-[#2f2f2f]">
                        <Link>Backgrounds</Link>
                    </li>

                    <li className="p2 rounded p-3 hover:bg-[#2f2f2f]">
                        <Link>Text</Link>
                    </li>

                    <li className="p2 rounded p-3 hover:bg-[#2f2f2f]">
                        <Link>Loader</Link>
                    </li>

                    <li className="p2 rounded p-3 hover:bg-[#2f2f2f]">
                        <Link>Slider</Link>
                    </li>

                    <li className="p2 rounded p-3 hover:bg-[#2f2f2f]">
                        <Link>Link Preview</Link>
                    </li>

                    <li className="p2 rounded p-3 hover:bg-[#2f2f2f]">
                        <Link>NavBar</Link>
                    </li>

                    <li className="p2 rounded p-3 hover:bg-[#2f2f2f]">
                        <Link>Icons Dock</Link>
                    </li>

                    <li className="p2 rounded p-3 hover:bg-[#2f2f2f]">
                        <Link>Footer</Link>
                    </li>

                    <li className="p2 rounded p-3 hover:bg-[#2f2f2f]">
                        <Link>PopUp</Link>
                    </li>

                    <li className="p2 rounded p-3 hover:bg-[#2f2f2f]">
                        <Link>OTP box</Link>
                    </li>

                    <li className="p2 rounded p-3 hover:bg-[#2f2f2f]">
                        <Link>Profile Box</Link>
                    </li>

                    <li className="p2 rounded p-3 hover:bg-[#2f2f2f]">
                        <Link>Input</Link>
                    </li>

                    <li className="p2 rounded p-3 hover:bg-[#2f2f2f]">
                        <Link>Login & SignUp</Link>
                    </li>

                </ul>
            </div>
        </div>
    </aside>
}

export default SideBar 