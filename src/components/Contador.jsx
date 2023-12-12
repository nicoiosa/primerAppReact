const Contador = () => {
  let numero = 10;
  return (
    <section className="text-center">
      <h3>Contador</h3>
      <p className="fw-bold">{numero}</p>
      <button
        className="btn btn-primary"
        onClick={() => {
          numero++;
          console.log(numero);
        }}
      >
        +1
      </button>
    </section>
  );
};

export default Contador;
