import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

const projects = {
  "accounting-website": { title: "Accountancy website concept", type: "Accountants / Digital practice experience" },
  "legal-practice": { title: "Legal practice digital presence", type: "Lawyers / Professional services" },
  "email-newsletter": { title: "Email newsletter production", type: "HTML email / Campaign design" },
  "design-production": { title: "Design production toolkit", type: "Graphic design / Production support" },
} as const;

type ProjectSlug = keyof typeof projects;

export function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects[slug as ProjectSlug];
  return project ? { title: `${project.title} | Bilal`, description: project.type } : {};
}

export default async function WorkPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects[slug as ProjectSlug];
  if (!project) notFound();

  return (
    <main className="caseStudy">
      <Link href="/#work" className="backLink">← Selected work</Link>
      <p className="kicker">CASE STUDY STRUCTURE / CONTENT PENDING</p>
      <h1>{project.title}</h1>
      <p className="caseType">{project.type}</p>
      <div className="caseNotice">
        <strong>This page is ready for real project content.</strong>
        <p>No client, result, or project claim has been invented. Replace this note with the problem, approach, solution, services, technology, visuals, and measured result when the source material is available.</p>
      </div>
      <section className="caseGrid" aria-label="Case study content structure">
        {["Problem", "Approach", "Solution", "Services", "Technology", "Result"].map((item, index) => (
          <article key={item}><span>0{index + 1}</span><h2>{item}</h2><p>Project content to be added.</p></article>
        ))}
      </section>
    </main>
  );
}
