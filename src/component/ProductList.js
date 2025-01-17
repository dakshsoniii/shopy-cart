import React from 'react';
import Product from "./Product"

export default function ProductList(props) {
    return (
        props.productList.map((product)=>{
          return <Product product={product}/> 
        })
    )
}