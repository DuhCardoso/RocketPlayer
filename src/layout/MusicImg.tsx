
import classes from "./MusicImg.module.css";

type PropsType ={
    customBorder: string;
    width: string;
}

export default function MusicImg({customBorder, width}:PropsType){
    return(
        <>
            <img className={`${classes.img} ${classes[customBorder]} ${classes[width]}`}
                src="https://i.pinimg.com/474x/d8/ba/8a/d8ba8a1b747682d7a91a76fedf7660b0.jpg" 
                alt="Gatinho de oculos escuro e jaqueta jeans, com um cigaro na boca" 
            />
        </>
    )
}