import { BrowserRouter } from "react-router-dom"
import SideBar from "../Component/sideBar"
import ContentSlider from "../Component/contentSlider"
import Header from "../Component/header"
import DisplayCardsContextProvider from "../context/DisplayCardsContext"
import IsMenuOpenContextProvider from "../context/IsMenuOpenContext"

const Home = () => {

    return <div className="md:flex bg-zinc-950">
        <DisplayCardsContextProvider>
            <IsMenuOpenContextProvider>
                 <BrowserRouter>
                 
                    <SideBar/>
                    <Header/>
                    <ContentSlider/>

                 </BrowserRouter>
            </IsMenuOpenContextProvider>
        </DisplayCardsContextProvider>
    </div>
}

export default Home

