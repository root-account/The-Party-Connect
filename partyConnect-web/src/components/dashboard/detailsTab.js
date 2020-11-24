import React from 'react';

class detailsTab extends React.Component{

  render(){
    return(

        <div className="tab-pane" id="imgTab">
            <div className="row justify-content-between align-items-center event-images">
              <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                  <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner" role="listbox">
                  <div className="carousel-item active">
                    <img className="d-block" src="./assets/parties/1.jpeg" alt="First slide"/>
                  </div>
                  <div className="carousel-item">
                    <img className="d-block" src="./assets/parties/2.jpg" alt="Second slide"/>
                  </div>
                  <div className="carousel-item">
                    <img className="d-block" src="./assets/parties/3.jpeg" alt="Third slide"/>
                  </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                  <i className="tim-icons icon-minimal-left"></i>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                  <i className="tim-icons icon-minimal-right"></i>
                </a>
              </div>
            </div>

          </div>

);
    }
}

export default detailsTab;