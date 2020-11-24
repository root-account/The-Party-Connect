import React from 'react';

import Navbar from "../components/shared/Navbar.js";
import Sidebar from "../components/shared/Sidebar.js";

// import MainScreen from "../components/dashboard/dashboard.comp.js";

class Profile extends React.Component{

  render(){
    return(
           
             
<div>
  
<Navbar/>

  <div className="wrapper" id="profile-screen">
    <div className="main">
      <div className="section section-pagination">
        <img src="assets/img/path4.png" className="path"/>
        <img src="assets/img/path5.png" className="path path1"/>


        <div className="container" id="main-container">

          <div className="row">

          <Sidebar/>

          <div className="col-md-9" id="content-screen">
          <div className="row">
            <div className="col-md-8 mr-auto scroll-section">
              <div className="card">
                <div className="card-header">
                <div className="profile-wrap">
                  <img src="assets/img/james.jpg" alt="Circle image" className="img-fluid rounded-circle shadow avatar-image"/>
                </div>
               
               <div className="profile-username"> 
                <div className="row d-flex h-20 align-items-center justify-content-center py-3">
                <h3>Pharrage Team</h3><a className="btn btn-primary btn-icon btn-round" type="button"><i className="tim-icons icon-pencil"></i></a>
                </div>
                </div>
                </div>
                <div className="card-body px-0"> {/* Profile Details */}




                  <ul class="nav nav-tabs nav-tabs-primary profile-tabnav" role="tablist">
                    <li class="nav-item">
                      <a class="nav-link active" data-toggle="tab" href="#bio" role="tablist">
                        Bio
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" data-toggle="tab" href="#social" role="tablist">
                        Social Media
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" data-toggle="tab" href="#upcoming" role="tablist">
                         Upcoming &nbsp;<span class="badge badge-default">8</span>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" data-toggle="tab" href="#hosted" role="tablist">
                        Hosted &nbsp;<span class="badge badge-default">8</span>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" data-toggle="tab" href="#attended" role="tablist">
                        Attended &nbsp; <span class="badge badge-default">8</span>
                      </a>
                    </li>
                  </ul>

                    <div className="tab-content">
                      <div className="tab-pane active" id="bio">
                      <div className="d-flex flex-row mt-2"> 
                    <div className="col-md-6 col-lg-6">
                    <p className="text-muted">About Me</p>
                    </div>
                    <div className="col-md-6 col-lg-6">
                    <p>I like to party basically</p>
                    </div>
                  </div>
                  <div className="d-flex flex-row mt-2"> 
                    <div className="col-md-6 col-lg-6">
                    <p className="text-muted">Interest</p>
                    </div>
                    <div className="col-md-6 col-lg-6">
                    <p>Parties</p>
                    </div>
                  </div>
                  <div className="d-flex flex-row mt-2"> 
                    <div className="col-md-6 col-lg-6">
                    <p className="text-muted">Music</p>
                    </div>
                    <div className="col-md-6 col-lg-6">
                    <p>Party Music</p>
                    </div>
                  </div>
                  
                  <div className="d-flex flex-row mt-2"> 
                    <div className="col-md-6 col-lg-6">
                    <p className="text-muted">Email</p>
                    </div>
                    <div className="col-md-6 col-lg-6">
                    <p>team@pharrag.com</p>
                    </div>
                  </div>
                  <div className="d-flex flex-row mt-2"> 
                    <div className="col-md-6 col-lg-6">
                    <p className="text-muted">Age</p>
                    </div>
                    <div className="col-md-6 col-lg-6">
                    <p >27 Years</p>
                    </div>
                  </div>
                  <div className="d-flex flex-row mt-2"> 
                    <div className="col-md-6 col-lg-6">
                    <p className="text-muted">Phone Number</p>
                    </div>
                    <div className="col-md-6 col-lg-6">
                    <p >+27 788 8909</p>
                    </div>
                  </div>
                </div>

                <div className="tab-pane" id="social">
                      <div className="col-md-12">
                        <h4>Connected social media accounts</h4>
                        
                          <div class="btn-wrapper profile pt-3">
                            <a target="_blank" href="https://twitter.com/creativetim" class="btn btn-icon btn-twitter btn-round" data-toggle="tooltip" data-original-title="Follow us">
                              <i class="fab fa-twitter"></i>
                            </a>
                            <a target="_blank" href="https://www.facebook.com/creativetim" class="btn btn-icon btn-facebook btn-round" data-toggle="tooltip" data-original-title="Like us">
                              <i class="fab fa-facebook-square"></i>
                            </a>
                            <a target="_blank" href="https://instagram.com/creativetim" class="btn btn-icon btn-instagram  btn-round" data-toggle="tooltip" data-original-title="Follow us">
                              <i class="fab fa-instagram"></i>
                            </a>
                            <a target="_blank" href="https://www.snapchat.com/" class="btn btn-icon btn-info btn-snapchat  btn-round" data-toggle="tooltip" data-original-title="Follow us">
                              <i class="fab fa-snapchat"></i>
                            </a>
                          </div>
                    
                      </div>
                </div>

                      <div className="tab-pane" id="hosted">
                            <div className="col-md-12">
                              <h4>Events you hosted</h4>
                              <div className="row history-container">
                                  <div className="col col-3">
                                  <img className="d-block w-100 h-100" src="assets/img/denys.jpg" alt="First slide"/>
                                  </div>
                                  <div className="col col-3">
                                  <img className="d-block w-100 h-100" src="assets/img/denys.jpg" alt="First slide"/>
                                  </div>
                                  <div className="col col-3">
                                  <img className="d-block w-100 h-100" src="assets/img/denys.jpg" alt="First slide"/>
                                  </div>
                                  <div className="col col-3">
                                  <img className="d-block" src="assets/img/denys.jpg" alt="First slide"/>
                                  </div>
                                  <div className="col col-3">
                                  <img className="d-block w-100 h-100" src="assets/img/denys.jpg" alt="First slide"/>
                                  </div>
                                  <div className="col col-3">
                                  <img className="d-block w-100 h-100" src="assets/img/denys.jpg" alt="First slide"/>
                                  </div>
                                  <div className="col col-3">
                                  <img className="d-block w-100 h-100" src="assets/img/denys.jpg" alt="First slide"/>
                                  </div>
                                  <div className="col col-3">
                                  <img className="d-block w-100 h-100" src="assets/img/denys.jpg" alt="First slide"/>
                                  </div>
                              </div>
                            </div>
                      </div>


                      <div className="tab-pane" id="attended">
                            <div className="col-md-12">
                              <h4>Events Attended</h4>
                              <div className="row history-container">
                                  <div className="col col-3">
                                  <img className="d-block w-100 h-100" src="assets/img/denys.jpg" alt="First slide"/>
                                  </div>
                                  <div className="col col-3">
                                  <img className="d-block w-100 h-100" src="assets/img/denys.jpg" alt="First slide"/>
                                  </div>
                                  <div className="col col-3">
                                  <img className="d-block w-100 h-100" src="assets/img/denys.jpg" alt="First slide"/>
                                  </div>
                                  <div className="col col-3">
                                  <img className="d-block" src="assets/img/denys.jpg" alt="First slide"/>
                                  </div>
                                  <div className="col col-3">
                                  <img className="d-block w-100 h-100" src="assets/img/denys.jpg" alt="First slide"/>
                                  </div>
                                  <div className="col col-3">
                                  <img className="d-block w-100 h-100" src="assets/img/denys.jpg" alt="First slide"/>
                                  </div>
                                  <div className="col col-3">
                                  <img className="d-block w-100 h-100" src="assets/img/denys.jpg" alt="First slide"/>
                                  </div>
                                  <div className="col col-3">
                                  <img className="d-block w-100 h-100" src="assets/img/denys.jpg" alt="First slide"/>
                                  </div>
                                  <div className="col col-3">
                                  <img className="d-block w-100 h-100" src="assets/img/denys.jpg" alt="First slide"/>
                                  </div>
                                  <div className="col col-3">
                                  <img className="d-block" src="assets/img/denys.jpg" alt="First slide"/>
                                  </div>
                                  <div className="col col-3">
                                  <img className="d-block w-100 h-100" src="assets/img/denys.jpg" alt="First slide"/>
                                  </div>
                                  <div className="col col-3">
                                  <img className="d-block w-100 h-100" src="assets/img/denys.jpg" alt="First slide"/>
                                  </div>
                                  <div className="col col-3">
                                  <img className="d-block w-100 h-100" src="assets/img/denys.jpg" alt="First slide"/>
                                  </div>
                                  <div className="col col-3">
                                  <img className="d-block w-100 h-100" src="assets/img/denys.jpg" alt="First slide"/>
                                  </div>
                              </div>
                            </div>
                      </div>

                      <div className="tab-pane" id="upcoming">
                            <div className="col-md-12">
                              <h4>Your events that are still coming up</h4>
                              <div className="row history-container">
                                  <div className="col col-3">
                                  <img className="d-block w-100 h-100" src="assets/img/denys.jpg" alt="First slide"/>
                                  </div>
                                  <div className="col col-3">
                                  <img className="d-block w-100 h-100" src="assets/img/denys.jpg" alt="First slide"/>
                                  </div>
                                  
                              </div>
                          </div>
                      </div>


                    </div>
                </div>
              </div>

              <div className="card">
                <div className="card-header">
                <h3>Highlights</h3>
                <p className="text-muted">Good and Bad things at a party...in photos</p>
                </div>
                <div className="card-body">

                </div>
              </div>
              
            </div>
            <div className="col-md-4 mr-auto">
              <div className="card">
                <div className="card-header">
                 <h4>Direct Message</h4>
                 <div className="form-group">
                   <input type="text" placeholder="Search" className="form-control "/>
                   </div>
                </div>
                <div className="card-body messages-summary">

                  <div className="row direct-chat-users">
                    <div className="col-md-2 direct-chat-user">
                      <img src="assets/img/james.jpg" alt="Circle image" className="img-fluid rounded-circle shadow"/>
                    </div>
                    <div className="col-md-10">
                      <small className="d-block text-uppercase font-weight-bold">Stephen Wolf</small>
                      <p>Hi, i was wondering if the part.... </p>
                      <span>23 Jul 20</span> 
                    </div>
                  </div>

                  <div className="row direct-chat-users">
                    <div className="col-md-2 direct-chat-user">
                      <img src="assets/img/james.jpg" alt="Circle image" className="img-fluid rounded-circle shadow"/>
                    </div>
                    <div className="col-md-10">
                      <small className="d-block text-uppercase font-weight-bold">Stephen Wolf</small>
                      <p>Hi, i was wondering if the part.... </p>
                      <span>23 Jul 20</span> 
                    </div>
                  </div>


                  <div className="row direct-chat-users">
                    <div className="col-md-2 direct-chat-user">
                      <img src="assets/img/james.jpg" alt="Circle image" className="img-fluid rounded-circle shadow"/>
                    </div>
                    <div className="col-md-10">
                      <small className="d-block text-uppercase font-weight-bold">Stephen Wolf</small>
                      <p>Hi, i was wondering if the part.... </p>
                      <span>23 Jul 20</span> 
                    </div>
                  </div>

                  <div className="row direct-chat-users">
                    <div className="col-md-2 direct-chat-user">
                      <img src="assets/img/james.jpg" alt="Circle image" className="img-fluid rounded-circle shadow"/>
                    </div>
                    <div className="col-md-10">
                      <small className="d-block text-uppercase font-weight-bold">Stephen Wolf</small>
                      <p>Hi, i was wondering if the part.... </p>
                      <span>23 Jul 20</span> 
                    </div>
                  </div>

                  <div className="row direct-chat-users">
                    <div className="col-md-2 direct-chat-user">
                      <img src="assets/img/james.jpg" alt="Circle image" className="img-fluid rounded-circle shadow"/>
                    </div>
                    <div className="col-md-10">
                      <small className="d-block text-uppercase font-weight-bold">Stephen Wolf</small>
                      <p>Hi, i was wondering if the part.... </p>
                      <span>23 Jul 20</span> 
                    </div>
                  </div>



                </div>
              </div>

              <div className="card">
                <div className="card-header">
                 <h4>Connect</h4>
                 <p className="text-muted">Link up with other social platforms</p>
                </div>
                <div className="card-body social-links">
                <div class="btn-wrapper profile pt-3">
              <a target="_blank" href="https://twitter.com/creativetim" class="btn btn-icon btn-twitter btn-round" data-toggle="tooltip" data-original-title="Follow us">
                <i class="fab fa-twitter"></i>
              </a>
              <a target="_blank" href="https://www.facebook.com/creativetim" class="btn btn-icon btn-facebook btn-round" data-toggle="tooltip" data-original-title="Like us">
                <i class="fab fa-facebook-square"></i>
              </a>
              <a target="_blank" href="https://instagram.com/creativetim" class="btn btn-icon btn-instagram  btn-round" data-toggle="tooltip" data-original-title="Follow us">
                <i class="fab fa-instagram"></i>
              </a>
              <a target="_blank" href="https://www.snapchat.com/" class="btn btn-icon btn-info btn-snapchat  btn-round" data-toggle="tooltip" data-original-title="Follow us">
                <i class="fab fa-snapchat"></i>
              </a>
            </div>
                </div>
              </div>
              
            </div>
          </div>
          <div className="row"> {/* Second Row */}
            <div className="col-md-10 ml-auto col-xl-6 mr-auto">
             
            
            </div>
            <div className="col-md-10 ml-auto col-xl-6 mr-auto">
              
              
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

export default Profile;