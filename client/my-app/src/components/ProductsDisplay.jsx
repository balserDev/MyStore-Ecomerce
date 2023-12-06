import React from "react";
import ProductShowCase from "./ProductShowCase";
import products from "../data/products";
import { useState } from "react";
import { carContext } from "../context/ShopingContext";


function ProductsDisplay(){


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