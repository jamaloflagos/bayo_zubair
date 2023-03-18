import classes from '../css/Menu.module.css'
import {motion, AnimatePresence} from 'framer-motion'
import {Link} from 'react-scroll'
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// import {faGithub} from '@fortawesome/free-solid-svg-icons'

const menuVariants = {
    initial: {
        // width: 500,
        height: 0,
    },
    animation: {
        height: 500,
        display: 'block',
        transition: {type: 'tween', duration: 0.5}
    },
    exit:{
        height: 0, 
        transition: {duration: 0.5, delay: 2}
    }

}

const linksVariants = {
    initial: {
        x: '-100%',
        opacity: 0,
        // marginTop: 1
    },
    animate: {
        x: 0,
        opacity: 1
    }
}

const lineVaraints = {
    initial: {
        width: 0, 
        backgroundColor: '#ffffff',
        height: '2px'
    },
    animate: {
        width: 100, backgroundColor: '#ffffff', opacity: 0
    },
    exit: {
        width: 0, transition: {duration: 1}
    }
}

const demacateVariants = {
    initial: {
        width: 0,
        height: 0,
        marginLeft: 30,
        marginTop: 0,
        backgroundColor: '#010305',

    },
    animate: {
        width: 400,
        height: 1,
        opacity: 0.5,
        transition: {
            duration: 1.4, delay: 0.5
        }
    },
    exit: {
        // height: 0,
        width:0,
        transition: {
            duration: 1
        }
    }
}


const spanVariants = {
    initial: {
        y: '-100%',
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1
    }
}

const linkStyle = {
    marginTop: '20px'
}
export default function Menu(props) {
    function cancelMenu() {
        props.setShowMenu(prevShowMenu => !prevShowMenu)
        props.bar1Cycle()
        props.bar2Cycle()
        props.bar3Cycle()
    }
    return (
        
        <>
            <AnimatePresence>
                {props.showMenu && ( 
                <motion.div 
                    variants={menuVariants}
                    initial='initial'
                    animate='animation'
                    exit= 'exit'
                    className={classes.menu}
                >
                    <h1 style={{marginTop: '50px', marginLeft: '30px'}}>Bayo Zubair</h1>
                    <motion.div
                                className={classes.demacate}
                                variants={demacateVariants}
                                initial='initial'
                                animate='animate'
                                exit='exit' 
                        ></motion.div>
                   <div className={classes.grid}>
                        <motion.nav className={classes.link}>
                                <motion.div
                                    className={classes.links}
                                    variants={linksVariants}  
                                    initial='initial'
                                    animate='animate'
                                    transition={{duration: 0.3, delay: 0.5}}
                                    exit= {{
                                        x: '-100%',
                                        opacity: 0, 
                                        transition: {duration: 0.3}
                                    }}
                                    whileHover={{x: 2}}
                                    
                                >
                                    <Link 
                                        onClick={cancelMenu} 
                                        to='about'
                                        duration={2000}
                                        delay={2000} 
                                        smooth='easeOutQuad'
                                    >About Me</Link>
                                </motion.div>
                                <motion.div
                                    variants={lineVaraints}
                                    initial='initial'
                                    animate='animate'
                                    transition= {{duration: 0.3, delay: 0.5}}
                                    exit= {{
                                        x: '-100%',
                                        opacity: 0, 
                                        width: 0,
                                        transition: {duration: 0.3}
                                    }} 
                                ></motion.div>
                                <motion.div
                                    style={linkStyle}
                                    className={classes.links}
                                    variants={linksVariants}    
                                    initial='initial'
                                    animate='animate'
                                    transition={{duration: 0.3, delay: 0.8}}
                                    exit= {{
                                        x: '-100%',
                                        opacity: 0, 
                                        transition: {duration: 0.3, delay: 0.3}
                                    }}                 
                                >
                                    <Link 
                                        onClick={cancelMenu} 
                                        to='project'
                                        delay={2000}  
                                        duration={2000}
                                        smooth='easeOutQuad'
                                    >My Projects</Link>
                                </motion.div>
                                <motion.div
                                    variants={lineVaraints}
                                    initial='initial'
                                    animate='animate'
                                    transition= {{duration: 0.3, delay: 0.8}}
                                    exit= {{
                                        x: '-100%',
                                        opacity: 0,
                                        width: 0, 
                                        transition: {duration: 0.3, delay: 0.3}
                                    }}
                                ></motion.div>
                                <motion.div
                                    style={linkStyle}
                                    className={classes.links}
                                    variants={linksVariants}
                                    initial='initial'
                                    animate='animate'
                                    transition={{duration: 0.3, delay: 1.1}}
                                    exit= {{
                                        x: '-100%',
                                        opacity: 0, 
                                        transition: {duration: 0.3, delay: 0.6}
                                    }}
                                >
                                        <Link 
                                            onClick={cancelMenu} 
                                            to='contact'
                                            delay={2000}  
                                            duration={2000}
                                            smooth='easeOutQuad'
                                        >Contact Me</Link>
                                </motion.div>
                                <motion.div
                                    variants={lineVaraints}
                                    initial='initial'
                                    animate='animate'
                                    transition= {{duration: 0.3, delay: 1.1}}
                                    exit= {{
                                        x: '-100%',
                                        opacity: 0, 
                                        width: 0,
                                        transition: {duration: 0.3, delay: 0.6}
                                    }}
                                ></motion.div>
                                <motion.div
                                    style={linkStyle}
                                    className={classes.links}
                                    variants={linksVariants}
                                    initial='initial'
                                    animate='animate'
                                    transition={{duration: 0.3, delay: 1.4}}
                                    exit= {{
                                        x: '-100%',
                                        opacity: 0, 
                                        transition: {duration: 0.3, delay: 0.9}
                                    }}
                                >My Resume</motion.div>
                                <motion.div
                                variants={lineVaraints}
                                initial='initial'
                                animate='animate'
                                transition= {{duration: 0.3, delay: 1.4}}
                                exit= {{
                                    x: '-100%',
                                    opacity: 0, 
                                    width: 0,
                                    transition: {duration: 0.3, delay: 0.9}
                                }}
                                ></motion.div>
                        </motion.nav>
                    </div> 
                    <motion.span
                                    variants={spanVariants}
                                    initial='initial'
                                    animate= 'animate'
                                    transition={{delay: 1.4, duration: 0.2}}
                                    exit={{y: '-100%', opacity: 0, transition:{delay: 1.4, duration: 0.2}}}
                                >Don't be a stranger</motion.span> <br/>
                                <motion.span 
                                    variants={spanVariants}
                                    initial='initial'
                                    animate= 'animate'
                                    transition={{delay: 1.6, duration: 0.2}}
                                    exit={{y: '-100%', opacity: 0, transition:{delay: 1.6, duration: 0.2}}}
                                className={classes.meet}>Meet me &#9996;</motion.span>
                                <motion.div 
                                    variants={spanVariants}
                                    initial='initial'
                                    animate= 'animate'
                                    transition={{delay: 1.8, duration: 0.2}}
                                    exit={{y: '-100%', opacity: 0, transition:{delay: 1.8, duration: 0.2}}}
                                className={classes.icons}>
                                    <a style={{color: '#010305', opacity: 0.7}} href=''>
                                        <  i class="fa-brands fa-github"></i>
                                    </a>
                                    <a style={{color: '#010305', opacity: 0.7}} href=''>
                                        <i class="fa-brands fa-twitter"></i>
                                    </a>
                                    <a style={{color: '#010305', opacity: 0.7}} href=''>
                                        <i class="fa-brands fa-linkedin"></i>
                                    </a>
                                    <a style={{color: '#010305', opacity: 0.7}} href=''>
                                        <i class="fa-regular fa-envelope"></i>
                                    </a>
                                </motion.div>
                   
                </motion.div>
                 )} 
            </AnimatePresence>
        </>
    )
}