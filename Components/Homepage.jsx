import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";


const Home = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="home">
      {/* Bootstrap Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#home">
            Homepage
          </a>
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleNav}
            aria-controls="navbarNav"
            aria-expanded={isNavOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#home" onClick={() => setIsNavOpen(false)}>
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#features" onClick={() => setIsNavOpen(false)}>
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about" onClick={() => setIsNavOpen(false)}>
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact" onClick={() => setIsNavOpen(false)}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main className="container py-5">
        {/* Hero section with Bootstrap */}
        <section id="home" className="mb-5">
          <div className="text-center mb-4">
            <h1 className="display-4 fw-bold mb-3">Welcome to MyReactSite</h1>
            <p className="lead text-muted mb-4">
              A simple, complete homepage layout in React: clean header, content
              sections, and a neat footer — ready for you to customize.
            </p>
            <button className="btn btn-primary btn-lg me-2">Get Started</button>
            <button className="btn btn-outline-secondary btn-lg">Learn More</button>
          </div>
        </section>

        {/* Features section with Bootstrap Cards */}
        <section id="features" className="mb-5">
          <h2 className="text-center mb-3">Features</h2>
          <p className="text-center text-muted mb-4">
            Everything you need for a small, clean React landing page.
          </p>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body text-center">
                  <div className="display-4 mb-3">📐</div>
                  <h3 className="card-title">Clean Layout</h3>
                  <p className="card-text">
                    Simple structure that is easy to read and maintain.
                  </p>
                  <ul className="list-unstyled text-start">
                    <li>✓ Header + sections + footer</li>
                    <li>✓ Readable spacing</li>
                    <li>✓ Minimal styling</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body text-center">
                  <div className="display-4 mb-3">📱</div>
                  <h3 className="card-title">Responsive</h3>
                  <p className="card-text">
                    Looks good on desktops, tablets, and mobile devices.
                  </p>
                  <ul className="list-unstyled text-start">
                    <li>✓ Bootstrap grid</li>
                    <li>✓ Mobile-friendly spacing</li>
                    <li>✓ Simple typography</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body text-center">
                  <div className="display-4 mb-3">✏️</div>
                  <h3 className="card-title">Ready to Edit</h3>
                  <p className="card-text">
                    Change the text and add your own components quickly.
                  </p>
                  <ul className="list-unstyled text-start">
                    <li>✓ Plain JSX content</li>
                    <li>✓ Basic CSS classes</li>
                    <li>✓ Easy to extend</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About section */}
        <section id="about" className="mb-5">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h2 className="mb-3">About</h2>
              <p className="lead">
                This homepage is built with React and Bootstrap. It is designed to
                be a starting point: not too busy, but complete enough to show a
                typical structure you might use in a small project or portfolio.
              </p>
            </div>
          </div>
        </section>

        {/* Contact section */}
        <section id="contact" className="mb-5">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h2 className="mb-3">Contact</h2>
              <p>
                Replace this text with your own contact information, email address,
                or a link to a contact form. Visitors should be able to see how to
                reach you or learn more.
              </p>
              <div className="d-grid gap-2 d-md-block">
                <button className="btn btn-primary">Email Us</button>
                <button className="btn btn-outline-secondary">Contact Form</button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Bootstrap Footer */}
      <footer className="bg-light border-top py-4 mt-auto">
        <div className="container text-center">
          <p className="text-muted mb-0">
            © {new Date().getFullYear()} MyReactSite. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
