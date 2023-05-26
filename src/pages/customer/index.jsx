import React from "react";
import './index.scss'
import Header from '../../components/header'
import List from "../../components/customerList";
import { Link } from "react-router-dom";

export default function Customer(){
    return(
        <div className="customer">
            <Header position={'Salesmanager'} name={'Customer'} user={'Abu'}/>
            <div className="main">
                <div>
                    <h2>All Customer</h2>
                    <input type="text" placeholder="Search customer"/>
                </div>
                <div>
                    <p>All</p>
                    <p>New</p>
                    <p>Subscribers</p>
                </div>
                <div>
                    <p>ID</p>
                    <p>Name</p>
                    <p>Email</p>
                    <p>City</p>
                    <p>Orders</p>
                    <p>Spending</p>
                </div>
                <div>
                    <Link to={'/details'}>
                        <List ID={'KJD-223'} name={'Samantha Johnson'} email={'s.johnson@email.com'} city={'Lagos'} orders={7} spending={'$356'}/>
                    </Link>
                </div>
            </div>
        </div>
    )
}