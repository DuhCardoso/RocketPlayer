import classes from "./PlayerFull.module.css"

import ButtonPlay from "../layout/ButtonsPlay";
import MusicInfo from "../layout/MusicInfo";
import TimerMusic from "../layout/TimerMusic";


// https://i.pinimg.com/474x/d8/ba/8a/d8ba8a1b747682d7a91a76fedf7660b0.jpg
export default function PlayerFull(){
    return(
        <div className={classes.container}>
            <img src="https://i.pinimg.com/474x/d8/ba/8a/d8ba8a1b747682d7a91a76fedf7660b0.jpg" alt="Gatinho de oculos escuro e jaqueta jeans, com um cigaro na boca" />

            <MusicInfo />

            <ButtonPlay />

            <TimerMusic />
        </div>
    )
}