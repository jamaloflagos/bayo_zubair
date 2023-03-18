import classes from './Container.module.css'
// const styles = {
//     backgroundColor : '#010305'
// }


export default function Container(props) {
    return <div className={classes.container}>{props.children}</div>
}