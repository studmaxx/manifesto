import React from 'react'
import PageHeader from '../PageHeader/PageHeader'
import classes from './About.module.css'
import me from './../../img/dp.JPG'

function About() {
    return (
        <div className={classes.AboutMe} id="about">
            <PageHeader title={'About Me'}/>
            <div className={classes.Container}>
                <div className={classes.Text}>
                    <h2>Hello! I'm Rohan</h2>
                    <p>
                        I am graduate from BITS PILANI with my majors in EEE(B.E. Electrical and Electronics Engineering) and minors 
                        in Data Science with a CGPA of 8.19. I have interned with Sun Mobility as embedded software intern,machine 
                        learning intern with Samsung and security operations intern with Synchrony. I am further going to pursue my 
                        passion as a full-stack web developer with Wells Fargo.Really excited for the new role and hope a great learning 
                        curve ahead.Apart from the geeky stuff,I am a die hard cricket fan and also the part of Bits Pilani cricket 
                        team.My favourite cricketer is MS Dhoni and the quality which i admire in him is him calmness and down to earth 
                        nature.My inspiration in life is Elon Musk.
                    </p>
                </div>
                <div className={classes.Photo}>
                    <img className={classes.Me} src={me}  alt="me" />
                </div>
            </div>
        </div>
    )
}

export default About
