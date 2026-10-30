
const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <a href="/" className="footer-logo">
            Nairobi Handbook
          </a>

          <p>
            Your guide to living, working, and exploring
            Nairobi.
          </p>
        </div>

        <div className="footer-links">
          <h3>Explore</h3>
          <a href="#categories">Categories</a>
          <a href="#popular-guides">Popular Guides</a>
          <a href="#neighborhoods">Neighborhoods</a>
        </div>

        <div className="footer-links">
          <h3>Useful Resources</h3>
          <a href="#tools">Cost of Living Calculator</a>
          <a href="#neighborhoods">Explore Neighborhoods</a>
          <a href="#top">Back to Top</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Nairobi Handbook.
          All rights reserved.
        </p>
        <p>Made for life in Nairobi, Kenya.</p>
      </div>
    </footer>
  );
};

export default Footer;