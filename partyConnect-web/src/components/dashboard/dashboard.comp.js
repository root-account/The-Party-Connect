import React from 'react';
import axios from "axios";
import Moment from 'react-moment';

import FiltersNav from "./tabsNav.js";
import DetailsTab from "./detailsTab.js";
import RsvpTab from "./rsvpTab.js";
import DiscussTab from "./discussTab.js";

export default function DashboardScreen(props){

const showEventModal = function(){
  props.showEventModal()
}


const [event, setEvent] = React.useState([]);

React.useEffect(() => {
  setEvent(props.events);

  console.log(props.events);
}, []);

return(

<div>
      
  <div className="party-item-container" id="feed-container">

      {/* <FiltersNav/> */}
  <div className="row find-events events-filters">
    
      
    <div className="row">
      <div className="col-md-6">
        <h4>Find an event</h4>
      </div>
      <div className="col-md-6">
        <p className="pull-right"> <b>{event.length} </b>events happening.</p>
      </div>
    </div>

    
    <form>
      <div class="form-row">
      <div class="col">
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text"><i class="tim-icons icon-square-pin"></i></span>
              </div>
              <input type="text" class="form-control" placeholder="All locations"/>
          </div>
        </div>

        <div class="col">
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text"><i class="tim-icons icon-bullet-list-67"></i></span>
              </div>
                <select class="form-control">
                  <option>All Categories</option>
                  <option>House Parties</option>
                  <option>Music Festivals</option>
                  <option>Street Bash</option>
                  <option>Club Events</option>
                  <option>Jazz Festival</option>
                </select>
          </div>
        </div>
        <div class="col">
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text"><i class="tim-icons icon-calendar-60"></i></span>
              </div>
              <select class="form-control">
                  <option>All dates</option>
                  <option>20 July</option>
                  <option>March</option>
                  <option>April</option>
                  <option>May</option>
                  <option>June</option>
                </select>
          </div>
        </div>
        {/* <div class="col">
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text"><i class="fa fa-user"></i></span>
              </div>
              <select class="form-control">
                  <option>Category</option>
                  <option>House Parties</option>
                  <option>Music Festivals</option>
                  <option>Street Bash</option>
                  <option>Club Events</option>
                  <option>Jazz Festival</option>
                </select>
          </div>
        </div> */}

        <div class="col">
          <div class="input-group no-bg">
            <div class="input-group-prepend">
              <span class="input-group-text"><i class="tim-icons icon-minimal-down"></i></span>
              </div>
              <select class="form-control">
                  <option>Default Order</option>
                  <option>By date evented</option>
                  <option>By date happening</option>
                  <option>Most popular</option>
                </select>
          </div>
        </div>
      </div>
    </form>

  </div>





{/*================================
PARTY NUMBER 1 COPY
================================*/}

{event.map((item, i) => (
    // <li key={i}>{item.name}</li>

    <div className="card" id="eventHolder">
      <div className="card-header event-hostDetails">
        <div className="row flex flex-row mb-3">
          <div className="col-md-2 pr-0 pt-2">
            <img src={item.profile_image_url? item.profile_image_url: "assets/img/profile-holder.png" } alt="Circle image" className="img-fluid rounded-circle shadow"/>
          </div>
          <div className="col-md-10 pl-2 d-flex flex-column align-self-center">
            <h6>Pharrage Events</h6>
            
            <h3 className="event-title"> {item.tittle} &nbsp; <span className="badge badge-neutral">{item.event_type}</span></h3>
            {/* <ul className="details-list">
              <li>
                <span>Going: 200</span>
              </li>
              <li>|</li>
              <li>
                <span>VIP: 50</span>
              </li>
              <li>|</li>
              <li>
                <span>#CenturionShishanyama</span>
              </li>
            </ul> */}
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
      </div>

      <div className="card-body pb-0">
        {/* <div className="tab-content">
          <DetailsTab/>
          <RsvpTab/>
          <DiscussTab/>
        </div> */}

        <a href="#" onClick ={() => showEventModal()} className="party summary">
          <img className="d-block" src={item.event_poster_url} alt="First slide"/>
          {/* <p>Lorem ipsum dolor sit amet,consectetur adipisicing elit, sed do eiusmod teculpa  consectetur adipisicing elit, sed do eiusmod teculpa qui officialaborum.</p> */}
        </a>
        <ul className="details-list party-stats justify-content-between py-3">
              <li onClick ={() => showEventModal()}>
                <span><i className="tim-icons icon-chat-33"></i> 221 Comments</span>
              </li>
              <li onClick ={() => showEventModal()}>
                <span><i className="tim-icons icon-single-02"></i> 200 Going</span>
              </li>
              <li onClick ={() => showEventModal()}>
                <span><i className="tim-icons icon-shape-star"></i> 400 Interested</span>
              </li >
              {/* <li>
                <span><i className="tim-icons icon-square-pin"></i> #CenturionChisanyama</span>
              </li> */}
            </ul>
      </div>

      <div className="card-footer pt-3 pb-2">
        <div className="row">

          {/* Navigation between screens */}
          <div className="col-6" onClick ={() => showEventModal()}>
          <button type="submit" class="btn btn-simple btn-primary btn-round"><i class="tim-icons icon-send"></i> RSVP Details</button>
          </div>

          {/* Share to social media */}
          <div className="col share-on">
              <ul className="share-list">
                <li><a href="#" data-toggle="tooltip" data-placement="top" title="" data-container="body" data-animation="true" data-original-title="Share on Facebook"><span className="fab fa-facebook"></span></a></li>
                <li><a href="#" data-toggle="tooltip" data-placement="top" title="" data-container="body" data-animation="true" data-original-title="Share on Twitter"><span className="fab fa-twitter"></span></a></li>
                <li><a href="#" data-toggle="tooltip" data-placement="top" title="" data-container="body" data-animation="true" data-original-title="Share on WhatsApp"><span className="fab fa-whatsapp"></span></a></li>
                <li><a href="#" data-toggle="tooltip" data-placement="top" title="" data-container="body" data-animation="true" data-original-title="Share on Instagram"><span className="fab fa-instagram"></span></a></li>
                <li><a href="#" data-toggle="tooltip" data-placement="top" title="" data-container="body" data-animation="true" data-original-title="Send via Email"><span className="fab fa-message"></span></a></li>
              </ul>
          </div>

        </div>
      </div>
    </div>



))}



    
  </div>

  </div>
  )
}

// }

// export default DashboardScreen;