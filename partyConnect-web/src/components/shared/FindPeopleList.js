import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"


import axios from "axios";
import Moment from 'react-moment';

export default function FindPeopleList(){


    const baseURL = "http://localhost:4000/api";
    const [usersList, setUsersList] = React.useState([]);

    React.useEffect(() => {
        getUsersList();
    }, []);

    // Get list of users
    function getUsersList() {
        axios.get(`${baseURL}/users/get`).then((response) => {
            setUsersList(response.data);

            console.log(response.data);
        });
    }



return(

<div className="friends-list"> 

        <div className="row">

            <div className="col-md-12">
                <p>People and organizers you might want to follow.</p>
                
                <div className="user-list">

                {usersList.map((item, i) => (
                    <a  href="#" className="row user-item">
                        <div className="col-md-2 user-img">
                            <img src={item.profile_image_url? item.profile_image_url: "assets/img/profile-holder.png" } alt="Circle image" className="img-fluid rounded-circle shadow w-50"/>
                        </div>
                        <div className="col-md-5 user-info">
                            <h5 className="d-block text-uppercase font-weight-bold">{ item.business_name ? item.business_name : item.full_names+" "+item.surname}</h5> 
                            <p>Last active 20 Aug 2020</p> 
                        </div>
                        <div className="col-md-5 user-action">
                            <button class="btn btn-simple btn-primary btn-icon btn-round float-right">
                                <i class="tim-icons icon-send"></i>
                            </button>
                            <button class="btn btn-simple btn-primary btn-icon btn-round float-right">
                                <i class="tim-icons icon-send"></i>
                            </button>
                        </div> 
                    </a>
                ))}
                    
                </div>

            </div>
        </div>
      </div>
    )

}
