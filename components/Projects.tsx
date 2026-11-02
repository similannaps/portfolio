"use client";
import { useState } from "react";
import { Play, ExternalLink } from "lucide-react";
import ProjectModal from "./ProjectModal";

// SVG Icon สำหรับ GitHub
function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
    </svg>
  );
}

const projectsData = [
  {
    id: "chatlert",
    title: "ChatLert: Thai Chat Normalization NLP",
    tech: ["Python", "PyThaiNLP", "Streamlit", "NLP"],
    description: "8-step NLP pipeline converting informal Thai slang and repetitive text into standard Thai language with real-time intent classification.",
    github: "https://github.com/similannaps",
    demoUrl: "https://similanna-chatlert.streamlit.app/?embed=true",
    hasLiveDemo: true,
  },
  {
    id: "smart-tomato",
    title: "Smart Tomato Disease Classification",
    tech: ["Python", "PyTorch", "Computer Vision", "FastAPI"],
    description: "Deep learning classification system for tomato plant disease categories with technical documentation and agricultural insight visualizer.",
    github: "https://github.com/similannaps/smart-tomato-disease-system",
    demoUrl: "",
    hasLiveDemo: false,
  },
  {
    id: "coc-qa",
    title: "CoC QA Academic Publication Dashboard",
    tech: ["HTML", "CSS", "JavaScript", "Vercel"],
    description: "Interactive analytics web dashboard processing and visualizing publication metrics filtered by year and academic tracks.",
    github: "https://github.com/similannaps",
    demoUrl: "https://coc-qa-dashboard.vercel.app/",
    hasLiveDemo: true,
  },
  {
    id: "pet-db",
    title: "Pet Database Management Application",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Zod"],
    description: "Modern web portal for pet record management featuring client-side Zod form validation, REST API integration, and mock JSON server.",
    github: "https://github.com/similannaps/pet-database",
    demoUrl: "",
    hasLiveDemo: false,
  },
];

export default function Projects() {
  const [activeDemo, setActiveDemo] = useState<{ title: string; url: string } | null>(null);

  return (
    <section id="projects" className="py-20 bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 mb-10">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projectsData.map((project) => (
            <div 
              key={project.id}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-indigo-500/50 transition-all duration-300 shadow-lg hover:shadow-indigo-500/10"
            >
              <div>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs font-mono bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 px-2.5 py-1 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-slate-100 mb-2">{project.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">{project.description}</p>
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-slate-800">
                {project.github && (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-white font-medium"
                  >
                    <GithubIcon className="w-4 h-4" /> Code Repository
                  </a>
                )}

                {project.hasLiveDemo && (
                  <button 
                    onClick={() => setActiveDemo({ title: project.title, url: project.demoUrl })}
                    className="ml-auto flex items-center gap-1.5 text-xs bg-indigo-600 hover:bg-indigo-500 text-white px-3.5 py-2 rounded-lg font-semibold transition shadow-md shadow-indigo-600/20"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" /> Try Live Demo
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Popup */}
      <ProjectModal 
        isOpen={!!activeDemo} 
        onClose={() => setActiveDemo(null)} 
        title={activeDemo?.title || ""} 
        demoUrl={activeDemo?.url || ""} 
      />
    </section>
  );
}