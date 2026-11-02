"use client";
import { X, ExternalLink } from "lucide-react";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  demoUrl: string;
}

export default function ProjectModal({ isOpen, onClose, title, demoUrl }: ProjectModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4">
      <div className="relative w-full max-w-5xl h-[85vh] bg-slate-900 border border-purple-500/40 rounded-2xl flex flex-col overflow-hidden shadow-2xl shadow-purple-900/40">
        <div className="flex items-center justify-between px-6 py-4 bg-slate-950 border-b border-purple-500/20">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500" />
            <span className="w-3 h-3 rounded-full bg-yellow-500" />
            <span className="w-3 h-3 rounded-full bg-green-500" />
            <h3 className="ml-3 text-sm font-semibold text-cyan-300">{title} — Live Demo</h3>
          </div>
          <div className="flex items-center gap-4">
            <a href={demoUrl} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-xs text-cyan-400 hover:text-cyan-300">
              Open in new tab <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <button onClick={onClose} className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-purple-900/50">
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
        <div className="flex-1 w-full bg-slate-950 relative">
          <iframe src={demoUrl} className="w-full h-full border-0" title={title} allowFullScreen />
        </div>
      </div>
    </div>
  );
}