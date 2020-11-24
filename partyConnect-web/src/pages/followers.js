import React from 'react';

import Navbar from "../components/shared/Navbar.js";
import Sidebar from "../components/shared/Sidebar.js";
import RequestList from "../components/shared/RequestList.js";
import FriendsList from "../components/shared/FriendsList.js";
import ViewUserWidget from "../components/shared/ViewUserWidget.js";
// import MainScreen from "../components/dashboard/dashboard.comp.js";

class Followers extends React.Component{

  render(){
    return(
           
             
<div>
  
<Navbar/>

  <div className="wrapper" id="followers-screen">
    <div className="main">
      <div className="section section-pagination">
        <img src="assets/img/path4.png" className="path"/>
        <img src="assets/img/path5.png" className="path path1"/>


        <div className="container" id="main-container">

          <div className="row">

          <Sidebar/>

          <div className="col-md-4 scroll-section" id="content-screen">

          <div className="row find-frinds">
              <div class="input-group writeComment-input">
                <div class="input-group-prepend">
                  <span class="input-group-text"><i class="fa fa-user"></i></span>
                  </div>
                  <input type="text" class="form-control" placeholder="Search for people, clubs and organizers."/>
              </div>
          

            <h4>Suggested</h4>

            <RequestList/>
            </div>

            <h3>Friends</h3>
            <FriendsList/>
          </div>
          <div className="col-md-5" id="content-screen">
            <ViewUserWidget/>
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

export default Followers;