import React from 'react';
import{Link, Outlet}from "react-router-dom";
import "./House.css";

function House()
{
    return (
        <nav>
      <div class="header">
      <div class="col">
        <div class="Dash">
        <Link id="dash"to="/dashboard/House/Housesdetail">HousesDetail</Link>
        </div>
        <div class="own">
        <Link id="own"to="/dashboard/House/Housesform">+Houses Form</Link>
        </div>
        <Outlet/>
        </div>
      </div>
      
      </nav>
    );
  }


export default House;
