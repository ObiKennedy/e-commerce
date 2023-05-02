import React from "react";
import './index.scss'

export default function TableData({inProduct, outProduct, inPrice, outPrice, inSold, outSold}){
    return(
        <div className="tabledata">
            <div className="instock">
                <p>{inProduct}</p>
                <p>${inPrice}</p>
                <p>{inSold}</p>
                <p>In stock</p>
            </div>
            <div className="outofstock">
                <p>{outProduct}</p>
                <p>${outPrice}</p>
                <p>{outSold}</p>
                <p>Out of stock</p>
            </div>
        </div>
    )
}