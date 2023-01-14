import classes from "./TimerMusic.module.css"

export default function TimerMusic(){
    return(
        <div className={classes.container}>
            <div className={classes.timer}>
                <div className={classes.total}/>
                <div className={classes.totalPass}/>
            </div>
            <div className={classes.numberTimes}>
                <p>03:20</p>
                <p>00:12</p>
            </div>
        </div>
    )
}
