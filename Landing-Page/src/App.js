import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Work from "./Components/Work";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Research from "./Components/Research";

function App() {
  return (
    <div className="App">
      <Home />
      <Research />
      <About />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
