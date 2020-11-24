import React from 'react';

class discussTab extends React.Component{

  render(){
    return(

<div className="tab-pane discussions" id="discussTab">
      
      
      
                <div class="input-group writeComment-input">
                  <div class="input-group-prepend">
                    <span class="input-group-text"><i class="fa fa-user"></i></span>
                  </div>
                  <input type="text" class="form-control" placeholder="Write your comment here."/>
                </div>
            
            
            <div className="comments">

  
            <div className="comment-holder">
              <div className="comment-image">
                <img src="assets/img/james.jpg" alt="Circle image" className="img-fluid rounded-circle shadow" />
              </div>
              <div className="comment-details">
                <h6>Pharrage Events</h6>
                <p className="text">Lorem ipsum dolor sit amet,consectetur adipisicing elit, sed do eiusmod teculpa  consectetur adipisicing elit, sed do eiusmod teculpa qui officialaborum.</p>

                <div className="comment-actions">
                  <ul>
                    <li><a href="#"> <i className="tim-icons icon-chat-33"></i> Replies <span className="badge badge-default">3</span></a></li>
                    <li className="like"><a href="#"> <i className="tim-icons icon-shape-star"></i> Like &nbsp; <span className="badge badge-default">45</span></a></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="comment-holder">
              <div className="comment-image">
                <img src="assets/img/james.jpg" alt="Circle image" className="img-fluid rounded-circle shadow" />
              </div>
              <div className="comment-details">
                <h6>Pharrage Events</h6>
                <p className="text">Lorem ipsum dolor sit amet,consectetur adipisicing elit, sed do eiusmod teculpa  consectetur adipisicing elit, sed do eiusmod teculpa qui officialaborum.</p>

                <div className="comment-actions">
                  <ul>
                    <li><a href="#"> <i className="tim-icons icon-chat-33"></i> Replies <span className="badge badge-default">3</span></a></li>
                    <li className="like"><a href="#"> <i className="tim-icons icon-shape-star"></i> Like &nbsp; <span className="badge badge-default">45</span></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          </div>
);
    }
}

export default discussTab;