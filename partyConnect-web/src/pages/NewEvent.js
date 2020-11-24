import React from 'react';

import Navbar from "../components/shared/Navbar.js";
import Sidebar from "../components/shared/Sidebar.js";

// import MainScreen from "../components/dashboard/dashboard.comp.js";

class NewEvent extends React.Component{

  render(){
    return(
           
             
<div>
  
<Navbar/>

  <div className="wrapper" id="new-event-screen">
    <div className="main">
      <div className="section section-pagination">
        <img src="assets/img/path4.png" className="path"/>
        <img src="assets/img/path5.png" className="path path1"/>


        <div className="container" id="main-container">

          <div className="row">

          <Sidebar/>

          <div className="col-md-9" id="content-screen">
            
            <div class="card" id="new-event-card">     

            <div className="card-footer">
                <h3>Host new event</h3>
            </div>

            <div class="card-body">
            <div className="row">
                <div className="col-md-6 party-inputs">
                            <div class="form-group has-success d-flex align-items-center">
                                <label>Event Title: </label>
                                <input type="text" placeholder="" class="form-control form-control-success"/>   
                            </div>
                            <div class="form-group has-success d-flex align-items-center">
                                <label>Entrance Fee </label>
                                <input type="text" placeholder="" class="form-control form-control-success"/>   
                            </div>
                            <div class="form-group has-success d-flex align-items-center">
                                <label>Event Description: </label>
                                <textarea rows="5" placeholder="" class="form-control form-control-success">  
                                </textarea> 
                            </div>
                            <div class="form-group has-success d-flex align-items-center">
                                <label>Address: </label>
                                <input type="text" placeholder="" class="form-control form-control-success"/>   
                            </div>
                            <div class="form-group has-success d-flex align-items-center">
                                <label>Venue name </label>
                                <input type="text" placeholder="" class="form-control form-control-success"/>   
                            </div>
                            <div class="form-group has-success d-flex align-items-center">
                                <label>Dates: </label>
                                <input type="text" placeholder="" class="form-control form-control-success"/>   
                            </div>
                            <div class="form-group has-success d-flex align-items-center">
                                <label>Times: </label>
                                <input type="text" placeholder="" class="form-control form-control-success"/>   
                            </div>
                            <div class="form-group has-success d-flex align-items-center">
                                <label>Number of Guests: </label>
                                <input type="text" placeholder="" class="form-control form-control-success"/>   
                            </div>
                </div>

                <div className="col-md-6 party-inputs">
                            <div class="form-group has-success d-flex align-items-center">
                                <label>Is alcohol allowed: </label>
                                <input type="text" placeholder="" class="form-control form-control-success"/>   
                            </div>
                            <div class="form-group has-success d-flex align-items-center">
                                <label>Is alcohol sold or free? </label>
                                <input type="text" placeholder="" class="form-control form-control-success"/>   
                            </div>
                            <div class="form-group has-success d-flex align-items-center">
                                <label>Indoor or Outdoor: </label>
                                <input type="text" placeholder="" class="form-control form-control-success"/>   
                            </div>
                            <div class="form-group has-success d-flex align-items-center">
                                <label>Plus ones: </label>
                                <input type="text" placeholder="" class="form-control form-control-success"/>   
                            </div>
                            <div class="form-group has-success d-flex align-items-center">
                                <label>Number of parking: </label>
                                <input type="text" placeholder="" class="form-control form-control-success"/>   
                            </div>
                            <div class="form-group has-success d-flex align-items-center">
                                <label>Kind of music: </label>
                                <input type="text" placeholder="" class="form-control form-control-success"/>   
                            </div>
                            <div class="form-group has-success d-flex align-items-center">
                                <label>Dress code: </label>
                                <input type="text" placeholder="" class="form-control form-control-success"/>   
                            </div>
                            <div class="form-group has-success d-flex align-items-center">
                                <label>Support Contact: </label>
                                <input type="text" placeholder="" class="form-control form-control-success"/>   
                            </div>
                            <div class="form-group has-success d-flex align-items-center">
                                <label>Twitter Hashtag: </label>
                                <input type="text" placeholder="" class="form-control form-control-success"/>   
                            </div>              
                </div>
            </div>


            <div className="row drag-images">
                <div className="col-md-12">
                    <span>Select or drop event images here</span>
                </div>
            </div>

            </div>

<div className="card-footer">

<div className="row">

    <div className="col-md-10">

        <div className="row">

            <div className="col setting-container">
                <p>Allow comments?</p>
                <div class="form-check form-check-radio">
                    <label class="form-check-label">
                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option2" checked/>
                        <span class="form-check-sign"></span>
                        Yes
                    </label>
                    <label class="form-check-label">
                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option2" checked/>
                        <span class="form-check-sign"></span>
                        No
                    </label> 
                </div>
            </div>

            <div className="col setting-container">
                <p>Show number of people going?</p>
                <div class="form-check form-check-radio">
                    <label class="form-check-label">
                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option2" checked/>
                        <span class="form-check-sign"></span>
                        Yes
                    </label>
                    <label class="form-check-label">
                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option2" checked/>
                        <span class="form-check-sign"></span>
                        No
                    </label> 
                </div>
            </div>

            <div className="col setting-container">
                <p>Also share on:</p>
                <div class="form-check">
                <label class="form-check-label">
                  <input class="form-check-input" type="checkbox"/>
                  <span class="form-check-sign"></span>
                  Facebook
                </label>
                <label class="form-check-label">
                  <input class="form-check-input" type="checkbox"/>
                  <span class="form-check-sign"></span>
                  Twitter
                </label>
                </div>
            </div>

        </div>

    </div>

    <div className="col-md-2">
    <a class="btn btn-info" href="/new-event"> <i class="tim-icons icon-simple-add"></i> &nbsp; PUBLISH</a>
    </div>

</div>

            

</div>




            </div>
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

export default NewEvent;