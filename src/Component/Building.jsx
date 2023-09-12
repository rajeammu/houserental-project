import React from 'react';
import{Link, Outlet}from "react-router-dom";
import "./Building.css";

function Building()
{
    return (
        <nav>
      <div class="header">
        <div class="col">
        <div class="Dash">
        <Link id="dash"to="/dashboard/building/buildinglist">Owners Detail</Link>
        </div>
        <div class="own">
        <Link id="own"to="/dashboard/building/buildingowners">+Building Owner</Link>
        </div>
        <Outlet/>
        </div>
      </div>
      
      </nav>
    );
  }


export default Building;
