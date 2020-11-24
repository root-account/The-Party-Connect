import React from "react";

class Navbar extends React.Component{

render(){

    return(

<nav className="navbar navbar-expand-lg fixed-top navbar-transparent " color-on-scroll="50">
    
    <div className="container-fluid">
      <div className="row">

      <div className="col-4">
      <div className="navbar-translate">
        <a className="navbar-brand" href="#" rel="tooltip" title="" data-placement="bottom" target="_blank">
          The <span>PARTY•</span> Connect
        </a>
        </div>
        </div>
        <div className="col-6">

            <div class="nav nav-tabs" style={{padding:0}}>
            <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text"><i class="fa fa-search"></i></span>
                </div>
                <input type="text" class="form-control" placeholder="Looking for something?"/>
              </div>
            </div>

        </div>

        </div>

        <button className="navbar-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-bar bar1"></span>
          <span className="navbar-toggler-bar bar2"></span>
          <span className="navbar-toggler-bar bar3"></span>
        </button>
      </div>

      <div className="collapse navbar-collapse justify-content-end" id="navigation">
        <div className="navbar-collapse-header">
          <div className="row">
            <div className="col-6 collapse-brand">
              <a>
                The PARTY• connect
              </a>
            </div>
            <div className="col-6 collapse-close text-right">

              <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                <i className="tim-icons icon-simple-remove"></i>
              </button>
            </div>
          </div>
        </div>
        <ul className="navbar-nav">
          <li className="dropdown nav-item">
            <a href="#" className="dropdown-toggle nav-link" data-toggle="dropdown">
              <i className="tim-icons icon-chat-33"></i>  &nbsp;
              <p className="">Messages <span className="badge badge-default">8</span> </p>
            </a>
            <div className="dropdown-menu dropdown-with-icons">
              <a href="https://demos.creative-tim.com/blk-design-system/docs/1.0/getting-started/overview.html" className="dropdown-item">
                <i className="tim-icons icon-paper"></i> Documentation
              </a>
              <a href="examples/register-page.html" className="dropdown-item">
                <i className="tim-icons icon-bullet-list-67"></i>Register Page
              </a>
              <a href="examples/landing-page.html" className="dropdown-item">
                <i className="tim-icons icon-image-02"></i>Landing Page
              </a>
              <a href="examples/profile-page.html" className="dropdown-item">
                <i className="tim-icons icon-single-02"></i>Profile Page
              </a>
            </div>
          </li>

          <li className="dropdown nav-item">
            <a href="#" className="dropdown-toggle nav-link" data-toggle="dropdown">
              <i className="tim-icons icon-notes"></i> &nbsp;
              <p className="">RSVPs <span className="badge badge-default">4</span></p>
            </a>
            <div className="dropdown-menu dropdown-with-icons">
              <a href="https://demos.creative-tim.com/blk-design-system/docs/1.0/getting-started/overview.html" className="dropdown-item">
                <i className="tim-icons icon-paper"></i> 
                <span className="not-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel ligula nec</span>
              </a>
              <a href="examples/register-page.html" className="dropdown-item">
                <i className="tim-icons icon-bullet-list-67"></i>
                <span className="not-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel ligula nec</span>
              </a>
              <a href="examples/landing-page.html" className="dropdown-item">
                <i className="tim-icons icon-image-02"></i>
                <span className="not-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel ligula nec</span>
              </a>
              <a href="examples/profile-page.html" className="dropdown-item">
                <i className="tim-icons icon-single-02"></i>
                <span className="not-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel ligula nec</span>
              </a>
            </div>
          </li>
          <li className="dropdown nav-item">
            <a href="#" className="dropdown-toggle nav-link" data-toggle="dropdown">
              <i className="tim-icons icon-badge"></i>  &nbsp;
              <p className="">Invitations <span className="badge badge-default">4</span></p>
            </a>
            <div className="dropdown-menu dropdown-with-icons">
              <a href="https://demos.creative-tim.com/blk-design-system/docs/1.0/getting-started/overview.html" className="dropdown-item">
                <i className="tim-icons icon-paper"></i> 
                <span className="not-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel ligula nec</span>
              </a>
              <a href="examples/register-page.html" className="dropdown-item">
                <i className="tim-icons icon-bullet-list-67"></i>
                <span className="not-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel ligula nec</span>
              </a>
              <a href="examples/landing-page.html" className="dropdown-item">
                <i className="tim-icons icon-image-02"></i>
                <span className="not-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel ligula nec</span>
              </a>
              <a href="examples/profile-page.html" className="dropdown-item">
                <i className="tim-icons icon-single-02"></i>
                <span className="not-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel ligula nec</span>
              </a>
            </div>
          </li>
          <li className="dropdown nav-item">
            <a href="#" className="dropdown-toggle nav-link" data-toggle="dropdown">
              <p><i className="tim-icons icon-bell-55"></i> Notifications <span className="badge badge-danger">12</span></p>
            </a>
            <div className="dropdown-menu dropdown-with-icons notifications">
              <a href="https://demos.creative-tim.com/blk-design-system/docs/1.0/getting-started/overview.html" className="dropdown-item">
                <i className="tim-icons icon-paper"></i> 
                <span className="not-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel ligula nec</span>
              </a>
              <a href="examples/register-page.html" className="dropdown-item">
                <i className="tim-icons icon-bullet-list-67"></i>
                <span className="not-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel ligula nec</span>
              </a>
              <a href="examples/landing-page.html" className="dropdown-item">
                <i className="tim-icons icon-image-02"></i>
                <span className="not-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel ligula nec</span>
              </a>
              <a href="examples/profile-page.html" className="dropdown-item">
                <i className="tim-icons icon-single-02"></i>
                <span className="not-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel ligula nec</span>
              </a>
            </div>
          </li>
        </ul>
      </div>

  </nav>

    )

}
}

export default Navbar;