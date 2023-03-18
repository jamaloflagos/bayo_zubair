import classes from '../css/About.module.css'
import Arrow from './Arrow'
export default function About() {
    return (
        <div id='about' className={classes.about}>
            <div className={classes.aboutArrow}>
                <Arrow />
                <h1 className={classes.know}>Know more of me!</h1>
            </div>
            <h1 className={classes.aboutText}>
            It is a long established fact that a reader will be distracted by the 
            readable content of a page when looking at its layout. The point of using 
            Lorem Ipsum is that it has a more-or-less normal distribution of letters, 
            as opposed to using 'Content here, content here', making it look like readable 
            English. Many desktop publishing packages and web page editors now use Lorem 
            Ipsum as their default model text, and a search for 'lorem ipsum' will uncover 
            many web sites still in their infancy. Various versions have evolved over the years, 
            sometimes by accident, sometimes on purpose (injected humour and the like).
            </h1>
        </div>
    )
}