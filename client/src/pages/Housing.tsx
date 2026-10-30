
function Housing() {
  return (
    <main className="category-page">
      <div className="category-page-container">
        <p className="section-label">LIVING IN NAIROBI</p>

        <h1>Find your place in Nairobi.</h1>

        <p className="category-page-intro">
          Practical guides to renting, choosing a neighborhood,
          budgeting for a home, and moving to Nairobi.
        </p>

        <section className="category-content">
          <h2>Explore Housing</h2>

          <div className="category-page-grid">
            <article className="category-page-card">
              <h3>Renting in Nairobi</h3>
              <p>
                Learn about rental costs, deposits, leases,
                and questions to ask before paying for a home.
              </p>
            </article>

            <article className="category-page-card">
              <h3>Choosing a Neighborhood</h3>
              <p>
                Compare different areas based on your budget,
                commute, lifestyle, and daily needs.
              </p>
            </article>

            <article className="category-page-card">
              <h3>Moving to Nairobi</h3>
              <p>
                Prepare for your move with a checklist for
                housing, transport, utilities, and essentials.
              </p>
            </article>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Housing;