import React from 'react';

class rsvpTab extends React.Component{

  render(){
    return(

<div className="tab-pane active rsvp-details" id="detailsTab">
            <div className="row">
              <div className="col-md-12">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. d est laborum.</p>
                <br/>
              </div>

              <div className="col-md-12">
                <table className="table tablesorter " id="plain-table">
                  <tbody>
                    <tr>
                      <td className="details-label">Entrance Fee</td>
                      <td className="fee">R200 <button className="btn btn-simple btn-neutral btn-sm float-right">Buy ticket online</button> </td>
                    </tr>
                    <tr>
                      <td className="details-label">Location</td>
                      <td>Pretoria / insdustrial chisaynayama <button className="btn btn-simple btn-neutral btn-sm float-right">Get directions</button></td>
                    </tr>
                    <tr>
                      <td className="details-label">Date</td>
                      <td>22 March 2020</td>
                    </tr>
                    <tr>
                      <td className="details-label">Start time</td>
                      <td>18 : 00</td>
                    </tr>
                    <tr>
                      <td className="details-label">End time</td>
                      <td>06 : 00</td>
                    </tr>
                    <tr>
                      <td className="details-label">Venue Type</td>
                      <td>House party</td>
                    </tr>
                    <tr>
                      <td className="details-label">Number of guests</td>
                      <td>60</td>
                    </tr>
                    <tr>
                      <td className="details-label">+1s per guest</td>
                      <td>2</td>
                    </tr>

                    <tr>
                      <td className="details-label">Is alcohol allowed?</td>
                      <td>Yes</td>
                    </tr>
                    <tr>
                      <td className="details-label">Is there food?</td>
                      <td>Yes</td>
                    </tr>

                    <tr>
                      <td className="details-label">Is it indoor or outdoor?</td>
                      <td>Indoor</td>
                    </tr>

                    <tr>
                      <td className="details-label">Car parking</td>
                      <td>Yes, 22 Spaces available</td>
                    </tr>
                    <tr>
                      <td className="details-label">Dress code</td>
                      <td> Be comfortable </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
);
    }
}

export default rsvpTab;