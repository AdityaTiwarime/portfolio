import { useState } from "react";
import { profile, trace, type TraceSpan } from "../data";

// Months between two "YYYY-MM" strings, counting both ends.
export function monthIndex(ym: string): number {
  const [y, m] = ym.split("-").map(Number);
  return y * 12 + (m - 1);
}

export function spanLength(span: Pick<TraceSpan, "start" | "end">): string {
  const months = monthIndex(span.end) - monthIndex(span.start) + 1;
  if (months >= 24) return `${Math.round(months / 12)} yr`;
  return `${months} mo`;
}

const AXIS_TICKS = ["2025-01", "2025-07", "2026-01", "2026-07"];
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const tickLabel = (ym: string) => `${MONTHS[Number(ym.slice(5)) - 1]} ${ym.slice(0, 4)}`;

export function TraceHero() {
  const start = monthIndex(trace.axisStart);
  const total = monthIndex(trace.axisEnd) - start + 1;
  const pct = (ym: string) => ((monthIndex(ym) - start) / total) * 100;
  const [active, setActive] = useState<string | null>(null);

  const jump = (id: string) => {
    const target = document.getElementById(id === "gitam" ? "education" : `job-${id}`);
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
    target?.focus({ preventScroll: true });
  };

  return (
    <header className="hero" id="top">
      <div className="wrap">
        <h1 className="hero-name">{profile.name}</h1>
        <p className="hero-role">{profile.role}</p>
        <p className="hero-intro">{profile.intro}</p>

        <figure className="trace" aria-labelledby="trace-caption">
          <figcaption id="trace-caption" className="trace-caption">
            My path so far, drawn as a trace. Select a span to read about it.
          </figcaption>

          <div className="trace-axis" aria-hidden="true">
            {AXIS_TICKS.map((t) => (
              <span key={t} className="trace-tick" style={{ left: `${pct(t)}%` }}>
                {tickLabel(t)}
              </span>
            ))}
          </div>

          <ol className="trace-rows">
            {trace.spans.map((s, i) => {
              const clipped = monthIndex(s.start) < start;
              const left = clipped ? 0 : pct(s.start);
              const right = ((monthIndex(s.end) - start + 1) / total) * 100;
              const isActive = active === s.id;
              return (
                <li key={s.id} className="trace-row" style={{ "--row": i } as React.CSSProperties}>
                  <button
                    type="button"
                    className={`trace-span kind-${s.kind}${isActive ? " is-active" : ""}`}
                    style={{ left: `${left}%`, width: `${right - left}%` }}
                    onMouseEnter={() => setActive(s.id)}
                    onMouseLeave={() => setActive(null)}
                    onFocus={() => setActive(s.id)}
                    onBlur={() => setActive(null)}
                    onClick={() => jump(s.id)}
                    aria-label={`${s.label}, ${s.detail}, ${spanLength(s)}. Go to details.`}
                  >
                    {clipped && <span className="trace-clip" aria-hidden="true" />}
                  </button>
                  <span className="trace-label" style={{ left: `${Math.min(left, 62)}%` }} aria-hidden="true">
                    <span className="trace-label-title">{s.label}</span>
                    <span className="trace-label-meta">
                      {s.detail} <span className="trace-dur">{clipped ? `since 2022, ${spanLength(s)}` : spanLength(s)}</span>
                    </span>
                  </span>
                </li>
              );
            })}
          </ol>
        </figure>

        <nav className="hero-links" aria-label="Contact">
          <a className="button button-primary" href="#projects">See projects</a>
          <a className="button" href="#resumes">Download a resume</a>
          <a className="text-link" href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
          <a className="text-link" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        </nav>
      </div>
    </header>
  );
}
