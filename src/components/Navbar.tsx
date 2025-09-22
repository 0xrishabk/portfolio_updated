import { useState, type ReactNode } from "react";
import "./Navbar.css";

type NavbarProps = {
  children?: ReactNode
  navItems: Record<string, string>;
};

function Navbar({ children, navItems }: NavbarProps) {
  const [isOpen, setOpen] = useState(false);
  
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          { children }
        </div>
        <button
          className={`navbar-toggle ${isOpen ? "active" : ""}`}
          onClick={() => setOpen(!isOpen)}
        >
          &#9776;
        </button>
        <ul className={`navbar-links ${isOpen ? "active" : ""}`}>
          {Object.entries(navItems).map(([label, href]) => (
            <li key={href} className="component-nav-bar-list">
              <a href={href} className="component-nav-bar-link">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;