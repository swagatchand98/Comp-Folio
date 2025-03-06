import './App.css'
import Home from './Screens/home'
import OtpBox from './Component/All Components/otpBox/otpBox'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'

function App() {
 
    return <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>}/>
    </Routes>
    </BrowserRouter>
}

export default App
