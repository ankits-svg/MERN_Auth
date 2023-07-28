import React, { useState } from 'react'
import style from './style.module.css'
const Login = () => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    const handleLogin=()=>{
        let obj={
            email,
            password
        }
        fetch('http://localhost:4000/auth/login',{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(obj)
        }).then(res=>res.json()).then(res=>{
            console.log(res)
            localStorage.setItem('token',res.token)
            alert('Login Successfull')
        }).catch(err=>{
            console.log(err)
        })
    }
  return (
    <div className={style.logincard}>
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
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login
