import React from 'react'
import './pay.css';
const Pay =(props) =>{
    return (
        <div className="country">
        <img src ={props.element.image}></img>
        <div className="btn">
        <p>{props.element.pay} </p>
        <a href="#">SEE OPENINGS </a>         
            
        </div>
            </div>
    )
}
export default Pay;