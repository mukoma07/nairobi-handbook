const categories = [
  {
    icon: "🏠",
    title: "Housing",
    description: "Rent, neighborhoods, moving and finding a home.",
  },
  {
    icon: "💰",
    title: "Money",
    description: "Cost of living, salaries, budgeting and finances.",
  },
  {
    icon: "💼",
    title: "Work",
    description: "Jobs, careers, business and working in Nairobi.",
  },
  {
    icon: "🚐",
    title: "Transport",
    description: "Matatus, buses, driving and getting around.",
  },
  {
    icon: "🏛",
    title: "Government",
    description: "IDs, passports, taxes and public services.",
  },
  {
    icon: "🍽",
    title: "Food & Drink",
    description: "Restaurants, cafés, local food and nightlife.",
  },
  {
    icon: "🎉",
    title: "Things To Do",
    description: "Events, entertainment and places to explore.",
  },
  {
    icon: "🏙",
    title: "Neighborhoods",
    description: "Discover and compare areas across Nairobi.",
  },
];

function ExploreCategories() {
  return (
    <section className="explore-section">
      <div className="explore-container">
        <div className="section-heading">
          <p className="section-label">EXPLORE NAIROBI</p>

          <h2>Start with what matters to you.</h2>

          <p>
            Practical guides to help you understand, navigate and enjoy
            Nairobi.
          </p>
        </div>

        <div className="category-grid">
          {categories.map((category) => (
            <a href="#" className="category-card" key={category.title}>
              <span className="category-icon">{category.icon}</span>

              <div>
                <h3>{category.title}</h3>
                <p>{category.description}</p>
              </div>

              <span className="category-arrow">↗</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExploreCategories;