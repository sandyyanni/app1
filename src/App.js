import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';


 function App() {
  return (
    <Router basename="/app1">
    <div>

<section className="App">
    <Navbar />
     </section>
     
     <Switch>
                <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/about">
                        <About />
                    </Route>
                    
                    <Route exact path="/contact">
                        <Contact />
                    </Route>
        
                </Switch>
     
     <section className="App">
    <Footer />
    </section>
    </div>
    
    </Router>
  );
}

     

export default App;

