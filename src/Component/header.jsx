import { useContext } from "react";
import { IsMenuOpenContext } from "../context/IsMenuOpenContext";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

const Header = () => {

    const { isMenuOpen, menuOpen } = useContext(IsMenuOpenContext);

    return <div className="flex justify-between items-center py-5 px-4 bg-transparent backdrop-blur-3xl sticky top-0 z-20 md:hidden">

          <div>
              <img className="w-45" src="src/assets/logo.png" alt="logo" />
          </div>
          <div className="pr-4" onClick={menuOpen}>
              { isMenuOpen ? <GiHamburgerMenu size={25} color="white"/> : <ImCross size={20} color="white"/> }
          </div>

    </div>
}

export default Header;