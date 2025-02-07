import SideBar from "../Component/sideBar"
import ContentSlider from "../Component/contentSlider"
import { BrowserRouter } from "react-router-dom"

const Home = () => {

    return <div className="flex h-screen ">
        <BrowserRouter>
                      <div >
                           <SideBar/>
                      </div>

                      <div className="">
                           <ContentSlider/>
                      </div>
        </BrowserRouter>
    </div>
}

export default Home

