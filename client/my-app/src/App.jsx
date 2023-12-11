import React from "react";
import { ShoppingContexProvider } from "./context/ShopingContext";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Market from "./pages/Market";
import ShoppingCarPage from "./pages/ShoppingCarPage";
import Footer from "./components/Footrer";
import Register from "./pages/Register";

function App(){

  
    return <div>
        <ShoppingContexProvider>
            <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<Register/>}></Route>
                            <Route path="/Market" element={<Market/>}></Route>
                            <Route path="/car" element={<ShoppingCarPage/>}></Route>
                            <Route path="*" element={<h1>Page Not Found</h1>}></Route>
                        </Routes>
            </BrowserRouter>
        </ShoppingContexProvider>
            
        <Footer></Footer>
        
    </div>
}

export default App;