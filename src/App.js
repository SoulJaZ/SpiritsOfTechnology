import Header from "../src/components/Header.jsx";
import Navbar from "./components/Navbar.jsx";
import RedesSociales from "./components/RedesSociales.jsx";
import RegistroForm from "./components/RegistroForm.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      
      <section>
        <h2>Misión & Visión</h2>
        <p>
          Ofrecer soluciones tecnológicas rápidas y adaptables con calidad y
          compromiso.
        </p>
      </section>

      <section>
        <h2>Cronograma</h2>
        <ul>
          <li>Planificación de mantenimiento</li>
          <li>Asignación de tareas</li>
          <li>Fechas y seguimiento</li>
        </ul>
      </section>

      <section>
        <h2>Instalación</h2>
        <p>
          Inspección visual, revisión de equipos, instalación de sistema
          operativo.
        </p>
      </section>

      <section>
        <h2>Herramientas de Booteo</h2>
        <ul>
          <li>Rufus</li>
          <li>CMD</li>
          <li>Ventoy</li>
        </ul>
      </section>

      <section>
        <h2>Sugerencias de Hardware</h2>
        <p>
          Equipos recomendados: Asus E1504GA, Lenovo Slim 3, Lenovo LOQ RTX
          4060.
        </p>
      </section>
      <section>
        <h2>Leyes Eléctricas</h2>
        <p>Ley de Ohm: V = I * R. Ley de Watt: P = V * I.</p>
      </section>
      <RedesSociales />
      <RegistroForm />

      <Footer />
    </div>
  );
}

export default App;
