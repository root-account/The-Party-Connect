import React from 'react';

import Navbar from "../components/shared/Navbar.js";
import Sidebar from "../components/shared/Sidebar.js";

// import MainScreen from "../components/dashboard/dashboard.comp.js";

class CalendarPage extends React.Component{

  render(){
    return(
           
             
<div>
  
<Navbar/>

  <div className="wrapper">
    <div className="main">
      <div className="section section-pagination">
        <img src="assets/img/path4.png" className="path"/>
        <img src="assets/img/path5.png" className="path path1"/>


        <div className="container" id="main-container">

          <div className="row">

          <Sidebar/>

          <div className="col-md-8" id="content-screen">
            
            <h1>Calendar</h1>
            {/* <MainScreen/> */}
          </div>

          </div>
        </div>
      </div>
    </div>
  </div>


</div>
);
    }
}

export default CalendarPage;