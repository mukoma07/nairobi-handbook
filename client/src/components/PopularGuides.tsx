import GuideCard from "./GuideCard";

const guides = [
  {
    category: "MONEY",
    title: "The Cost of Living in Nairobi",
    description:
      "Understand rent, food, transport and the everyday expenses that shape life in Nairobi.",
    readTime: "8 min read",
  },
  {
    category: "HOUSING",
    title: "The Best Neighborhoods to Live in Nairobi",
    description:
      "Explore Nairobi's neighborhoods and learn what to consider when choosing where to live.",
    readTime: "10 min read",
  },
  {
    category: "TRANSPORT",
    title: "How Nairobi Public Transport Works",
    description:
      "A practical introduction to matatus, buses, ride-hailing and getting around the city.",
    readTime: "7 min read",
  },
  {
    category: "NAIROBI",
    title: "Nairobi for First-Time Visitors",
    description:
      "A practical starting point for understanding the city before your first visit.",
    readTime: "9 min read",
  },
  {
    category: "HOUSING",
    title: "Moving Into Your First Nairobi Apartment",
    description:
      "Things to consider before choosing a house, signing a lease and moving in.",
    readTime: "8 min read",
  },
  {
    category: "WORK",
    title: "Working and Building a Career in Nairobi",
    description:
      "Explore jobs, remote work, freelancing and the city's growing professional ecosystem.",
    readTime: "9 min read",
  },
];

function PopularGuides() {
  return (
    <section className="guides-section" id="guides">
      <div className="guides-container">
        <div className="guides-heading">
          <div>
            <p className="section-label">POPULAR GUIDES</p>

            <h2>Useful knowledge for everyday Nairobi.</h2>
          </div>

          <a href="#guides" className="view-all">
            View all guides ↗
          </a>
        </div>

        <div className="guides-grid">
          {guides.map((guide) => (
            <GuideCard
              key={guide.title}
              category={guide.category}
              title={guide.title}
              description={guide.description}
              readTime={guide.readTime}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PopularGuides;