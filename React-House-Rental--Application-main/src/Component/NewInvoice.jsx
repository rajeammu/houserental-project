import React, { useState } from "react";
import"./NewInvoice.css";
function NewInvoice()
{
    const[FlatName ,setFlatName]=useState("");
    const[Tanatname ,setTanatname]=useState("");
    const[Date1,setDate1]=useState("");
    const[Ammount ,setAmmount]=useState("");
    const[ModeOfPayment ,setModeOfPayment]=useState("");
    const handleSubmit=()=>
    {
        if(FlatName==="")
        {
            alert("FlatName is required");
        }
        else if(Tanatname==="")
        {
            alert("Tenatname is required");
        }
        else if(Date1==="")
        {
            alert("Date1 is required");
        }
        else if(Ammount==="")
        {
            alert("Ammount is required");
        }
        else if(ModeOfPayment==="")
        {
            alert("ModeOfPayment is required");
        }
        else{
            localStorage.setItem("FlatName",FlatName);
            localStorage.setItem("Tanatname",Tanatname);
            localStorage.setItem("Date1",Date1);
            localStorage.setItem("Ammount",Ammount);
            localStorage.setItem("ModeOfPayment",ModeOfPayment);
        }
    }
    return(
        <div>
            <form class="row13">
                <div class='row14'>Billing & Invoice</div>
                <br></br>
                <div>
                <label class="roe15">FlatName:</label>
                <input type="text" id="FlatName" onChange={(e)=>setFlatName(e.target.value)}/>
                </div>
                <br></br>
                <div>
                    <label class="roe15">Tenatname:</label>
                    <input type="text" id="Tanatname" onChange={(e)=>setTanatname(e.target.value)}/>
                </div>
                <br></br>
                <div>
                    <label class="roe15">Date:</label>
                    <input type="text" id="Date1" onChange={(e)=>setDate1(e.target.value)}/>
                </div>
                <br></br>
                <div>
                    <label class="roe15">Ammount:</label>
                    <input type="text" id="Ammount" onChange={(e)=>setAmmount(e.target.value)}/>
                </div>
                <br></br>
                <div>
                    <label class="roe15">ModeOfPayment:</label>
                    <select id="ModeOfPayment" onChange={(e)=>setModeOfPayment(e.target.value)}>
                        <option value="Please Select Here">Please Select Here</option>
                        <option value="cash">cash</option>
                        <option value="card">card</option>
                        <option value="paytm">paytm</option>
                    </select>
                </div>
                <br>
        </br>
        <br></br>
                <button type="submit" id="sub8"  onClick={()=>handleSubmit()}>Submit</button>
            </form>
        </div>
    );
}
export default NewInvoice;