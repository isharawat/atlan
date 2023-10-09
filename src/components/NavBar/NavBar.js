import React from 'react'
import './NavBar.css';
import DataBasesDropdown from './DataBases'
export const NavBar = () => {
  return (
    <div className='navbar-outer-box'>
        <div className='inline'>
            <div style={{fontSize: "25px"}}>SQL EDITOR</div>
        </div>
        <div className='inline'>
            <div className='inline'> 
                <DataBasesDropdown/>
            </div>
        
            <div className='inline'><button>Profile</button></div>
            <div className='inline'><button>Login/LogOut</button></div>
        </div>
    </div>

  )
}

