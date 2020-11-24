import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"


class FriendsList extends React.Component{

render(){

    return(



<div className="friends-list"> 

<ul class="nav nav-tabs nav-tabs-primary " role="tablist">
    <li class="nav-item">
        <a class="nav-link active" data-toggle="tab" href="#requests" role="tablist">
            Requests &nbsp;<span class="badge badge-default">8</span>
        </a>
    </li>
    <li class="nav-item">
        <a class="nav-link" data-toggle="tab" href="#followers" role="tablist">
        Followers &nbsp;<span class="badge badge-default">8</span>
        </a>
    </li>
    <li class="nav-item">
        <a class="nav-link" data-toggle="tab" href="#following" role="tablist">
        Following &nbsp; <span class="badge badge-default">8</span>
        </a>
    </li>
    </ul>

    <div className="tab-content">
        <div className="tab-pane active" id="requests">
            <div className="col-md-12">
                <p>People who want to follow you</p>
                
                <div className="user-list">
                    <a  href="#" className="row user-item">
                        <div className="col-md-2 user-img">
                            <img src="assets/img/james.jpg" alt="Circle image" className="img-fluid rounded-circle shadow w-50"/>
                        </div>
                        <div className="col-md-5 user-info">
                            <h5 className="d-block text-uppercase font-weight-bold">Dexter Jr Matthews </h5> 
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

                    <a  href="#" className="row user-item">
                        <div className="col-md-2 user-img">
                            <img src="assets/img/james.jpg" alt="Circle image" className="img-fluid rounded-circle shadow w-50"/>
                        </div>
                        <div className="col-md-5 user-info">
                            <h5 className="d-block text-uppercase font-weight-bold">Dexter Jr Matthews </h5> 
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

                    <a  href="#" className="row user-item">
                        <div className="col-md-2 user-img">
                            <img src="assets/img/james.jpg" alt="Circle image" className="img-fluid rounded-circle shadow w-50"/>
                        </div>
                        <div className="col-md-5 user-info">
                            <h5 className="d-block text-uppercase font-weight-bold">Dexter Jr Matthews </h5> 
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

                    <a  href="#" className="row user-item">
                        <div className="col-md-2 user-img">
                            <img src="assets/img/james.jpg" alt="Circle image" className="img-fluid rounded-circle shadow w-50"/>
                        </div>
                        <div className="col-md-5 user-info">
                            <h5 className="d-block text-uppercase font-weight-bold">Dexter Jr Matthews </h5> 
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

                    <a  href="#" className="row user-item">
                        <div className="col-md-2 user-img">
                            <img src="assets/img/james.jpg" alt="Circle image" className="img-fluid rounded-circle shadow w-50"/>
                        </div>
                        <div className="col-md-5 user-info">
                            <h5 className="d-block text-uppercase font-weight-bold">Dexter Jr Matthews </h5> 
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

                    <a  href="#" className="row user-item">
                        <div className="col-md-2 user-img">
                            <img src="assets/img/james.jpg" alt="Circle image" className="img-fluid rounded-circle shadow w-50"/>
                        </div>
                        <div className="col-md-5 user-info">
                            <h5 className="d-block text-uppercase font-weight-bold">Dexter Jr Matthews </h5> 
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

                    <a  href="#" className="row user-item">
                        <div className="col-md-2 user-img">
                            <img src="assets/img/james.jpg" alt="Circle image" className="img-fluid rounded-circle shadow w-50"/>
                        </div>
                        <div className="col-md-5 user-info">
                            <h5 className="d-block text-uppercase font-weight-bold">Dexter Jr Matthews </h5> 
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

                    <a  href="#" className="row user-item">
                        <div className="col-md-2 user-img">
                            <img src="assets/img/james.jpg" alt="Circle image" className="img-fluid rounded-circle shadow w-50"/>
                        </div>
                        <div className="col-md-5 user-info">
                            <h5 className="d-block text-uppercase font-weight-bold">Dexter Jr Matthews </h5> 
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

                    

                    
                </div>

            </div>
        </div>

        <div className="tab-pane" id="followers">
            <div className="col-md-12">
                <p>People who are following you.</p>
                
                <div className="user-list">
                    <a  href="#" className="row user-item">
                        <div className="col-md-2 user-img">
                            <img src="assets/img/james.jpg" alt="Circle image" className="img-fluid rounded-circle shadow w-50"/>
                        </div>
                        <div className="col-md-5 user-info">
                            <h5 className="d-block text-uppercase font-weight-bold">Dexter Jr Matthews </h5> 
                            <p>Last active 20 Aug 2020</p> 
                        </div>
                        <div className="col-md-5 user-action">
                            <button class="btn btn-simple btn-primary btn-icon btn-round float-right">
                                <i class="tim-icons icon-send"></i>
                            </button>
                        </div> 
                    </a>
                </div>

            </div>
        </div>
        <div className="tab-pane" id="following">
            <div className="col-md-12">
                <p>People you follow</p>
                <div className="user-list">
                    <a  href="#" className="row user-item">
                        <div className="col-md-2 user-img">
                            <img src="assets/img/james.jpg" alt="Circle image" className="img-fluid rounded-circle shadow w-50"/>
                        </div>
                        <div className="col-md-5 user-info">
                            <h5 className="d-block text-uppercase font-weight-bold">Dexter Jr Matthews </h5> 
                            <p>Last active 20 Aug 2020</p> 
                        </div>
                        <div className="col-md-5 user-action">
                            <button class="btn btn-simple btn-primary btn-icon btn-round float-right">
                                <i class="tim-icons icon-send"></i>
                            </button>
                        </div> 
                    </a>
                </div>
            </div>
        </div>
    </div>





</div>
    )

}
}

export default FriendsList;