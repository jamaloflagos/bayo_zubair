import About from './About'
import Contact from './Contact'
import Projects from './Projects'
import Skill from './Skill'
import Intro from './Intro'
import Wrap from './Wrap'
import Header from './Header'
import { useState } from 'react'

export default function Main() {
    const [showMenu, setShowMenu] = useState(false)
    
    return (

        <div>
            <Header 
                    showMenu={showMenu}
                    setShowMenu={setShowMenu}
                />
            
            <Wrap>
                <Intro />
                <Skill />
                <About />
                <Projects />
                <Contact />
            </Wrap>
        </div>
    )
}