export default function LoadingSpinner() {
  return (
    <div id="loading-screen" className="loading-screen" data-testid="loading-spinner">
      <div className="wrapper">
        <div className="spinner">
          <div className="content">Loading...</div>
        </div>
      </div>
    </div>
  );
}
