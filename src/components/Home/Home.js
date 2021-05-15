import React from 'react'
import classes from './Home.module.css'
import code from './../../img/cover1.jpg'
import hack from './../../img/hack.jpg'

function Home() {
    return (
        <div className={classes.Home} >
            <div className={classes.Container}>
                <h1 className={classes.Hello}>Hello World</h1>
                <h1>Welcome to my website</h1>
            </div>
            <img className={classes.Code} src={code} alt="couldn't display" />
            <img className={classes.hack} src={hack} alt="gandi shakal" />
        </div>
    )
}

export default Home
