import React from "react";
import './index.scss'
import Header from "../../../components/header";

export default function AddProduct(){
    return(
        <div className="addproducts">
            <Header name={'Products'} position={'Salesmanager'} user={'Abu'}/>
            <div>
                <span>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24 29H3V8H16.5V5H3C1.35 5 0 6.35 0 8V29C0 30.65 1.35 32 3 32H24C25.65 32 27 30.65 27 29V15.5H24V29ZM12.315 24.245L9.375 20.705L5.25 26H21.75L16.44 18.935L12.315 24.245ZM27 5V0.5H24V5H19.5C19.515 5.015 19.5 8 19.5 8H24V12.485C24.015 12.5 27 12.485 27 12.485V8H31.5V5H27Z" fill="black"/>
                    </svg>
                </span>
                <input type="text" placeholder="Product name"/>
            </div>
            <div>
                <h3>Product Information</h3>
                <div> 
                    <div>
                        <div>
                            <label htmlFor="string">Product name</label>
                            <input type="text" placeholder="Make up etc..."/>
                        </div>
                        <div>
                            <label htmlFor="number">Price</label>
                            <input type="number" min={0.00} step='0.01' max={10000}/>
                        </div>
                    </div>
                    <div>
                        <div>
                            <label htmlFor="number">Weight</label>
                            <input type="number"/>
                        </div>
                        <div>
                            <label htmlFor="product-category">Product Category</label>
                            <input type="text" placeholder="Beauty....etc"/>
                        </div>
                    </div>
                    <div className="description">
                        <label htmlFor="description">Description</label>
                        <input type="text" placeholder="Write your description here..."/>
                    </div>
                </div>
            </div>
        </div>
    )
}