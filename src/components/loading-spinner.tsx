export function LoadingSpinner() {
  return (
    <div style={{ height: "90vh" }} className="d-flex justify-content-center align-items-center">
      <div className="spinner-border text-dark" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}