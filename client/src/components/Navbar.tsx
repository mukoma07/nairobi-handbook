function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <a href="/" className="logo">
          Nairobi <span>Handbook</span>
        </a>

        <nav className="nav-links">
          <a href="#guides">Guides</a>
          <a href="#neighborhoods">Neighborhoods</a>
          <a href="#things-to-do">Things To Do</a>
          <a href="#tools">Tools</a>
          <a href="#directory">Directory</a>
        </nav>

        <button className="search-button">
          Search
        </button>
      </div>
    </header>
  );
}

export default Navbar;