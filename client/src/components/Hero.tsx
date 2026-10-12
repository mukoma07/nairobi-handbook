function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-label">YOUR GUIDE TO NAIROBI</p>

        <h1>
          Everything you need to know
          <span> about Nairobi.</span>
        </h1>

        <p className="hero-description">
          Discover neighborhoods, understand the cost of living,
          find things to do, navigate the city, and learn how Nairobi works.
        </p>

        <div className="hero-search">
          <span className="search-icon">⌕</span>

          <input
            type="text"
            placeholder="What do you want to know about Nairobi?"
          />

          <button>Search</button>
        </div>

        <p className="popular-searches">
          Popular: Cost of living · Best neighborhoods · Things to do
        </p>
      </div>
    </section>
  );
}

export default Hero;