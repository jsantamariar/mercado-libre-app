import { useNavigate } from 'react-router-dom';

export default function ErrorBoundaryML() {
  const navigate = useNavigate();

  const handleReload = () => {
    navigate('/');
    window.location.reload();
  };
  return (
    <div className="error-boundary-container">
      <div className="error-boundary-description">
        <h1>Algo salió mal.</h1>
        <p>Parece que ha ocurrido un error inesperado. Haz click en el botón para volver al inicio e inténtalo de nuevo</p>
        <button onClick={handleReload} className="home-link">
          Volver al inicio
        </button>
      </div>
    </div>
  );
}
