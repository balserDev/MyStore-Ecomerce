import { createContext } from "react";
import { useState } from "react";
import SelectionSfx from '../sfx/SelectionSfx.mp3'
import { useEffect } from "react";

export const ShoppingContex = createContext({});



export function ShoppingContexProvider({ children }){
    const [cartLenght, UpdateCarLenght] = useState(0);
    const [carTotal, UpdateCarTotal] = useState(0);

    //Holds the data of how many of each items do we have
    const [carItems, UpdateCarItems] = useState({});
    //Saves a lsit of all the products
    const [products, updateProducts] = useState([]);
    
    useEffect(()=>{
            fetch('http://localhost:3005/products')
                .then(res=>{
                    let products = res.json();
                    return products
                })
                .then(data=>{
                    console.log(data);
                    updateProducts(data);
                })
    },[])

    function AddToCart(id, price){
        let audio = new Audio(SelectionSfx);
        audio.play();
        UpdateCarLenght((prev) => prev + 1)
        UpdateCarTotal((prev) => prev + price)
        if(carItems[id]){
            UpdateCarItems((prev)=>{
                prev[id] = prev[id] +1
                return prev
            }
             
            );
        }else{
            UpdateCarItems((prev)=>{
                prev[id] = 1
                return prev
            }
            );
        }
        
        console.log(carItems)
    }

    function RemovefromCart(id, price){
        let audio = new Audio(SelectionSfx);
        audio.play();
        UpdateCarLenght((prev) => prev - 1);
        UpdateCarTotal((prev) => prev - price);
        UpdateCarItems((prev)=>{
            prev[id] = prev[id] - 1;
            return prev
        })

    }

    function GoToCheckOut(){
        console.log("Tester");
        fetch('http://localhost:3005/check-out', {
            headers:{
                'Content-type':"application/json"
            },
            method: "POST",
            body: JSON.stringify({
                items:carItems
            }),
        })
        .then((res) => res.json())
        .then((data) => {
            console.log('My Sesion Url: ' + data.url)
            window.location.replace(data.url);
        });

    }

    const value ={
        products,
        cartLenght,
        carItems,
        AddToCart,
        carTotal,
        RemovefromCart,
        GoToCheckOut
    }

    return(
        <ShoppingContex.Provider value={value}>
            {children}
        </ShoppingContex.Provider>
    )
}