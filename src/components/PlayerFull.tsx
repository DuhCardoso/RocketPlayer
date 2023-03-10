import classes from "./PlayerFull.module.css"

import ButtonPlay from "../layout/ButtonsPlay";
import MusicInfo from "../layout/MusicInfo";
import TimerMusic from "../layout/TimerMusic";
import MusicImg from "../layout/MusicImg";


// https://i.pinimg.com/474x/d8/ba/8a/d8ba8a1b747682d7a91a76fedf7660b0.jpg
export default function PlayerFull(){
    return(
        <div className={classes.container}>
            <MusicImg customBorder="off" width="full"/>

            <MusicInfo />

            <ButtonPlay customWidth="min"/>

            <TimerMusic />
        </div>
    )
}