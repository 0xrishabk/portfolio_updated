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

function DefaultNav() {
  const navItems: Record<string, string> = {
    Home: "/",
    Projects: "/projects",
    Resume: "/resume.pdf"
  };
  
  return (
    <Navbar navItems={navItems}>
      <a href="https://github.com/0xrishabk">0xrishabk</a>
    </Navbar>
  )
}
export { DefaultNav }
export default Navbar;