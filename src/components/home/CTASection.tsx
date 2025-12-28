"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function CTASection() {
    return (
        <section className="py-32 bg-[#1a0510] relative overflow-hidden flex items-center justify-center min-h-[50vh]" data-theme="dark">
            {/* Background Texture - simple grain */}
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#3a0c25]/40 to-transparent" />

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto"
                >
                    <h2 className="text-4xl md:text-6xl font-[var(--font-playfair)] text-white mb-8 leading-tight">
                        Compromisso com cada cliente.<br />
                        <span className="text-white/50 italic">Dedicação a cada caso.</span>
                    </h2>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">
                        <Link href="/agendar">
                            <button className="px-10 py-4 bg-white text-[#3a0c25] text-sm tracking-[0.2em] uppercase font-bold transition-transform hover:scale-105 rounded-full">
                                Agendar Consulta
                            </button>
                        </Link>
                        <a href="tel:+351217958255" className="text-white/70 hover:text-white text-sm tracking-[0.1em] uppercase border-b border-transparent hover:border-white transition-all pb-1">
                            +351 217 958 255
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
