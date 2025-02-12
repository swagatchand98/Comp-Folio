import SideBar from "../Component/sideBar"
import ContentSlider from "../Component/contentSlider"
import { BrowserRouter } from "react-router-dom"
import DisplayCardsContextProvider from "../context/DisplayCardsContext"

const Home = () => {

    return <div className="flex h-screen ">
        <DisplayCardsContextProvider>
                             <BrowserRouter>
                                             <SideBar/>
                                             <ContentSlider/>
                             </BrowserRouter>
        </DisplayCardsContextProvider>
    </div>
}

export default Home

