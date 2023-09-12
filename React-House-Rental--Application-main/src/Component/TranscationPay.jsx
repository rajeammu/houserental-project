import React from "react";
import{Link, Outlet}from "react-router-dom";
import "./Transcationpay.css";
function TranscationPay()
{
    return(
        <div>
 return (
        <nav>
      <div class="header">
      <div class="col">
        <div class="Dash">
        <Link id="dash"to="/dashboard/transcationpay/paymentdetail">PaymentDetail</Link>
        </div>
        <div class="own">
        <Link id="own"to="/dashboard/transcationpay/paymentform">+Payment Form</Link>
        </div>
        <Outlet/>
        </div>
      </div>
      
      </nav>
    );
        </div>
    );
}
export default TranscationPay;