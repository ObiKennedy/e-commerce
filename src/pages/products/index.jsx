import React from "react";
import './index.scss'
import Header from "../../components/header";
import { Link } from "react-router-dom";
import ProductList from "../../components/productList";

export default function Product(){
    return(
        <div className="products">
            <Header name={'Product'} user={'Abu'} position={'Salesmanager'}/>
            <div className="heading"> 
                <div>
                    <Link to={'/product'} className="active">All products</Link>
                    <Link to={'/categories'}>Categories</Link>
                </div>
                <div><Link to={'/addproduct'}>+ Add Products</Link></div>
            </div>
            <div className="tab">
                <div>
                    <p>Product ID</p>
                    <p>Item</p>
                    <p>Type</p>
                    <p>Price</p>
                    <p>Sold</p>
                    <p>Sales</p>
                </div>
                <div>
                    <ProductList prodID={'#3310-10'} item={'12 piece waterproof eye...'} type={'Make up'} price={'13'} sold={45} sales={300.00}/>
                </div>
            </div>
        </div>
    )
}