import React from "react";
import './index.scss'

export default function TableData({name,price,sold,status}){
    return(
        <div className={status ==='in stock'?'inStock':'outOfStock'}>
            <p>
                <img src="/"/>
                {name}
            </p>
            <p>${price}</p>
            <p>{sold}</p>
            <p>{status}</p>
        </div>
    )
}