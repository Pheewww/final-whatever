import React from "react"
import { useState } from "react"

function Hostel() {

    const [IN,setIn]=useState(true);
    const [OUT,setOut]=useState(true);
    const [Leave,setLeave]=useState(true);
    const [defcolor,setColor]=useState("white");
    const [reg_no,setNumber]=useState("");
    const [user,setUser]=useState({
        username:"",
        year:"",
        branch:"",
    })

    function putData(e){
        let value=e.target.value;
        setNumber(value);
    }

    const PostData=async (e)=>{
        e.preventDefault();
        const resp = await fetch("http://localhost:3000/users/api/entry", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                reg_no,
            }),
        });
    
        if (resp.ok) {
            const data1 = await resp.json();
            const {id,username,reg_no,year,branch}=data1;
            setUser({
                username:`${username}`,
                year:`${year}`,
                branch:`${branch}`
            })

            setIn(false);
            setOut(false);
            setLeave(false);
            setColor("lightgreen");
           
        } else {
            const errorData = await resp.json();
            console.error(errorData.message);
        }
        

    }
    
    const senddata=async (e)=>{
        const date=new Date();
        const timeOut=date.getHours()+ ':' + date.getMinutes() + ":" + date.getSeconds();
        const {username,year,branch}=user;
        const timein="";
        const resp=await fetch("http://localhost:3000/out/api/outdetails",{
            method:"POST",
            headers:{
                "Content-type":"application/json",
            },
            body:JSON.stringify({
                username,
                reg_no,
                year,
                branch,
                timeOut,
                timein,
            }),
        })

        if(resp.status!=422)
        {
            window.alert("entry made");
        }
    }

    const makeIn=async (e)=>{
        const date=new Date();
        const timein=date.getHours()+ ':' + date.getMinutes() + ":" + date.getSeconds();
        const resp=await fetch("http://localhost:3000/out/api/indetails",{
            method:"POST",
            headers:{
                "Content-type":"application/json",
            },
            body:JSON.stringify({
                
                reg_no,
                timein,
                
            }),
        })
        if(resp.status!=422)
        {
            window.alert("entry made");
        }
    }
    return (
        <>
            <div style={{ display: "inline-flexbox", justifyContent: "center" }}>


                <form style={{ textAlign: 'center', margin: '20px', padding: '20px', border: '3px solid #ccc' }} method="POST">
                 <div style={{ marginBottom: '15px' }}>   
                        <label style={{ marginRight: '10px' }}>Reg No:</label>
                        <input
                            type="text"
                            value={reg_no}
                            name="reg_no"
                            onChange={putData}
                            style={{ padding: '8px', borderRadius: '5px', border: '1px solid #ddd' }}
                        />
                    </div>

                    <div style={{ marginBottom: '15px' }}>
                        <label style={{ marginRight: '10px' }}>Name:</label>
                        <input
                            type="text"
                            name="name"
                            value={user.username}
                            style={{ padding: '8px', borderRadius: '5px', border: '1px solid #ddd' }}
                        />
                    </div>
                    <div style={{ marginBottom: '15px' }}>
                        <label style={{ marginRight: '10px' }}>Year:</label>
                        <input
                            type="text"
                            name="year"
                            value={user.year}
                            style={{ padding: '8px', borderRadius: '5px', border: '1px solid #ddd' }}
                        />
                    </div>
                    <div style={{ marginBottom: '15px' }}>
                        <label style={{ marginRight: '10px' }}>Branch:</label>
                        <input
                            type="text"
                            name="Branch"
                            value={user.branch}
                            style={{ padding: '8px', borderRadius: '5px', border: '1px solid #ddd' }}
                        />
                    </div>
                    <button style={{ height: '30px',border:"1px solid #333", borderRadius: '10px',backgroundColor:"lightblue" , marginTop: '10px' }} onClick={PostData}>
                        Verify
                    </button>
                </form>

            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <div style={{ display: "flex", gap: "10px" }}>
                    <button style={{ border: "1px solid #333", borderRadius: "5px", backgroundColor: `${defcolor}`, color: "black" }} disabled={IN} onClick={makeIn}>
                        IN
                    </button>
                    <button style={{ border: "1px solid #333", borderRadius: "5px", backgroundColor: `${defcolor}`, color: "black" }} disabled={OUT} onClick={senddata} >
                        OUT
                    </button>
                    <button style={{ border: "1px solid #333", borderRadius: "5px", backgroundColor: `${defcolor}`, color: "black" }} disabled={Leave}>
                        LEAVE
                    </button>
                </div>
            </div>

        </>
    )
}

export default Hostel;