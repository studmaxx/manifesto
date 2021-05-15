import React from 'react'
import PageHeader from '../PageHeader/PageHeader'
import classes from './Projects.module.css'
import samsung from './../../img/samsung.jpg'
import syf from './../../img/syf.png'
import sun from './../../img/sun.jpg'
import data from './../../img/datascience.webp'
import background from './../../img/bgd1.jpg'


// const project=(th,description) => {
//     console.log("function called");
//     <div className={classes.Container}>
//         console.log(`inside container');
//         <div className={classes.thumb}>
//         <img src={th} alt="thumbnail" />
//         </div>
//         <div className={classes.Text}>
//         <p>{description}</p>
//         </div>
//     </div>
// }

const samsungDescription=`I interned at samsung research institute in summers of 2020.It was a virtual experience where i got exposed to 
deep learning stuffs. I worked on a project of Enhancing very deep super resolution using VDSR approach wherein we succeeded to get the results
for static videos at a delay of negligible 0.001 s`;

const synchronyDescription=`I interned at synchrony financial for a period of 5 months from may to dec 2020 wherein i worked with the analyst
as wells as the secdevops team.We triaged the incidents and furtheron we made an integration on demisto for DLP platform`;

const sunDescription=`I interned at sun mobility in summers of 2019 . It was a great experience as we were in person present so learned a lot 
about the etiquettes and worked on a projects of simulation of battery packs in real and automated environment`;

const dataDescription=`In my minors of data science,I got an opportunity to work on a project related to house price prediction in keras
using tensor flow.Different parameters were taken as inputs such as age of house,latitude,longitude,distance from the city,etc and label 
as price was obtained by training the model using neural networks of 3 hidden layers.`;

function Projects() {
    return (
        <div className={classes.Project} id="projects">
            <img className={classes.Background} src={background} alt="image" />
            <PageHeader title={"Projects & Work Experience"} />
            <div className={classes.Content}>
                <div className={classes.Paragraph}>
                    <p>
                        I have worked on various projects during my tenure at college and the companies wherein I have interned.
                        Check out them below:
                    </p>
                </div>
                <div className={classes.Videos}>

                    <div className={classes.Container}>
                    <div className={classes.thumbnail}><img src={sun} alt="thumbnail" /></div>
                    <div className={classes.Text}><p>{sunDescription}</p></div>
                    </div>


                    <div className={classes.Container}>
                    <div className={classes.thumbnail}><img src={samsung} alt="thumbnail" /></div>
                    <div className={classes.Text}><p>{samsungDescription}</p></div>
                    </div>

                    <div className={classes.Container}>
                    <div className={classes.thumbnail}><img src={syf} alt="thumbnail" /></div>
                    <div className={classes.Text}><p>{synchronyDescription}</p></div>
                    </div>

                    <div className={classes.Container}>
                    <div className={classes.thumbnail}><img src={data} alt="thumbnail" /></div>
                    <div className={classes.Text}><p>{dataDescription}</p></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;
