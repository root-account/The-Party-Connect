import React from "react";
import axios from "axios";
import Moment from 'react-moment';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

export default function Sidebar(props){


// const baseURL = "http://localhost:4000/api/events/get";
// const [event, setEvent] = React.useState([]);

//   React.useEffect(() => {
//     axios.get(`${baseURL}`).then((response) => {
//       setEvent(response.data);

//       console.log(response.data);
//     });
//   }, []);



// render(){

return(

<div className="col-md-3" id="left-sidebar">
             
             <div className="card" id="activityBar">
               <div className="card-header">
                 <div className="row loginUserDetails">
                   <div className="col-sm-3 col-xs-3">
                     <img src="assets/img/james.jpg" alt="Circle image" className="img-fluid rounded-circle shadow" />
                   </div>
                   <div className="col-md-7 col-xs-7">
                     <h6>Pharrage Events</h6>
                     



                     <p className="edit-profile"><Link to="/profile"><span> <i className="tim-icons icon-single-02"></i> View  profile </span></Link></p>
                   </div>
                 </div>
                 <div className="row">
                   <div className="col-md-12">
                     <ul className="nav nav-tabs nav-tabs-primary justify-content-center">
                       <li className="nav-item">
                         <a className="nav-link active" data-toggle="tab" href="#linka">
                           {/* MENU <i className="tim-icons icon-single-copy-04"></i> */}

                           <i className="tim-icons icon-single-copy-04"></i>
                         </a>
                       </li>
                       <li className="nav-item">
                         <a className="nav-link" data-toggle="tab" href="#linkd">
                           {/* SEARCH */}
                           <i className="tim-icons icon-zoom-split"></i>
                           
                         </a>
                       </li>
                       <li className="nav-item">
                         <a className="nav-link" data-toggle="tab" href="#linkb">
                           {/* ACTIVITY */}
                           <i className="tim-icons icon-bell-55"></i>
                           
                         </a>
                       </li>
                       {/* <li className="nav-item">
                         <a className="nav-link" data-toggle="tab" href="#linkc">
                           CHAT
                         </a>
                       </li> */}

                     </ul>
                   </div>
                 </div>

               </div>
               <div className="card-body">

                 <div className="tab-content tab-subcategories">
                   <div className="tab-pane active" id="linka">
                     <ul className="sidebarMenu">
                       <li>
                         <Link to="/"><span> <i className="tim-icons icon-single-copy-04"></i>Events Feed</span></Link>
                       </li>
                       <li>
                         <Link to="/followers"><span> <i className="tim-icons icon-heart-2"></i>  Connect</span> </Link>
                       </li>
                       <li>
                         <Link to="/saved"><span> <i className="tim-icons icon-book-bookmark"></i>Saved Items</span></Link>
                       </li>
                       <li>
                         <Link to="/calendar"><span> <i className="tim-icons icon-calendar-60"></i>Calendar</span></Link>
                       </li>  
              
                     </ul>
                      <hr className="menu-divide"/>
                     <ul className="sidebarMenu">
                     <li>
                         <Link to="/my-events"><span> <i className="tim-icons icon-shape-star"></i>Manage Events</span> </Link>
                       </li>
                       <li>
                         <Link to="/profile"><span> <i className="tim-icons icon-single-02"></i>  Profile </span></Link>
                       </li>
                       <li>
                         <Link to="/settings"><span> <i className="tim-icons icon-settings-gear-63"></i>  Settings </span></Link>
                       </li>
                       
                     </ul>

                   </div>
                   <div className="tab-pane" id="linkb">
                   
                   </div>
                   <div className="tab-pane" id="linkc">

                   </div>
                   <div className="tab-pane" id="linkd">
                   <div class="form-group has-success">
                      <input type="text" placeholder="Search term" class="form-control form-control-success"/>
                    </div>
                    <div class="form-group has-success">
                      <input type="text" placeholder="Location" class="form-control form-control-success"/>
                    </div>

                    <div class="form-group has-success">
                      <input type="text" placeholder="Category" class="form-control form-control-success"/>
                    </div>

                    <div class="datepicker-container">
                      <div class="form-group">
                        <input type="text" id="datepicker" class="form-control datepicker" placeholder="Date" data-datepicker-color="primary"/>
                      </div>
                    </div>
                    
                   </div>
                 </div>
               </div>

               <div className="card-footer">
               <Link  className="btn btn-info" to="/new-event"> <i className="tim-icons icon-simple-add"></i> &nbsp;&nbsp; NEW EVENT</Link>
                 <Link to="/login" className="btn btn-simple btn-primary btn-icon btn-round float-right"><i className="tim-icons icon-send"></i></Link>
                 {/* <button type="submit" className="btn btn-simple btn-primary btn-icon btn-round float-right"><i className="tim-icons icon-send"></i></button> */}
               </div>

             </div>

           </div>


    )

// }

}

// export default Sidebar;