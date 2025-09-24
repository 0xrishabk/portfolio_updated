import { useEffect, useState } from "react";
import { DefaultNav } from "../components/Navbar";
import Card from "../components/Card";
import "./Projects.css";

type GithubRepo = {
  name: string;
  description: string;
  url: string;
  lastCommited: string;
};

function Projects() {

  useEffect(() => {
    document.title = "Rishab Karki - Projects";
  });

  const [repos, setRepos] = useState<GithubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepos = async() => {
      try {
        const response = await fetch(`https://api.github.com/users/0xrishabk/repos`);
        if (!response.ok) throw new Error(`Error: ${response.status}`);
        const data = await response.json();

        const mappedRepos = data
        .filter((repo: any) => repo.name !== "0xrishabk")
        .map((repos: any) => ({
          name: repos.name,
          description: repos.description,
          url: repos.html_url,
          lastCommited: repos.pushed_at,
        }))
        .sort((a: any, b: any) => new Date(b.lastCommited).getTime() - new Date(a.lastCommited).getTime());

        setRepos(mappedRepos);
      } catch (err: any) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  });

  if (loading) return (
    <>
      <DefaultNav/>
      <p>Loading...</p>
    </>
  );

  if (error) return (
    <>
      <DefaultNav/>
      <p>Loading...</p>
    </>
  );

  return (
    <>
      <DefaultNav/>
      <div className="project-card-container" style={{ paddingTop: "80px" }}>
        <Card>
          <h2>Projects:</h2>
          <ul>
            {repos.map((repo) => (
              <li key={repo.url} style={{ marginBottom: "12px" }}>
                <a href={repo.url} target="_blank" rel="noopener noreferrer">
                  {repo.name} 
                </a>
                : <span style={{ fontSize: "12px" }}>last commited - {new Date(repo.lastCommited).toLocaleDateString()}</span>
                {repo.description && <p style={{ margin: "4px 0 0 0" }}>{repo.description}</p>}
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </>
  );
}

export default Projects;