import About from "./components/About";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialMediaLinks from "./components/SocialMediaLinks";

function App() {
  return (
    <div className="App">
       <NavBar/>
       <Home/>
       <About />
       <Portfolio/>
       <Experience/>
       {/* <Certifications/> */}
       <Contact/>
       <SocialMediaLinks/>
    </div>
  );
}

export default App;
