import React from "react";
import ProductShowCase from "./ProductShowCase";
import { ShoppingContex } from "../context/ShopingContext";
import { useContext } from "react";

function ProductsDisplay(){
    const {products} = useContext(ShoppingContex)
    
    return <div className="Display">
        {products.map((product => {
            return <ProductShowCase
            image={product.image}
            name={product.name}
            description={product.description}
            price={product.price}
            id={product.id}
            />
        }))}


    </div>
    }

export default ProductsDisplay