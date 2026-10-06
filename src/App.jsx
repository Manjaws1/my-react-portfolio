import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Loader from "./components/loader.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import About from './components/About.jsx';
import Skill from './components/skill.jsx';
import Project from './components/Project.jsx';
import Experience from "./components/Experience.jsx";
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import BackToTop from './components/BackToTop.jsx'



function App() {

  return (
    <>
      <Loader />
      <Header />

      <main>
        <Hero />
        <About />
        <Skill />
        <Project />
        <Experience />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </>
  )
}

export default App
