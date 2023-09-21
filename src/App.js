import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Laptop from "./Components/Laptop";
import WhyBlanxer from "./Components/WhyBlanxer";
import Response from "./Components/Response";
import Examples from "./Components/Examples";
import Premium from "./Components/Premium";
import Faq from "./Components/FAQs";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Laptop />
      <WhyBlanxer />
      <Response />
      <Examples />
      <Premium />
      <Faq />
    </div>
  );
}

export default App;
