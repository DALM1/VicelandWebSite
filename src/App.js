import "./style.scss";
import Actus from "./Component/Actus";
import Main from './Component/Main'
import Footer from "./Component/Footer";
import Galerie from "./Component/Galerie-full";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {


 
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/actus" element={<Actus />} />
      <Route path="/galerie" element={<Galerie />} />
      </Routes>
      <div className="footer_base">
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;