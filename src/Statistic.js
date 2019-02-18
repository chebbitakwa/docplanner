import React from 'react'
import './Statistic.css';
const Statistic =(props) =>{
    return (
        <div className="leader">
            <img src ={props.element.image}></img>
            <h2>{props.element.titre} </h2>
            <p>{props.element.desc}</p>
            
        </div>
    )
}
export default Statistic;