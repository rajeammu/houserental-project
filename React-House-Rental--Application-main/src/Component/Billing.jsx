import React from 'react';
import{Link, Outlet}from "react-router-dom";
import "./Billing.css";

function Billing()
{
    return (
        <nav>
      <div class="header">
        <div class="col">
        <div class="Dash">
        <Link id="dash"to="/dashboard/billing/newinvoicedetail">InvoiceDetail</Link>
        </div>
        <div class="own">
        <Link id="own"to="/dashboard/billing/newinvoice">+Billing&Invoice</Link>
        </div>
        <Outlet/>
        </div>
      </div>
      
      </nav>
    );
  }


export default Billing;