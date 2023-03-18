import classes from '../css/Contact.module.css'
export default function Contact() {
    return (
        <div id="contact" style={{color: 'white', height: '100vh', paddingTop: '25vh'}}>
            
            <h1 className={classes.idea} >You have an idea?</h1>
            <h1 className={classes.share} >Share it with me!</h1>
            <h1 className={classes.open} 
            >I am always open to any form of positive ideas, suggestions and opportunities.</h1>
            <div 
                    style={{margin: '50px auto 0 auto', width: '200px',
                    height: '50px', textAlign: 'center', 
                    border: '1px solid #9acff2', paddingTop: '10px',
                    borderRadius: '10px', cursor: 'pointer', fontSize: '1.5rem'
                }}
            >
                <a  href="" style={{textDecoration: 'none', color: 'white'}}>Say Hello</a>
            </div>
        </div>
    )
}