import projects from "./projects.json";
import "../../css/Projects.css";

function Projects() {
  return (
    <div id="projects">
      <h3 className="sectionTitle">Projects 01</h3>
      <p className="sectionDescription">
        Click the card to see a preview of the project.
      </p>
      <div className="projectCards container">
        <div className="row">
          {projects.map((project) => {
            // if live site
            const liveSiteTrue = project.projectLiveSite ? (
              <a
                href={project.projectLiveSite}
                target="_blank"
                rel="noreferrer"
                className="card-link"
              >
                Live site
              </a>
            ) : (
              ""
            );
            return (
              <>
                <input type="checkbox" id={project.id} key={project.id} />
                <label className="col-sm card-container" htmlFor={project.id}>
                  <div className="card-flip card">
                    <div className="front">
                      <div className="card-block">
                        <h4 className="card-title">{project.name}</h4>
                        <p className="card-text">
                          {project.projectDescription}
                        </p>
                        <p className="card-text text-muted">
                          {project.language}
                        </p>
                      </div>
                    </div>

                    <div className="back">
                      <div className="card-block">
                        <img
                          src={project.projectImage}
                          alt="Preview of project."
                          className="card-img-top img-fluid"
                        ></img>
                        <a
                          href={project.projectGithub}
                          target="_blank"
                          rel="noreferrer"
                          className="card-link"
                        >
                          Github
                        </a>
                        {liveSiteTrue}
                      </div>
                    </div>
                  </div>
                </label>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default Projects;
