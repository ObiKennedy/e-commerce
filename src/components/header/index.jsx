import React from "react";
import './index.scss'

export default function Header({name, user, position}){
    return(
        <div className="header">
            <div>
                <h2>{name}</h2>
            </div>
            <div>
                <input type="text" placeholder="Search"/>
            </div>
            <div>
                <div>
                <svg width="19" height="23" viewBox="0 0 19 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.05494 20.5851C7.55421 21.2118 8.2874 21.6174 9.09223 21.7121C9.89706 21.8068 10.7072 21.5828 11.3433 21.0897C11.5389 20.9439 11.7149 20.7743 11.8672 20.5851M1.00083 13.5205V13.3015C1.03295 12.6536 1.2406 12.0258 1.60236 11.4829C2.2045 10.8308 2.6167 10.0316 2.79571 9.16932C2.79571 8.50284 2.79571 7.82684 2.85393 7.16036C3.15469 3.95175 6.32728 1.73334 9.46106 1.73334H9.53867C12.6725 1.73334 15.845 3.95175 16.1555 7.16036C16.2137 7.82684 16.1555 8.50284 16.204 9.16932C16.3854 10.0336 16.7972 10.8353 17.3974 11.4925C17.7618 12.0305 17.9698 12.656 17.9989 13.3015V13.5109C18.0206 14.3814 17.7208 15.2302 17.1548 15.9007C16.407 16.6848 15.3921 17.1726 14.3024 17.2718C11.107 17.6145 7.88303 17.6145 4.68762 17.2718C3.59914 17.1683 2.58576 16.6812 1.83521 15.9007C1.278 15.2296 0.982241 14.3859 1.00083 13.5205Z" stroke="#0D0D0D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                </div>
                <div>
                    <img src="."/>
                </div>
                <div>
                    <span>{user}</span>
                    <span>{position}</span>
                </div>
                <div>
                    <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.5 0.983337L4 4.48334L7.5 0.983337" stroke="#5C5C5C" stroke-linecap="round"/>
                    </svg>
                </div>
            </div>
        </div>
    )
}