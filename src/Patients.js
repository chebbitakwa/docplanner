import React, { Component } from 'react';
import Patient from './Patient.js';
let patients = [
  {title:"For patients", 
  description:"Find a doctor, book a visit and solve any health-related doubt",
  image:"pc1.png", background:"#00ccb1", select:true},
  {title:"For doctors",
  description:"Save time managing visits and cut no-shows by half",
  image:"pc2.png", background:"#3d83df", select:false}]

class Patients extends Component {
    render() {
      return (
        <div className="for-patients">
          {patients.map((el)=>
          <Patient element ={el}/>
            )}

        </div>
      );
    }
  }
  
  export default Patients;
  