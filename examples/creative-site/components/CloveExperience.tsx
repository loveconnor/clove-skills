"use client";

import { type MouseEvent, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const SKILLS_SOURCE_URL = "https://github.com/loveconnor/clove-skills/tree/main/.agents/skills";

const navItems = [
  ["model", "01", "PURPOSE"],
  ["context", "02", "LIBRARY"],
  ["capabilities", "03", "DISCIPLINES"],
  ["access", "04", "SOURCE"],
] as const;

const skillSpecs = [
  ["01", "AVOID AI DESIGN SLOP", "Remove generic, fabricated, inaccessible, and unfinished product work."],
  ["02", "DESIGN USER-CENTERED UX", "Shape flows around real goals, clear choices, feedback, and recovery."],
  ["03", "CRAFT DESIGN LOOK AND FEEL", "Refine hierarchy, composition, spacing, interaction, and finish."],
  ["04", "BUILD TYPOGRAPHY SYSTEMS", "Build readable, expressive type roles that survive real content."],
  ["05", "BUILD COLOR SYSTEMS", "Map accessible color roles across themes, states, and components."],
  ["06", "CREATE CREATIVE WEB DESIGN", "Create distinctive web experiences with usable fallbacks."],
  ["07", "WRITE CLEAR READABLE CONTENT", "Write accurate content people can find, understand, and use."],
  ["08", "OPTIMIZE SEO AND AEO", "Help public content get found, understood, cited, and acted on."],
  ["09", "WRITE CLEAN MAINTAINABLE CODE", "Ship correct, testable code a team can explain and change."],
] as const;

function ArrowIcon({ direction }: { direction: "down" | "external" }) {
  return (
    <svg
      className={`icon-arrow icon-arrow--${direction}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="square"
      strokeLinejoin="miter"
      aria-hidden="true"
      focusable="false"
    >
      {direction === "down" ? (
        <path d="M12 4v16m-6-6 6 6 6-6" />
      ) : (
        <path d="M6 18 18 6m-8 0h8v8" />
      )}
    </svg>
  );
}

function TechnicalGrid() {
  return (
    <div className="technical-grid" aria-hidden="true">
      {Array.from({ length: 12 }, (_, index) => <i key={index} />)}
    </div>
  );
}

export function CloveExperience() {
  const root = useRef<HTMLDivElement>(null);
  const [activeScene, setActiveScene] = useState("model");
  const [motionMode, setMotionMode] = useState<"full" | "reduced" | null>(null);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncMotionPreference = () => {
      const nextMode = media.matches ? "reduced" : "full";
      document.documentElement.dataset.motion = nextMode;
      setMotionMode(nextMode);
    };

    syncMotionPreference();
    media.addEventListener("change", syncMotionPreference);

    return () => {
      media.removeEventListener("change", syncMotionPreference);
      delete document.documentElement.dataset.motion;
    };
  }, []);

  useEffect(() => {
    if (motionMode !== "full" || !root.current) return;

    gsap.registerPlugin(ScrollTrigger);
    gsap.config({ force3D: false });
    const context = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add("(min-width: 769px)", () => {
        gsap.timeline({
          scrollTrigger: { trigger: "#model", start: "top top", end: "+=155%", scrub: 0.9, pin: true },
        })
          .from(".hero-meta > *", { yPercent: 120, stagger: 0.08, duration: 0.5 })
          .to(".hero-imi", { xPercent: 135, duration: 1 }, 0.55)
          .to(".hero-k", { scale: 9.5, xPercent: 27, transformOrigin: "42% 48%", duration: 1.7 }, 0.72)
          .to(".hero-subline, .hero-scroll", { opacity: 0, duration: 0.3 }, 0.68)
          .fromTo(".portal-message", { clipPath: "inset(0 100% 0 0)", opacity: 0 }, { clipPath: "inset(0 0% 0 0)", opacity: 1, duration: 0.7 }, 1.02)
          .from(".portal-message span", { xPercent: -18, stagger: 0.08, duration: 0.65 }, 1.04)
          .from(".portal-marker", { scaleX: 0, transformOrigin: "left", duration: 0.6 }, 1.18)
          .to(".hero-diagonal", { scaleX: 8, rotate: 0, xPercent: 44, duration: 0.8 }, 1.8);

        gsap.timeline({
          scrollTrigger: { trigger: "#inside", start: "top top", end: "+=120%", scrub: 0.8, pin: true },
        })
          .from(".inside-plane", { xPercent: (index) => index % 2 ? 120 : -120, stagger: 0.09, duration: 0.8 })
          .from(".inside-word", { clipPath: "inset(0 100% 0 0)", xPercent: -12, stagger: 0.12, duration: 0.7 }, 0.22)
          .to(".inside-plane", { xPercent: (index) => index % 2 ? -22 : 18, stagger: 0.04, duration: 0.9 }, 0.7)
          .to(".inside-exit-line", { scaleX: 1, duration: 0.65 }, 1.05);

        gsap.timeline({
          scrollTrigger: { trigger: "#context", start: "top top", end: "+=160%", scrub: 1, pin: true },
        })
          .fromTo(".context-track", { xPercent: 0 }, { xPercent: -72, ease: "none", duration: 2 })
          .to(".context-final-digit", { scale: 12, transformOrigin: "50% 45%", duration: 0.75 }, 1.45)
          .to(".context-intro", { opacity: 0, duration: 0.2 }, 1.58)
          .to(".context-underlay", { opacity: 1, duration: 0.2 }, 1.72);

        gsap.set([".cap-code", ".cap-build"], { yPercent: 100 });
        gsap.timeline({
          scrollTrigger: { trigger: "#capabilities", start: "top top", end: "+=215%", scrub: 0.9, pin: true },
        })
          .to(".cap-reason .cap-word", { fontStretch: "118%", letterSpacing: "0.01em", duration: 0.8 })
          .to(".cap-reason", { yPercent: -100, duration: 0.75 })
          .to(".cap-code", { yPercent: 0, duration: 0.75 }, "<")
          .from(".code-column", { scaleY: 0, transformOrigin: "top", stagger: 0.06, duration: 0.6 }, "<0.15")
          .to(".cap-code", { yPercent: -100, duration: 0.75 })
          .to(".cap-build", { yPercent: 0, duration: 0.75 }, "<")
          .to(".build-plane", { rotate: 0, xPercent: 0, stagger: 0.05, duration: 0.8 }, "<0.1");

        gsap.timeline({
          scrollTrigger: { trigger: "#index", start: "top top", end: "+=165%", scrub: 0.8, pin: true },
        })
          .fromTo(".spec-list", { yPercent: 38 }, { yPercent: -43, ease: "none", duration: 2 })
          .to(".spec-row", { color: "#d8ee71", stagger: 0.11, duration: 0.06 }, 0.1)
          .to(".spec-row", { height: 0, paddingTop: 0, paddingBottom: 0, borderColor: "transparent", overflow: "hidden", stagger: 0.04, duration: 0.25 }, 1.58)
          .fromTo(".index-compressed", { scaleX: 0 }, { scaleX: 1, transformOrigin: "left", duration: 0.35 }, 1.75);

        gsap.timeline({
          scrollTrigger: { trigger: "#climax", start: "top top", end: "+=130%", scrub: 1, pin: true },
        })
          .from(".climax-copy", { scale: 8.5, transformOrigin: "22% 48%", duration: 1.3 })
          .to(".climax-line:first-child", { xPercent: -5, duration: 0.45 }, 1.1)
          .to(".climax-line:last-child", { xPercent: 5, duration: 0.45 }, 1.1)
          .to(".climax-copy", { scale: 0.2, yPercent: -85, duration: 0.6 }, 1.42)
          .from(".climax-mark", { yPercent: 70, scale: 2.5, opacity: 0, duration: 0.55 }, 1.32);

        gsap.timeline({
          scrollTrigger: { trigger: "#access", start: "top top", end: "+=85%", scrub: 0.7, pin: true },
        })
          .from(".final-header", { backgroundColor: "#d8ee71", color: "#102019", duration: 0.45 })
          .from(".final-copy > *", { clipPath: "inset(0 0 100% 0)", yPercent: 35, stagger: 0.09, duration: 0.55 }, 0.22)
          .from(".final-k", { yPercent: 45, rotate: -5, duration: 0.8 }, 0.52);
      });

      mm.add("(max-width: 768px)", () => {
        gsap.utils.toArray<HTMLElement>(".scene").forEach((scene) => {
          gsap.from(scene.querySelectorAll("[data-mobile-reveal]"), {
            clipPath: "inset(0 0 100% 0)",
            y: 36,
            stagger: 0.08,
            scrollTrigger: { trigger: scene, start: "top 78%", end: "top 32%", scrub: 0.7 },
          });
        });
        gsap.to(".hero-k", {
          scale: 2.8,
          xPercent: -15,
          scrollTrigger: { trigger: "#model", start: "top top", end: "bottom top", scrub: 0.7 },
        });
        gsap.from(".context-number-mobile", {
          scale: 2.5,
          transformOrigin: "left center",
          scrollTrigger: { trigger: "#context", start: "top 70%", end: "center center", scrub: 0.8 },
        });
      });

    }, root);

    ScrollTrigger.refresh();
    return () => context.revert();
  }, [motionMode]);

  useEffect(() => {
    const sceneIds = ["model", "inside", "context", "capabilities", "index", "climax", "access"];
    let frameId = 0;

    const updateActiveNavigation = () => {
      frameId = 0;
      const visibleScene = sceneIds.find((id) => {
        const bounds = document.getElementById(id)?.getBoundingClientRect();
        return bounds && bounds.top <= 80 && bounds.bottom > 80;
      });
      if (!visibleScene) return;
      const navScene = visibleScene === "inside"
        ? "model"
        : visibleScene === "index" || visibleScene === "climax"
          ? "capabilities"
          : visibleScene;
      setActiveScene(navScene);
    };

    const requestNavigationUpdate = () => {
      if (!frameId) frameId = window.requestAnimationFrame(updateActiveNavigation);
    };

    updateActiveNavigation();
    window.addEventListener("scroll", requestNavigationUpdate, { passive: true });
    window.addEventListener("resize", requestNavigationUpdate);

    return () => {
      window.removeEventListener("scroll", requestNavigationUpdate);
      window.removeEventListener("resize", requestNavigationUpdate);
      if (frameId) window.cancelAnimationFrame(frameId);
    };
  }, []);

  const closeMobileMenu = (event: MouseEvent<HTMLAnchorElement>) => {
    event.currentTarget.closest("details")?.removeAttribute("open");
  };

  return (
    <div ref={root} className="experience">
      <a className="skip-link" href="#main-content">Skip to Clove content</a>

      <header className="site-nav" data-scene={activeScene}>
        <a className="nav-mark" href="#model" aria-label="Clove, back to top">C</a>
        <nav aria-label="Primary navigation">
          {navItems.map(([target, number, label]) => (
            <a key={target} href={`#${target}`} aria-current={activeScene === target ? "location" : undefined}>
              <span>{number}</span> {label}
            </a>
          ))}
        </nav>
        <details className="mobile-menu">
          <summary><span>MENU</span><span aria-hidden="true">＋</span></summary>
          <nav aria-label="Mobile navigation">
            {navItems.map(([target, number, label]) => (
              <a key={target} href={`#${target}`} onClick={closeMobileMenu} aria-current={activeScene === target ? "location" : undefined}>
                <span>{number}</span><strong>{label}</strong>
              </a>
            ))}
            <a href={SKILLS_SOURCE_URL} target="_blank" rel="noreferrer" onClick={closeMobileMenu}>
              <span>05</span><strong>OPEN SKILL LIBRARY <ArrowIcon direction="external" /></strong>
            </a>
          </nav>
        </details>
        <a className="nav-try" href={SKILLS_SOURCE_URL} target="_blank" rel="noreferrer">VIEW SKILLS <ArrowIcon direction="external" /></a>
        <div className="nav-progress" aria-hidden="true"><i style={{ width: `${((navItems.findIndex(([id]) => id === activeScene) + 1) / navItems.length) * 100}%` }} /></div>
      </header>

      <main id="main-content">
        <section className="scene hero-scene theme-dark" id="model" aria-labelledby="hero-title">
          <TechnicalGrid />
          <div className="hero-index micro">00—01 / PURPOSE</div>
          <h1 id="hero-title" className="hero-title" aria-label="Clove">
            <span className="hero-k">C</span>
            <span className="hero-imi">LOVE</span>
          </h1>
          <div className="hero-k3">09</div>
          <p className="hero-subline" data-mobile-reveal><span>NINE CODEX SKILLS FOR</span>BETTER JUDGMENT<br />BEFORE OUTPUT</p>
          <div className="portal-content" aria-hidden="true">
            <p className="portal-label micro">INSIDE CLOVE / LOAD SEQUENCE 01</p>
            <p className="portal-message"><span>LOAD</span><span>JUDGMENT</span><span>FIRST</span></p>
            <i className="portal-marker" />
          </div>
          <div className="hero-meta">
            <p><span>LIBRARY</span>09 SPECIALIST SKILLS</p>
            <p><span>FORMAT</span>CODEX AGENT SKILLS</p>
            <p><span>SOURCE</span>OPEN REPOSITORY</p>
          </div>
          <p className="hero-scroll micro">SCROLL TO ENTER THE C <ArrowIcon direction="down" /></p>
          <i className="hero-diagonal" aria-hidden="true" />
        </section>

        <section className="scene inside-scene theme-dark" id="inside" aria-labelledby="inside-title">
          <div className="inside-coordinates micro" aria-hidden="true">FIELD 09 / CLOVE SKILLS<br />AXIS C / DEPTH 03</div>
          <div className="inside-planes" aria-hidden="true">
            <i className="inside-plane" /><i className="inside-plane" /><i className="inside-plane" /><i className="inside-plane" />
          </div>
          <h2 id="inside-title" className="inside-title">
            {['SPECIFIC', 'TRUTHFUL', 'COMPLETE', 'OWNED'].map((word) => <span className="inside-word" data-mobile-reveal key={word}>{word}</span>)}
          </h2>
          <p className="inside-note micro">INSIDE CLOVE / THE WORKING STANDARD</p>
          <i className="inside-exit-line" aria-hidden="true" />
        </section>

        <section className="scene context-scene theme-paper" id="context" aria-labelledby="context-title">
          <div className="context-kicker micro">02 / SPECIALIST SKILLS / 09</div>
          <h2 id="context-title" className="sr-only">Nine specialist skills</h2>
          <div className="context-intro" data-mobile-reveal>
            <p>Clove packages product judgment as nine Codex agent skills.</p>
            <p>Use the discipline that matches the task. Combine skills only when the work crosses boundaries.</p>
          </div>
          <div className="context-track" aria-hidden="true">
            <span>1</span><span>3</span><span>6</span><span><b className="context-final-digit">9</b></span>
          </div>
          <div className="context-number-mobile" data-mobile-reveal>09</div>
          <div className="context-underlay" aria-hidden="true"><TechnicalGrid /></div>
          <div className="context-fragments" aria-hidden="true">
            <code>$design-user-centered-ux</code>
            <code>[design / content / discovery / code]</code>
            <code>standard = specific + truthful + owned</code>
          </div>
          <ul className="context-benefits">
            {['PRODUCT DESIGN', 'CONTENT', 'DISCOVERY', 'ENGINEERING'].map((item, index) => (
              <li key={item} data-mobile-reveal><span>0{index + 1}</span>{item}</li>
            ))}
          </ul>
        </section>

        <section className="scene capabilities-scene theme-dark" id="capabilities" aria-labelledby="capabilities-title">
          <h2 id="capabilities-title" className="sr-only">Clove skill disciplines</h2>
          <article className="capability cap-reason">
            <p className="cap-number micro">01 / CAPABILITY</p>
            <h3 className="cap-word" data-mobile-reveal>DESIGN</h3>
            <p className="cap-copy" data-mobile-reveal>SEE THE WHOLE EXPERIENCE<br />BEFORE POLISH.</p>
          </article>
          <article className="capability cap-code">
            <div className="code-columns" aria-hidden="true">{Array.from({ length: 9 }, (_, index) => <i className="code-column" key={index} />)}</div>
            <p className="cap-number micro">02 / CAPABILITY</p>
            <h3 className="cap-word" data-mobile-reveal>WRITE</h3>
            <p className="cap-copy" data-mobile-reveal>MAKE THE MEANING<br />EASY TO USE.</p>
          </article>
          <article className="capability cap-build">
            <div className="build-planes" aria-hidden="true"><i className="build-plane" /><i className="build-plane" /><i className="build-plane" /></div>
            <p className="cap-number micro">03 / CAPABILITY</p>
            <h3 className="cap-word" data-mobile-reveal>BUILD</h3>
            <p className="cap-copy" data-mobile-reveal>SHIP CODE<br />A TEAM CAN OWN.</p>
          </article>
        </section>

        <section className="scene index-scene theme-dark" id="index" aria-labelledby="index-title">
          <h2 id="index-title" className="index-mark" aria-label="Clove skill index">C9</h2>
          <p className="index-label micro">04 / SKILL INDEX</p>
          <div className="index-arm" aria-hidden="true" />
          <dl className="spec-list">
            {skillSpecs.map(([label, value, description]) => (
              <div className="spec-row" key={label} data-mobile-reveal>
                <dt>{label}</dt>
                <dd><strong>{value}</strong><span>{description}</span></dd>
              </div>
            ))}
          </dl>
          <p className="index-compressed micro">CLOVE / 09 SKILLS / ONE WORKING STANDARD</p>
        </section>

        <section className="scene climax-scene theme-signal" id="climax" aria-labelledby="climax-title">
          <p className="climax-index micro">05 / WORKING STANDARD</p>
          <h2 id="climax-title" className="climax-copy">
            <span className="climax-line" data-mobile-reveal>NOT A PROMPT PACK.</span>
            <span className="climax-line" data-mobile-reveal>A WORKING STANDARD.</span>
          </h2>
          <div className="climax-mark" aria-hidden="true">CLOVE / 09</div>
        </section>

        <section className="scene final-scene theme-dark" id="access" aria-labelledby="final-title">
          <div className="final-header"><span>CLOVE SKILLS</span><span>06 / SOURCE</span></div>
          <div className="final-copy">
            <p className="micro">OPEN SOURCE / READY TO LOAD</p>
            <h2 id="final-title" data-mobile-reveal>CLOVE<br /><span>BETTER WORK</span></h2>
            <p className="final-lede" data-mobile-reveal>Open the repository to inspect each skill&apos;s instructions, research, and project-ready folder.</p>
            <a className="final-cta" href={SKILLS_SOURCE_URL} target="_blank" rel="noreferrer">
              <span>OPEN THE SKILL LIBRARY</span><ArrowIcon direction="external" />
            </a>
            <p className="final-note">Start with the skill whose description matches the work. Add another only when the task genuinely crosses disciplines.</p>
            <code>.agents/skills / 09 folders / open source</code>
          </div>
          <div className="final-k" aria-hidden="true">C</div>
        </section>
      </main>
    </div>
  );
}
