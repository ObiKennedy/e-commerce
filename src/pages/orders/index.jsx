import React from "react";
import "./index.scss"
import Status from "../../components/status";
import { Link } from "react-router-dom";
import { useState } from "react";
import DateSelect from "../../components/dateSelect";

export default function Orders(){
    return(
        <div className="orders">
            <div  className="top">
                <DateSelect/>
                <div>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.96575 19.1035C4.94644 19.1035 0.862305 15.0194 0.862305 10.0001C0.862305 4.98074 4.94644 0.896606 9.96575 0.896606C14.9851 0.896606 19.0692 4.98074 19.0692 10.0001C19.0692 10.2195 18.982 10.43 18.8268 10.5852C18.6716 10.7404 18.4611 10.8276 18.2416 10.8276C18.0221 10.8276 17.8116 10.7404 17.6564 10.5852C17.5012 10.43 17.414 10.2195 17.414 10.0001C17.414 5.89274 14.0731 2.55178 9.96575 2.55178C5.85844 2.55178 2.51748 5.89274 2.51748 10.0001C2.51748 14.1074 5.85844 17.4483 9.96575 17.4483C11.94 17.4423 13.8323 16.6585 15.2325 15.2668C15.3877 15.1116 15.5982 15.0245 15.8176 15.0245C16.0371 15.0245 16.2475 15.1116 16.4027 15.2668C16.5579 15.422 16.6451 15.6325 16.6451 15.8519C16.6451 16.0714 16.5579 16.2818 16.4027 16.437C14.6916 18.1383 12.3787 19.0964 9.96575 19.1035Z" fill="white"/>
                    </svg>
                    refresh
                </div>
            </div>
            <div className="set">
                <div>
                    <p>Orders</p>
                    <input type="text" placeholder="Search order..."/>
                </div>
                <div className="topLinks">
                    <p><Link to={''}>All</Link></p>
                    <p><Link to={''}>Successful</Link></p>
                    <p><Link to={''}>Shipped</Link></p>
                    <p><Link to={''}>Cancelled</Link></p>
                    <p><Link to={''}>Refunded</Link></p>
                </div>
                <div>
                   <div>
                        <p>Shipping ID</p>
                        <p>Customer Name</p>
                        <p>Status</p>
                        <p>Date</p>
                        <p>Method</p>
                        <p>Price</p>
                        <p>Action</p>
                   </div>
                   <div>
                        <Status name={'Samantha Johnson'} stats={'deliverred'} shipId={'KJD-223'} date={'22 feb,2022'} price={'210.00'} method={'*****9067'}/> 
                   </div>
                </div>  
            </div>
        </div>
    )
}