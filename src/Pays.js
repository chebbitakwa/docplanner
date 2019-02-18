import React, { Component } from 'react';
import Pay from './Pay.js';
let pays = [{image :"https://www.docplanner.com/images/warsaw.png",pay:"Warsaw"},
    {image:"https://www.docplanner.com/images/barcelona.png",pay:"Barcelona"},
    {image:"https://www.docplanner.com/images/istanbul.png",pay:"Istanbul"},
    {image:"https://www.docplanner.com/images/rome.png",pay:"Rome"},
    {image:"https://www.docplanner.com/images/mexico-city.png",pay:"Mexico City"},
    {image:"https://www.docplanner.com/images/curitiba.png",pay:"Curtiba"}]
class Pays extends Component {
    render() {
      return (
        <div className="countrys">
          <h1>
            Improve the lives of millions. Change yours forever
          </h1>
          <p>
          More than 500 team mates share our same vision, goals and passion. With offices in Warsaw, Barcelona, Istanbul, Rome, Czech Republic, Mexico City, Colombia and Curitiba, our search for great talent never stops.
          </p>
          <div className="warsaw">
          {pays.map((el)=>< Pay element ={el}/>)}
          </div>

        </div>


      );
    }
  }
  
  export default Pays;