import React from "react";
import './index.scss'

export default function AddProduct(){
    return(
        <div className="addproducts">
            <div>
                <span>
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_557_1491)">
                        <path d="M27 30H6V9H19.5V6H6C4.35 6 3 7.35 3 9V30C3 31.65 4.35 33 6 33H27C28.65 33 30 31.65 30 30V16.5H27V30ZM15.315 25.245L12.375 21.705L8.25 27H24.75L19.44 19.935L15.315 25.245ZM30 6V1.5H27V6H22.5C22.515 6.015 22.5 9 22.5 9H27V13.485C27.015 13.5 30 13.485 30 13.485V9H34.5V6H30Z" fill="#5542F6"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_557_1491">
                        <rect width="36" height="36" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>
                </span>
                <input type="text" placeholder="Product name"/>
            </div>
            <div>
                <h3>Product Information</h3>
                <div> 
                    <div>
                        <span>
                            <p>Product name</p>
                            <input type="text" placeholder="Make up....etc"/>
                        </span>
                        <span>
                            <p>Price</p>
                            <input type="price"/>
                        </span>
                    </div>
                    <div>
                        <span>
                            <p>Weight</p>
                            <input type="weight"/>
                        </span>
                        <span>
                            <p>Product Category</p>
                            <input type="text" placeholder="Beauty....etc"/>    
                        </span>    
                    </div> 
                    <div>
                        <span className="biginput">
                            <p>Description</p>
                            <input type="text" placeholder="Write your description here..."/>
                        </span>
                    </div>
                </div>
            </div>
            <div>
                <h3>Media</h3>
                <div>
                    <span>
                        <svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_557_1502)">
                                <path d="M23 24.9999H5.5V7.49988H16.75V4.99988H5.5C4.125 4.99988 3 6.12488 3 7.49988V24.9999C3 26.3749 4.125 27.4999 5.5 27.4999H23C24.375 27.4999 25.5 26.3749 25.5 24.9999V13.7499H23V24.9999ZM13.2625 21.0374L10.8125 18.0874L7.375 22.4999H21.125L16.7 16.6124L13.2625 21.0374ZM25.5 4.99988V1.24988H23V4.99988H19.25C19.2625 5.01238 19.25 7.49988 19.25 7.49988H23V11.2374C23.0125 11.2499 25.5 11.2374 25.5 11.2374V7.49988H29.25V4.99988H25.5Z" fill="#5542F6"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_557_1502">
                                    <rect width="30" height="30" fill="white" transform="translate(0.5)"/>
                                </clipPath>
                            </defs>
                        </svg>
                        <p>Browse Images...</p>
                    </span>
                    <span>
                        <svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_557_1502)">
                                <path d="M23 24.9999H5.5V7.49988H16.75V4.99988H5.5C4.125 4.99988 3 6.12488 3 7.49988V24.9999C3 26.3749 4.125 27.4999 5.5 27.4999H23C24.375 27.4999 25.5 26.3749 25.5 24.9999V13.7499H23V24.9999ZM13.2625 21.0374L10.8125 18.0874L7.375 22.4999H21.125L16.7 16.6124L13.2625 21.0374ZM25.5 4.99988V1.24988H23V4.99988H19.25C19.2625 5.01238 19.25 7.49988 19.25 7.49988H23V11.2374C23.0125 11.2499 25.5 11.2374 25.5 11.2374V7.49988H29.25V4.99988H25.5Z" fill="#5542F6"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_557_1502">
                                    <rect width="30" height="30" fill="white" transform="translate(0.5)"/>
                                </clipPath>
                            </defs>
                        </svg>
                        <p>Browse Images...</p>
                    </span>
                    <span>
                        <svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_557_1502)">
                                <path d="M23 24.9999H5.5V7.49988H16.75V4.99988H5.5C4.125 4.99988 3 6.12488 3 7.49988V24.9999C3 26.3749 4.125 27.4999 5.5 27.4999H23C24.375 27.4999 25.5 26.3749 25.5 24.9999V13.7499H23V24.9999ZM13.2625 21.0374L10.8125 18.0874L7.375 22.4999H21.125L16.7 16.6124L13.2625 21.0374ZM25.5 4.99988V1.24988H23V4.99988H19.25C19.2625 5.01238 19.25 7.49988 19.25 7.49988H23V11.2374C23.0125 11.2499 25.5 11.2374 25.5 11.2374V7.49988H29.25V4.99988H25.5Z" fill="#5542F6"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_557_1502">
                                    <rect width="30" height="30" fill="white" transform="translate(0.5)"/>
                                </clipPath>
                            </defs>
                        </svg>
                        <p>Browse Images...</p>
                    </span>
                    <span>
                        <svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_557_1502)">
                                <path d="M23 24.9999H5.5V7.49988H16.75V4.99988H5.5C4.125 4.99988 3 6.12488 3 7.49988V24.9999C3 26.3749 4.125 27.4999 5.5 27.4999H23C24.375 27.4999 25.5 26.3749 25.5 24.9999V13.7499H23V24.9999ZM13.2625 21.0374L10.8125 18.0874L7.375 22.4999H21.125L16.7 16.6124L13.2625 21.0374ZM25.5 4.99988V1.24988H23V4.99988H19.25C19.2625 5.01238 19.25 7.49988 19.25 7.49988H23V11.2374C23.0125 11.2499 25.5 11.2374 25.5 11.2374V7.49988H29.25V4.99988H25.5Z" fill="#5542F6"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_557_1502">
                                    <rect width="30" height="30" fill="white" transform="translate(0.5)"/>
                                </clipPath>
                            </defs>
                        </svg>
                        <p>Browse Images...</p>
                    </span>
                </div>
                <button>Save Products</button>
            </div>
        </div>
    )
}