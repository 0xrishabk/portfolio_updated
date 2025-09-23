import { useEffect } from "react";
import Navbar from "../components/Navbar";

function Projects() {
  const navItems: Record<string, string> = {
    Home: "/",
    Projects: "/projects",
    Resume: "/resume.pdf"
  };

  useEffect(() => {
    document.title = "Rishab Karki - Projects";
  });

  return (
    <div className="projects-container" style={{ paddingTop: "80px" }}>
      <Navbar navItems={navItems}>
        <a href="https://github.com/0xrishabk">0xrishabk</a>
      </Navbar>
      <p>Updating Soon....</p>
    </div>
  );
}

export default Projects;