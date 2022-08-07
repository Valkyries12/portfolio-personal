import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@material-ui/icons/GitHub";
import RemoveRedEyeIcon from '@material-ui/icons/RemoveRedEye';
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1> {project.name}</h1>
      <img src={project.image} alt={project.name}/>
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <div className="projectDisplay-previewIcons">
        <GitHubIcon cursor="pointer" onClick={() => window.open(`${project.url}`)}/>
        <RemoveRedEyeIcon cursor="pointer" onClick={() => window.open(`${project.preview}`)}/>
      </div>

    </div>
  );
}

export default ProjectDisplay;
