import React from "react";
import { ShoppingContexProvider } from "./context/ShopingContext";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Market from "./pages/Market";
import ShoppingCarPage from "./pages/ShoppingCarPage";
import Footer from "./components/Footrer";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Succses from "./pages/Succes";
import { UserContextProvider } from "./context/UserContext";
import Fail from "./pages/Fail";
function App(){

    return <div>
        <ShoppingContexProvider>
        <UserContextProvider>
            <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<Market/>}></Route>
                            <Route path="/register" element={<Register/>}></Route>
                            <Route path="/login" element={<Login/>}></Route>
                            <Route path="/car" element={<ShoppingCarPage/>}></Route>
                            <Route path="/payment-succes" element={<Succses></Succses>}></Route>
                            <Route path="/payment-error" element={<Fail></Fail>}></Route>
                            <Route path="*" element={<h1>Page Not Found</h1>}></Route>
                        </Routes>
            </BrowserRouter>
        </UserContextProvider>
        </ShoppingContexProvider>
            
        <Footer></Footer>
        
    </div>
}

export default App;