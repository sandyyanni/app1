import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import Footer from './components/Footer';


 function App() {
  return (
    <Router>
    <div>

<section className="App">
    <Navbar />
     </section>
     
     <Switch>
                <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/services">
                        <Services />
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

