import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from "../assets/CSS/projectDetails.module.css";
import projectsData from "../assets/Data/projects.json";
import { FaGear } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";

export default function ProjectDetail() {
  const [projectDetails, setProjectDetails] = useState({});
  const [baseImageLink, setBaseImageLink] = useState("");
  const [activeImage, setActiveImage] = useState("image_1");
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const project = projectsData.find((project) => project.id === id);
      if (project) {
        setProjectDetails(project);
        setBaseImageLink(project.image_1);
      }
    }
  }, [id]);

  const handleImageChange = (imageKey) => {
    setBaseImageLink(projectDetails[imageKey]);
    setActiveImage(imageKey);
  };

  return (
    <div className={style.projectDetailPage}>
      <div className={style.projectDetailContent}>
        <div className={style.projectDetailImages}>
          <div className={style.mainImage}>
            <img src={baseImageLink} alt={projectDetails.title} />
          </div>
          <div className={style.subImages}>
            <img
              src={projectDetails.image_1}
              alt={projectDetails.title}
              className={activeImage === "image_1" ? style.active : ""}
              onClick={() => handleImageChange("image_1")}
            />
            <img
              src={projectDetails.image_2}
              alt={projectDetails.title}
              className={activeImage === "image_2" ? style.active : ""}
              onClick={() => handleImageChange("image_2")}
            />
            <img
              src={projectDetails.image_3}
              alt={projectDetails.title}
              className={activeImage === "image_3" ? style.active : ""}
              onClick={() => handleImageChange("image_3")}
            />
          </div>
        </div>
        <div className={style.projectDetailInfo}>
          <h1 className={style.projectDetailTitle}>
            {projectDetails.title}{" "}
            <span className={style.projectDetailStatus}>
              {projectDetails.status}
              {projectDetails.status === "completed" ? (
                <FaCheckCircle className={style.statusIcon} />
              ) : (
                <FaGear className={`${style.statusIcon} ${style.spinning}`} />
              )}
            </span>
          </h1>
          <p className={style.projectDetailDescription}>
            {projectDetails.description}
          </p>
          <div className={style.projectDetailTechnologyStack}>
            <p>Technology Stack:</p>
            <ul>
              {projectDetails.technologyStack?.map((stack, index) => (
                <li key={index} className={style.technologyStackItem}>
                  {stack}
                </li>
              ))}
            </ul>
          </div>
          <div className={style.projectFeatures}>
            <p>Features:</p>
            <ul>
              {projectDetails.features?.map((feature, index) => (
                <li key={index} className={style.featureItem}>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
