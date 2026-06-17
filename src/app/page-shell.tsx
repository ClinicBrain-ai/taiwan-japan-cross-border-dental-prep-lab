import Link from "next/link";
import type { ReactNode } from "react";
import { BOUNDARY_STATEMENT, navItems, operatingRules } from "./content";

type Section = {
  heading: string;
  body: string;
};

type PageShellProps = {
  title: string;
  intro: string;
  currentPath: string;
  sections: readonly Section[];
  children?: ReactNode;
};

export function PageShell({
  title,
  intro,
  currentPath,
  sections,
  children,
}: PageShellProps) {
  return (
    <main className="site-shell">
      <header className="site-header">
        <Link className="brand" href="/" aria-label="Go to home">
          <span className="brand-mark" aria-hidden="true">
            TJ
          </span>
          <span>Dental Prep Lab</span>
        </Link>
        <nav className="site-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link
              aria-current={item.href === currentPath ? "page" : undefined}
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </header>

      <section className="hero" aria-labelledby="page-title">
        <div className="hero-copy">
          <p className="system-label">AI-native professional learning system</p>
          <h1 id="page-title">{title}</h1>
          <p className="hero-intro">{intro}</p>
        </div>
        <aside className="packet-preview" aria-label="Static packet preview">
          <div className="preview-header">
            <span>Expert-review packet</span>
            <span>Synthetic only</span>
          </div>
          <div className="preview-grid">
            <span>Goals</span>
            <span>Known facts</span>
            <span>Questions</span>
            <span>Logistics</span>
            <span>Uncertainty</span>
            <span>Boundaries</span>
          </div>
          <p>{BOUNDARY_STATEMENT}</p>
        </aside>
      </section>

      <section className="rules-band" aria-label="Operating rules">
        {operatingRules.map((rule) => (
          <article key={rule}>
            <p>{rule}</p>
          </article>
        ))}
      </section>

      {children}

      <section className="content-grid" aria-label="Page sections">
        {sections.map((section) => (
          <article className="content-card" key={section.heading}>
            <h2>{section.heading}</h2>
            <p>{section.body}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
