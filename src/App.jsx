import "./App.css";
import flowCurve from "./assets/flow-curve.svg";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About"
import Progress from "./components/Progress"
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="flow-section">
        <img className="flow-curve" src={flowCurve} alt="" aria-hidden="true" />
        <About />
        <Progress />
      </div>
      <Services />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
