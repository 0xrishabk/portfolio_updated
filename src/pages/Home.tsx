import Card from "../components/Card";
import Navbar from "../components/Navbar";
import "./Home.css";

function Home() {
  const navItems: Record<string, string> = {
    Home: "/",
    Projects: "/projects",
    Resume: "/assets/resume.pdf"
  };
  return (
    <div className="home-container">
      <div><Navbar navItems={navItems}>
        <a href="https://github.com/0xrishabk">0xrishabk</a>
      </Navbar>
      </div>
      <div className="home-card-container" style={{ paddingTop: "80px" }}>
        <Card>
          <div className="home-card-content">
            <h1>About Me</h1>
            <p>
              I'm <span className="home-card-content-name">Rishab Karki</span>, a software developer & an undergraduate Computer Science student
              passonate about creating what ever piques my interest. From writing "Hello World" to writing complex application I enjoy doing everything.
              <br/>
              <br/>
              <strong style={{ fontStyle: "oblique" }}>My purpose you ask?</strong>
              <br/>


              <strong className="home-card-content-answer quote">I love solving problems & learning about different technology, programming languages and concepts related to programming itself.</strong>
              <br/><br/>
              

              I enjoy experimenting accross web development, backend systems, AI, cybersecurity, DevOps, Linux, Web Servers, learning by building real projects.
              I thrive on solving problems, trying out new tools and expanding my skills. Outside of coding, I'm always exploring new concepts and ways to write better code.
              <br/><br/>
              

              The language that I can write code in are:
              <ul>
                <li>Go Language</li>
                <li>Typescript</li>
                <li>Rust</li>
                <li>Java</li>
                <li>Python</li>
              </ul> 
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Home;