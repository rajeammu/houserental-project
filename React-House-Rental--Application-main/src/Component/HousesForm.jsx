import React from "react";
import"./HousesForm.css";
import { useState } from "react";
function HousesForm ()
{
    const[UnitNoName ,setUnitNoName]=useState("");
    const[UnitType1 ,setUnitType1]=useState("");
    const[Building ,setBuilding]=useState("");
    const[Floors1 ,setFloors1]=useState("");
    const[MonthlyHouseRent ,setMonthlyHouseRent]=useState("");
    const[FixedElectricityCharge, setFixedElectricityCharge]=useState("");
    const[FixedWaterCharge ,setFixedWaterCharge]=useState("");
    const[Descripation ,setDescripation]=useState("");
    const handleSubmit =()=>
    {
        if(UnitNoName==="")
        {
            alert("UnitNoName is required");
        }
        else if(UnitType1==="")
        {
            alert("UnitType1 is required");
        }
        else if(Building==="")
        {
            alert("Buildings is required");
        }
        else if(Floors1==="")
        {
            alert("Floors1 is required");
        }
        else if(MonthlyHouseRent==="")
        {
            alert("MonthlyHouseRent is required");
        }
        else if(FixedElectricityCharge==="")
        {
            alert("FixedElectricityCharge is required");
        }
        else if(FixedWaterCharge==="")
        {
            alert("FixedWaterCharge is required");
        }
    
        else if(Descripation==="")
        {
            alert("Descripation is required")
        }
        else{
            localStorage.setItem("UnitNoName",UnitNoName);
            localStorage.setItem("UnitType1",UnitType1);
            localStorage.setItem("Building",Building)
            localStorage.setItem("Floors1",Floors1);
            localStorage.setItem("MonthlyHouseRent",MonthlyHouseRent);
            localStorage.setItem("FixedElectricityCharge",FixedElectricityCharge);
            localStorage.setItem("FixedWaterCharge",FixedWaterCharge);
            localStorage.setItem("Descripation",Descripation);
        }
    }
    return(
    <div>
       <form class="row5">
       <div class="row4">NewHousesUnitForm</div>
       <div>
       <label class="row6">UnitNoName:</label>
       <input type="text" id="UnitNoName" onChange={(e)=>setUnitNoName(e.target.value)}/>
       </div>
       <div>
       <label class="row6">UnitType1:</label>
       <select id="UnitType1" onChange={(e)=>setUnitType1(e.target.value)}>
        <option value='Please Select Here'>Please Select here</option>
        <option value="1BedRoom">1BedRoom</option>
        <option value="2BedRoom">2BedRoom</option>
        <option value="bedsitter">bedsitter</option>
        <option value="SingleBedroom">SingleBedroom</option>
        <option value="DoubleBedRoom">DoubleBedRoom</option>
       </select>
       </div>
       <div>
        <label class="row6">Building:</label>
        <select id="Building" onChange={(e)=>setBuilding(e.target.value)}>
        <option value='Please Select Here'>Please Select here</option>
            <option value="KKPlaza">KKPlaza</option>
            <option value="MMPlaza">MMPlaza</option>
            <option value="PlotNo142">PlotNo142</option>
        </select>
       </div>
       <div>
        <label class="row6">Floors1:</label>
        <select id="Floors1" onChange={(e)=>setFloors1(e.target.value)}>
        <option value='Please Select Here'>Please Select here</option>
            <option vlaue="GroundFloor">GroundFloor</option>
            <option value="1st Floor">1stFloor</option>
            <option value="2nd Floor">2nd Floor</option>
            <option vlaue="3rd Floor">3rd Floor</option>
            <option value="4th Floor">4th Floor</option>
        </select>
       </div>
       <div>
        <label class="row6">MonthlyHouseRent</label>
        <input type="text" id="MonthlyHouseRent" onChange={(e)=>setMonthlyHouseRent(e.target.value)}/>
       </div>
       <div>
        <label class="row6">FixedElectricityCharge:</label>
        <input type="text" id="FixedElectricityCharge" onChange={(e)=>setFixedElectricityCharge(e.target.value)}/>
       </div>
       <div>
        <label class="row6">FixedWaterCharge:</label>
        <input ytpe="text" id="FixedWaterCharge" onChange={(e)=>setFixedWaterCharge(e.target.value)}/>
       </div>
       <div>
        <label class="row6">Descripation:</label>
        <input type="text" id="Descripation" onChange={(e)=>setDescripation(e.target.value)}/>
       </div>
       <br></br>
       <div>
        <button type="submit"  onClick={()=>handleSubmit()} id="submit3">Submit</button>
       </div>
       </form>
    </div>
    );
}
export default HousesForm;