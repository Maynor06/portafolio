import './Projects.css'
import proyectos from './Utils/Proyectos.json';

const Projects = () => {


    return (
        <section className="projects-section" id="proyectos">
            <h2 className="titleSection">Proyectos</h2>
            <div className="projects-timeline-line"></div>

            <div className="projects-wrapper">
                {Object.values(proyectos).map((proyecto, i) => (
                    <div key={i} className="project-card">
                        {console.log("proyecto: ", proyecto.tecnologias)}
                        <div className="project-header">
                            <img src={proyecto.imagen} alt={proyecto.titulo} className="project-image" />
                            <h3 className="project-title">{proyecto.titulo}</h3>
                        </div>

                        <p className="project-description">{proyecto.descripcion}</p>

                        <div className="project-tags">
                            {proyecto.tecnologias.map((tec, idx) => (
                                <span key={idx} className="tag">{tec}</span>
                            ))}
                        </div>

                        <div className="project-preview">
                            {proyecto.vistasPrevias?.map((img, idx) => (
                                <img key={idx} src={img} alt={`preview ${idx + 1}`} />
                            ))}
                        </div>

                        {proyecto.repositorio && (
                            <a href={proyecto.repositorio} target="_blank" rel="noopener noreferrer" className="btn-repo">
                                Ver repositorio
                            </a>
                        )}
                    </div>
                ))}
            </div>
        </section>

    )
}

export default Projects;
