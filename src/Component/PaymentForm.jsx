import React, { useState } from "react";
import "./PaymentForm.css";
 function PaymentForm()
 {
   const[TenantDetail ,setTenantDetail]=useState("");
   const[DueInvoice ,setDueInvoice]=useState("");
   const[AmmountPaid,setAmmountPaid]=useState("");
   const[PaymentMode ,setPaymentMode]=useState("");
   const[descripation2 ,setdescripation2]=useState("");
   const handleSubmit=()=>
   {
    if(TenantDetail==="")
    {
      alert("TenantDetail is required");
    }
    else if(DueInvoice==="")
    {
      alert("DueInvoice is required");
    }
    else if(AmmountPaid==="")
    {
      alert("AmmountPaid is required");
    }
    else if(PaymentMode==="")
    {
      alert("PaymentMode is required");
    }
    else if(descripation2==="")
    {
      alert("descripation2 is required");
    }
    else{
      localStorage.setItem('TenantDetail',TenantDetail);
      localStorage.setItem("DueInvoice",DueInvoice);
      localStorage.setItem("AmmountPaid",AmmountPaid);
      localStorage.setItem("PaymentMode",PaymentMode);
      localStorage.setItem("descripation",descripation2);
    }
   }
  return(
        <div>
          <form class="row19"> 
            <div class="row18">Add Payment</div>
            <br></br>
            <div>
                <label class="row20">TenantDetail:</label>
                <select id="TenantDetail" onChange={(e)=>setTenantDetail(e.target.value)}>
                    <option value="Please Select Here">Please Select Here...</option>
                    <option value="Rajeswari-houseno:18">Rajeswari-houseno:18</option>
                    <option value='Govarathan-houseno:34'>Govarathan-houseno:34</option>
                    <option value="Ammu-houseno45">Ammu-houseno45</option>
                </select>
            </div>
            <br></br>
            <div>
                <label class="row20">DueInvoice:</label>
                <select id="DueInvoice" onChange={(e)=>setDueInvoice(e.target.value)}>
                <option value="Please Select Here">Please Select Here...</option>  
                <option value='jun2012 #INV2 ksh2000'>jun2012 #INV2 ksh2000</option>
                <option value="march2012 #INV3 ksh3000">march2012 #INV3 ksh3000</option>
                </select>
            </div>
            <br></br>
            <div>
              <label class="row20">AmmountPaid</label>
              <input type="text" id="AmmountPaid" onChange={(e)=>setAmmountPaid(e.target.value)}/>

</div>
<br></br>
<div>
                    <label class="row20">PaymentMode:</label>
                    <select id="PaymentMode" onChange={(e)=>setPaymentMode(e.target.value)}>
                    <option value="Please Select Here">Please Select Here...</option>  
                    <option value="Cash">Cash</option>
                    <option value="G-Pay">G-Pay</option>
                    <option value="Paytem">Paytem</option>
                    </select>
</div>
<br></br>
<div>
  <label class="row20">Descripations:</label>
  <input type="text" id="descripation2" onChange={(e)=>setdescripation2(e.target.value)}/>
</div>
<br>
</br>
<br></br>
<button type="submit"  id="btn"onClick={()=>handleSubmit()} >submit</button>
          </form>

        </div>
    );
 }
 export default PaymentForm;