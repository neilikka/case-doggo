import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import FrontPage from "./components/FrontPage";
import Blogs from "./components/Blogs";
import Courses from "./components/Courses";
import PrivateLessons from "./components/PrivateLessons";
import About from "./components/About";
import Maintenances from "./components/Maintenances";
import Error from "./components/Error";
import Search from "./components/Search";
import BarTop from "./components/BarTop";
import BarSide from "./components/BarSide";
import BarBottom from "./components/BarBottom";
import ScrollToTop from "./components/ScrollToTop";
import ArrowToTop from "./components/ArrowToTop";

class App extends Component {
  render() {
    return (
      <div class="container">
        <BrowserRouter>
          <ScrollToTop />
          <ArrowToTop />
          <BarSide />
          <BarTop />
          <div id="main">
            <Switch>
              <Route path="/" component={FrontPage} exact />
              <Route path="/blogs" component={Blogs} />
              <Route path="/courses" component={Courses} />
              <Route path="/privatelessons" component={PrivateLessons} />
              <Route path="/maintenances" component={Maintenances} />
              <Route path="/about" component={About} />
              <Route path="/search" component={Search} />
              <Route component={Error} />
            </Switch>
            <BarBottom />          
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;