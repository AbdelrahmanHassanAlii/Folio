import { useEffect, useState } from "react";
import style from "../assets/CSS/projects.module.css";
import topProjects from "../assets/Data/topProjects.json";
import Heading from "./Heading";
import { Link } from "react-router-dom";
import ProjectItem from "./ProjectItem";
export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(topProjects);
  }, []);

  return (
    <div className={style.projects}>
      <Heading name="Projects" description="Check out some of my projects" />
      <div className={style.projectsContainer}>
        {projects.map((project) => (
          <ProjectItem key={project.id} {...project} />
        ))}
      </div>
      <div className={style.moreProjects}>
        <Link to="/projects" rel="noreferrer">
          More Projects
        </Link>
      </div>
    </div>
  );
}
