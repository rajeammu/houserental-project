import React from "react";
import "./Unit.css";
import{Link, Outlet}from "react-router-dom";
function Unit()
{
    return(
<div> 
<nav>
      <div class="header">
      <div class="col">
        <div class="Dash">
        <Link id="dash"to="/dashboard/unit/unitformlist">Unit Details</Link>
        </div>
        <div class="own">
        <Link id="own"to="/dashboard/unit/unitform">+New Unit Type</Link>
        </div>
        <Outlet/>
        </div>
      </div>
      
      </nav>
</div>
    );
}
export default Unit;