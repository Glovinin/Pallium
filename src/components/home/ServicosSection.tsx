"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function ServicosSection() {
    return (
        <section className="bg-white" data-theme="dark">
            <div className="flex flex-col md:flex-row min-h-[80vh]">
                {/* Panel 1: Corporativo */}
                <div className="flex-1 relative group overflow-hidden border-r border-neutral-100">
                    <div className="absolute inset-0 bg-[#0F0F0F] translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[0.22, 1, 0.36, 1]" />

                    <div className="relative z-10 h-full p-12 md:p-24 flex flex-col justify-between transition-colors duration-500 group-hover:text-white text-neutral-900">
                        <div>
                            <span className="text-xs font-bold tracking-[0.2em] uppercase mb-8 block opacity-50">01</span>
                            <h3 className="text-5xl md:text-7xl font-[var(--font-playfair)] mb-6">Empresas</h3>
                            <p className="text-lg md:text-xl font-light opacity-70 max-w-md leading-relaxed">
                                Estruturação societária, fusões, aquisições e conformidade complexa para o mercado global.
                            </p>
                        </div>

                        <div className="mt-12">
                            <Link href="/empresas" className="inline-flex items-center gap-4 text-sm tracking-widest uppercase font-bold group-hover:text-[#ec407a] transition-colors">
                                Explore <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Panel 2: Private */}
                <div className="flex-1 relative group overflow-hidden bg-[#F5F5F7]">
                    <div className="absolute inset-0 bg-[#3a0c25] translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[0.22, 1, 0.36, 1]" />

                    <div className="relative z-10 h-full p-12 md:p-24 flex flex-col justify-between transition-colors duration-500 group-hover:text-white text-neutral-900">
                        <div>
                            <span className="text-xs font-bold tracking-[0.2em] uppercase mb-8 block opacity-50">02</span>
                            <h3 className="text-5xl md:text-7xl font-[var(--font-playfair)] mb-6">Privado</h3>
                            <p className="text-lg md:text-xl font-light opacity-70 max-w-md leading-relaxed">
                                Gestão de património, sucessões e assuntos delicados com discrição absoluta e precisão técnica.
                            </p>
                        </div>

                        <div className="mt-12">
                            <Link href="/privado" className="inline-flex items-center gap-4 text-sm tracking-widest uppercase font-bold group-hover:text-white transition-colors">
                                Explore <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
