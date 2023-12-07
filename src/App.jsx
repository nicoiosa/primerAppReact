import Contador from "./components/Contador";
import Information from "./components/Information";
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  // aqui agregamos la logica del componente
  return (
    // aqui puede ir un poco de logica
    // luego va el resto del componente
    <section className="container">
      <h1 className="display-3 my-5">Primer App React</h1>
      {/* <Information></Information> */}
      <Information tituloSecundario="Este titulo fue creado por un props"/>
      <Contador/>
    </section>
  );
}

export default App;