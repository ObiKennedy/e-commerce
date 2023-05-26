import React from "react";
import './index.scss'

export default function List({ID,name,email,city,orders,spending}){
    return(
        <div className="list">
            <p>{ID}</p>
            <p>
                <span><img src="/"/> </span>
                {name}
            </p>
            <p>{email}</p>
            <p>{city}</p>
            <p>{orders} orders</p>
            <p>{spending}</p>
        </div>
    )
}