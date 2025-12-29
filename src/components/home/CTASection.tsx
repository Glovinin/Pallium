"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function CTASection() {
    return (
        <section className="py-48 bg-[#0F0F0F] relative overflow-hidden flex items-center justify-center" data-theme="dark">
            {/* Background Texture - simple grain */}
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />

            {/* Gradient Overlay - Smoother Blend */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0F0F0F] via-[#002b30]/20 to-[#0F0F0F]" />

            <div className="container mx-auto px-6 relative z-10 text-center">
                <div className="max-w-4xl mx-auto">
                    <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-xs font-bold tracking-[0.2em] uppercase text-white/80 mb-8 backdrop-blur-sm">
                        Comece a sua jornada
                    </span>

                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-[var(--font-playfair)] text-white mb-8 leading-[1.1]">
                        Pronto para dar o primeiro passo<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#83c5be] to-white italic">rumo ao seu equilíbrio?</span>
                    </h2>

                    <p className="text-lg text-white/60 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                        A Pallium PSI está preparada para o acolher com empatia e profissionalismo. Agende a sua primeira consulta e descubra como podemos ajudar.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link href="/agendar">
                            <button className="group relative px-10 py-5 bg-white text-[#1a0510] rounded-full overflow-hidden transition-transform hover:scale-105 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]">
                                <span className="relative z-10 flex items-center gap-3 text-sm tracking-[0.2em] uppercase font-bold">
                                    Agendar Consulta <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </button>
                        </Link>
                        <a href="tel:+351210000000" className="group flex items-center gap-3 px-8 py-4 rounded-full border border-white/10 hover:bg-white/5 transition-all">
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            <span className="text-white/80 group-hover:text-white text-sm tracking-widest uppercase font-medium">
                                +351 210 000 000
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
