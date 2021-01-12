import React from 'react';
import logo1 from '../images/icons/logo_picture.png';
import logo2 from '../images/icons/logo_text.png';
import logo from '../images/icons/logo_bottom.png';

const BottomBar = () => {
   return (
      <div>
        <nav class="navbar bottom-bar mt-5">
        <div class="container">
                <div class="col-sm-4 col-xs-6">              
                    <span class="navbar-text ">
                        <div class="row">
                            <div class="col-12">
                                <div class="bottom-bar-bold">Contact information</div><br/>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-6">
                                <div class="bottom-bar-light">Töölönlahdenkatu 4<br/>00100 HELSINKI<br/>gsm 045 111 2222<br/>info@doggo.com</div><br/>
                            </div>
                            <div class="col-6">
                                <div class="bottom-bar-light">Frenckellinaukio 2 B<br/>33100 TAMPERE<br/>gsm 045 333 4444<br/>info@doggo.com</div>
                            </div>
                        </div>
                    </span>                
                </div>
                <div class="col-sm-4 col-xs-6">
                    <span class="navbar-text">
                        <div class="row">
                            <div class="col-12">
                                <div class="bottom-bar-bold">Opening hours</div><br/>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-6">    
                                <div class="bottom-bar-light">Helsinki<br/><br/>Mon-Fri 10:00 - 20:00<br/>Sat 10:00 - 18:00<br/>Sun 12:00 - 17:00</div><br/>
                            </div>
                            <div class="col-6">
                                <div class="bottom-bar-light">Tampere<br/><br/>Mon-Fri 9:30 - 20:00<br/>Sat 10:00 - 17:00<br/>Sun 12:00 - 17:00</div>
                            </div>
                        </div>
                    </span>
                </div>
                <div class="col-sm-4 col-xs-6 d-flex align-self-end p-2">
                    <span class="navbar-right">
                        <img src={logo} style={{height:"10rem"}} alt="..."></img>
                    </span>
                </div>
        </div>
        </nav>
      </div>
    );
}

export default BottomBar;