import { GitHub } from "@material-ui/icons";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function Project() {
  const { id } = useParams();
  const project = ProjectList[id];
  const navigate = useNavigate();
  return (
    <div className="w-full h-screen flex flex-col text-center">
      <div
        className="text-7xl w-auto cursor-pointer"
        onClick={() => {
          navigate(-1);
        }}
      >
        <ArrowBackIcon fontSize="large left-2 top-2" className="sm:absolute" />
      </div>
      <h1 className="text-8xl">Project</h1>
      <div className="mt-10 flex flex-col m-auto ">
        <h1 className="text-2xl">{project.name}</h1>
        <img className="w-auto h-[400px]" src={project.image} />
        <GitHub fontSize="large" className="text-center m-auto mt-10 text-xl" />
      </div>
    </div>
  );
}

export default Project;
