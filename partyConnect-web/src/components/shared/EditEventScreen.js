import React from 'react';
import DetailsTab from "../dashboard/detailsTab.js";
import RsvpTab from "../dashboard/rsvpTab.js";
import DiscussTab from "../dashboard/discussTab.js";

class EditEventScreen extends React.Component{

showEventModal = () => {
  this.props.showEventModal()
}

closeEventModal = () => {
  this.props.closeEventModal()
}

render(){

var show = this.props.isModalActive;
var modalActive;
if(show === true){
  modalActive = {display:'block'};
}else{
  modalActive = {display:'none'};
}


    return(
        <div className="EditEventScreen" id="EditEventScreen" style={modalActive}>
            <div class="blur-effect"></div>
            <div className="container">
            {/* <!-- Nav tabs --> */}

            <div className=" event-hostDetails">
            <div className="row">
            <div className="col-sm-2">
                <img src="assets/img/james.jpg" alt="Circle image" className="img-fluid rounded-circle shadow"/>
            </div>
            <div className="col-md-10">
                <h6>Pharrage Events</h6>
                <button type="button" onClick ={() => this.closeEventModal()} className="closeEvent btn btn-simple btn-round btn-danger">
                      close
                  </button>
                <h3 className="event-title">The Altimate bash &nbsp; <span className="badge badge-neutral">Club</span></h3>
                <ul className="details-list">
                <li>
                    <span><i className="tim-icons icon-calendar-60"></i> 23 July 2020</span>
                </li>
                <li>
                    <span><i className="tim-icons icon-watch-time"></i> 13 : 00</span>
                </li>
                <li>
                    <span><i className="tim-icons icon-map-big"></i> Pretoria</span>
                </li>
                <li>
                    <span><i className="tim-icons icon-square-pin"></i> Centurion Chisanyama</span>
                </li>
                </ul>
            </div>
            </div>
        </div>
            <div class="details-nav">
              <ul class="nav nav-tabs nav-tabs-primary" role="tablist">
                <li class="nav-item">
                  <a class="nav-link active" data-toggle="tab" href="#detailsTab" role="tablist">
                    <i class="tim-icons icon-spaceship"></i>Details
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" data-toggle="tab" href="#discussTab" role="tablist">
                    <i class="tim-icons icon-settings-gear-63"></i> Comments
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" data-toggle="tab" href="#discussTab" role="tablist">
                    <i class="tim-icons icon-settings-gear-63"></i> People Going
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" data-toggle="tab" href="#discussTab" role="tablist">
                    <i class="tim-icons icon-settings-gear-63"></i> Hashtag
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" data-toggle="tab" href="#imgTab" role="tablist">
                    <i class="tim-icons icon-bag-16"></i>Gallery
                  </a>
                </li>
              </ul>

              <button className="btn pull-right">RSVP</button>
            </div>

          <div class="card">
          
                    
            <div class="card-body">
                <div className="tab-content">
                <DetailsTab/>
                <RsvpTab/>
                <DiscussTab/>
                </div>
            </div>

          </div>
            </div>

        </div>
    )
}

}

export default EditEventScreen;