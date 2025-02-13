import SideBar from "../Component/sideBar"
import ContentSlider from "../Component/contentSlider"
import { BrowserRouter } from "react-router-dom"
import DisplayCardsContextProvider from "../context/DisplayCardsContext"
import IsMenuOpenContextProvider from "../context/IsMenuOpenContext"

const Home = () => {

    return <div className="flex h-screen ">
        <DisplayCardsContextProvider>
            <IsMenuOpenContextProvider>
                 <BrowserRouter>
                 
                    <SideBar/>
                    <ContentSlider/>

                 </BrowserRouter>
            </IsMenuOpenContextProvider>
        </DisplayCardsContextProvider>
    </div>
}

export default Home

