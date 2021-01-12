import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
 
import FrontPage from './components/FrontPage';
import Blogs from './components/Blogs';
import Courses from './components/Courses';
import PrivateLessons from './components/PrivateLessons';
import About from './components/About';
import Maintenances from './components/Maintenances';
import Error from './components/Error';
import Search from './components/Search';
import Navigation from './components/Navigation';
import SideNavigation from './components/SideNavigation';
import BottomBar from './components/BottomBar';
import ScrollToTop from './components/ScrollToTop';

class App extends Component {
  render() {
    return (  
      <div>
        <SideNavigation /> 
      <div class="container">      
        <BrowserRouter>
        <ScrollToTop />       
        <div>
          <Navigation />
            <Switch>
             <Route path="/" component={FrontPage} exact/>
             <Route path="/blogs" component={Blogs}/>
             <Route path="/courses" component={Courses}/>
             <Route path="/privatelessons" component={PrivateLessons}/>
             <Route path="/maintenances" component={Maintenances}/>
             <Route path="/about" component={About}/>
             <Route path="/search" component={Search}/>             
            <Route component={Error}/>
           </Switch>
        </div>
        <div>
          <BottomBar />
        </div>   
      </BrowserRouter>
      </div>
      </div>
    );
  }
}
 
export default App;