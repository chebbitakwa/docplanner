import React from 'react'
import './Patient.css';
const Patient =(props) =>{
    return (
        <div className="patient" style={{backgroundColor:props.element.background}} >
            <p>{props.element.title} </p>
            <h2>{props.element.description}</h2>
            {props.element.select &&
            <select>
              <option >Brazile</option>
              <option >Chile</option>
              <option >Colombia</option>
            <option >France</option>
            <option >Italy</option>
          </select>
           }
            <img className="img1" src ={props.element.image}></img>
            <div>

            </div>
        </div>
    )
}
export default Patient;