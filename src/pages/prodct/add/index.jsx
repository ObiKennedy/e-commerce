import React from "react";
import './index.scss'
import '../../../assets/add-photo-alternate.png'

export default function AddProduct(){
    return(
        <div className="addproducts">
            <div>
                <button>
                    <div>
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
                    </div>
                </button>
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
                    <button>
                        <div>
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
                            Browse Images
                        </div>
                    </button>
                    <button>
                        <div>
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
                            Browse Images
                        </div>
                    </button>
                    <button>
                        <div>
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
                            Browse Images
                        </div>
                    </button>
                    <button>
                        <div>
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
                            Browse Images
                        </div>
                    </button>
                </div>
                <button>Save Products</button>
            </div>
        </div>
    )
}