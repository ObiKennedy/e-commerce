import React from "react";
import "./index.scss"
import Header from "../../components/header";
import Status from "../../components/status";

export default function Orders(){
    return(
        <div className="orders">
            <Header name={'Orders'} user={'Abu'} position={'Salesmanager'}/>
            <div  className="top">
                <div>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.1671 4.39506V3.06006H15.6671V4.39506H8.29457V3.06006H6.79457V4.39506H2.12207V21.6901H21.7496V4.39506H17.1671ZM20.2496 20.1901H3.62207V10.8676H20.2496V20.1901ZM3.62207 9.36756V5.89506H6.79457V7.23006H8.29457V5.89506H15.6671V7.23006H17.1671V5.89506H20.2496V9.36756H3.62207Z" fill="#231F20"/>
                        <path d="M11.5045 11.9399H10.0195V13.4399H11.5045V11.9399Z" fill="#231F20"/>
                        <path d="M8.97035 14.775H7.48535V16.275H8.97035V14.775Z" fill="#231F20"/>
                        <path d="M11.5045 14.775H10.0195V16.275H11.5045V14.775Z" fill="#231F20"/>
                        <path d="M6.42738 14.775H4.94238V16.275H6.42738V14.775Z" fill="#231F20"/>
                        <path d="M8.97035 17.6176H7.48535V19.1176H8.97035V17.6176Z" fill="#231F20"/>
                        <path d="M11.5045 17.6176H10.0195V19.1176H11.5045V17.6176Z" fill="#231F20"/>
                        <path d="M6.42738 17.6176H4.94238V19.1176H6.42738V17.6176Z" fill="#231F20"/>
                        <path d="M16.6051 11.9399H15.1201V13.4399H16.6051V11.9399Z" fill="#231F20"/>
                        <path d="M19.1403 11.9399H17.6553V13.4399H19.1403V11.9399Z" fill="#231F20"/>
                        <path d="M14.0546 11.9399H12.5771V13.4399H14.0546V11.9399Z" fill="#231F20"/>
                        <path d="M16.6051 14.775H15.1201V16.275H16.6051V14.775Z" fill="#231F20"/>
                        <path d="M19.1403 14.775H17.6553V16.275H19.1403V14.775Z" fill="#231F20"/>
                        <path d="M14.0546 14.775H12.5771V16.275H14.0546V14.775Z" fill="#231F20"/>
                        <path d="M14.0546 17.6176H12.5771V19.1176H14.0546V17.6176Z" fill="#231F20"/>
                    </svg>
                    Today
                </div>
                <div>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.96575 19.1035C4.94644 19.1035 0.862305 15.0194 0.862305 10.0001C0.862305 4.98074 4.94644 0.896606 9.96575 0.896606C14.9851 0.896606 19.0692 4.98074 19.0692 10.0001C19.0692 10.2195 18.982 10.43 18.8268 10.5852C18.6716 10.7404 18.4611 10.8276 18.2416 10.8276C18.0221 10.8276 17.8116 10.7404 17.6564 10.5852C17.5012 10.43 17.414 10.2195 17.414 10.0001C17.414 5.89274 14.0731 2.55178 9.96575 2.55178C5.85844 2.55178 2.51748 5.89274 2.51748 10.0001C2.51748 14.1074 5.85844 17.4483 9.96575 17.4483C11.94 17.4423 13.8323 16.6585 15.2325 15.2668C15.3877 15.1116 15.5982 15.0245 15.8176 15.0245C16.0371 15.0245 16.2475 15.1116 16.4027 15.2668C16.5579 15.422 16.6451 15.6325 16.6451 15.8519C16.6451 16.0714 16.5579 16.2818 16.4027 16.437C14.6916 18.1383 12.3787 19.0964 9.96575 19.1035Z" fill="white"/>
                    </svg>
                    refresh
                </div>
            </div>
            <div className="set">
                <div>
                    <div>
                        <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="5" cy="5.58337" r="5" fill="#03AC13"/>
                        </svg>
                        <div>Successful</div>
                    </div>
                    <div>35 orders</div>
                </div>
                <div>
                    <div>
                        <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="5" cy="5.58337" r="5" fill="#FFDB58"/>
                        </svg>
                        <div>Pending</div>
                    </div>
                    <div>10 orders</div>
                </div>
                <div>
                    <div>
                        <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="5" cy="5.58337" r="5" fill="#DF0000"/>
                        </svg>
                        <div>Cancelled</div>
                    </div>
                    <div>5 orders</div>
                </div>
                <div>
                    <div>
                        <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="5" cy="5.58337" r="5" fill="#5C5C5C"/>
                        </svg>
                        <div>Refunded</div>
                    </div>
                    <div>2 orders</div>
                </div>
            </div>
            <div>
                <Status name={'kyle Coleman'} stats={'refunded'}></Status>
            </div>
        </div>
    )
}