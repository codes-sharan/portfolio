
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h2>Suyog Paudel</h2>
        </div>
        <div className="footer-social">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="footer-icon">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="footer-icon">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="footer-icon">
            <FaTwitter />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Suyog Paudel. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
