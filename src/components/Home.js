import React from "react";

import About from './About';
import Contact from './Contact';

function Home() {
    return (
      <div>
  
  
       <section className="App inner-continer side">
       <h2>Hello, my name is Sandy. I am a Front End Developer living in lebanon .</h2>
       </section>
       <section className="App inner-continer side">
       <img src="./images/img.jpg" alt="Laptop"/>
       </section>
  
       <section className="inner-continer side" id="about">
       <About/>
       </section>
       <section id="contact">
       <Contact/>
       </section>
       
      </div>
    );
  }
  
       
  
  export default Home;