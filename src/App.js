import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./components/Footer";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import RatesAndPayments from "./pages/RatesAndPayments";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/rateandpayments" element={<RatesAndPayments />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
