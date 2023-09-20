import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Laptop from "./Components/Laptop";
import WhyBlanxer from "./Components/WhyBlanxer";
import Response from "./Components/Response";
import Examples from "./Components/Examples";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Laptop />
      <WhyBlanxer />
      <Response />
      <Examples />
    </div>
  );
}

export default App;
