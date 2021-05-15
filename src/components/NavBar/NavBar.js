import React from 'react'
import classes from './NavBar.module.css'

function NavBar() {
    return (
        <div className={classes.NavBar}>
           <nav>
               <ul>
                   <li>
                       <a href="/">Home</a>
                   </li>
                   <li>
                       <a href="/#about">About</a>
                   </li>
                   <li>
                       <a href="/#skills">Skills</a>
                   </li>
                   <li>
                       <a href="/#projects">Projects</a>
                   </li>
                   <li>
                       <a href="/#contact">Contact Us</a>
                   </li>
               </ul>
           </nav>
        </div>
    )
}

export default NavBar
