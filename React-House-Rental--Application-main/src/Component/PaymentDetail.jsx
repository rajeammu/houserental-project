import React from "react";
import"./PaymentDetail.css";
 const PaymentDetail=()=>
 {
    return(
        <div class='row21'>
            <div class="row23">PaymentDetail</div>
            <br></br>
            <p>
            TenantDetail:{""}
            {localStorage.getItem("TenantDetail")?
            localStorage.getItem("TenantDetail")
        :"NA"}
            </p>
          <br></br>
            <p>
            DueInvoice:{""}
            {localStorage.getItem("DueInvoice")?
            localStorage.getItem("DueInvoice")
        :'NA'}
               </p>
               <br></br>
               <p>
            AmmountPaid:{""}
            {localStorage.getItem("AmmountPaid")?
            localStorage.getItem("AmmountPaid")
        :"NA"}
        </p>
       <br></br>
            <p>
            PaymentMode:{""}
            {localStorage.getItem("PaymentMode")?
            localStorage.getItem("PaymentMode")
        :"NA"}

            </p>
            <br></br>
          
            <p>
            descripation:{""}
            {localStorage.getItem("descripation2")?
            localStorage.getItem("descripation2")
        :"NA"}
            </p>
        </div>
    );
 }
 export default PaymentDetail;