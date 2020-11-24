import React from 'react';

import Navbar from "../components/shared/Navbar.js";
import Sidebar from "../components/shared/Sidebar.js";
import EventsHistory from '../components/shared/EventsHistory.js';

// import MainScreen from "../components/dashboard/dashboard.comp.js";

class SavedItemsPage extends React.Component{

    render(){
        return(
               
                 
    <div>
      
    <Navbar/>
    
      <div className="wrapper" id="my-events-screen">
        <div className="main">
          <div className="section section-pagination">
            <img src="assets/img/path4.png" className="path"/>
            <img src="assets/img/path5.png" className="path path1"/>
    
    
            <div className="container" id="main-container">
    
              <div className="row">
    
              <Sidebar/>
    
              <div className="col-md-8" id="content-screen">
                
                <h1>Events you saved</h1>
                <EventsHistory/>
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

export default SavedItemsPage;