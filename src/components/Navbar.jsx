import React from "react";

const Navbar = () => {
  return <>
        <header className="navbar">
            <div className="logo">
                <img src="/Logo.png" alt="" />
            </div>

            <nav className="links">
                <a href="#">Home</a>
                <a href="#">Studio</a>
                <a href="#">Services</a>
                <a href="#">Contact</a>
                <a href="#">FAQs</a>
            </nav>

            <div className="icon">
                <span className="bi bi-list"></span>
            </div>
            
        </header>
  </>;
};

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous"></link>

export default Navbar;
