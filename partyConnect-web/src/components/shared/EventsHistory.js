import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"


import axios from "axios";
import Moment from 'react-moment';


export default function EventsHistory(){


    const baseURL = "http://localhost:4000/api";
    const [event, setEvent] = React.useState([]);

    React.useEffect(() => {
        getEvents();
    }, []);

    // Get events
    function getEvents() {
        axios.get(`${baseURL}/events/user/ephraim_1`).then((response) => {
        setEvent(response.data);

        console.log(response.data);
        });
    }


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
        
        <img class="d-block w-100 h-100" src={event[0]?.event_poster_url ? event[0]?.event_poster_url : ""} alt="First slide"/>
        <div className="event-matter">
        <h3>{event[0]?.tittle ? event[0].tittle : ""}</h3>
            <ul className="details-list">
                <li>
                    <span><i className="tim-icons icon-calendar-60"></i> 
                    <Moment format="DD MMMM YYYY">
                        {event[0]?.start_date}
                    </Moment>
                    </span>
                </li>
                <li>
                    <span><i className="tim-icons icon-square-pin"></i>{event[0]?.venue}</span>
                </li>
                <li>
                    <span><i className="tim-icons icon-wallet-43"></i>{event[0]?.entrance_fee}</span>
                </li>
            </ul>
        </div>
    </div>
    <div className="col-md-9">
        <h4>Upcoming</h4>
        
            <div className="row">
            {event.map((item, i) => (
                <div className="col-md-3">
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

<br/>
<br/>
<hr/>
<br/>
<div className="row">
    <div className="col-md-12">
        <h4>Past Events</h4>
        <div className="row">
            {event.map((item, i) => (
                <div className="col-md-3">
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


    )

}