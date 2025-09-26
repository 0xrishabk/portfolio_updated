import { useEffect } from "react";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import "./Home.css";
import Contact from "../components/Contact";
import Button from "../components/Button";

function Home() {
  const navItems: Record<string, string> = {
    Home: "/",
    Projects: "/projects",
    Resume: "/resume.pdf"
  };

  useEffect(() => {
    document.title = "Rishab Karki - Home";
  }, []);

  return (
    <div className="home-container">
      <div>
        <Navbar navItems={navItems}>
          <a href="https://github.com/0xrishabk">0xrishabk</a>
        </Navbar>
      </div>
      <div className="home-card-container" style={{ paddingTop: "80px" }}>
        <Card>
          <div className="home-card-content">
            <h2>About Me</h2>
            <p>
              Hi, I'm <span className="home-card-content-name">Rishab Karki</span> — a software developer and undergraduate Computer Science student passionate 
              about building things that spark my curiosity. From writing my first "Hello World" to developing complex applications, I enjoy every step of the 
              process.
              <br/>

              <h3>My Purpose</h3>

              <strong className="home-card-content-answer quote">
                I love solving problems and diving into different technologies, programming languages, and concepts. Learning by building
                real projects is what excites me the most.
              </strong>
              <br/>
            </p>
            
            <p>I enjoy experimenting across:</p>
            <ul>
              <li>Web Development</li>
              <li>Backend systems</li>
              <li>Artifical Intelligence</li>
              <li>Cybersecurity</li>
              <li>DevOps & Linux</li>
            </ul>

            <p>
              I thrive on exploring new tools, sharpening my skills and finding better ways to write clean, 
              effective code.
            </p>

            <h3>Language I Work With</h3>
            <ul>
                <li>Go</li>
                <li>Typescript</li>
                <li>Rust</li>
                <li>Java</li>
                <li>Python</li>
            </ul>
            <p>
              <h3>Let's Talk</h3>
              <strong className="quote" style={{ fontSize: "15px" }}>Got something?</strong>
              <br/>
              
              <Button onClick={() => { window.open('mailto:rishabkarki78@gmail.com', "_blank") }}>
                Contact Me
              </Button>
              <br/>
              <h3>Socials:</h3>
              <Contact/>
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Home;