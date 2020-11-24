import React from 'react';

class tabsNav extends React.Component{

  render(){
    return(
        <ul className="nav nav-pills nav-pills-primary nav-pills-icons">
            <li className="nav-item">
            <a className="nav-link active show" data-toggle="tab" href="#link7">
                <i className="tim-icons icon-atom"></i> See All
            </a>
            </li>
            <li className="nav-item">
            <a className="nav-link" data-toggle="tab" href="#link8">
                <i className="tim-icons icon-chat-33"></i> Parties
            </a>
            </li>
            <li className="nav-item">
            <a className="nav-link" data-toggle="tab" href="#link9">
                <i className="tim-icons icon-settings-gear-63"></i> Events
            </a>
            </li>
            <li className="nav-item">
            <a className="nav-link" data-toggle="tab" href="#link9">
                <i className="tim-icons icon-settings-gear-63"></i> Clubs
            </a>
            </li>
        </ul>

);
    }
}

export default tabsNav;