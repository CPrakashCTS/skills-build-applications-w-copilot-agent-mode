function App() {
  return (
    <main className="container py-5">
      <section className="row align-items-center g-4">
        <div className="col-lg-7">
          <p className="text-uppercase text-primary fw-semibold">OctoFit Tracker</p>
          <h1 className="display-4 fw-bold">Modern fitness tracking for teams and solo athletes</h1>
          <p className="lead text-muted">
            Log workouts, follow progress, and keep every challenge visible in one polished experience.
          </p>
          <div className="d-flex gap-3 mt-4">
            <a className="btn btn-primary btn-lg" href="/">
              Explore the app
            </a>
            <a className="btn btn-outline-secondary btn-lg" href="/">
              View dashboard
            </a>
          </div>
        </div>
        <div className="col-lg-5">
          <div className="card shadow-sm border-0">
            <div className="card-body p-4">
              <h2 className="h4 mb-3">What is ready</h2>
              <ul className="list-group list-group-flush">
                <li className="list-group-item px-0">React 19 + Vite frontend</li>
                <li className="list-group-item px-0">Express + TypeScript backend</li>
                <li className="list-group-item px-0">MongoDB access with Mongoose</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
