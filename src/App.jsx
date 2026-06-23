const App = () => {
  return (
    <section className="bg-[url('/img/bg.jpg')] bg-cover bg-center min-h-dvh">
      <div>
        <div>
          // Título con Voyage
          <h1 className="font-display text-5xl">Bienvenido</h1>
          // Subtítulo con OTJubilee
          <h2 className="font-heading text-3xl">Nuestra historia</h2>
          // Párrafo con Switzer Medium (weight 500)
          <p className="font-sans font-medium text-base">Texto del cuerpo</p>
          // Switzer Regular (weight 400, el default)
          <p className="font-sans text-sm">Texto secundario</p>
        </div>

        <div>
          <p>Places</p>
          <p>Objects</p>
        </div>

        <div>Menu</div>
      </div>
    </section>
  );
};

export default App;
