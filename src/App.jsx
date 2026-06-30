import { useEffect } from 'react'
import "./App.css";
import Navbar from "./components/Navbar";
import Programs from "./components/Programs";
import Trainers from "./components/Trainers";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";


const App = () => {
  useEffect(()=>{
    const revealElements=document.querySelectorAll(".reveal");
    const handleScroll=()=>{
      revealElements.forEach((el)=>{
        const top=el.getBoundingClientRect().top;
        if (top<window.innerHeight-100) el.classList.add("active");

      });
    };
      window.addEventListener("scroll",handleScroll);
      return ()=> window.removeEventListener("scroll",handleScroll);
  },[]);
  return (
    <div>
      <Navbar />
      <Hero />
      <Programs />
      <Trainers />
      <Contact />
      <Footer />

    </div>
  )
}

export default App
