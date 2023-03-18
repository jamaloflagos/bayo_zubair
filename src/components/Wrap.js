import classes from '../css/Wrap.module.css'
export default function Wrap(props) {
    return <div className={classes.wrap}>{props.children}</div>
}