import React,{Component} from 'react'
import { FaLinkedin,FaHackerrank,FaGithub} from "react-icons/fa";
import {SiCodeforces,SiLeetcode,SiHackerearth,SiCodechef} from "react-icons/si"
import classes from './Contact.module.css'

export class Contact extends Component {

    constructor(props) {
        super(props)
        this.handleClick=this.handleClick.bind(this);
    }
    
    handleClick=(url)=>{
        return ()=>window.open(url,"_blank");
    }

    render() {
        return (
            <div className={classes.contact} id="contact">
            <div className={classes.contactIcons}>
            <FaLinkedin color='white' size='30px' style={{padding:'1%'}} onClick={this.handleClick('https://www.linkedin.com/in/rohan-tibrewal-181b4616b/')} />
            <FaHackerrank color='white' size='30px' style={{padding:'1%'}} onClick={this.handleClick('https://www.hackerrank.com/MysogynistPsycho')} />
            <SiCodechef color='white' size='30px' style={{padding:'1%'}} onClick={this.handleClick('https://www.codechef.com/users/studmaxxxx')} /> 
            <SiCodeforces color='white' size='30px' style={{padding:'1%'}} onClick={this.handleClick('https://codeforces.com/profile/hai_koi')} />
            <SiHackerearth color='white' size='30px' style={{padding:'1%'}} onClick={this.handleClick('https://www.hackerearth.com/@f20170322')} />
            <SiLeetcode color='white' size='30px' style={{padding:'1%'}} onClick={this.handleClick('https://leetcode.com/psychopath/')} />
            <FaGithub color='white' size='30px' style={{padding:'1%'}} onClick={this.handleClick('https://github.com/studmaxx')} />
            </div>
           

        </div>
        )
    }
}

export default Contact





// function Contact() {
//     return (
//         <div className={classes.contact}>
//             <div className={classes.contactIcons}>
//             <FaLinkedin color='white' size='30px' style={{padding:'1%'}} onClick={()=>this.handleClick('https://www.linkedin.com/in/rohan-tibrewal-181b4616b/')} />
//             {/* /* <FaLinkedin color='white' size='30px' style={{padding:'1%'}} onClick={window.open('https://www.linkedin.com/in/rohan-tibrewal-181b4616b/',"_blank")} /> */}
//             {/* <FaHackerrank color='white' size='30px' style={{padding:'1%'}} onClick={window.open('https://www.hackerrank.com/MysogynistPsycho',"_blank")} /> */}
//             {/* <SiCodechef color='white' size='30px' style={{padding:'1%'}} onClick={window.open('https://www.codechef.com/users/studmaxxxx',"_blank")} /> */}
//             {/* <SiCodeforces color='white' size='30px' style={{padding:'1%'}} onClick={window.open('https://codeforces.com/profile/hai_koi',"_blank")} /> */}
//             {/* <SiHackerearth color='white' size='30px' style={{padding:'1%'}} onClick={window.open('https://www.hackerearth.com/@f20170322',"_blank")} /> */}
//             {/* <SiLeetcode color='white' size='30px' style={{padding:'1%'}} onClick={window.open('https://leetcode.com/psychopath/',"_blank")} /> */}
//             {/* <FaGithub color='white' size='30px' style={{padding:'1%'}} onClick={window.open('https://github.com/studmaxx',"_blank")} /> */} */}
//             </div>
           

//         </div>
//     )
// }

// export default Contact
