import React from "react"
import {Image, Col} from 'react-bootstrap';
function WorkPage() {
    return (
      <div className="work-page">
        <h1>Work enviorment</h1>
        <h3>Kroger Bagger</h3>
        <p>Resonsibilities include, helping out the elderly and 
            <br></br>imparied with their groceries. I also take their bags to their car if need be. 
            <br></br>Some achievements include 4x employee fo the month and fastest bagger in the fall 
            <br></br>2020 Kroger games.</p>
        <Col xs={6} md={4}>
        <Image src="https://i.imgur.com/6WV2Izz.png"/>
        </Col>
        <br></br>
        <a href="https://jobs.kroger.com" target="_blank">Job Info</a>
      </div>
    );
  }
  
  export default WorkPage;