import React from "react";
import "./Dashboard.css";
import{SiHomeadvisor} from"react-icons/si";
import{BsBuildings} from"react-icons/bs";
import{FaRegBuilding}from "react-icons/fa";
import{TbBuildingCommunity}from "react-icons/tb";
import{BsHousesFill}from "react-icons/bs";
import{BsPeopleFill}from"react-icons/bs";
import{FaFileInvoice}from"react-icons/fa";
import{MdPayment}from"react-icons/md";
import{BiSolidHomeSmile}from"react-icons/bi";
import {  Link, Outlet } from 'react-router-dom';

function Dashboard()
{
    return(
        <div class="container">
            <div id="header">
                <h1 id="name"><SiHomeadvisor/>Ruthresh House Agent/Estate/Apartments</h1>
                 <div class="sidebar">
                    <nav>
                        <ul>
                            <li>
                                <Link class="ul" to="/dashboard/home"><BiSolidHomeSmile/></Link>
                                <h4>Home</h4>
                            </li>
                            <br></br>
                            <li>
                              
                   <Link class="ul"to="/dashboard/building"><BsBuildings/></Link>
                   <h4>BuildingOwners</h4>
                    </li>
                    <br></br>
                    <li>
                        <Link class="ul"to="/dashboard/newbuilding"><FaRegBuilding/></Link>
                        <h4>Building</h4>
                    </li>
                    <br></br>
                    <li>
                        <Link  class="ul" to="/dashboard/unit"><TbBuildingCommunity/></Link>
                        <h4>UnitType</h4>
                    </li>
                    <br></br>
                    <li>
                        <Link class="ul"to="/dashboard/house"><BsHousesFill/></Link>
                        <h4>Houses</h4>
                    </li>
                    <br></br>
                    <li>
                        <Link class="ul"to="/dashboard/Tenat"><BsPeopleFill/></Link>
                        <h4>Tenants</h4>
                    </li>
                    <br></br>
                    <li>
                        <Link class="ul"to="/dashboard/billing"><FaFileInvoice/></Link>
                        <h4>Billing & Invoice</h4>
                    </li>
                    <br></br>
                    <li>
                        <Link class="ul"to="/dashboard/transcationpay"><MdPayment/></Link>
                        <h4>Payment</h4>
                    </li>
                    
                    </ul>
                    </nav>
            </div>
           
            <Outlet/>
            
            </div>
    </div>
           


    );

}
export default Dashboard;