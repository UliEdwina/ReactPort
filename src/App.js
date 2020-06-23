import React, {Component} from 'react';

import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Sidebar from './components/sidebar'
import Introduction from './components/introduction'
import About from './components/about'
import Timeline from './components/timeline'
import Contact from './components/Contact'
import Projects from './components/projects'
import 'video.js'

class App extends Component {
    render() {
      return (
          <Router>
        <div id="colorlib-page">
          <div id="container-wrap">
               <Sidebar></Sidebar>
                  <div id="colorlib-main">
                      <Introduction></Introduction>
                      <About></About>
                      <Timeline></Timeline>
                      <Projects></Projects>
                      <Contact></Contact>
                </div>
                <Switch>
                <Route exact path= '/add' component={ Contact } />
            </Switch>
            </div>
            
        </div>
        </Router>
      )
    }
  }
  
  export default App;
  