export default function ErrorBoundaryML() {
  const handleReload = () => {
    window.location.reload();
  };
  return (
    <div className="error-boundary-container">
      <h1>Algo salió mal.</h1>
      <p>Parece que ha ocurrido un error inesperado. Haz click en el botón para volver al inicio e inténtalo de nuevo</p>
      <button onClick={handleReload} className="home-link">
        Volver al inicio
      </button>
    </div>
  );
}
