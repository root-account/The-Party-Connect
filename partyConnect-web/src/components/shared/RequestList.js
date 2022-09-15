import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

import axios from "axios";
import Moment from 'react-moment';

export default function RequestList(){


    const baseURL = "http://localhost:4000/api/";
    const [suggestedUsers, setSuggestedUsers] = React.useState([]);

    React.useEffect(() => {
        getSuggestedUsers();
    }, []);

    // Get events
    function getSuggestedUsers(){
        axios.get(`${baseURL}/users/get`).then((response) => {
            setSuggestedUsers(response.data);

            console.log(response.data);
        });
    }




return(

<div className="col-md-12 friends-suggestion">    
 <div className="row pb-4">

 {suggestedUsers.map((item, i) => (
    <div className="col-md-3">
        <a className="d-flex flex-column  align-items-center justify-content-around">
            <img src={item.profile_image_url? item.profile_image_url: "assets/img/profile-holder.png" } alt="Circle image" className="img-fluid rounded-circle shadow w-75"/>
            <small className="d-block text-uppercase font-weight-bold mt-3">{ item.business_name ? item.business_name : item.full_names+" "+item.surname}</small>
        </a>
    </div>
))}
   

</div>
</div>
    )

}
