import React from 'react'
import './style.css'

function Navbar (){
    return(
        <div>
            <nav className="nav">
                <img src={"/images/nav_logo.jfif"} className="nav--logo" alt={"Missing"}/>
                <h1 className='nav--heading'>My Travel Journal</h1>
            </nav>
        </div>
    )
}
export default Navbar;