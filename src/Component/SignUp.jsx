import React, { useState } from "react";
import {Link, useNavigate} from "react-router-dom";
import "./SignUp.css";
const SignUp=()=>
{
    const navigate=useNavigate();
    const[UserName1,setUserName1]=useState("");
    const[Password1,setPassword1]=useState("");
    const[ConfirmPassword1,setConfirmPassword1]=useState("");
    const handleSubmit=(e)=>
    {
e.preventDefault();
if(UserName1 === "Admin"  && Password1 === "admin" && ConfirmPassword1 ==="admin")
{
    alert("login success")
    navigate('/dashboard')
}   }
    return(
        <div class="container">
       <form id="col10">
      <div class="signup">SignUp</div>
      <br></br>
        <div>
            <label id="col11">UserName:</label>
            <input type="text" id="UserName1" onChange={(e)=>setUserName1(e.target.value)}/>
        </div>
        <br></br>
        <div>
            <label  id="col11">Password:</label>
            <input type="text" id="Password1" onChange={(e)=>setPassword1(e.target.value)}/>
        </div>
        <br></br>
        <div>
            <label  id="col11">ConformPassword:</label>
            <input type="text" id="ConfirmPassword1" onChange={(e)=>setConfirmPassword1(e.target.value)}/>
        </div>
        <br></br>
        <div>
                <p>Already Have An Account? <span><Link to="/">SignIn</Link></span></p>
                
            </div>
        <br>
        </br>
        <br></br>
        <button type="submit" onClick={handleSubmit} id="btn1">Signup</button>
       </form>
       </div>
    );
}
export default SignUp;