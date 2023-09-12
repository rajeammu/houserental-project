import React from 'react';
import{Link, Outlet}from "react-router-dom";
import "./Tenat.css";

function Tenat()
{
    return (
        <nav>
      <div class="header">
        <div class="col">
        <div class="Dash">
        <Link id="dash"to="/dashboard/Tenat/tenantsdetail">Tenants Detail</Link>
        </div>
        <div class="own">
        <Link id="own"to="/dashboard/Tenat/tenats">+Add New Tenants</Link>
        </div>
        <Outlet/>
        </div>
      </div>
      
      </nav>
    );
  }


export default Tenat;
