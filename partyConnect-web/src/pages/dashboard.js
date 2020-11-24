import React from 'react';

import Navbar from "../components/shared/Navbar.js";
import Sidebar from "../components/shared/Sidebar.js";
import DirectMsg from "../components/shared/DirectMsg.js";
import EditScreen from "../components/shared/EditScreen.js";

import MainScreen from "../components/dashboard/dashboard.comp.js";

class Dashboard extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      isModalActive: false, 
    }
  }

showEventModal = () => {
  this.setState({
    isModalActive:true,
  })
}

closeEventModal = () => {
  this.setState({
    isModalActive:false,
  })
}

render(){

return(                     
<div>
  
<Navbar/>

  <div className="wrapper" id="home-screen">
    <div className="main">
      <div className="section section-pagination">
        <img src="assets/img/path4.png" className="path"/>
        <img src="assets/img/path5.png" className="path path1"/>

          <EditScreen
            isModalActive ={this.state.isModalActive}
            showEventModal = {this.showEventModal.bind(this)}
            closeEventModal = {this.closeEventModal.bind(this)}
          />

        <div className="container" id="main-container">

          <div className="row">

          <Sidebar/>

          <div className="col-md-6" id="content-screen">
            <MainScreen
              showEventModal = {this.showEventModal.bind(this)}
            />
          </div>

          <DirectMsg/>
          </div>
        </div>
      </div>
    </div>
  </div>


</div>
);
    }
}

export default Dashboard;