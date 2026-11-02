"use client";
import { X, Download } from "lucide-react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4">
      <div className="relative w-full max-w-4xl h-[90vh] bg-slate-900 border border-cyan-500/40 rounded-2xl flex flex-col overflow-hidden shadow-2xl">
        <div className="flex items-center justify-between px-6 py-4 bg-slate-950 border-b border-cyan-500/20">
          <h3 className="text-base font-bold text-cyan-300">Similanna's Resume</h3>
          <div className="flex items-center gap-3">
            <a href="/resume.pdf" download className="flex items-center gap-1.5 text-xs bg-cyan-600 hover:bg-cyan-500 text-slate-950 font-bold px-3 py-1.5 rounded-lg">
              <Download className="w-4 h-4" /> Download
            </a>
            <button onClick={onClose} className="p-1.5 text-slate-400 hover:text-white rounded-lg">
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
        <div className="flex-1 w-full bg-slate-950 p-4">
          <iframe src="/resume.pdf" className="w-full h-full rounded-xl border border-slate-800" />
        </div>
      </div>
    </div>
  );
}