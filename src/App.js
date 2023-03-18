// import Header from './components/Header'
import { useState } from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import Main from './components/Main'
import Footer from './components/Footer'
import Container from './components/Container'
import classes from './css/Intro.module.css'

const initVariants ={
  initial: {
      opacity: [ 1, 0.5]
  },
  animation: {
      opacity: 0,
      transition: {
          duration: 3,
      }
  } 
}

function App() {

  const [showLoader, setShowLoader] = useState(true)
  const [showApp, setShowApp] = useState(false)
    setTimeout(() => {
        setShowLoader(false)
    }, 3000)

    setTimeout(() => {
      setShowApp(true)
    }, 3000)

  return (
    <>
      <AnimatePresence>
                {showLoader && (
                <motion.div
                    className={classes.modal}
                    exit={{opacity: 0}}
                >
                    <motion.h1
                        className={classes.init}   
                        variants={initVariants}  
                        initial='initial'
                        animate='animation'               
                    >B</motion.h1>
                </motion.div>)}
            </AnimatePresence>
      {showApp && (
          <Container>
            <Main />
            <Footer />
          </Container>
      )}
    </>
  );
}

export default App;
