import React, { useState } from "react";
import style from './style.module.css'
const Signup = () => {

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    const handleSign=()=>{

        let obj={
            email,
            password
        }
        fetch('http://localhost:4000/auth/register',{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(obj)
        }).then(res=>res.json()).then(res=>{
            console.log(res)
            alert('Register Successfull')
        }).catch(err=>{
            console.log(err)
        })
    }
  return (
    <div className={style.card}>
      <div >
      Email:<input
        type="text"
        placeholder="Write your email here"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      </div>
      <div>
      Password:<input
        type="text"
        placeholder="Write your password here"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      </div>
      <button onClick={handleSign}>Sign Up</button>
    </div>
  );
};

export default Signup;
