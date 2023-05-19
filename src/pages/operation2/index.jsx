import React from "react";
import './index.scss'
import Operation from "../operations";
import Header from "../../components/header";
import { Link } from "react-router-dom";
import TableData from "../../components/tabledata";
import { TableHead } from "../../components/tableHead";

export default function OperationInventory(){
    return(
        <div className="inventory">
            <Header name={'Operation'} position={'Salesmanager'} user={'Abu'}/>
            <div className="buttons">
                <Link to={'/operation'}>Shipping</Link>
                <Link to={'/operationinventory'} className="active">Inventory</Link>
            </div> 
            <div className="tble">
            <div className="tableHead">
                <div>best selling products</div>
                <div>
                 <div className="month">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.1676 4.39506V3.06006H15.6676V4.39506H8.29506V3.06006H6.79506V4.39506H2.12256V21.6901H21.7501V4.39506H17.1676ZM20.2501 20.1901H3.62256V10.8676H20.2501V20.1901ZM3.62256 9.36756V5.89506H6.79506V7.23006H8.29506V5.89506H15.6676V7.23006H17.1676V5.89506H20.2501V9.36756H3.62256Z" fill="#0D0D0D"/>
                        <path d="M11.505 11.9399H10.02V13.4399H11.505V11.9399Z" fill="#0D0D0D"/>
                        <path d="M8.96986 14.775H7.48486V16.275H8.96986V14.775Z" fill="#0D0D0D"/>
                        <path d="M11.505 14.775H10.02V16.275H11.505V14.775Z" fill="#0D0D0D"/>
                        <path d="M6.42738 14.775H4.94238V16.275H6.42738V14.775Z" fill="#0D0D0D"/>
                        <path d="M8.96986 17.6176H7.48486V19.1176H8.96986V17.6176Z" fill="#0D0D0D"/>
                        <path d="M11.505 17.6176H10.02V19.1176H11.505V17.6176Z" fill="#0D0D0D"/>
                        <path d="M6.42738 17.6176H4.94238V19.1176H6.42738V17.6176Z" fill="#0D0D0D"/>
                        <path d="M16.6051 11.9399H15.1201V13.4399H16.6051V11.9399Z" fill="#0D0D0D"/>
                        <path d="M19.1398 11.9399H17.6548V13.4399H19.1398V11.9399Z" fill="#0D0D0D"/>
                        <path d="M14.0551 11.9399H12.5776V13.4399H14.0551V11.9399Z" fill="#0D0D0D"/>
                        <path d="M16.6051 14.775H15.1201V16.275H16.6051V14.775Z" fill="#0D0D0D"/>
                        <path d="M19.1398 14.775H17.6548V16.275H19.1398V14.775Z" fill="#0D0D0D"/>
                        <path d="M14.0551 14.775H12.5776V16.275H14.0551V14.775Z" fill="#0D0D0D"/>
                        <path d="M14.0551 17.6176H12.5776V19.1176H14.0551V17.6176Z" fill="#0D0D0D"/>
                    </svg> 
                    <div>May</div>
                  </div>
                  <div className="filter">
                    <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.08337 17.5C6.94171 17.5 6.80004 17.4292 6.72921 17.4292C6.51671 17.2875 6.37504 17.0042 6.37504 16.7917V10.6292L0.141706 1.63333C3.93786e-05 1.42083 -0.0707939 1.1375 0.0708727 0.854167C0.212539 0.641667 0.425039 0.5 0.708373 0.5H16.2917C16.575 0.5 16.7875 0.641667 16.9292 0.854167C17.0709 1.06667 17 1.35 16.8584 1.5625L10.625 10.6292V15.375C10.625 15.6583 10.4834 15.8708 10.2 16.0125L7.36671 17.4292C7.29587 17.5 7.22504 17.5 7.08337 17.5ZM2.05421 1.91667L7.65004 9.99167C7.72087 10.1333 7.79171 10.275 7.79171 10.4167V15.6583L9.20837 14.95V10.4167C9.20837 10.275 9.27921 10.1333 9.35004 9.99167L14.9459 1.91667H2.05421Z" fill="black"/>
                    </svg>
                  </div>
                  </div>
            </div>
            <div>
                <TableHead/>
                <TableData name={'Cetaphil Daily Facial Cleanser'} price={'50'} sold={220} status={'out of stock'}/>
                <TableData name={'Aveeno Calm + Restore Oat Gel... '} price={'90'} sold={500} status={'in stock'}/>
            </div>
            </div>
        </div>
    )
}