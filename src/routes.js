import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Filme from "./pages/filme";
import Header from "./components/header";
import Footer from "./components/footer";

function RotasApp(){
    return(
       <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/filme/:id' element={<Filme/>}/>
            </Routes>
            <Footer/>
       
       
       </BrowserRouter>
    )
}

export default RotasApp


