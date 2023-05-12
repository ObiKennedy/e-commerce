import React from "react";
import './index.scss'

export default function ProductList({prodID,item,type,price,sold,sales}){
    return(
        <div className="prodlist">
            <p>{prodID}</p>
            <p>
                <span><img src="/"/></span>
                {item}
            </p>
            <p className={type}>{type}</p>
            <p>${price}</p>
            <p>{sold}</p>
            <p>${sales}</p>
        </div>
    )
}