import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./Header.css";
import { Link } from "react-router-dom";
import { FaX } from "react-icons/fa6";

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" style={{ textDecoration: "none" }}>
          {" "}
          <h1 className="logo">Sharan Panthi</h1>{" "}
        </Link>

        <nav className="nav-links">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <div className="social-icons">
          <a
            href="https://github.com/codes-sharan"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/sharan-panthi-94765382/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaX />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
