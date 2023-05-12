
import React from 'react';
import './Card.css';


const Card = (props)=>{
const style = 'Card ' + props.className
    return (
        <div className={style}>{props.children}</div>
    )
}

export default Card;