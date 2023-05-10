import React from "react";
import "./index.scss"
import { useState } from "react";
import { redirect } from "react-router-dom";

export default function Status({stats, name,}){
    
    return(
        <div>
            <div>
                <img src="/"/>
            </div>
            <div>
                <p className={[stats === 'successful'?'success':stats]}>{name}</p>
                <p>{stats}</p>
            </div>
        </div>
    )
}