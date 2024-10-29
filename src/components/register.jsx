import React, { useState } from "react";
//import{useHistory} from 'react-router-dom'


function Register(){
   // const history=useHistory();
    const [user,setUser]=useState({
        username:"",
        reg_no:"",
        year:"",
        branch:""
    })

    const setdetails=(e)=>{
        let name=e.target.name;
        let value=e.target.value;

        setUser({...user,[name]:value});
    }

    const Postdata=async (e)=>{
        e.preventDefault();
        const {username,reg_no,year,branch}=user;
        const resp=await fetch("http://localhost:3000/users/api/register",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({
                username,
                reg_no,
                year,
                branch,
            })
        })
        const data=await resp.json();
        if(resp.status !=422){
            window.alert("Registered successfully")
            setUser({
                username:"",
                reg_no:"",
                year:"",
                branch:""
            })
           // history.push('/entry');
        }
        
    
    }
    return(
    <>
    <div className="bg-gray-100 h-screen flex items-center justify-center">
    <form className="bg-white p-8 rounded shadow-md max-w-md" method="POST">

        <label className="block text-sm font-medium text-gray-600 mb-2" for="username">Username:</label>
        <input className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" type="text" id="username" name="username" value={user.username} onChange={setdetails} required/>

        <label className="block text-sm font-medium text-gray-600 mb-2" for="registrationNumber">Registration Number:</label>
        <input className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" type="text" id="reg_no" name="reg_no" value={user.reg_no} onChange={setdetails} required/>

        <label className="block text-sm font-medium text-gray-600 mb-2" for="year">Year:</label>
        <input className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" type="text" id="year" name="year" value={user.year} onChange={setdetails} required/>

        <label className="block text-sm font-medium text-gray-600 mb-2" for="branch">Branch:</label>
        <div style={{ marginBottom: '15px' }}><input className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" type="text" id="branch" name="branch" value={user.branch} onChange={setdetails}  required/></div>

        <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:shadow-outline-green" type="submit" onClick={Postdata}>Submit</button>
    </form>
    </div>
    </>
    )
}

export default Register;