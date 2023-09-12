import React, { useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import './LoginPage.css';


const LoginPage=()=>
{
    const navigate=useNavigate();
    const[UserName,setUserName]=useState('');
    const[Password,setPassword]=useState('');
    const userName=localStorage.getItem("UserName")?localStorage.getItem("UserName"):"Admin"
    const password=localStorage.getItem("Password")?localStorage.getItem("Password"):"admin"
    const handleSubmit=(e)=>
    {
        e.preventDefault();
        if(UserName===userName && Password===password)
        {
            alert("login succes")
            navigate('/Dashboard')
        }
        else{
           alert ("Invalid username or password");
        }
    }
    

    return(
        <div id="Container">
            <form id="form-control" >
                <h1 id="head"> House Rental Application </h1><br></br>
                <div>
                <label id="user">UserName:</label>
                <input type="text" onChange={(e)=>setUserName(e.target.value)} id="username" placeholder="Admin" required />
                </div>
                <br></br>
                <div >
                <label>Password:</label>
                <input type="text" onChange={(e)=>setPassword(e.target.value)} id="Password"  placeholder="admin" required />
                </div>
                <br></br>
                <div>
                    <p>Dont Have An Account? <span><Link to="/signup">SignUp</Link></span></p>
                    
                </div>
                <br></br>
                <button onClick={handleSubmit}id="submit" >Login</button>
                <br></br>
            </form>

        </div>
    );
}
export default LoginPage;
