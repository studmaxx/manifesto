import React from 'react'
import PageHeader from '../PageHeader/PageHeader'
import classes from './Skills.module.css'
import skill from './../../img/skill.jpg'

const listTitleStyle={fontWeight:900,color:'#9B1FE8' ,marginBottom:'4px'}

const backendSkills=
<ul>
    <li style={listTitleStyle}>BACKEND</li>
    <li>Akka - Spring boot - Slick</li>
</ul>
const frontendSkills=
<ul>
    <li style={listTitleStyle}>FRONTEND</li>
    <li>HTML - CSS - JS - ReactJS- ReactHooks</li>
</ul>

const mlSkills=
<ul>
    <li style={listTitleStyle}>Deep Learning-Data Science</li>
    <li>Python-regression-classification-NN</li>
</ul>

const SecDevOpsSkills=
<ul>
    <li style={listTitleStyle}>Security development Operation tools</li>
    <li>DLP-Demisto-JIRA</li>
</ul>

const Languages=
<ul>
    <li style={listTitleStyle}>Coding Languages</li>
    <li>C++</li>
    <li>JAVA</li>
    <li>Python</li>
</ul>
const OtherSkills=
<ul>
    <li style={listTitleStyle}>Other skills</li>
    <li>Image Processing - Matlab</li>
    <li>Vector CANoe-CANdb</li>
</ul>

const totalSkills=[backendSkills,frontendSkills,SecDevOpsSkills,Languages,mlSkills,OtherSkills];
function Skills() {
    return (
        <div className={classes.Skills} id="skills">
            <PageHeader title={"What about the Skills?"} />
            <div className={classes.image}>
            <img src={skill} alt="skills" width="60%" height="42%"/>
            </div>
            <p>
                I am a life long learner and enjoy learning new stuff! 
                Below are some programming languages,toolkits,frameworks
                and libraries that I have worked with and like.
                Some of them I control better than the other.
            </p>
            
            <div className={classes.Container}>
                {
                totalSkills.map(skills=>{
                    return (
                        <div className={classes.List}>
                            {skills} 
                        </div>

                    )
                })
            }
            </div>
        </div>
    )
}

export default Skills
