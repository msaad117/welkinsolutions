import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import LoopSlider from "./components/loopSlider/LoopSlider";
import Navbar from "./components/navbar/Navbar";
import Slider from "./components/slider/Slider";
import { SystemRoutes } from "./shared/SystemRoutes";

function App() {
  return (
    <div style={{"overflowX":"hidden"}}>
      <Navbar/>
      <SystemRoutes/>
      <Footer/>
    </div>
  )
}

export default App;
