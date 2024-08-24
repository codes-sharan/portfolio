
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './Header.css';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="logo">Sharan Panthi</h1>

        <nav className="nav-links">
        <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        </ul>
        </nav>

        <div className="social-icons">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaTwitter />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
