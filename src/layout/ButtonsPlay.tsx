import {useState} from "react";
import {BsFillSkipBackwardFill,BsPauseFill, BsFillPlayFill, BsFillSkipForwardFill} from "react-icons/bs";

import classes from "./ButtonsPlay.module.css";

type PropsTypes = {
    customWidth: string;
}

export default function ButtonPlay({customWidth}:PropsTypes){
    const [play, setPlay] = useState(false)

    function setPauseOrPlay(){
        if( play == true){
            setPlay(false)
        }else{
            setPlay(true)
        }
    }

    function PauseOrPlay(){
        if(play == true){
            return <BsFillPlayFill fill="#E1E1E6"/>
        }
        

        return <BsPauseFill fill="#E1E1E6" />
    }

    return(
        <div className={`${classes.containerButtons} ${classes[customWidth]}`}>
            <button><BsFillSkipBackwardFill  fill="#E1E1E6"/></button>
            <button 
                className={classes.play} 
                onClick={() =>setPauseOrPlay()}
            >
                {PauseOrPlay()}
            </button>
            <button><BsFillSkipForwardFill fill="#E1E1E6"/></button>
        </div>
    )
}