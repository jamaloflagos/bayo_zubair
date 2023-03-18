import classes from '../css/Intro.module.css'
import image from '../images/man.jpg'
import {motion} from 'framer-motion'




const introVaraints = {
    initial: {
        y: '100%'
    },
    animation: {
        y: 0,
        transition: {
            type: 'tween',
            // delay: 3,
            duration: 1,
            ease: 'easeOut',
            when: 'beforeChildren'
        }
    }
    
} 

export default function Intro() {
          

    return (
        <div>
            
            <motion.div 
                variants={introVaraints}
                initial='initial'
                animate='animation'
                className={classes.introDisplay}>
                
                <div className={classes.intro}>
                    <div className={classes.div}>
                        <motion.h1 className={classes.bayo}
                            initial={{x: 30, opacity: 0}}
                            animate={{x: 0, opacity: 1}}
                            transition={{type: 'tween', duration: 1, delay: 1}}
                        >Bayo Zubair
                        </motion.h1>
                        <motion.h2
                            initial={{x: '-100vw'}}
                            animate={{x: 0}}
                            transition={{type: 'tween', duration: 1, delay: 1}}
                        >Backend Developer</motion.h2>
                        <motion.h3
                            initial={{opacity: 0, marginTop: 10}}
                            animate={{opacity: 1}}
                            transition={{type: 'tween', duration: 2, delay: 2}}
                        >I handle the unseen on the web to <br/>
                         make the seen filled with seamless <br/>
                         experiences.
                         </motion.h3>
                    </div>
                    <div>
                        <img className={classes.devImg} src={image} alt='man' style={{opacity: 0.5, marginTop: '50px'}}/>
                    </div>
                    <a  href=''
                        download
                        style={{marginTop: '30px', width: '150px',
                               height: '50px', textAlign: 'center', 
                               border: '1px solid #9acff2', paddingTop: '10px',
                               borderRadius: '10px', cursor: 'pointer',
                               textDecoration: 'none', color: 'white', fontSize: '1.5rem'
                            }}
                    >Resume</a>

                </div>
            </motion.div>
        </div>
    )
}