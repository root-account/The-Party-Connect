import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

import axios from "axios";
import Moment from 'react-moment';


export default function DirectMsg(){


const baseURL = "http://localhost:4000/api/";

const [featuredEvents, setFeaturedEvents] = React.useState([]);
const [people, setPeople] = React.useState([]);

  React.useEffect(() => {
    getFeaturedEvents();
    getPeople();
  }, []);


  // Get Featured Events
  function getFeaturedEvents(){
    axios.get(`${baseURL}`).then((response) => {
      setFeaturedEvents(response.data);
      console.log(response.data);
    });
  }

  // Get people & organizers
  function getPeople() {
    axios.get(`${baseURL}/users/get`).then((response) => {
      setPeople(response.data);

      console.log(response.data);
    });
  }



return(

<div className="col-md-3" id="right-sidebar">

<div className="card featured_events events-sidebar">
             <div className="card-header">
                 <h4>Featured Events</h4>
                </div>
               <div className="card-body pb-0">

                <div className="row direct-chat-users">
                  <div className="col-md-3 direct-chat-user">
                    <img src="assets/img/james.jpg" alt="Circle image" className="img-fluid rounded-circle shadow"/>
                  </div>
                  <div className="col-md-9">
                    <small className="d-block text-uppercase font-weight-bold">Stephen Wolf</small>
                    <h5 className="d-block text-uppercase font-weight-bold">The ultimate street bash</h5>
                    <span>23 Jul 20</span> 
                    <span class="badge badge-warning">200 Interested</span>
                  </div>
                </div>

                <div className="row direct-chat-users">
                  <div className="col-md-3 direct-chat-user">
                    <img src="assets/img/james.jpg" alt="Circle image" className="img-fluid rounded-circle shadow"/>
                  </div>
                  <div className="col-md-9">
                    <small className="d-block text-uppercase font-weight-bold">Stephen Wolf</small>
                    <h5 className="d-block text-uppercase font-weight-bold">The ultimate street bash</h5>
                    <span>23 Jul 20</span> 
                    <span class="badge badge-warning">200 Interested</span>
                  </div>
                </div>

                <div className="row direct-chat-users">
                  <div className="col-md-3 direct-chat-user">
                    <img src="assets/img/james.jpg" alt="Circle image" className="img-fluid rounded-circle shadow"/>
                  </div>
                  <div className="col-md-9">
                    <small className="d-block text-uppercase font-weight-bold">Stephen Wolf</small>
                    <h5 className="d-block text-uppercase font-weight-bold">The ultimate street bash</h5>
                    <span>23 Jul 20</span> 
                    <span class="badge badge-warning">200 Interested</span>
                  </div>
                </div>

                <div className="row direct-chat-users">
                  <div className="col-md-3 direct-chat-user">
                    <img src="assets/img/james.jpg" alt="Circle image" className="img-fluid rounded-circle shadow"/>
                  </div>
                  <div className="col-md-9">
                    <small className="d-block text-uppercase font-weight-bold">Stephen Wolf</small>
                    <h5 className="d-block text-uppercase font-weight-bold">The ultimate street bash</h5>
                    <span>23 Jul 20</span> 
                    <span class="badge badge-warning">200 Interested</span>
                  </div>
                </div>

                <div className="row direct-chat-users">
                  <div className="col-md-3 direct-chat-user">
                    <img src="assets/img/james.jpg" alt="Circle image" className="img-fluid rounded-circle shadow"/>
                  </div>
                  <div className="col-md-9">
                    <small className="d-block text-uppercase font-weight-bold">Stephen Wolf</small>
                    <h5 className="d-block text-uppercase font-weight-bold">The ultimate street bash</h5>
                    <span>23 Jul 20</span> 
                    <span class="badge badge-warning">200 Interested</span>
                  </div>
                </div>


               </div>
             </div>
             
             
          <div className="card suggested_events events-sidebar">
             <div className="card-header">
                 <h4>People & Organisers</h4>
                </div>
               <div className="card-body pb-0">

              {people.map((item, i) => (
               <div className="row direct-chat-users">
                  <div className="col-md-2 direct-chat-user">
                    <img src={item.profile_image_url? item.profile_image_url: "assets/img/profile-holder.png" } alt="Circle image" className="img-fluid rounded-circle shadow"/>
                  </div>
                  <div className="col-md-9">
                    <small className="d-block text-uppercase font-weight-bold">{ item.business_name ? item.business_name : item.full_names+" "+item.surname}</small>
                    <span>Next event on 23 Jul 2020</span> 
                  </div>
                </div>
               ))}


               </div>
             </div>

           </div>


    )

}

