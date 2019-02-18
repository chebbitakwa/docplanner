import React, { Component } from 'react';
import Company from './Company.js'
let logo =
[{text:"Znanylekarz",to:"https://www.znanylekarz.pl/?_ga=2.197091244.1894091539.1549980928-1029149053.1547668012"},
{text:"Doctoralia",to:"https://www.doctoralia.es/"},
{text:"MioDottor",to:"https://www.miodottore.it/?_ga=2.228416669.1894091539.1549980928-1029149053.1547668012"},
{text:"DoKtorTakvimi",to:"https://www.doktortakvimi.com/?_ga=2.228416669.1894091539.1549980928-1029149053.1547668012"},
{text:"ZnamyLeKar",to:"https://www.znamylekar.cz/"}]
class Companys extends Component {
    render() {
      return ( 
        <div className="container">
          <div className="titre">
            <h2>
            We are a global company 
with local culture
            </h2>
          </div>

          <div className="fh">
            {logo.map((el)=><Company element ={el}/>)}
          </div>
        </div>

             );
    }
  }
  
  export default Companys;