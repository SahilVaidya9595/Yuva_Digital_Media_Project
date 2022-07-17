import React from 'react';
import {BrowserRouter as Router,Routes ,Route} from "react-router-dom";
import './App.css';

import Home from './components/pages/Home';
import About from './components/pages/About';
import Service from './components/pages/Service';
import Team from './components/pages/Team';
import FAQs from './components/pages/FAQs';
import Contact from './components/pages/Contact';

import Navbar from './components/common_components/Navbar';
import Footer from './components/pages/Footer';

function App() {
  return (
    <div>
      <Router basename="/">

        {/* Add Navbar Component */}
        <Navbar/>


        <Routes>
          <Route exact path = "/" element={< Home />}/>
          <Route path = "/about" element={< About />}/>
          <Route path = "/service" element={< Service />}/>
          <Route path = "/team" element={< Team />}/>
          <Route path = "/faqs" element={< FAQs />}/>
          <Route path = "/contact" element={< Contact / >}/>
        </Routes>

        <Footer/>
        {/* <Switch>
          <Route exact path = "/" component={Home}/>
          <Route path = "/About" component={About}/>
          <Route path = "/Service" component={Service}/>
          <Route path = "/Team" component={Team}/>
          <Route path = "/FAQs" component={FAQs}/>
          <Route path = "/Contact" component={Contact}/>
        </Switch> */}
      </Router>

    </div>
  );
}

export default App;
