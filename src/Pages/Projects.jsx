import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import projecten  from "./projecten.js";

const Projects = () => {

  // maak een usestate genaamd projects, setProjects en laad hier je projecten data in
  const [projects, setProjects] = useState(projecten);

  const navigate = useNavigate();
  const goToDetail = (projectId) => {
    navigate(`/projecten/${projectId}`);
    console.log(projectId);
  };


  return (
    <section className="projecten-section">
      
      <div className="projecten-title">projecten</div>

      <div className="projecten-icons">

        {/* gebruik de map functie om door projects te mappen */}        
        {projects.map((project, index) => (
          <div className="project-icon" key={project.id} onClick={() => goToDetail(project.id)}>
            <div className="php-box">
              <img 
                src={project.afbeelding} 
                alt={project.name}
                style={{ width: "90px" }} 
              />
            </div>
          </div>
        ))}

      </div>

      <p className="projecten-text">
        Klik op een van de logo’s om het project te bekijken.
      </p>
      
    </section>
  );
}

export default Projects

// maak een ProjectDetail.jsx
//in je route maak je een path genaamd /projects/:projectId en als element je detail pagina
//Bekijk in de cheat sheet stap 6 van navigate, dit gebruik je in je projecten.jsx

//stap 6 is voor je projectdetail pagina
