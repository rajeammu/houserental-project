import React from "react";
import"./Home.css";
import{ImHome}from"react-icons/im";
import{GoPeople}from"react-icons/go";
import{IoIosPeople}from"react-icons/io";
import{FaApplePay}from"react-icons/fa";

function Home()
{
    return(
        <div>
            <div class="col13">
              <div class="col14">MyDashBoard</div>
           
            <div class="col15" ><ImHome></ImHome>
            <p id="col16">2HousesUnit</p>
            </div>
            <div class="col15"><GoPeople></GoPeople>
            <p id="col16">Tenants</p>
            </div>
            <div class="col15"><IoIosPeople></IoIosPeople>
            <p id="col16">Tenants with Rent </p>
            </div>
            <div class="col15"><FaApplePay></FaApplePay>
            <p id="col16">Payment </p>
            </div>
            </div>
        </div>
    );
}
export default Home;