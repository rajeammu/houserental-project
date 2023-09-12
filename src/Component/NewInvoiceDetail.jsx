import React from "react";
import"./NewInvoiceDetail.css";

function NewInvoiceDetail()
{
    return(
        <div class="row16">
        <div class="row17">Invoice Detail</div>
        <br></br>
        <p>
          FlatName:{""}
          {localStorage.getItem("FlatName")?
          localStorage.getItem("FlatName")
        :"NA"}
        </p>
        <br>
        </br>
        <p>
        Tanatname:{""}
        {localStorage.getItem("Tanatname")?
        localStorage.getItem("Tanatname")
    :"NA"}
        </p>
        <br></br>
        <p>
        Date1:{""}
        {localStorage.getItem("Date1")?
        localStorage.getItem("Date1")
    :"NA"}
        </p>
        <br></br>
        <p>
        Ammount:{""}
        {localStorage.getItem("Ammount")?
        localStorage.getItem("Ammount")
    :"NA"}
        </p>
        <br></br>
        <p>
        ModeOfPayment:{""}
        {localStorage.getItem("ModeOfPayment")?
        localStorage.getItem("ModeOfPayment")
    :"NA"}
        </p>



        </div>
    );
}
export default NewInvoiceDetail;