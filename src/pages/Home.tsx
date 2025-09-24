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
  });

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
              I'm <span className="home-card-content-name">Rishab Karki</span>, a software developer and an undergraduate Computer Science student
              passionate about creating whatever piques my interest, from writing "Hello World" to writing complex application I enjoy doing everything.
              <br/>
              <br/>

              <strong style={{ fontStyle: "oblique" }}>
                My purpose you ask?
              </strong>
              <br/>

              <strong className="home-card-content-answer quote">
                I love solving problems & learning about different technology, programming languages and concepts.
              </strong>
              <br/>
              <br/>  

              I enjoy experimenting accross web development, backend systems, AI, cybersecurity, DevOps, Linux, Web Servers, learning by building real projects.
              I thrive on solving problems, trying out new tools and expanding my skills. Outside of coding, I'm always exploring new concepts and ways to write better code.
              <br/>
              <br/>
              

              The language that I can write code in are: 
            </p>
            
            <ul>
                <li>Go Language</li>
                <li>Typescript</li>
                <li>Rust</li>
                <li>Java</li>
                <li>Python</li>
            </ul>
            <p>
              <strong className="quote" style={{ fontSize: "15px" }}>Wanna have conversation?</strong>
              <br/>
              
              <Button onClick={() => { window.open('mailto:rishabkarki78@gmail.com', "_blank") }}>
                Contact Me
              </Button>
              <br/>
              <br/>


              Socials: <Contact/>
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Home;