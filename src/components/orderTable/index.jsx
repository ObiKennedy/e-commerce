import React from "react";
import './index.scss'

export default function OrderTable({shipID, date, location, content, customer, status}){
    return(
        <div className="tables">
            <p>{shipID}</p>
            <p>{date}</p>
            <p>{location}</p>
            <p>
                <img src="/"/>
                <span>{content}</span>
            </p>
            <p>{customer}</p>
            <p className={status}>{status}</p>
        </div>
    )
}