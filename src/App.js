import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import React from "react";
import { Footer } from "./components/Footer";
import { MobileMenu } from "./components/MobileMenu";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      {/* <MobileMenu className="tab-bottom-mobile" /> */}
    </div>
  );
}

export default App;
