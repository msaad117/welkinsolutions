import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import { SystemRoutes } from "./shared/SystemRoutes";

function App() {
  return (
    <div style={{overflowX:"hidden",height:"auto"}}>
      <Navbar/>
      <SystemRoutes/>
      <Footer/>
    </div>
  )
}

export default App;
