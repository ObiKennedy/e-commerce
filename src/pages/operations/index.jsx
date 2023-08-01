import React from "react";
import './index.scss'
import { Link } from "react-router-dom";
import OrderTable from "../../components/orderTable";

export default function Operation(){
    return(
        <div className="operation">
            <div className="buttons">
                <Link to={'/operation'} className="active">Shipping</Link>
                <Link to={'/Operations'}>Inventory</Link>
            </div>
            <div className="table">
                <div>
                    <h3>Shipping Status</h3>
                    <input type="text" placeholder="Search order..."/>
                </div>
                <div>
                    <p>All</p>
                    <p>Pending</p>
                    <p>Shipped</p>
                    <p>Deliverred</p>
                    <p>Cancelled</p>
                </div>
                <div>
                    <p>Shipping ID</p>
                    <p>Order Date</p>
                    <p>Location</p>
                    <p>Content</p>
                    <p>Customer</p>
                    <p>Status</p>
                </div>
                <OrderTable shipID={'KJD-223'} date={'22 feb,2022'} location={'04, ozolua road'} content={'12 piece waterproof eye...'} customer={'kyle Coleman'} status={'shipped'}/>
            </div>
        </div>
    )
}