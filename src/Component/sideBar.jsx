import React, { useContext } from "react"
import { IsMenuOpenContext } from "../context/IsMenuOpenContext"
import { Link } from "react-router-dom"
import navBar from "../data/navBar"

const SideBar = () => {

    const { isMenuOpen } = useContext(IsMenuOpenContext)

    return <aside id="sidebar" className={`z-40 w-65 h-screen fixed transition-transform -translate-x-full md:translate-x-0 md:h-screen md:w-90 md:static ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="h-full pl-3 mr-2 py-4 overflow-y-scroll bg-[#000202] md:scrollbar-hide md:border-zinc-600 md:border-r-2 ">
            <div className="justify-center items-center pb-5 my-x hidden md:flex">
                <img className="h-12" src="/src/assets/logo.png" alt="CompFolio" />
            </div>

            <div >
                <ul className="space-y-2 font-mono text-white text-center tracking-[0.5em]">
                    
                {navBar.map((nav) => (  
                    <NavItem path={nav.path} label={nav.label} key={nav.path}/>
                ))}

                </ul>
            </div>
        </div>
    </aside>
}

const NavItem = ({path, label}) => {

    return <li className="p2 rounded p-3 transition-all duration-200 hover:bg-[#2f2f2f]">
    <Link to={path}>{label}</Link>
    </li>
}

export default React.memo(SideBar); 