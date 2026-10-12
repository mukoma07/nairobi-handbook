
const neighborhoods = [
  {
    name: "Kilimani",
    type: "URBAN LIVING",
    description:
      "Discover apartments, restaurants, cafés and everyday life in this lively neighborhood.",
    tags: ["Apartments", "Dining", "Lifestyle"],
  },
  {
    name: "Westlands",
    type: "BUSINESS & ENTERTAINMENT",
    description:
      "Explore shopping malls, offices, hotels, restaurants and entertainment spots.",
    tags: ["Business", "Shopping", "Nightlife"],
  },
  {
    name: "Karen",
    type: "GREEN & SUBURBAN",
    description:
      "Discover leafy surroundings, residential properties and nature-oriented attractions.",
    tags: ["Green spaces", "Residential", "Nature"],
  },
  {
    name: "Kileleshwa",
    type: "RESIDENTIAL NAIROBI",
    description:
      "Explore residential streets, modern apartments and convenient city access.",
    tags: ["Apartments", "Residential", "City access"],
  },
  {
    name: "Kasarani",
    type: "EASTERN NAIROBI",
    description:
      "Discover residential estates, local businesses, sports facilities and daily essentials.",
    tags: ["Housing", "Local shops", "Sports"],
  },
  {
    name: "South B",
    type: "SOUTHERN NAIROBI",
    description:
      "Explore residential estates, local eateries, shopping options and transport connections.",
    tags: ["Residential", "Food", "Transport"],
  },
];

function Neighborhoods() {
  return (
    <section className="neighborhoods-section" id="neighborhoods">
      <div className="neighborhoods-container">
        <div className="neighborhoods-heading">
          <div>
            <p className="section-label">FIND YOUR PLACE</p>
            <h2>Get to know Nairobi, neighborhood by neighborhood.</h2>
            <p className="neighborhoods-intro">
              Every part of the city has its own character.
              Explore different areas and find the information
              that matters to your lifestyle.
            </p>
          </div>

          <a className="neighborhoods-view-all" href="#neighborhoods">
            Explore the city ↗
          </a>
        </div>

        <div className="neighborhoods-grid">
          {neighborhoods.map((neighborhood) => (
            <article
              className="neighborhood-card"
              key={neighborhood.name}
            >
              <div className="neighborhood-card-top">
                <span className="neighborhood-pin">NBO / KE</span>
                <span className="neighborhood-arrow">↗</span>
              </div>

              <div className="neighborhood-card-content">
                <p className="neighborhood-type">
                  {neighborhood.type}
                </p>

                <h3>{neighborhood.name}</h3>

                <p className="neighborhood-description">
                  {neighborhood.description}
                </p>

                <div className="neighborhood-tags">
                  {neighborhood.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>

              <a
                className="neighborhood-link"
                href="#neighborhoods"
                aria-label={`Explore ${neighborhood.name}`}
              >
                Explore neighborhood <span>→</span>
              </a>
            </article>
          ))}
        </div>

        <p className="neighborhoods-note">
          A starting point for exploring Nairobi. Compare areas
          based on your needs, budget and preferred lifestyle.
        </p>
      </div>
    </section>
  );
}

export default Neighborhoods;