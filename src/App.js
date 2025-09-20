import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cronograma from "./pages/Cronograma";
import Mision from "./pages/MisionVision";
import Instalacion from "./pages/Instalacion";
import Herramientas from "./pages/Herramientas";
import Sugerencias from "./pages/Sugerencias";
import Leyes from "./pages/LeyesElectricas";
import Registro from "./components/RegistroForm"
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import RedesSociales from "./components/RedesSociales";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Header />

        <main style={{ flex: 1, padding: "20px" }}>
          <Routes>
            <Route path="/inicio" element={<App/>} />
            <Route path="/mision" element={<Mision />} />
            <Route path="/cronograma" element={<Cronograma />} />
            <Route path="/instalacion" element={<Instalacion />} />
            <Route path="/herramientas" element={<Herramientas />} />
            <Route path="/sugerencias" element={<Sugerencias />} />
            <Route path="/leyes" element={<Leyes />} />
            <Route path="/registro" element={<Registro />} />
            
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
