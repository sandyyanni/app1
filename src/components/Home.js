import React from "react";


import Contact from './Contact';
import Picture from '../images/img.jpg';

function Home() {
    return (
      <div>
  
  
       <section className="App inner-continer side">
       <h2>Hello, my name is Sandy. I am a Front End Developer living in lebanon .</h2>
       </section>
       <section className="App inner-continer side">
       <img src={Picture} alt="Laptop"/>
       </section>
  
       
       <section id="contact">
       <Contact/>
       </section>
       
      </div>
    );
  }
  
       
  
  export default Home;