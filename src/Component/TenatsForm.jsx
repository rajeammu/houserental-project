import React, { useState } from "react";
import"./TenatsForm.css";
function Tenats()
{
    const[TenantsName ,setTenantsName]=useState("");
    const[MobileNumber ,setMobileNumber]=useState("");
    const[IdNumber ,setIdNumber]=useState("");
    const[Houseunit ,setHouseunit]=useState("");
    const[DateOccupied,setDateOccupied]=useState("");
    const[HouserentDeposit,setHouserentDeposit]=useState("");
    const[ElectricityDeposit,setElectricityDeposit]=useState("");
    const[WaterDeposit ,setWaterDeposit]=useState("");
    const[descripation ,setdescripation]=useState("");
    const handleSubmit =()=>
    {
        if(TenantsName==="")
        {
            alert("TenantsName is required");
        }
        else if(MobileNumber==="")
        {
            alert("PhoneNumber is required");
        }
        else if(IdNumber==="")
        {
            alert("Idnumber is required");
        }
        else if(Houseunit==="")
        {
            alert("houseunit is required");
        }
        else if(DateOccupied==="")
        {
            alert("DateOccupied is required");
        }
        else if(HouserentDeposit==="")
        {
            alert("HouserentDeposit is required");
        }
        else if(ElectricityDeposit==="")
        {
            alert("ElectricityDeposit is required");
        }
        else if(WaterDeposit==="")
        {
            alert("WaterDeposit is required");
        }
        else if(descripation==="")
        {
            alert("descripation is required");
        }
        else{
            localStorage.setItem("TenantsName",TenantsName);
            localStorage.setItem("MobileNumber",MobileNumber);
            localStorage.setItem("IdNumber",IdNumber);
            localStorage.setItem("Houseunit",Houseunit);
            localStorage.setItem("DateOccupied",DateOccupied);
            localStorage.setItem("HouserentDeposit",HouserentDeposit);
            localStorage.setItem("ElectricityDeposit",ElectricityDeposit);
            localStorage.setItem("WaterDeposit",WaterDeposit);
            localStorage.setItem("descripation",descripation)
        }
    }

    return(
       <div>
        <form id="fo">
            <div class="row9">Tenants Form</div>
            <br></br>
            <div>
                <label id="row10">TenantsName:</label>
               <input type="text" id="TenantsName" onChange={(e)=>setTenantsName(e.target.value)}/>
            </div>
            <br></br>
            <div>
                <label id="row10">PhoneNumber:</label>
                <input type="text" id="MobileNumber" onChange={(e)=>setMobileNumber(e.target.value)}/>
            </div>
            <br></br>
            <div>
                <label id="row10">IdNumber:</label>
                <input type="text" id="IdNumber" onChange={(e)=>setIdNumber(e.target.value)}/>
            </div>
            <br></br>
            <div>
                <label id="row10">Houseunit:</label>
                <select id="Houseunit" onChange={(e)=>setHouseunit(e.target.value)}>
                  <option value="Please Select Here">Please Select Here...</option>
                  <option value="Unit1">Unit1</option>
                  <option value="Unit2">Unit2</option>
                </select>
            </div>
            <br></br>
            <div>
                <label id="row10">DateOccupied:</label>
                <input type="text" id="DateOccupied" onChange={(e)=>setDateOccupied(e.target.value)}/>
            </div>
            <br></br>
            <div> 
                <label id="row10">HouserentDeposit:</label>
                <input type="text" id="HouserentDeposit" onChange={(e)=>setHouserentDeposit(e.target.value)}/>
            </div>
            <br></br>
            <div>
                <label id="row10">ElectricityDeposit:</label>
                <input type="text" id="ElectricityDeposit" onChange={(e)=>setElectricityDeposit(e.target.value)}/>
            </div>
            <br></br>
            <div>
                <label id="row10">WaterDeposit:</label>
                <input type="text" id="WaterDeposit" onChange={(e)=>setWaterDeposit(e.target.value)}/>
            </div>
            <br></br>
            <div>
                <label id="row10">Descripation:</label>
                <input type="text"id="descripation" onChange={(e)=>setdescripation(e.target.value)}/>
            </div>
            <br></br>
            <button type="text"onClick={()=>handleSubmit()} id="submit5">Submit</button>
        </form>
       </div>
    );
}
export default Tenats;