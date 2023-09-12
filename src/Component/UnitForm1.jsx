import React, { useState } from "react";
import"./UnitForm1.css";
function UnitForm()
{
    const[UnitType ,setUnitType]=useState("");
    const[UnitName,setUnitName]=useState("");
    const[MonthlyRent,setMonthlyRent]=useState("");
    const[Locations,setLocations]=useState("");

    const handleSubmit =()=>
    {
        if(UnitType==="")
        {
            alert("UnitType is Required");
        }
        else if(UnitName==="")
        {
            alert("UnitName is Required");
        }
        else if(MonthlyRent==="")
        {
           alert("MonthlyRent is required");
        }
        else if(Locations==="")
        {
            alert("Location1 isrequired");
        }
        else{
            localStorage.setItem("UnitType",UnitType);
            localStorage.setItem("UnitName",UnitName);
            localStorage.setItem("MonthlyRent",MonthlyRent);
            localStorage.setItem("Locations",Locations);
        }
    }

    return(
        <div>
            <form id="box3">
                <div class="box2">UnitTypeForm</div>
                <br></br>
                <div>
                    <label id="un">UnitType:</label>
                    <select id="UnitType" onChange={(e)=>setUnitType(e.target.value)}>
                        <option value="please select here">Please Select Here</option>
                        <option value="UnitType1">UnitType1</option>
                        <option value="UnitType2">UnitType2</option>
                    </select>
                </div>
                <br></br>
                <div>
                    <label id="un">UnitName:</label>
                    <select id="UnitName" onChange={(e)=>setUnitName(e.target.value)}>
                    <option value="Please select here">Please Select Here</option>
                    <option value="BBMHouseType 2bedrooms">BBMHouseType 2bedrooms</option>
                    <option value="DBHouseType 2bedrooms">DBHouseType 2bedrooms</option>
                    <option value="A1Housetype singlebedrooms">A1Housetype singlebedrooms</option>
                    </select>
                </div>
                <br></br>
                <div >
                    <label id="un">MonthlyRent:</label>
                    <select id="MonthlyRent" onChange={(e)=>setMonthlyRent(e.target.value)}>
                    <option value="Please select here">Please Select Here</option>
                        <option value="10000-doublebedrooms">10000-doublebedrooms</option>
                        <option value="15000-doublebedrooms">15000-doublebedrooms</option>
                        <option value="8000-singlebedroom">8000-singlebedroom</option>
                    </select>
                    </div>
                    <br></br>
                    <div>
                        <label id="un">Location:</label>
                        <select id="Locations" onChange={(e)=>setLocations(e.target.value)}>
                        <option value="Please select here">Please Select Here</option>
                        <option vlaue="Chennai">Chennai</option>
                        <option value="Redhills">Redhills</option>
                        <option value="OMR">OMR</option>
                        <option value="Maduraivayil">Maduraivayil</option>
                        </select>
                    </div>
                    <br></br>
                    <br></br>
                    <button id="Sub"  onClick={()=>handleSubmit()}>Submit</button>
               
            </form>
        </div>
    );
}
export default UnitForm;