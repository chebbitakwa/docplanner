import React from 'react'
import './company.css'
const Company = (props) => {
    return (
        <div className="like">
            <a className="link" href={props.element.to}>{props.element.text} </a>   
        </div>
       )
}
export default Company;