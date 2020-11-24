import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"


class RequestList extends React.Component{

render(){

    return(



<div className="col-md-12 friends-suggestion">    
 <div className="row pb-4">
    <div className="col-md-3">
    <a className="d-flex flex-column  align-items-center justify-content-around">
    <img src="assets/img/james.jpg" alt="Circle image" className="img-fluid rounded-circle shadow w-75"/>
        <small className="d-block text-uppercase font-weight-bold mt-3">Stephen Mcalister</small>
        </a>
    </div>
    <div className="col-md-3">
    <a className="d-flex flex-column  align-items-center justify-content-around">
    <img src="assets/img/james.jpg" alt="Circle image" className="img-fluid rounded-circle shadow w-75"/>
        <small className="d-block text-uppercase font-weight-bold mt-3">Miguel Foster</small>
        </a>
    </div>
    <div className="col-md-3">
    <a className="d-flex flex-column  align-items-center justify-content-around">
    <img src="assets/img/james.jpg" alt="Circle image" className="img-fluid rounded-circle shadow w-75"/>
        <small className="d-block text-uppercase font-weight-bold mt-3">Sarah Vaughn</small>
        </a>
    </div>
    <div className="col-md-3">
    <a className="d-flex flex-column  align-items-center justify-content-around">
    <img src="assets/img/james.jpg" alt="Circle image" className="img-fluid rounded-circle shadow w-75"/>
        <small className="d-block text-uppercase font-weight-bold mt-3">Sarah Vaughn</small>
        </a>
    </div>
   

</div>
</div>
    )

}
}

export default RequestList;