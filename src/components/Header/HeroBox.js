import React,{useState} from 'react';
import {
    AiOutlineMinus,
    AiOutlinePlus,
  } from "react-icons/ai";
  

const HeroBox = (props) => {

    const [isShown,setIsShown] = useState(false);

    const menuShownHandler = () => {
        setIsShown(prevState => !prevState);
    }

    return (
        <li className={isShown ? "hero__box" : "hero__box shortage"}>
           <div className="box__item">
           <h5 className="box__title">{props.item.title}</h5>
            {isShown ? <AiOutlineMinus className="icon"onClick={menuShownHandler}/> : <AiOutlinePlus className="icon" onClick={menuShownHandler}/>}
           </div>
            <p className="box__subtitle">{props.item.subtitle}</p>
            <button className="btn btn-explore">{props.item.button}</button>
        </li>
    )
}

export default HeroBox
