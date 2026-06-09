const Navbar = () => {
  return (
    <header className="navbar">
      <div className="logo">
        <span className="wordmark">Elementum</span>
      </div>

      <nav className="links">
        <a href="#">Home</a>
        <a href="#">Studio</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
        <a href="#">FAQ`s</a>
      </nav>

      <button className="icon" aria-label="Menu">
        <span className="bi bi-list"></span>
      </button>
    </header>
  );
};

export default Navbar;
