"use client";

import { useEffect, useRef, useState } from "react";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Award,
  Code2,
  Download,
  Eye,
  FolderGit2,
  Mail,
  Play,
  X,
} from "lucide-react";
import ProjectModal from "./ProjectModal";
import ResumeModal from "./ResumeModal";

function GithubIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.53v-2.08c-3.1.67-3.76-1.32-3.76-1.32-.5-1.28-1.23-1.62-1.23-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 1.7 2.62 1.21 3.26.92.1-.72.39-1.21.71-1.49-2.48-.28-5.09-1.24-5.09-5.53 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.06 1.15a10.65 10.65 0 0 1 5.57 0c2.12-1.45 3.06-1.15 3.06-1.15.61 1.54.23 2.68.11 2.96.72.78 1.15 1.78 1.15 3 0 4.3-2.61 5.25-5.1 5.52.4.35.76 1.03.76 2.08V22c0 .29.2.63.76.52A11.1 11.1 0 0 0 12 .9Z" />
    </svg>
  );
}

function LinkedinIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.34H4.98V9.02h2.95v9.32ZM6.46 7.75a1.71 1.71 0 1 1 0-3.42 1.71 1.71 0 0 1 0 3.42Zm11.88 10.59h-2.95v-4.53c0-1.08-.02-2.47-1.51-2.47-1.51 0-1.74 1.18-1.74 2.39v4.61H9.19V9.02h2.83v1.27h.04c.39-.73 1.36-1.51 2.8-1.51 2.99 0 3.54 1.97 3.54 4.53v5.03h-.06Z" />
    </svg>
  );
}

function TechLogo({ name, mark, color }: { name: string; mark: string; color: string }) {
  const className = "h-9 w-9 shrink-0";

  if (name === "Python") {
    return (
      <svg className={className} viewBox="0 0 40 40" fill="none" aria-label="Python logo">
        <path d="M19 4c-7 0-8 3-8 7v5h11v2H8c-4 0-6 3-6 8s2 8 6 8h4v-6c0-4 3-7 7-7h8c3 0 5-2 5-5v-5c0-5-4-7-13-7Z" fill="#3776AB" />
        <path d="M21 36c7 0 8-3 8-7v-5H18v-2h14c4 0 6-3 6-8s-2-8-6-8h-4v6c0 4-3 7-7 7h-8c-3 0-5 2-5 5v5c0 5 4 7 13 7Z" fill="#FFD343" />
        <circle cx="16" cy="9" r="1.5" fill="white" /><circle cx="24" cy="31" r="1.5" fill="white" />
      </svg>
    );
  }

  if (name === "PyTorch") {
    return (
      <svg className={className} viewBox="0 0 40 40" fill="none" aria-label="PyTorch logo">
        <path d="M25 4 12 20a11 11 0 1 0 18 12 10 10 0 0 1-15-13L28 5" stroke="#EE4C2C" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="30" cy="8" r="3" fill="#EE4C2C" /><circle cx="23" cy="25" r="3" fill="#EE4C2C" />
      </svg>
    );
  }

  if (name === "Next.js") {
    return <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-400 text-sm font-semibold text-slate-100" aria-label="Next.js logo">N</span>;
  }

  if (name === "Git") {
    return (
      <svg className={className} viewBox="0 0 40 40" fill="none" aria-label="Git logo">
        <path d="m12 10 16 16M12 10v20m16-4V14" stroke="#F05032" strokeWidth="3" strokeLinecap="round" />
        <circle cx="12" cy="10" r="4" fill="#F05032" /><circle cx="12" cy="30" r="4" fill="#F05032" /><circle cx="28" cy="14" r="4" fill="#F05032" /><circle cx="28" cy="26" r="4" fill="#F05032" />
      </svg>
    );
  }

  return <span className="flex h-9 w-9 shrink-0 items-center justify-center text-xs font-semibold tracking-tight" style={{ color }} aria-label={`${name} icon`}>{mark}</span>;
}

const projectsData = [
  {
    id: "chatlert",
    title: "ChatLert: Thai Chat Normalization NLP",
    tech: ["Python", "PyThaiNLP", "Streamlit", "NLP"],
    description: "An eight-step NLP pipeline that converts informal Thai slang and repeated text into standard Thai, with real-time intent classification.",
    github: "https://github.com/similannaps",
    demoUrl: "https://similanna-chatlert.streamlit.app/?embed=true",
    youtubeUrl: "https://youtu.be/o5qS3uqPeE4?si=L4YjuZNjU-Cft0qg",
    hasLiveDemo: true,
  },
  {
    id: "smart-tomato",
    title: "Smart Tomato Disease Classification",
    tech: ["Python", "PyTorch", "Computer Vision", "FastAPI"],
    description: "A deep learning system for classifying tomato plant diseases, supported by technical documentation and an agricultural insight visualizer.",
    github: "https://github.com/similannaps/smart-tomato-disease-system",
    demoUrl: "",
    youtubeUrl: "",
    hasLiveDemo: false,
  },
  {
    id: "coc-qa",
    title: "CoC QA Academic Publication Dashboard",
    tech: ["HTML", "CSS", "JavaScript", "Vercel"],
    description: "An interactive dashboard for exploring academic publication metrics by year and research track.",
    github: "https://github.com/similannaps",
    demoUrl: "https://coc-qa-dashboard.vercel.app/",
    youtubeUrl: "",
    hasLiveDemo: true,
  },
  {
    id: "pet-db",
    title: "Pet Database Management Application",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Zod"],
    description: "A pet record management portal with client-side form validation, REST API integration, and a mock JSON server.",
    github: "https://github.com/similannaps/pet-database",
    demoUrl: "",
    youtubeUrl: "",
    hasLiveDemo: false,
  },
];

const certificatesData = [
  { title: "Super AI Engineer Season 6 (English)", issuer: "AIAT (Super AI Engineer)", date: "2026", images: ["/certificate_superai.ss6_eng.png"] },
  { title: "Super AI Engineer Season 6 (Parts 1–3)", issuer: "AIAT (Super AI Engineer)", date: "2026", images: ["/certificate_superai1.png", "/certificate_superai2.png", "/certificate_superai3.png"] },
  { title: "12-hour AI Learning Modules", issuer: "AIClassASEAN.org / AI Ready ASEAN", date: "2026", images: ["/certificate_AIReadyASEAN.png"] },
  { title: "Machine Learning in Production", issuer: "DeepLearning.AI (Coursera)", date: "August 2026", images: ["/cert_ml_production.png"] },
  { title: "AI Workflow: Feature Engineering & Bias Detection", issuer: "IBM (Coursera)", date: "August 2026", images: ["/cert_ibm_workflow.png"] },
  { title: "AI Infrastructure: Cloud TPUs & GPUs", issuer: "Google Cloud (Coursera)", date: "August 2026", images: ["/cert_cloud_tpu.png", "/cert_cloud_gpu.png"] },
  { title: "Data Visualization with Python: Hands-On", issuer: "IBM (Coursera)", date: "August 2026", images: ["/cert_ibm_datavis.png"] },
  { title: "Parallel Programming in Java", issuer: "Rice University (Coursera)", date: "August 2026", images: ["/cert_parallel_java.png"] },
];

const techStack = [
  { name: "Python", category: "AI & Data Science", logo: { name: "Python", mark: "Py", color: "#3776AB" } },
  { name: "PyTorch & OpenCV", category: "Computer Vision & Deep Learning", logo: { name: "PyTorch", mark: "PT", color: "#EE4C2C" } },
  { name: "PyThaiNLP & Regex", category: "Thai Text Processing", logo: { name: "PyThaiNLP", mark: "ก", color: "#70B8C8" } },
  { name: "FastAPI & SQLite", category: "Backend Services", logo: { name: "FastAPI", mark: "API", color: "#69AFA4" } },
  { name: "Next.js & React", category: "Web Application Development", logo: { name: "Next.js", mark: "N", color: "#FFFFFF" } },
  { name: "TypeScript & Tailwind", category: "Frontend Engineering", logo: { name: "TypeScript", mark: "TS", color: "#6B9AC4" } },
  { name: "Streamlit", category: "AI Prototyping", logo: { name: "Streamlit", mark: "S", color: "#D98686" } },
  { name: "Git, GitHub & Vercel", category: "Version Control & Deployment", logo: { name: "Git", mark: "Git", color: "#F05032" } },
];

type ActiveGallery = { title: string; images: string[] } | null;

export default function PortfolioMain() {
  const [activeTab, setActiveTab] = useState<"projects" | "certificates" | "tech">("projects");
  const [activeDemo, setActiveDemo] = useState<{ title: string; url: string } | null>(null);
  const [activeGallery, setActiveGallery] = useState<ActiveGallery>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const ambientRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;
    let pointerX = 0;
    let pointerY = 0;

    const handlePointerMove = (event: PointerEvent) => {
      if (event.pointerType === "touch" || frame) return;
      pointerX = event.clientX;
      pointerY = event.clientY;
      frame = window.requestAnimationFrame(() => {
        ambientRef.current?.style.setProperty("--pointer-x", `${pointerX}px`);
        ambientRef.current?.style.setProperty("--pointer-y", `${pointerY}px`);
        frame = 0;
      });
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    if (!activeGallery) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveGallery(null);
      if (event.key === "ArrowLeft") {
        setCurrentImageIndex((index) => (index === 0 ? activeGallery.images.length - 1 : index - 1));
      }
      if (event.key === "ArrowRight") {
        setCurrentImageIndex((index) => (index === activeGallery.images.length - 1 ? 0 : index + 1));
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeGallery]);

  const openGallery = (title: string, images: string[]) => {
    setCurrentImageIndex(0);
    setActiveGallery({ title, images });
  };

  const changeGalleryImage = (direction: -1 | 1) => {
    if (!activeGallery) return;
    setCurrentImageIndex((index) => (index + direction + activeGallery.images.length) % activeGallery.images.length);
  };

  return (
    <main className="relative isolate min-h-screen overflow-x-clip bg-[#030014] text-slate-100 selection:bg-cyan-300 selection:text-slate-950">
      <style>{`
        @keyframes portfolio-float {
          0%, 100% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(0, -7px, 0); }
        }
        @keyframes portfolio-pulse {
          0%, 100% { opacity: .55; transform: scale(.9); }
          50% { opacity: 1; transform: scale(1); }
        }
        @keyframes portfolio-image-in {
          from { opacity: 0; transform: translateX(8px) scale(.99); }
          to { opacity: 1; transform: translateX(0) scale(1); }
        }
        .portfolio-float { animation: portfolio-float 8s ease-in-out infinite; }
        .portfolio-pulse { animation: portfolio-pulse 3s ease-in-out infinite; }
        .portfolio-image-in { animation: portfolio-image-in 220ms ease-out both; }
        @media (prefers-reduced-motion: reduce) {
          .portfolio-float, .portfolio-pulse, .portfolio-image-in { animation: none !important; }
        }
      `}</style>
      <div
        ref={ambientRef}
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background: "radial-gradient(620px circle at var(--pointer-x, 52%) var(--pointer-y, 34%), rgba(34,211,238,0.075), transparent 62%), radial-gradient(720px circle at 88% 8%, rgba(139,92,246,0.11), transparent 58%), radial-gradient(680px circle at 8% 72%, rgba(59,130,246,0.06), transparent 58%)",
        }}
      />
      <div className="relative z-10">
      <header className="sticky top-0 z-40 border-b border-slate-800/80 bg-[#030014]/85 backdrop-blur-xl">
        <nav aria-label="Main navigation" className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
          <a href="#home" className="text-sm font-semibold tracking-wide text-slate-100">similannaps<span className="text-cyan-300">.portfolio</span></a>
          <div className="flex items-center gap-4 text-xs text-slate-400 sm:gap-7 sm:text-sm">
            <a href="#about" className="transition-colors hover:text-white">About</a>
            <a href="#portfolio" className="transition-colors hover:text-white">Work</a>
            <a href="#contact" className="transition-colors hover:text-white">Contact</a>
          </div>
        </nav>
      </header>

      <section id="home" className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-24 md:grid-cols-[1.2fr_0.8fr] md:gap-20 md:py-28">
        <div>
          <p className="mb-5 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-cyan-300">
            <span className="h-px w-8 bg-cyan-300/70" /> AI & Systems Engineering
            <span className="portfolio-pulse h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(34,211,238,0.7)]" />
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold leading-[1.08] tracking-[-0.04em] text-slate-50 sm:text-6xl lg:text-7xl">
            Similanna<br className="hidden sm:block" /> Palmieri Schvaigert
          </h1>
          <p className="mt-7 max-w-xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
            I build practical AI systems, from Thai language processing and computer vision to the products that make them useful.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <button onClick={() => setIsResumeOpen(true)} className="inline-flex min-h-11 items-center gap-2 rounded-md bg-cyan-300 px-5 text-sm font-semibold text-slate-950 transition-colors hover:bg-cyan-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-200">
              <Eye className="h-4 w-4" /> View resume
            </button>
            <a href="/resume.pdf" download className="inline-flex min-h-11 items-center gap-2 rounded-md border border-slate-700 px-5 text-sm font-medium text-slate-200 transition-colors hover:border-cyan-400/50 hover:bg-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-200">
              <Download className="h-4 w-4" /> Download resume
            </a>
          </div>

          <div className="mt-8 flex items-center gap-5 text-slate-400">
            <a aria-label="GitHub profile" href="https://github.com/similannaps" target="_blank" rel="noreferrer" className="transition-colors hover:text-cyan-200"><GithubIcon className="h-5 w-5" /></a>
            <a aria-label="LinkedIn profile" href="https://www.linkedin.com/in/similanna-palmieri-schvaigert/" target="_blank" rel="noreferrer" className="transition-colors hover:text-cyan-200"><LinkedinIcon className="h-5 w-5" /></a>
            <a aria-label="Email Similanna" href="mailto:similannaps@gmail.com" className="transition-colors hover:text-cyan-200"><Mail className="h-5 w-5" /></a>
          </div>
        </div>

        <div className="mx-auto w-full max-w-sm md:justify-self-end">
          <div className="portfolio-float relative overflow-hidden rounded-2xl border border-cyan-500/20 bg-slate-950/80 p-2 shadow-[0_24px_80px_-40px_rgba(34,211,238,0.3)] transition duration-500 hover:border-cyan-400/45 hover:shadow-[0_24px_90px_-35px_rgba(139,92,246,0.35)]">
            <div className="aspect-[4/5] overflow-hidden rounded-xl bg-slate-800">
              <img src="/profile.jpg" alt="Similanna Palmieri Schvaigert" className="h-full w-full object-cover object-top" />
            </div>
          </div>
          <p className="mt-3 text-right text-xs tracking-wide text-slate-500">Phuket, Thailand</p>
        </div>
        <a href="#about" className="hidden items-center gap-2 text-xs text-slate-500 transition-colors hover:text-slate-300 md:flex">
          <ArrowDown className="h-4 w-4" /> More about me
        </a>
      </section>

      <section id="about" className="border-y border-slate-800/80 bg-[#08071b]/75">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 sm:px-8 sm:py-20 md:grid-cols-[0.7fr_1.3fr] md:gap-16">
          <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-300">A little about me</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-100">Engineering for real use.</h2>
          </div>
          <div>
            <p className="text-base leading-8 text-slate-300">
              I am a senior AI and Systems Engineering student at Prince of Songkla University, Phuket Campus, seeking a cooperative education position in AI/ML Engineering. My work includes an eight-step Thai NLP normalization pipeline and computer vision systems, with a focus on turning technical ideas into useful, well-crafted applications.
            </p>
            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 border-t border-slate-800 pt-5 text-sm text-slate-400">
              <span>Thai NLP</span><span>Computer Vision</span><span>AI Product Integration</span><span>Backend Systems</span>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="flex flex-col justify-between gap-7 border-b border-slate-800 pb-7 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-300">Selected work & skills</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl">Portfolio</h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-slate-400">Projects, professional learning, and the tools I use to bring ideas into production.</p>
        </div>

        <div role="tablist" aria-label="Portfolio categories" className="mt-7 flex gap-1 overflow-x-auto border-b border-slate-800">
          {[
            { id: "projects", label: "Projects", Icon: FolderGit2 },
            { id: "certificates", label: "Certificates", Icon: Award },
            { id: "tech", label: "Tech stack", Icon: Code2 },
          ].map(({ id, label, Icon }) => (
            <button key={id} role="tab" aria-selected={activeTab === id} onClick={() => setActiveTab(id as typeof activeTab)} className={`inline-flex shrink-0 items-center gap-2 border-b-2 px-4 py-3 text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-300 ${activeTab === id ? "border-cyan-300 text-cyan-200" : "border-transparent text-slate-500 hover:text-slate-200"}`}>
              <Icon className="h-4 w-4" />{label}
            </button>
          ))}
        </div>

        {activeTab === "projects" && (
          <div role="tabpanel" className="grid gap-4 pt-6 md:grid-cols-2">
            {projectsData.map((project, index) => (
              <article key={project.id} className="group flex min-h-64 flex-col justify-between rounded-xl border border-slate-800/80 bg-[#0c0b1e]/90 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.025)] transition duration-300 hover:-translate-y-0.5 hover:border-cyan-400/45 hover:shadow-[0_14px_40px_-28px_rgba(34,211,238,0.5)] sm:p-7">
                <div>
                  <div className="mb-5 flex items-center justify-between">
                    <span className="font-mono text-xs text-slate-600">0{index + 1}</span>
                    <div className="flex flex-wrap justify-end gap-1.5">
                      {project.tech.map((technology) => <span key={technology} className="rounded-sm bg-slate-800/70 px-2 py-1 text-[10px] text-slate-400">{technology}</span>)}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold leading-snug text-slate-100">{project.title}</h3>
                  <p className="mt-3 max-w-xl text-sm leading-6 text-slate-400">{project.description}</p>
                </div>
                <div className="mt-7 flex flex-wrap items-center justify-between gap-x-4 gap-y-3 border-t border-slate-800 pt-4">
                  <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-xs font-medium text-slate-300 transition-colors hover:text-cyan-200">
                    <GithubIcon className="h-4 w-4" /> Source code <ArrowUpRight className="h-3 w-3" />
                  </a>
                  <div className="flex flex-wrap items-center gap-2">
                    {project.youtubeUrl && (
                      <a href={project.youtubeUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-md border border-violet-400/25 px-3 py-2 text-xs font-medium text-violet-200 transition duration-300 hover:border-violet-300/60 hover:bg-violet-300/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-violet-300">
                        <Play className="h-3.5 w-3.5 fill-current" /> Watch video
                      </a>
                    )}
                    {project.hasLiveDemo ? (
                      <button onClick={() => setActiveDemo({ title: project.title, url: project.demoUrl })} className="inline-flex items-center gap-1.5 rounded-md border border-slate-700 px-3 py-2 text-xs font-medium text-slate-200 transition duration-300 hover:border-cyan-300/50 hover:bg-cyan-300/5 hover:text-cyan-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-300">
                        <Play className="h-3.5 w-3.5" /> Live demo
                      </button>
                    ) : <span className="text-xs text-slate-600">In development</span>}
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {activeTab === "certificates" && (
          <div role="tabpanel" className="grid gap-4 pt-6 sm:grid-cols-2 lg:grid-cols-3">
            {certificatesData.map((certificate) => (
              <article key={certificate.title} className="group flex flex-col rounded-xl border border-slate-800/80 bg-[#0c0b1e]/90 p-3.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.025)] transition duration-300 hover:-translate-y-0.5 hover:border-cyan-400/45 hover:shadow-[0_14px_40px_-28px_rgba(139,92,246,0.55)]">
                <button type="button" disabled={certificate.images.length === 0} onClick={() => openGallery(certificate.title, certificate.images)} aria-label={`View ${certificate.title}`} className="group relative block w-full overflow-hidden rounded-lg border border-slate-800 bg-[#050411] text-left aspect-[1.58/1] disabled:cursor-default">
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-600">
                    <Award className="h-7 w-7" strokeWidth={1.4} />
                    <span className="mt-2 text-[10px] uppercase tracking-[0.15em]">Certificate</span>
                  </div>
                  {certificate.images.length > 0 && <img src={certificate.images[0]} alt={`${certificate.title} preview`} className="absolute inset-0 h-full w-full object-contain transition-opacity duration-200 group-hover:opacity-90" onError={(event) => { event.currentTarget.style.display = "none"; }} />}
                  {certificate.images.length > 1 && <span className="absolute bottom-2 right-2 rounded bg-black/75 px-2 py-1 text-[10px] text-white">{certificate.images.length} pages</span>}
                  {certificate.images.length > 0 && <span className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition group-hover:bg-black/25 group-hover:opacity-100"><Eye className="h-5 w-5 text-white" /></span>}
                </button>
                <div className="flex flex-1 flex-col px-1 pb-1 pt-4">
                  <h3 className="text-sm font-semibold leading-5 text-slate-100">{certificate.title}</h3>
                  <p className="mt-1.5 text-xs leading-5 text-slate-400">{certificate.issuer}</p>
                  <div className="mt-auto flex items-center justify-between border-t border-slate-800 pt-3">
                    <span className="text-xs text-slate-500">{certificate.date}</span>
                    {certificate.images.length > 0 && <button type="button" onClick={() => openGallery(certificate.title, certificate.images)} className="inline-flex items-center gap-1 text-xs text-cyan-200 transition-colors hover:text-cyan-100"><Eye className="h-3.5 w-3.5" /> View{certificate.images.length > 1 ? ` all ${certificate.images.length}` : ""}</button>}
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {activeTab === "tech" && (
          <div role="tabpanel" className="grid gap-3 pt-6 sm:grid-cols-2 lg:grid-cols-4">
            {techStack.map((technology) => (
              <article key={technology.name} className="group flex min-h-24 items-center gap-4 rounded-lg border border-slate-800/80 bg-[#0c0b1e]/90 px-4 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.025)] transition duration-300 hover:-translate-y-0.5 hover:border-cyan-400/45 hover:shadow-[0_12px_32px_-24px_rgba(34,211,238,0.65)]">
                <TechLogo {...technology.logo} />
                <div>
                  <h3 className="text-sm font-medium text-slate-200">{technology.name}</h3>
                  <p className="mt-1 text-xs leading-5 text-slate-500">{technology.category}</p>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      <section id="contact" className="border-t border-slate-800/80 bg-[#08071b]/75">
        <div className="mx-auto flex max-w-6xl flex-col gap-7 px-5 py-16 sm:px-8 sm:py-20 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-300">Get in touch</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl">Let&apos;s build something useful.</h2>
            <p className="mt-3 max-w-lg text-sm leading-6 text-slate-400">Open to AI/ML engineering internships, cooperative education, and thoughtful collaborations.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="mailto:similannaps@gmail.com" className="inline-flex min-h-11 items-center gap-2 rounded-md bg-cyan-300 px-4 text-sm font-semibold text-slate-950 transition-colors hover:bg-cyan-200"><Mail className="h-4 w-4" /> Email me</a>
            <a href="https://github.com/similannaps" target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-md border border-slate-700 px-4 text-sm text-slate-200 transition-colors hover:border-slate-500"><GithubIcon className="h-4 w-4" /> GitHub</a>
            <a href="https://www.linkedin.com/in/similanna-palmieri-schvaigert/" target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-md border border-slate-700 px-4 text-sm text-slate-200 transition-colors hover:border-slate-500"><LinkedinIcon className="h-4 w-4" /> LinkedIn</a>
          </div>
        </div>
      </section>

      <footer className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-6 text-xs text-slate-600 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <span>© 2026 Similanna Palmieri Schvaigert</span><span>Designed and built with Next.js</span>
      </footer>

      <ProjectModal isOpen={!!activeDemo} onClose={() => setActiveDemo(null)} title={activeDemo?.title || ""} demoUrl={activeDemo?.url || ""} />
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />

      {activeGallery && (
        <div role="dialog" aria-modal="true" aria-label={`${activeGallery.title} certificate gallery`} className="fixed inset-0 z-50 flex items-center justify-center bg-[#030014]/90 p-3 backdrop-blur-sm sm:p-6" onMouseDown={(event) => { if (event.target === event.currentTarget) setActiveGallery(null); }}>
          <div className="flex max-h-[94vh] w-full max-w-5xl flex-col overflow-hidden rounded-xl border border-cyan-900/60 bg-[#0b0a1c] shadow-[0_24px_100px_-30px_rgba(34,211,238,0.18)]">
            <div className="flex items-start justify-between gap-4 border-b border-slate-800 px-4 py-4 sm:px-6">
              <div className="min-w-0">
                <h2 className="text-sm font-semibold leading-5 text-slate-100 sm:text-base">{activeGallery.title}</h2>
                <p className="mt-1 text-xs text-slate-500">Page {currentImageIndex + 1} of {activeGallery.images.length}</p>
              </div>
              <button type="button" aria-label="Close gallery" onClick={() => setActiveGallery(null)} className="rounded-md p-2 text-slate-400 transition-colors hover:bg-slate-800 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-300"><X className="h-5 w-5" /></button>
            </div>
            <div className="relative flex min-h-0 flex-1 items-center justify-center bg-[#050411] p-3 sm:p-6">
              <div className="absolute flex flex-col items-center text-slate-600" aria-hidden="true"><Award className="h-8 w-8" strokeWidth={1.4} /><span className="mt-2 text-xs">Preview unavailable</span></div>
              <img key={activeGallery.images[currentImageIndex]} src={activeGallery.images[currentImageIndex]} alt={`${activeGallery.title}, page ${currentImageIndex + 1}`} className="portfolio-image-in relative max-h-[70vh] max-w-full object-contain" onError={(event) => { event.currentTarget.style.display = "none"; }} />
              {activeGallery.images.length > 1 && <>
                <button type="button" aria-label="Previous certificate page" onClick={() => changeGalleryImage(-1)} className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-slate-700 bg-[#0c0b1e]/90 p-2.5 text-slate-200 transition duration-300 hover:border-cyan-300/60 hover:bg-cyan-300/10 hover:text-cyan-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-300"><ArrowLeft className="h-4 w-4" /></button>
                <button type="button" aria-label="Next certificate page" onClick={() => changeGalleryImage(1)} className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-slate-700 bg-[#0c0b1e]/90 p-2.5 text-slate-200 transition duration-300 hover:border-cyan-300/60 hover:bg-cyan-300/10 hover:text-cyan-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-300"><ArrowRight className="h-4 w-4" /></button>
              </>}
            </div>
          </div>
        </div>
      )}
      </div>
    </main>
  );
}
