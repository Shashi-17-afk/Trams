import "./App.css";
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
      <About />
      <Progress />
      <Services />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
