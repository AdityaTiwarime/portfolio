import { useState } from "react";
import { projects, type ProjectArea } from "../data";

type Filter = "all" | ProjectArea;

const FILTERS: { value: Filter; label: string }[] = [
  { value: "all", label: "All" },
  { value: "software", label: "Software" },
  { value: "data", label: "Data and AI" },
];

export function Projects() {
  const [filter, setFilter] = useState<Filter>("all");
  const [open, setOpen] = useState<string | null>("servscope");
  const shown = projects.filter((p) => filter === "all" || p.area === filter);

  return (
    <section className="section" id="projects" aria-labelledby="projects-title">
      <div className="wrap">
        <div className="section-head">
          <h2 id="projects-title">Projects</h2>
          <div className="filter" role="group" aria-label="Filter projects">
            {FILTERS.map((f) => (
              <button
                key={f.value}
                type="button"
                className="filter-button"
                aria-pressed={filter === f.value}
                onClick={() => setFilter(f.value)}
              >
                {f.label}
                <span className="filter-count">
                  {f.value === "all" ? projects.length : projects.filter((p) => p.area === f.value).length}
                </span>
              </button>
            ))}
          </div>
        </div>

        <ul className="projects">
          {shown.map((p) => {
            const isOpen = open === p.id;
            const panelId = `project-${p.id}-details`;
            return (
              <li key={p.id} className={`project${isOpen ? " is-open" : ""}`}>
                <h3 className="project-heading">
                  <button
                    type="button"
                    className="project-toggle"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? null : p.id)}
                  >
                    <span className="project-name">{p.name}</span>
                    <span className="project-summary">{p.summary}</span>
                    <span className="project-metric">{p.metric}</span>
                    <span className="project-chevron" aria-hidden="true" />
                  </button>
                </h3>
                <div className="project-body" id={panelId} hidden={!isOpen}>
                  {p.context && <p className="project-context">{p.context}</p>}
                  <ul className="project-points">
                    {p.points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                  <ul className="stack" aria-label="Built with">
                    {p.stack.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                  <p className="project-links">
                    {p.repo && (
                      <a href={p.repo} target="_blank" rel="noreferrer">
                        Read the code on GitHub
                      </a>
                    )}
                    {p.live && (
                      <a href={p.live} target="_blank" rel="noreferrer">
                        Open the live app
                      </a>
                    )}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
