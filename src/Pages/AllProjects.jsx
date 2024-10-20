import style from "../assets/CSS/allProjects.module.css";
import projects from "../assets/Data/projects.json";
import ProjectItem from "./../Components/ProjectItem";
export default function AllProjects() {
  return (
    <div className={style.projects}>
      {projects?.map((project) => (
        <ProjectItem key={project.id} {...project} />
      ))}
    </div>
  );
}
