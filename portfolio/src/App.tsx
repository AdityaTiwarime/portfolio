import { TraceHero } from "./components/TraceHero";
import { Projects } from "./components/Projects";
import { credentials, jobs, profile, resumes, skills } from "./data";

export function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <div className="topbar">
        <div className="wrap topbar-inner">
          <a className="topbar-name" href="#top">{profile.name}</a>
          <nav aria-label="Sections">
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#skills">Skills</a>
            <a href="#resumes">Contact</a>
          </nav>
        </div>
      </div>

      <TraceHero />

      <main id="main">
        <Projects />

        <section className="section" id="experience" aria-labelledby="experience-title">
          <div className="wrap">
            <h2 id="experience-title">Experience</h2>
            <ol className="jobs">
              {jobs.map((j) => (
                <li key={j.id} className="job" id={`job-${j.id}`} tabIndex={-1}>
                  <div className="job-head">
                    <h3>{j.company}</h3>
                    <p className="job-dates">{j.dates}</p>
                  </div>
                  <p className="job-role">
                    {j.role}, {j.place}
                  </p>
                  <ul>
                    {j.points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section" id="skills" aria-labelledby="skills-title">
          <div className="wrap">
            <h2 id="skills-title">Skills</h2>
            <dl className="skills">
              {skills.map((s) => (
                <div key={s.group} className="skill-row">
                  <dt>{s.group}</dt>
                  <dd>{s.items.join(", ")}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="section" id="education" aria-labelledby="education-title" tabIndex={-1}>
          <div className="wrap two-col">
            <div>
              <h2 id="education-title">Education</h2>
              <p className="edu-school">{credentials.education.school}</p>
              <p>
                {credentials.education.degree}, {credentials.education.dates}
              </p>
              <p className="muted">{credentials.education.grade}</p>
              <h3 className="sub-title">Certifications</h3>
              <ul className="plain-list">
                {credentials.certifications.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2>Recognition</h2>
              <ul className="plain-list">
                {credentials.achievements.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer" id="resumes" aria-labelledby="contact-title">
        <div className="wrap two-col">
          <div>
            <h2 id="contact-title">Get in touch</h2>
            <p className="footer-lead">
              I'm looking for software engineering, AI and data roles, and I can join immediately.
            </p>
            <p>
              <a className="footer-email" href={`mailto:${profile.email}`}>{profile.email}</a>
            </p>
            <p className="muted">
              {profile.phone}, {profile.location}
            </p>
            <p className="footer-links">
              <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            </p>
          </div>
          <div>
            <h3 className="sub-title">Download a resume</h3>
            <ul className="resume-list">
              {resumes.map((r) => (
                <li key={r.file}>
                  <a href={r.file} download>
                    {r.label} resume (PDF)
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
