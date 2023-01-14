import classes from "./PlayerNotificationTimer.module.css"

import ButtonPlay from "../layout/ButtonsPlay";
import MusicInfo from "../layout/MusicInfo";
import TimerMusic from "../layout/TimerMusic";
import MusicImg from "../layout/MusicImg";


// https://i.pinimg.com/474x/d8/ba/8a/d8ba8a1b747682d7a91a76fedf7660b0.jpg
export default function PlayerNotificationTimer(){
    return(
        <div className={classes.container}>
            <div className={classes.main}>
                <MusicImg customBorder="on" width="min"/>

                <MusicInfo />
            </div>

            <ButtonPlay customWidth="long"/>

            <TimerMusic />
        </div>
    )
}