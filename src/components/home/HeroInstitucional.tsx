"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function HeroInstitucional() {
    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#002b30]">
            {/* --- Background Layer --- */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover scale-105"
                >
                    <source src="/video/herovideo.webm" type="video/webm" />
                </video>

                {/* Sophisticated Overlay System */}
                <div className="absolute inset-0 bg-[#002b30]/40 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,43,48,0.4)_100%)]" />
            </div>

            {/* --- Content Layer --- */}
            <div className="relative z-10 container mx-auto px-6 flex flex-col items-center justify-center text-center h-full pt-20">
                <div className="flex flex-col items-center">
                    {/* Top Label */}
                    <div className="mb-12 overflow-hidden">
                        <span className="inline-block py-1 px-4 border border-white/20 rounded-full bg-white/5 backdrop-blur-md text-[10px] md:text-xs font-medium tracking-[0.25em] text-white/80 uppercase">
                            Clínica de Psicologia
                        </span>
                    </div>

                    {/* Main Title */}
                    <div className="relative mb-8">
                        <h1 className="font-[var(--font-playfair)] text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-white leading-[0.95] tracking-tight drop-shadow-2xl">
                            PALLIUM PSI
                        </h1>
                        <div className="flex items-center justify-center gap-6 mt-4 md:mt-6">
                            <div className="h-[1px] w-8 md:w-20 bg-white/30" />
                            <span className="font-[var(--font-inter)] text-sm md:text-xl font-light tracking-[0.4em] text-white/90 uppercase">
                                Psicologia Clínica
                            </span>
                            <div className="h-[1px] w-8 md:w-20 bg-white/30" />
                        </div>
                    </div>

                    {/* Slogan */}
                    <p className="max-w-xl mx-auto text-sm md:text-base text-white/70 font-light leading-relaxed mb-12 tracking-wide">
                        Cuidamos da sua saúde mental com excelência
                        <span className="mx-3 text-white/30">•</span>
                        Lisboa
                    </p>

                    {/* Actions */}
                    <div className="flex flex-col sm:flex-row items-center gap-6">
                        <Link href="/agendar">
                            <button className="group relative px-10 py-4 bg-white text-[#006d77] text-xs md:text-sm tracking-[0.2em] uppercase font-bold transition-all hover:bg-[#e0f2f1] shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] rounded-full">
                                Marcar Consulta
                            </button>
                        </Link>
                        <Link href="/areas-pratica">
                            <button className="group px-10 py-4 border border-white/20 text-white text-xs md:text-sm tracking-[0.2em] uppercase font-medium hover:bg-white/5 hover:border-white/40 transition-all backdrop-blur-sm w-full sm:w-auto rounded-full">
                                Áreas de Prática
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* --- Scroll Indicator (Minimal) --- */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-50 mix-blend-screen">
                <div className="w-[1px] h-12 bg-white/10 overflow-hidden relative">
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-transparent via-white to-transparent animate-pulse" />
                </div>
            </div>
        </section>
    );
}
