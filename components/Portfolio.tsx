"use client";

import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  Browser,
  Calculator,
  ChartLineUp,
  Check,
  Code,
  EnvelopeSimple,
  FileText,
  List,
  Monitor,
  Palette,
  PaperPlaneTilt,
  Plus,
  Scales,
  X,
} from "@phosphor-icons/react";
import { useEffect, useRef, useState } from "react";

const navItems = [
  ["Work", "work"],
  ["Services", "services"],
  ["About", "about"],
  ["Process", "process"],
  ["Plans", "plans"],
  ["Contact", "contact"],
] as const;

const services = [
  {
    number: "01",
    title: "Website Support",
    description: "Careful updates, fixes, and production support that keep your website useful and dependable.",
    capabilities: ["WordPress", "Joomla", "Elementor", "Bricks", "Responsive CSS", "Landing Pages"],
    icon: Browser,
  },
  {
    number: "02",
    title: "Graphic Design",
    description: "Clear, consistent design production for the materials your team needs every week.",
    capabilities: ["Brochures", "Factsheets", "Social Graphics", "Presentations", "PDFs", "Brand Materials"],
    icon: Palette,
  },
  {
    number: "03",
    title: "Email & Newsletters",
    description: "Responsive email design and build support, prepared for real inboxes and real campaigns.",
    capabilities: ["HTML Templates", "Newsletter Design", "Responsive Fixes", "Email Graphics", "Outlook", "Gmail"],
    icon: EnvelopeSimple,
  },
];

const projects = [
  {
    number: "01",
    title: "Accountancy website concept",
    category: "Accountants / Digital practice experience",
    description: "A polished concept showing how complex financial services can feel clear, current, and easy to navigate.",
    tools: ["Website strategy", "Responsive UI", "Data storytelling"],
    slug: "accounting-website",
    visual: "accounting",
  },
  {
    number: "02",
    title: "Legal practice digital presence",
    category: "Lawyers / Professional services",
    description: "A composed legal website concept built around trust, direct language, and confident digital presentation.",
    tools: ["Art direction", "Website design", "Content hierarchy"],
    slug: "legal-practice",
    visual: "legal",
  },
  {
    number: "03",
    title: "Email newsletter production",
    category: "HTML email / Campaign design",
    description: "A flexible project structure for campaign visuals, newsletter production, and inbox testing.",
    tools: ["HTML email", "Email design", "Production"],
    slug: "email-newsletter",
    visual: "email",
  },
  {
    number: "04",
    title: "Design production toolkit",
    category: "Graphic design / Agency support",
    description: "A future case study for repeatable marketing assets, presentation work, and brand production.",
    tools: ["Graphic design", "Presentations", "Brand support"],
    slug: "design-production",
    visual: "design",
  },
] as const;

const plans = [
  {
    name: "Starter",
    price: "$75",
    description: "For occasional website and design help.",
    features: ["Minor website updates", "2 design requests", "Basic CSS fixes", "3–5 business-day turnaround"],
  },
  {
    name: "Business",
    price: "$150",
    description: "For businesses that need regular support.",
    features: ["Website updates", "5 design requests", "Responsive and CSS fixes", "Email and newsletter support", "2–3 business-day turnaround"],
    featured: true,
  },
  {
    name: "Partner",
    price: "$300",
    description: "For ongoing production and agency support.",
    features: ["Website support", "Graphic design", "Email production", "Landing pages", "Priority requests"],
  },
];

const expertise = [
  "Website Support",
  "Responsive Development",
  "WordPress",
  "Joomla",
  "Elementor",
  "Bricks",
  "HTML Email",
  "Graphic Design",
  "Landing Pages",
  "CSS",
  "Email Newsletters",
];

function ProjectVisual({ type }: { type: (typeof projects)[number]["visual"] }) {
  if (type === "accounting") {
    return (
      <div className="projectArtwork artworkAccounting" aria-label="Animated concept preview for an accountancy practice website">
        <div className="artSpotlight" />
        <div className="accountBrowser">
          <div className="conceptBrowserBar"><i /><i /><i /><span>practice-concept.test</span><b>CONCEPT / 01</b></div>
          <div className="accountCanvas">
            <div className="accountNav"><strong>LEDGER<span>+</span></strong><div><i /><i /><i /></div></div>
            <div className="accountHeadline"><small>ACCOUNTANCY, MADE CLEAR</small><strong>Confidence in<br />every figure.</strong><span>Practical advice for ambitious businesses.</span></div>
            <div className="accountMetric metricPrimary"><small>ILLUSTRATIVE REVENUE</small><b><span>£</span>124,680</b><em><ChartLineUp weight="bold" /> 18.4%</em></div>
            <div className="accountChart" aria-hidden="true">
              {[42, 58, 51, 73, 66, 88, 82, 100].map((height, index) => <i key={index} style={{ "--bar": `${height}%`, "--bar-delay": `${index * 70}ms` } as React.CSSProperties} />)}
            </div>
          </div>
        </div>
        <div className="taxCard"><Calculator weight="thin" /><span>NEXT DEADLINE</span><strong>31 JAN</strong><small>Sample interface data</small></div>
        <div className="reportCard"><span>QUARTERLY VIEW</span><strong>Q4</strong><div><i /><i /><i /></div><small>Illustrative report</small></div>
        <div className="conceptLabel"><i /> INDUSTRY CONCEPT · NO CLIENT CLAIM</div>
      </div>
    );
  }
  if (type === "legal") {
    return (
      <div className="projectArtwork artworkLegal" aria-label="Animated concept preview for a legal practice website">
        <div className="legalHalo" />
        <div className="legalBrowser">
          <div className="conceptBrowserBar legalBar"><i /><i /><i /><span>legal-practice-concept.test</span><b>CONCEPT / 02</b></div>
          <div className="legalCanvas">
            <div className="legalNav"><strong>NORTH / LAW</strong><span>EXPERTISE&nbsp;&nbsp;&nbsp; PEOPLE&nbsp;&nbsp;&nbsp; CONTACT</span></div>
            <div className="legalTitle"><small>COMMERCIAL COUNSEL</small><strong>Clear thinking.<br /><em>Strong position.</em></strong><span>Legal expertise, explained with precision.</span></div>
            <div className="legalAction">MEET THE PRACTICE <ArrowUpRight weight="bold" /></div>
            <div className="legalSeal"><Scales weight="thin" /><span>INDEPENDENT<br />LEGAL PRACTICE</span></div>
          </div>
        </div>
        <div className="caseDocument docBack"><span>CASE / 024</span><i /><i /><i /><i /></div>
        <div className="caseDocument docFront"><div><Scales weight="thin" /><span>MATTER BRIEF</span></div><strong>Commercial<br />advisory</strong><i /><i /><i /><small>Concept document</small></div>
        <div className="legalTimeline"><span className="active">01</span><i /><span>02</span><i /><span>03</span></div>
        <div className="conceptLabel conceptLabelLight"><i /> INDUSTRY CONCEPT · NO CLIENT CLAIM</div>
      </div>
    );
  }
  if (type === "email") {
    return (
      <div className="projectArtwork artworkEmail" aria-label="Placeholder preview for an email newsletter project">
        <div className="mailShadow" />
        <div className="mailSheet">
          <div className="mailHead"><b>NEWS /</b><span>ISSUE 08</span></div>
          <div className="mailImage"><PaperPlaneTilt weight="thin" /></div>
          <strong>A sharper way<br />to stay in touch.</strong>
          <p>Responsive production for real inboxes.</p>
          <span className="mailCta">READ THE UPDATE</span>
        </div>
        <p className="replacementNote">REAL PROJECT VISUAL TO BE ADDED</p>
      </div>
    );
  }
  return (
    <div className="projectArtwork artworkDesign" aria-label="Placeholder preview for a graphic design production project">
      <div className="designSheet sheetOne"><span>01</span><strong>Clarity<br />at scale.</strong></div>
      <div className="designSheet sheetTwo"><FileText weight="thin" /><span>BRAND PRODUCTION</span></div>
      <div className="designSheet sheetThree"><i /><i /><i /><b>BILAL.</b></div>
      <p className="replacementNote">REAL PROJECT VISUAL TO BE ADDED</p>
    </div>
  );
}

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("work");
  const [activeService, setActiveService] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const [navScrolled, setNavScrolled] = useState(false);
  const heroVisualRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorLabelRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const revealElements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const revealObserver = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("isVisible")),
      { threshold: 0.12, rootMargin: "0px 0px -8%" },
    );
    revealElements.forEach((element) => revealObserver.observe(element));

    const sections = document.querySelectorAll<HTMLElement>("main section[id]");
    const sectionObserver = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActiveSection(entry.target.id)),
      { rootMargin: "-38% 0px -55%", threshold: 0 },
    );
    sections.forEach((section) => sectionObserver.observe(section));

    const steps = document.querySelectorAll<HTMLElement>(".processStep");
    const stepObserver = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActiveStep(Number((entry.target as HTMLElement).dataset.step))),
      { rootMargin: "-42% 0px -42%", threshold: 0 },
    );
    steps.forEach((step) => stepObserver.observe(step));

    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? window.scrollY / max : 0;
      document.documentElement.style.setProperty("--scroll-progress", String(progress));
      setNavScrolled(window.scrollY > 42);
      revealElements.forEach((element) => {
        const bounds = element.getBoundingClientRect();
        if (bounds.top < window.innerHeight * 1.04 && bounds.bottom > -24) element.classList.add("isVisible");
      });
    };

    let frame = 0;
    const onPointerMove = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        if (cursorRef.current) {
          cursorRef.current.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
        }
        const target = (event.target as HTMLElement).closest<HTMLElement>("[data-cursor]");
        const label = target?.dataset.cursor || "";
        cursorRef.current?.classList.toggle("cursorActive", Boolean(target));
        if (cursorLabelRef.current) cursorLabelRef.current.textContent = label === "link" ? "" : label;

        if (heroVisualRef.current && window.matchMedia("(pointer: fine)").matches) {
          const x = (event.clientX / window.innerWidth - 0.5) * 2;
          const y = (event.clientY / window.innerHeight - 0.5) * 2;
          heroVisualRef.current.style.setProperty("--mx", `${x * 7}px`);
          heroVisualRef.current.style.setProperty("--my", `${y * 5}px`);
        }
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    onScroll();
    return () => {
      revealObserver.disconnect();
      sectionObserver.disconnect();
      stepObserver.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pointermove", onPointerMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);
  const handleProjectMove = (event: React.PointerEvent<HTMLAnchorElement>) => {
    if (event.pointerType === "touch") return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    event.currentTarget.style.setProperty("--project-x", `${x * 12}px`);
    event.currentTarget.style.setProperty("--project-y", `${y * 10}px`);
    event.currentTarget.style.setProperty("--project-rx", `${y * -1.4}deg`);
    event.currentTarget.style.setProperty("--project-ry", `${x * 1.4}deg`);
    event.currentTarget.style.setProperty("--spot-x", `${(x + 0.5) * 100}%`);
    event.currentTarget.style.setProperty("--spot-y", `${(y + 0.5) * 100}%`);
  };
  const resetProjectMove = (event: React.PointerEvent<HTMLAnchorElement>) => {
    event.currentTarget.style.setProperty("--project-x", "0px");
    event.currentTarget.style.setProperty("--project-y", "0px");
    event.currentTarget.style.setProperty("--project-rx", "0deg");
    event.currentTarget.style.setProperty("--project-ry", "0deg");
  };

  return (
    <>
      <div className="scrollProgress" aria-hidden="true" />
      <div ref={cursorRef} className="customCursor" aria-hidden="true"><span ref={cursorLabelRef} /></div>

      <header className={`siteHeader ${navScrolled ? "isScrolled" : ""}`}>
        <nav className="navShell" aria-label="Primary navigation">
          <Link href="#top" className="brand" onClick={closeMenu} data-cursor="link">BILAL<span>.</span></Link>
          <div className="navLinks">
            {navItems.map(([label, id]) => (
              <Link key={id} href={`#${id}`} className={activeSection === id ? "active" : ""} data-cursor="link">{label}</Link>
            ))}
          </div>
          <Link href="#contact" className="navCta" data-cursor="link">Let&apos;s Talk <ArrowUpRight weight="bold" /></Link>
          <button className="menuButton" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="mobile-menu" aria-label={menuOpen ? "Close menu" : "Open menu"}>
            {menuOpen ? <X /> : <List />}
          </button>
        </nav>
        <div id="mobile-menu" className={`mobileMenu ${menuOpen ? "open" : ""}`}>
          {navItems.map(([label, id]) => <Link key={id} href={`#${id}`} onClick={closeMenu}>{label}<span>0{navItems.findIndex((item) => item[1] === id) + 1}</span></Link>)}
        </div>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="heroNoise" aria-hidden="true" />
          <div className="heroGrid">
            <div className="heroCopy">
              <div className="availability heroEnter enterOne"><span /> Available for remote projects</div>
              <p className="heroKicker heroEnter enterTwo">REMOTE DESIGN &amp; WEBSITE SUPPORT</p>
              <h1 id="hero-title" className="heroTitle">
                <span className="titleMask"><span className="heroEnter enterThree">Your reliable digital</span></span>
                <span className="titleMask"><span className="heroEnter enterFour"><em>partner,</em> without</span></span>
                <span className="titleMask"><span className="heroEnter enterFive">hiring full-time.</span></span>
              </h1>
              <p className="heroLead heroEnter enterSix">Website support, graphic design, and email production for businesses and agencies that need things done properly.</p>
              <div className="heroActions heroEnter enterSeven">
                <Link href="#contact" className="button buttonDark" data-cursor="link">Start a Project <ArrowUpRight weight="bold" /></Link>
                <Link href="#work" className="textLink" data-cursor="link">Explore My Work <ArrowDown weight="bold" /></Link>
              </div>
              <div className="heroTrust heroEnter enterEight" aria-label="Key information">
                <div><strong>12+</strong><span>Years experience</span></div>
                <div><strong>Remote</strong><span>Worldwide</span></div>
                <div><strong>Web · Design · Email</strong><span>One reliable partner</span></div>
              </div>
            </div>

            <div className="heroStage heroEnter enterVisual" ref={heroVisualRef} aria-label="A composition of website, mobile, design and email interface previews">
              <div className="stageGrid" />
              <div className="stageBadge"><strong>12+</strong><span>YEARS OF<br />EXPERIENCE</span></div>
              <div className="mockBrowser">
                <div className="mockTop"><i /><i /><i /><span>project-preview.site</span></div>
                <div className="mockPage">
                  <div className="mockNav"><b>BILAL.</b><span /><span /><span /></div>
                  <p>WEBSITE SUPPORT / 01</p>
                  <h2>Clear.<br />Responsive.<br /><em>Dependable.</em></h2>
                  <button tabIndex={-1}>VIEW PROJECT <ArrowUpRight /></button>
                  <div className="mockArt"><div /><span>WEB</span></div>
                </div>
              </div>
              <div className="mockMobile"><div className="mobileIsland" /><p>MOBILE / 375</p><strong>Small screen.<br />Same clarity.</strong><div className="mobileLines"><i /><i /><i /></div><span className="mobileButton">Explore</span></div>
              <div className="mockEmail"><span>NEWSLETTER / 08</span><PaperPlaneTilt weight="thin" /><strong>Good news,<br />well delivered.</strong></div>
              <div className="mockType"><small>TYPE / SCALE</small><strong>Aa</strong><span>16 / 24 / 48 / 72</span></div>
              <div className="stageCaption"><span className="pulseDot" /> Website · Design · Email</div>
            </div>
          </div>
        </section>

        <div className="expertiseStrip" aria-label="Areas of expertise">
          <div className="stripTrack">
            {[0, 1].map((group) => <div className="stripGroup" key={group} aria-hidden={group === 1}>{["WEBSITE SUPPORT", "RESPONSIVE DESIGN", "GRAPHIC DESIGN", "HTML EMAIL", "WORDPRESS", "LANDING PAGES", "REMOTE SUPPORT"].map((item) => <span key={item}>{item}<i>•</i></span>)}</div>)}
          </div>
        </div>

        <section className="workSection" id="work" aria-labelledby="work-title">
          <div className="sectionHead workHeading" data-reveal>
            <div><p className="sectionIndex">01 / SELECTED WORK</p><h2 id="work-title">Built to earn attention.<br />Designed to earn trust.</h2></div>
            <div className="workHeadingAside"><p>Profession-specific digital concepts with a sharper point of view, supported by production-ready case-study architecture.</p><div><span>02</span><small>INDUSTRY CONCEPTS</small><span>04</span><small>CASE STUDY SHELLS</small></div></div>
          </div>
          <div className="workRail" data-reveal><span>ACCOUNTANCY</span><i /><span>LEGAL</span><i /><span>EMAIL</span><i /><span>DESIGN PRODUCTION</span><small>SCROLL TO EXPLORE ↓</small></div>
          <div className="projectsGrid">
            {projects.map((project, index) => (
              <article className={`project project${index + 1} ${index < 2 ? "projectFeature" : "projectCompact"}`} key={project.slug} data-reveal style={{ "--delay": `${(index % 2) * 90}ms` } as React.CSSProperties}>
                <Link href={`/work/${project.slug}`} className="projectVisualLink" data-cursor="VIEW" aria-label={`View ${project.title} case study structure`} onPointerMove={handleProjectMove} onPointerLeave={resetProjectMove}>
                  <ProjectVisual type={project.visual} />
                  <span className="projectHoverCta"><span>Open case study</span><ArrowUpRight weight="bold" /></span>
                  <span className="projectScan" aria-hidden="true" />
                </Link>
                <div className="projectMeta">
                  <div className="projectNumber">/{project.number}<span>{index < 2 ? "FEATURED CONCEPT" : "CASE STUDY"}</span></div>
                  <div><p>{project.category}</p><h3><Link href={`/work/${project.slug}`} data-cursor="link">{project.title}<ArrowUpRight weight="bold" /></Link></h3><p className="projectDescription">{project.description}</p><div className="toolList">{project.tools.map((tool) => <span key={tool}>{tool}</span>)}</div></div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="servicesSection" id="services" aria-labelledby="services-title">
          <div className="sectionHead inverse" data-reveal>
            <div><p className="sectionIndex">02 / SERVICES</p><h2 id="services-title">What I can<br />help you with.</h2></div>
            <p>Flexible production support for the recurring work that needs a capable pair of hands, without adding another full-time role.</p>
          </div>
          <div className="serviceList" data-reveal>
            {services.map((service, index) => {
              const Icon = service.icon;
              const open = activeService === index;
              return (
                <article className={`serviceRow ${open ? "open" : ""}`} key={service.title}>
                  <button onClick={() => setActiveService(open ? -1 : index)} aria-expanded={open} aria-controls={`service-${index}`}>
                    <span className="serviceNumber">{service.number}</span>
                    <span className="serviceIcon"><Icon weight="thin" /></span>
                    <span className="serviceName">{service.title}</span>
                    <span className="serviceSummary">{service.description}</span>
                    <span className="serviceToggle"><Plus /></span>
                  </button>
                  <div className="serviceDetails" id={`service-${index}`}><div><p>Capabilities</p><div>{service.capabilities.map((capability) => <span key={capability}>{capability}</span>)}</div></div></div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="experienceSection" id="about" aria-labelledby="about-title">
          <div className="experienceGrid">
            <div className="experienceNumber" data-reveal><span>12</span><sup>+</sup><small>YEARS / HANDS-ON EXPERIENCE</small></div>
            <div className="experienceCopy" data-reveal>
              <p className="sectionIndex">03 / EXPERIENCE</p>
              <h2 id="about-title">One reliable digital partner.</h2>
              <p>Bilal supports the practical work behind small businesses and agencies: maintaining websites, producing design materials, building email campaigns, and solving the details that keep digital work moving.</p>
              <div className="experienceLine"><span /></div>
              <div className="experiencePoints"><span>Small businesses</span><span>Agency production</span><span>Ongoing digital work</span></div>
            </div>
          </div>
          <div className="expertiseCloud" data-reveal>
            <p>CAPABILITIES / NO MADE-UP PERCENTAGES</p>
            <div>{expertise.map((item, index) => <span key={item} style={{ "--tag-delay": `${index * 24}ms` } as React.CSSProperties}>{item}</span>)}</div>
          </div>
        </section>

        <section className="processSection" id="process" aria-labelledby="process-title">
          <div className="processIntro" data-reveal><p className="sectionIndex">04 / PROCESS</p><h2 id="process-title">Simple, direct,<br />and remote.</h2><p>Four clear steps. No mystery around scope, timing, or what happens next.</p></div>
          <div className="processTimeline">
            <div className="timelineRail"><span style={{ transform: `scaleY(${Math.max(0.06, activeStep / 3)})` }} /></div>
            {[
              ["Send the task", "Tell me what needs changing, designing, or fixing and share the relevant files or access."],
              ["Confirm scope", "You get a clear understanding of what is included, timing, and any additional cost before work starts."],
              ["Production", "I complete the work and provide the finished files, updates, or live changes for review."],
              ["Ongoing support", "If you need help regularly, move to a support plan and keep one dependable contact."],
            ].map(([title, copy], index) => (
              <article className={`processStep ${activeStep >= index ? "active" : ""}`} data-step={index} key={title}>
                <span className="stepDot">0{index + 1}</span><div><h3>{title}</h3><p>{copy}</p></div>
              </article>
            ))}
          </div>
        </section>

        <div className="outlineMarquee" aria-hidden="true"><div><span>DESIGN · WEB · EMAIL · SUPPORT · </span><span>DESIGN · WEB · EMAIL · SUPPORT · </span></div></div>

        <section className="plansSection" id="plans" aria-labelledby="plans-title">
          <div className="sectionHead" data-reveal><div><p className="sectionIndex">05 / SUPPORT PLANS</p><h2 id="plans-title">Choose the support<br />you actually need.</h2></div><p>Simple starting points for ongoing work. Scope and turnaround are always agreed before production begins.</p></div>
          <div className="plansGrid" data-reveal>
            {plans.map((plan) => (
              <article className={`plan ${plan.featured ? "featuredPlan" : ""}`} key={plan.name}>
                <div className="planTop"><span>{plan.name}</span>{plan.featured && <small>MOST POPULAR</small>}</div>
                <div className="planPrice"><strong>{plan.price}</strong><span>/ month</span></div>
                <p>{plan.description}</p>
                <ul>{plan.features.map((feature) => <li key={feature}><Check weight="bold" />{feature}</li>)}</ul>
                <Link href="#contact" className="planLink" data-cursor="link">Discuss this plan <ArrowUpRight weight="bold" /></Link>
              </article>
            ))}
          </div>
          <p className="planNote">Plans are starting points. A custom arrangement can be prepared for a different scope.</p>
        </section>

        <section className="trustSection" aria-labelledby="trust-title">
          <div className="trustIntro" data-reveal><p className="sectionIndex">06 / WORKING PRINCIPLES</p><h2 id="trust-title">Built around<br />reliable support.</h2></div>
          <div className="trustGrid" data-reveal>
            {[
              ["Clear communication", "Know what is happening, what is needed, and what comes next."],
              ["Reliable delivery", "Agreed work is handled carefully and returned in a usable form."],
              ["Responsive work", "Layouts and emails are considered across real screen sizes."],
              ["Long-term support", "A familiar partner who can understand the way your team works."],
              ["Remote collaboration", "Practical async communication across locations and time zones."],
              ["Flexible scope", "One-off requests, monthly support, or production help for busy periods."],
            ].map(([title, copy], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p></article>)}
          </div>
        </section>

        <section className="contactSection" id="contact" aria-labelledby="contact-title">
          <div className="contactGlow" aria-hidden="true" />
          <div className="contactInner" data-reveal>
            <p className="sectionIndex">07 / START A PROJECT</p>
            <h2 id="contact-title">Have something that needs<br />designing, fixing, or launching?</h2>
            <p>Tell me what you are working on. I will help you find the simplest way forward.</p>
            <a href="mailto:bbilalaali@gmail.com?subject=Design%20%26%20Website%20Support%20Enquiry" className="contactButton" data-cursor="link">Let&apos;s Work Together <ArrowUpRight weight="bold" /></a>
            <small>Email directly: <a href="mailto:bbilalaali@gmail.com">bbilalaali@gmail.com</a></small>
          </div>
        </section>
      </main>

      <footer className="siteFooter">
        <div className="footerMain">
          <div><Link href="#top" className="footerBrand">BILAL<span>.</span></Link><p>Design, website &amp; digital support.</p></div>
          <div><p className="footerLabel">EXPLORE</p>{navItems.slice(0, 5).map(([label, id]) => <Link href={`#${id}`} key={id}>{label}</Link>)}</div>
          <div><p className="footerLabel">CONTACT</p><a href="mailto:bbilalaali@gmail.com">bbilalaali@gmail.com</a><p>Remote, worldwide</p></div>
        </div>
        <div className="footerBottom"><span>© 2026 Bilal</span><span className="footerStatus"><i /> Available for remote projects</span><Link href="#top">Back to top ↑</Link></div>
      </footer>
    </>
  );
}
