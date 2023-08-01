import React from "react";
import '../dateSelect/index.scss'
import { useState } from "react";

export default function DateSelect(){

    const [open, setOpen] = useState(false)

    return(
        <div className="dateselect">
            <div onClick={() => setOpen(prev => !prev)}>
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
                <span>Today</span>
            </div>
            <div className={`${open? 'open':'closed'}`}>
                <p>Today</p>
                <p>Tomorrow</p>
                <p>Yesterday</p>
            </div>
        </div>
    )
}