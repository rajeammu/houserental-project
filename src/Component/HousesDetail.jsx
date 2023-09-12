import React from "react";
import"./HousesDetail.css";
const HousesDetail =()=>
{
   
    return(
        <div class="row8">
            <div class="row7">New Houses Detail</div>
            <br></br>
            <p>
            UnitNoName:{""}
                {localStorage.getItem("UnitNoName")?
                localStorage.getItem("UnitNoName")
            :"NA"}
            </p>
            <br></br>
            <p>
                UnitType1:{""}
                {localStorage.getItem("UnitType1")?
                localStorage.getItem("UnitType1")
                :"NA"}
            </p>
            <br></br>
            <p>
                Building:{""}
                {localStorage.getItem("Building")?
                localStorage.getItem("Building")
            :"NA"}
            </p>
            <br></br>
            <p>
                Floors1:{""}
                {localStorage.getItem("Floors1")?
                localStorage.getItem("Floors1")
                :"NA"}
            </p>
            <br></br>
            <p>
                MonthlyHouseRent:{""}
                {localStorage.getItem("MonthlyHouseRent")?
                localStorage.getItem("MonthlyHouseRent")
            :"NA"}
            </p>
            <br></br>
            <p>
            FixedElectricityCharge:{""}
            {localStorage.getItem("FixedElectricityCharge")?
             localStorage.getItem("FixedElectricityCharge")
            :"NA"}
            </p>
            <br></br>
            <p>
            FixedWaterCharge:{""}
            {localStorage.getItem("FixedWaterCharge")?
            localStorage.getItem("FixedWaterCharge")
        :"NA"}
            </p>
            <br></br>
            <p>
            Descripation:{""}
            {
                localStorage.getItem("Descripation")?
                localStorage.getItem("Descripation")
           :"NA" }
            </p>

        </div>
    )
}
export default HousesDetail;