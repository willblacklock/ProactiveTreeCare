import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Compliance from "./components/Compliance";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About id="about" />
      <Services id="services" />
      <Compliance id="compliance" />
      <Contact id="contact" />
      <Gallery id="gallery" />
      <Footer />
    </>
  );
}

export default App;
