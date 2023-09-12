import React from 'react'
import"./Buildinglist.css";

const Buildinglist=()=>{
  return (
    <div class="building">
        <h3 id="row1">Buliding Owners Detail</h3>
        <p>
            Name:{""}
            {localStorage.getItem("Name")
        ?localStorage.getItem("Name")
    :"NA"}
        </p>
        <br></br>
        <p>
            Address:{""}
            {localStorage.getItem("Address")
            ?localStorage.getItem("Address"):"NA"}
    
        </p>
        <br></br>
        <p>
        Percentage:{""}
            {localStorage.getItem("Percentage")
            ?localStorage.getItem("Percentage"):"NA"}
        </p>
        <br></br>
        <p>
            Email:{""}
            {localStorage.getItem("Email")
            ?localStorage.getItem("Email"):"NA"}
        </p>
        <br></br>
        <p>
            AdharNo:{""}
            {localStorage.getItem("AdharNo")
            ?localStorage.getItem("AdharNo"):"NA"}
        </p>
        <br></br>
        <p>
            PanNo:{""}
            {localStorage.getItem("PanNo")
            ?localStorage.getItem("PanNo"):"NA"}
        </p>
        <br></br>
        <p>
            Aggrement:{""}
            {localStorage.getItem("Aggrement")
            ?localStorage.getItem("Aggrement"):"NA"}
        </p>
        <br></br>
        <p>
           Status:{""}
            {localStorage.getItem("Status")
            ?localStorage.getItem("Status"):"NA"}
        </p>
    </div>
    
  );
}

export default Buildinglist;