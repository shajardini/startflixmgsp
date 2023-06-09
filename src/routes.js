import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Filme from "./pages/filme";
import Header from "./components/header";
import Footer from "./components/footer";
import Favoritos from "./pages/favoritos";

function RotasApp(){
    return(
       <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/filme/:id' element={<Filme/>}/>
                <Route path='/favoritos' element={<Favoritos/>}/>
            </Routes>
            <Footer/>
       
       
       </BrowserRouter>
    )
}

export default RotasApp


