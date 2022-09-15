import React from 'react';

import Navbar from "../components/shared/Navbar.js";
import Sidebar from "../components/shared/Sidebar.js";

import axios from "axios";
import Moment from 'react-moment';

// import MainScreen from "../components/dashboard/dashboard.comp.js";

export default function Profile(){



const baseURL = "http://localhost:4000/api";
const [event, setEvent] = React.useState([]);
const [profileData, setProfileData] = React.useState([]);
const [messages, setMessages] = React.useState([]);

  React.useEffect(() => {
    getProfileData();
    getMessages();
    getEvents();
  }, []);


  // Get profile data
  function getProfileData(){
    axios.get(`${baseURL}/users/find/1`).then((response) => {
      setProfileData(response.data);

      console.log(response.data);
    });
  }

  // Get messages
  function getMessages() {
    axios.get(`${baseURL}/messages/user/ephraim_1`).then((response) => {
      setMessages(response.data);

      console.log(response.data);
    });
  }


  // Get events
  function getEvents() {
    axios.get(`${baseURL}/events/user/ephraim_1`).then((response) => {
      setEvent(response.data);

      console.log(response.data);
    });
  }



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
                    <img src={profileData[0]?.profile_image_url ? profileData[0]?.profile_image_url : "assets/img/profile-holder.png"} alt="Circle image" className="img-fluid rounded-circle shadow avatar-image"/>
                  </div>
                
                <div className="profile-username"> 
                  <div className="row d-flex h-20 align-items-center justify-content-center py-3">
                  <h3>{profileData[0]?.full_names} {profileData[0]?.surname}</h3><a className="btn btn-primary btn-icon btn-round" type="button"><i className="tim-icons icon-pencil"></i></a>
                  <p>{profileData[0]?.user_id}</p>
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
                      <p>{profileData[0]?.about_me}</p>
                      </div>
                    </div>
                    <div className="d-flex flex-row mt-2"> 
                      <div className="col-md-6 col-lg-6">
                      <p className="text-muted">Interest</p>
                      </div>
                      <div className="col-md-6 col-lg-6">
                      <p>{profileData[0]?.interests}</p>
                      </div>
                    </div>
                    <div className="d-flex flex-row mt-2"> 
                      <div className="col-md-6 col-lg-6">
                      <p className="text-muted">Music</p>
                      </div>
                      <div className="col-md-6 col-lg-6">
                      <p>{profileData[0]?.music_interests}</p>
                      </div>
                    </div>
                    
                    <div className="d-flex flex-row mt-2"> 
                      <div className="col-md-6 col-lg-6">
                      <p className="text-muted">Email</p>
                      </div>
                      <div className="col-md-6 col-lg-6">
                      <p>{profileData[0]?.user_email}</p>
                      </div>
                    </div>
                    <div className="d-flex flex-row mt-2"> 
                      <div className="col-md-6 col-lg-6">
                      <p className="text-muted">Date of birth</p>
                      </div>
                      <div className="col-md-6 col-lg-6">
                      <p >{profileData[0]?.date_of_birth}</p>
                      </div>
                    </div>
                    <div className="d-flex flex-row mt-2"> 
                      <div className="col-md-6 col-lg-6">
                      <p className="text-muted">Phone Number</p>
                      </div>
                      <div className="col-md-6 col-lg-6">
                      <p >{profileData[0]?.user_phone_number}</p>
                      </div>
                    </div>
                    <div className="d-flex flex-row mt-2"> 
                      <div className="col-md-6 col-lg-6">
                      <p className="text-muted">WhatsApp Number</p>
                      </div>
                      <div className="col-md-6 col-lg-6">
                      <p >{profileData[0]?.whatsapp_phone}</p>
                      </div>
                    </div>
                  </div>

                  <div className="tab-pane" id="social">
                        <div className="col-md-12">
                          <h4>Connected social media accounts</h4>
                          
                            <div class="btn-wrapper profile pt-3">

                              { profileData[0]?.twitter_link ?
                                <a target="_blank" href={profileData[0]?.twitter_link} class="btn btn-icon btn-twitter btn-round" data-toggle="tooltip" data-original-title="Follow us">
                                  <i class="fab fa-twitter"></i>
                                </a> : ""
                              }

                            { profileData[0]?.facebook_link ?
                              <a target="_blank" href={profileData[0]?.facebook_link} class="btn btn-icon btn-facebook btn-round" data-toggle="tooltip" data-original-title="Like us">
                                <i class="fab fa-facebook-square"></i>
                              </a>: ""
                            }

                            { profileData[0]?.instagram_link ?
                              <a target="_blank" href={profileData[0]?.instagram_link} class="btn btn-icon btn-instagram  btn-round" data-toggle="tooltip" data-original-title="Follow us">
                                <i class="fab fa-instagram"></i>
                              </a>: ""
                            }
                            </div>
                      
                        </div>
                  </div>

                        <div className="tab-pane" id="hosted">
                              <div className="col-md-12">
                                <h4>Events you hosted</h4>
                                <div className="row history-container">

                                  {event.map((item, i)=> (
                                      <div className="col col-3">
                                        <img className="d-block w-100 h-100" src={item.event_poster_url ? item.event_poster_url : ""} alt="First slide"/>
                                        <div className="event-matter">
                                              <h4>{item.tittle}</h4>
                                              <ul className="details-list">
                                                  <li>
                                                      <span><i className="tim-icons icon-calendar-60"></i> 
                                                      <Moment format="DD MMMM YYYY">
                                                          {item.start_date}
                                                      </Moment>
                                                      </span>
                                                  </li>
                                                  <li>
                                                      <span><i className="tim-icons icon-square-pin"></i>{item.venue}</span>
                                                  </li>
                                                  <li>
                                                      <span><i className="tim-icons icon-wallet-43"></i>{item.entrance_fee}</span>
                                                  </li>
                                              </ul>
                                          </div>
                                      </div>
                                  ))}
                                </div>
                              </div>
                        </div>


                        <div className="tab-pane" id="attended">
                              <div className="col-md-12">
                                <h4>Events Attended</h4>
                                <div className="row history-container">
                                {event.map((item, i)=> (
                                      <div className="col col-3">
                                        <img className="d-block w-100 h-100" src={item.event_poster_url ? item.event_poster_url : ""} alt="First slide"/>
                                        <div className="event-matter">
                                              <h4>{item.tittle}</h4>
                                              <ul className="details-list">
                                                  <li>
                                                      <span><i className="tim-icons icon-calendar-60"></i> 
                                                      <Moment format="DD MMMM YYYY">
                                                          {item.start_date}
                                                      </Moment>
                                                      </span>
                                                  </li>
                                                  <li>
                                                      <span><i className="tim-icons icon-square-pin"></i>{item.venue}</span>
                                                  </li>
                                                  <li>
                                                      <span><i className="tim-icons icon-wallet-43"></i>{item.entrance_fee}</span>
                                                  </li>
                                              </ul>
                                          </div>
                                      </div>
                                  ))}
                                  
                                </div>
                              </div>
                        </div>

                        <div className="tab-pane" id="upcoming">
                              <div className="col-md-12">
                                <h4>Your events that are still coming up</h4>
                                <div className="row history-container">

                                {event.map((item, i)=> (
                                      <div className="col col-3">
                                        <img className="d-block w-100 h-100" src={item.event_poster_url ? item.event_poster_url : ""} alt="First slide"/>
                                        <div className="event-matter">
                                              <h4>{item.tittle}</h4>
                                              <ul className="details-list">
                                                  <li>
                                                      <span><i className="tim-icons icon-calendar-60"></i> 
                                                      <Moment format="DD MMMM YYYY">
                                                          {item.start_date}
                                                      </Moment>
                                                      </span>
                                                  </li>
                                                  <li>
                                                      <span><i className="tim-icons icon-square-pin"></i>{item.venue}</span>
                                                  </li>
                                                  <li>
                                                      <span><i className="tim-icons icon-wallet-43"></i>{item.entrance_fee}</span>
                                                  </li>
                                              </ul>
                                          </div>
                                      </div>
                                  ))}
                                    
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

                  
                  {
                    messages.map((item, i)=>(
                      <div className="row direct-chat-users">
                        <div className="col-md-2 direct-chat-user">
                          <img src="assets/img/james.jpg" alt="Circle image" className="img-fluid rounded-circle shadow"/>
                        </div>
                        <div className="col-md-10">
                          <small className="d-block text-uppercase font-weight-bold">{item.message_from}</small>
                          <p>{item.message_text} </p>
                          <span>
                            <Moment format="DD MMMM YYYY">
                                {item.date_created}
                            </Moment>  
                          </span> 
                        </div>
                      </div>

                    ))
                  }
                    

                    


                  </div>
                </div>

                {/* <div className="card">
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
                </div> */}
                
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

