import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./Footer.css";
import { FaX } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">{/* <h4>Sharan Panthi</h4> */}</div>
        <div className="footer-social">
          <a
            href="https://github.com/codes-sharan"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/sharan-panthi-94765382/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/PanthiSharan"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon"
          >
            <FaX />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Sharan Panthi. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

// function Footer() {
//   return (
//     <footer className="footer">
//       <div className="footer-content">
//         <div className="footer-logo">{/* <h4>Sharan Panthi</h4> */}</div>
//         <div className="footer-social">
//           <a
//             href="https://github.com/codes-sharan"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="footer-icon"
//           >
//             <FaGithub />
//           </a>
//           <a
//             href="https://linkedin.com/in/sharan-panthi-94765382/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="footer-icon"
//           >
//             <FaLinkedin />
//           </a>
//           <a
//             href="https://twitter.com/PanthiSharan"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="footer-icon"
//           >
//             <FaX />
//           </a>
//         </div>
//       </div>
//       <div className="footer-bottom">
//         <p>&copy; 2024 Sharan Panthi. All Rights Reserved.</p>
//       </div>
//     </footer>
//   );
// }

// export default Footer;
