import projectData from "./data"
import classes from '../css/Projects.module.css'
import {motion} from 'framer-motion'
export default function Projects() {
 



    const projects = projectData.map(item => {
        const rem = item.id % 2
        return <motion.div whileInView={{scale: 1, transition:{duration: 0.5}}} initial={{scale: 0.9}}key={item.id} className={classes.projects}>
            <motion.img 
                whileHover={{scale: 1.03, transition: {duration: 1}}}
                src={item.img} 
                className={rem === 0 ? classes.projectImageOdd: classes.projectImage}
                />
            <div className={rem === 0 ? classes.projectDetailsOdd : classes.projectDetails}>
                <motion.h1 
                    whileHover={{transition: {duration: 2}}}
                    className={rem === 0 ? classes.nameOdd : classes.name}>{item.name}</motion.h1>
                <motion.h1 className={rem === 0 ? classes.projectIdOdd : classes.projectId}>{item.id}</motion.h1>
                <motion.h2 
                    whileHover={{x: [0,20, -20, 0], transition:{duration: 2}}}
                    // onHoverEnd={() => animate={x: 0, transition:{duration: 1}}}
                    className={rem === 0 ? classes.descriptionOdd : classes.description}
                >{item.description}</motion.h2>
                <motion.h3 className={rem === 0 ? classes.stackOdd : classes.stack}> {item.stack}</motion.h3>
                <div className={rem === 0 ?classes.projectLinkOdd : classes.projectLink}>
                    <motion.a
                        whileHover={{color: '#9acff2', transition:{duration: 2}}}
                        animate={{scale: 1.2}}

                        href="" style={{color: 'white', transition:{duration: 2}}}><i class="fa-solid fa-link"></i></motion.a>
                    <motion.a 
                        whileHover={{color: '#9acff2', scale: 1.5}}
                        animate={{scale: 1.2}}
                        style={{color: 'white'}} href=''>
                        <  i class="fa-brands fa-github"></i>
                    </motion.a>
                </div>
            </div>
                    
                   
        </motion.div>
    })
    return (
        <div id="project">
                <h1 style={{fontSize: '1rem', color: 'white', marginTop: "50px"}}>Some things I have built</h1>
                <h1 style={{width: '50vw', 
                            fontSize: '2.5vw', 
                            marginTop: '10px',
                            // marginLeft: '70px',
                            color: 'grey'
                        }}
                >They are amazing, take a look</h1>
            {projects}
        </div>
    )
}