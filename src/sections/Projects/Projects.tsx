
import "./Projects.css";

const projects = [
  {
    id: "01",
    title: "Mountain House",
    category: "Residential",
    description:
      "Minimal architecture shaped by natural light, stone, and timeless materials.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=85",
    year: "2026",
    color: "#ff0870",
    label: "RESIDENTIAL",
  },
  {
    id: "02",
    title: "FORMA Residence",
    category: "Interior Design",
    description:
      "A warm, refined living space balancing natural textures and modern design.",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=85",
    year: "2026",
    color: "#ff4d0a",
    label: "INTERIORS",
  },
  {
    id: "03",
    title: "Green Retreat",
    category: "Architecture",
    description:
      "A contemporary home that brings landscape, greenery, and architecture together.",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=85",
    year: "2026",
    color: "#00b84a",
    label: "ARCHITECTURE",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-heading">
        <p className="projects-eyebrow">
          01 / SELECTED WORK
        </p>

        <h2>
          Spaces made
          <br />
          to inspire.
        </h2>

        <p className="projects-intro">
          A collection of architecture and interiors
          created with intention.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <article
            className="project-card"
            key={project.id}
          >
            <div className="project-image-wrap">
              <img
                className="project-image"
                src={project.image}
                alt={project.title}
                loading="lazy"
              />

              <span className="project-number">
                {project.id}
              </span>

              <span className="project-category">
                {project.label}
              </span>
            </div>

            <div className="project-body">
              <p
                className="project-type"
                style={{ color: project.color }}
              >
                {project.category}
              </p>

              <h3>{project.title}</h3>

              <p className="project-description">
                {project.description}
              </p>

              <p className="project-year">
                PROJECT YEAR — {project.year}
              </p>
            </div>

            <a
              href={`#project-${project.id}`}
              className="project-action"
              style={{ backgroundColor: project.color }}
              aria-label={`View ${project.title}`}
            >
              <span>EXPLORE PROJECT</span>
              <span aria-hidden="true">↗</span>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
