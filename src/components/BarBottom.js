import React from 'react';
import logo1 from '../images/icons/logo_picture.png';
import logo2 from '../images/icons/logo_text.png';

const BarBottom = () => {
   return (
      <div>
        <div class="container-fluid footer">
            <div class="row  row-no-gutters">
                <div class="col-xs-12 col-sm-6 col-md-4">
                    <p class="footer-title">Contact information</p>
                    <ul class="footer">         
                        <li>
                            <i class="fa fa-phone footer-icon" aria-hidden="true"></i>045 111 2222
                        </li>
                        <li>
                            <i class="fa fa-map-marker footer-icon" aria-hidden="true"></i>
                            <a href="https://goo.gl/maps/BWwXaBVodShPj6Y39">Töölönlahdenkatu 4 <br/>00100 HELSINKI</a>
                        </li> 
                        <li>
                            <i class="fa fa-envelope-square footer-icon" aria-hidden="true"></i><a href="mailto:info@doggo.com?subject=Email Subject line">info@doggo.com</a>  
                        </li> 
                    </ul>
                    <ul class="footer">         
                        <li>
                            <i class="fa fa-phone footer-icon" aria-hidden="true"></i>045 333 4444
                        </li>
                        <li>
                            <i class="fa fa-map-marker footer-icon" aria-hidden="true"></i>
                            <a href="https://goo.gl/maps/LoinaEroZww6DaUX8">Frenckellinaukio 2 B<br/>33100 TAMPERE</a>
                        </li> 
                        <li>
                            <i class="fa fa-envelope-square footer-icon" aria-hidden="true"></i><a href="mailto:info@doggo.com?subject=Email Subject line">info@doggo.com</a>  
                        </li> 
                    </ul>
                </div>     

                <div class="col-xs-6 col-sm-5 col-md-4">
                <p class="footer-title">Opening hours</p>
                    <ul class="footer">         
                        <li class="hours-title">Helsinki</li>
                        <li>Mon-Fri 10:00 - 20:00</li>
                        <li>Sat 10:00 - 18:00</li>
                        <li>Sun 12:00 - 17:00</li>
                    </ul>
                    <ul class="footer">         
                        <li class="hours-title">Tampere</li>
                        <li>Mon-Fri 9:30 - 20:00</li>
                        <li>Sat 10:00 - 17:00</li>
                        <li>Sun 12:00 - 17:00</li>
                    </ul>
                </div>      
            
                <div class="col-xs-12 col-sm-6 col-md-4">
                    <img src={logo1} style={{height:"10rem"}} alt="..."></img>
                    <img src={logo2} style={{height:"5rem"}} alt="..."></img>
                    <p>Copyright © 2020 Company name</p>
                </div>
            </div>           
        </div> 
      </div>
    );
}

export default BarBottom;