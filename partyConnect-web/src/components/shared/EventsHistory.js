import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"


class EventsHistory extends React.Component{

render(){

    return(
<div>

<div className="row">
{/* <div className="col-md-12">
    <h1>You have no events planned</h1>
    <a href="" className="btn">Start Event></a>
    <span>or</span>
    <a href="" className="btn">Browse Feed for Upcoming Events</a>
</div> */}
    <div className="col-md-3">
        <h4>Current</h4>
        
        <img class="d-block w-100 h-100" src="assets/img/denys.jpg" alt="First slide"/>
    </div>
    <div className="col-md-9">
        <h4>Upcoming</h4>
        <div className="d-flex flex-row h-75">
        <div className="col pl-0">
        <img className="d-block w-100 h-100" src="assets/img/denys.jpg" alt="First slide"/>
        </div>
        <div className="col pl-0">
        <img className="d-block w-100 h-100" src="assets/img/denys.jpg" alt="First slide"/>
        </div>
        <div className="col pl-0">
        <img className="d-block w-100 h-100" src="assets/img/denys.jpg" alt="First slide"/>
        </div>
        <div className="col pl-0">
        <img className="d-block w-100 h-100" src="assets/img/denys.jpg" alt="First slide"/>
        </div>
    </div>
</div>
</div>

<br/>
<hr/>
<br/>
<div className="row">
    <div className="col-md-12">
        <h4>Past Events</h4>
        <div className="d-flex flex-row h-75">
        <div className="col pl-0">
        <img className="d-block w-100 h-100" src="assets/img/denys.jpg" alt="First slide"/>
        </div>
        <div className="col pl-0">
        <img className="d-block w-100 h-100" src="assets/img/denys.jpg" alt="First slide"/>
        </div>
        <div className="col pl-0">
        <img className="d-block w-100 h-100" src="assets/img/denys.jpg" alt="First slide"/>
        </div>
        <div className="col pl-0">
        <img className="d-block w-100 h-100" src="assets/img/denys.jpg" alt="First slide"/>
        </div>
    </div>
</div>
</div>

</div>


    )

}
}

export default EventsHistory;