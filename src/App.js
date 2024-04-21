import "./style.scss";
import Actus from "./Component/Actus";
import Main from './Component/Main'
import Footer from "./Component/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {


 
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/actus" element={<Actus />} />
      </Routes>
      <div className="footer">
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;