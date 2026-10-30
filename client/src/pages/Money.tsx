
function Money() {
  return (
    <main className="category-page">
      <div className="category-page-container">
        <p className="section-label">LIVING IN NAIROBI</p>

        <h1>Make your money go further.</h1>

        <p className="category-page-intro">
          Understand the cost of living in Nairobi, plan your
          budget, and make more informed financial decisions.
        </p>

        <section className="category-content">
          <h2>Explore Money Guides</h2>

          <div className="category-page-grid">
            <article className="category-page-card">
              <h3>Cost of Living</h3>
              <p>
                Explore common expenses, including rent, food,
                transport, utilities, and everyday essentials.
              </p>
            </article>

            <article className="category-page-card">
              <h3>Budgeting in Nairobi</h3>
              <p>
                Build a practical monthly budget around your
                income, expenses, savings, and priorities.
              </p>
            </article>

            <article className="category-page-card">
              <h3>Salaries and Jobs</h3>
              <p>
                Learn how to think about take-home pay,
                living expenses, and financial goals.
              </p>
            </article>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Money;