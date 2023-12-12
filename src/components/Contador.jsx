import { useState } from "react";

const Contador = () => {
  // let numero = 10;
  const [numero, setNumero] = useState(10);
  return (
    <section className="text-center">
      <h3>Contador</h3>
      <p className="fw-bold">{numero}</p>
      <button className="btn btn-primary me-2git" onClick={() => setNumero(numero + 1)}>
        +1
      </button>
      <button className="btn btn-primary" onClick={() => setNumero(numero - 1)}>
        -1
      </button>
    </section>
  );
};

export default Contador;
