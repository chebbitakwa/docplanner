import React, { Component } from 'react';
import Statistic from './Statistic.js'
let leader =
[{image:"https://www.docplanner.com/img/flag.png", titre:"Leader in 10 countries",
desc:"Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Brazil, Colombia, Argentina and Chile",disposition:"item"},
{image :"https://www.docplanner.com/img/patients.png",titre:"30 million unique patients",desc:"visit us every month"},
{image :"https://www.docplanner.com/img/visits.png",titre: "1 million appointments",desc:"booked last month"},{image :"https://www.docplanner.com/img/doctors.png",titre:"2 million active doctors",desc:"trust in our solutions"}]
class Statistics extends Component {
    render() {
      return (
        <div className="healthcare">_
            <div>
                <h1>The world's <br/>biggest healthcare platform</h1>
                <p>We work from 6 offices all over the world, bringing Docplanner Group to life in almost 20 countries</p>
                <div class="min-logo">
                 <img src ="https://www.docplanner.com/img/logo.png"/>
                </div>
            </div>
        
            
            <div className="grid">
              {leader.map((el) => <Statistic  element={el}/>)}
            </div>
         
        </div>

        );
    }
  }
  
  export default Statistics;