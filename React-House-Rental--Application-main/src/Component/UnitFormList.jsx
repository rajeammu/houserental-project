import React from "react";
import"./UnitFormList.css";
function UnitFormList()
{
    return(
        <div class="unt">
            <h1 id="uni">UnitFormDetails</h1>
           <br></br>
           <p>
            UnitType:{""}
            {localStorage.getItem("UnitType")
            ?localStorage.getItem("UnitType")
        :"NA"}
           </p>
           <br></br>
           <p>
            UnitName:{""}
            {localStorage.getItem("UnitName")
            ?localStorage.getItem("UnitName")
        :"NA"}
           </p>
           <br>
           </br>
           <p>
           MonthlyRent:{""}
            {localStorage.getItem("MonthlyRent")
            ?localStorage.getItem("MonthlyRent")
        :"NA"}
           </p>
           <br></br>
           <p>
           Locations:{""}
            {localStorage.getItem("Locations")
            ?localStorage.getItem("Locations")
        :"NA"}
           </p>
        </div>
    )
}
export default UnitFormList;