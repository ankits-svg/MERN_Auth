import React from 'react'
import style from './style.module.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className={style.nav}>
      <Link to='/'>Sign Up Page</Link>
      <Link to='/login'>Login Page</Link>
    </div>
  )
}

export default Navbar
