import classes from './Header.module.css'
import {motion, useCycle} from 'framer-motion'
import {Link} from 'react-scroll'
import Menu from './Menu'
const menuBar1Variants = {
    initial:{width: 15, rotate: 0, y: 0},

    showMenuAnimation: {
            width: 25,
            rotate: -50,
            y: 4,
            backgroundColor: 'black',
            transition: {duration: 0.5, ease: 'easeOut'}
    }, 
    hideMenuAnimation: {
            width: 15,
            rotate: 0,
            y: 0,
            transition: {duration: 0.5, ease: 'easeOut'}

    },
    
}

const menuBar2Variants = {
    initial:{width: 20, rotate: 0, y: 0},

    showMenuAnimation: {
        x: -15,
        opacity: 0,
        transition: {duration: 0.5, ease: 'easeOut'}
    },
    hideMenuAnimation: {
        width: 20,
        x: 0,
        opacity: 1,
        transition: {duration: 0.5, ease: 'easeOut'}

    }
}

const menuBar3Variants = {
    initial:{width: 25, rotate: 0, y: 0},

    showMenuAnimation: {
        width: 25,
        rotate: 50,
        y: -4,
        backgroundColor: 'black',
        transition: {duration: 0.5, ease: 'easeOut'}
        
    },
    hideMenuAnimation: {
        rotate: 0,
        y: 0,
        width: 25,
        transition: {duration: 0.5, ease: 'easeOut'}

    }
}
export default function Header(props) {
    console.log(5%2)

    const [bar1Cycle, bar1CycleFunction] = useCycle('hideMenuAnimation', 'showMenuAnimation')
    const [bar2Cycle, bar2CycleFunction] = useCycle('hideMenuAnimation', 'showMenuAnimation')
    const [bar3Cycle, bar3CycleFunction] = useCycle('hideMenuAnimation', 'showMenuAnimation')

    function toggleShowMenu () {
        props.setShowMenu(prevShowMenu => !prevShowMenu)
        bar1CycleFunction()
        bar2CycleFunction()
        bar3CycleFunction()
    }
    
    return (
        <div className={classes.header}>
            <Menu 
                    showMenu={props.showMenu}
                    setShowMenu={props.setShowMenu}
                    bar1Cycle={bar1CycleFunction}
                    bar2Cycle={bar2CycleFunction}
                    bar3Cycle={bar3CycleFunction}
                />
            <div
             className={classes.logo}><h1>B</h1></div>
            <motion.div
                initial={{y: '-100vh'}}
                animate={{y: 0}}
                transition={{delay: 1, duration: 1}}
                className={classes.menuBar} onClick={toggleShowMenu} >
                <motion.div 
                    variants={menuBar1Variants}
                    animate={bar1Cycle}
                className={classes.bar1}>
                </motion.div>
                <motion.div 
                    variants={menuBar2Variants}
                    animate={bar2Cycle}
                    className={classes.bar2}
                >
                </motion.div>
                <motion.div 
                    variants={menuBar3Variants}
                    animate={bar3Cycle}
                    className={classes.bar3}>
                </motion.div>
            </motion.div>
            <div className={classes.navFlex}>
                <Link className={classes.link}
                    to='about'
                    duration={2000}
                    offset={-100}
                    smooth='easeOutQuad'
                >About Me</Link>
                <Link className={classes.link}
                    to='project'
                    duration={2000}
                    offset={-100}
                    smooth='easeOutQuad'
                >My Projects</Link>
                <Link className={classes.link}
                    to='contact'
                    duration={2000}
                    smooth='easeOutQuad'
                >Contact Me</Link>
                <Link className={classes.link}>My Resume</Link>
            </div>
        </div>
    )
}