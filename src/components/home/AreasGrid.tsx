"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// Simplified list for high-end feel
const areas = [
    { title: "Direito Administrativo e Tributário", id: "administrativo" },
    { title: "Direito do Trabalho", id: "trabalho" },
    { title: "Direito Comercial e Societário", id: "comercial" },
    { title: "Direito Penal", id: "penal" },
    { title: "Direito Europeu", id: "europeu" },
    { title: "Direito de Família", id: "familia" },
    { title: "Direito Civil", id: "civil" },
    { title: "Legalização de Estrangeiros", id: "estrangeiros" },
    { title: "Registos e Notariado", id: "notariado" },
    { title: "Marcas e Patentes", id: "marcas" },
    { title: "Direito do Consumidor", id: "consumidor" },
    { title: "Direito Contra-Ordenacional", id: "contraordenacional" },
];

export function AreasGrid() {
    return (
        <section className="py-32 bg-[#F5F5F7] text-neutral-900" data-theme="dark">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
                    {/* Sticky Header (Desktop) / Normal (Mobile) */}
                    <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit mb-8 lg:mb-0">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-xs font-bold tracking-[0.2em] text-[#3a0c25] uppercase mb-4 md:mb-6 block">Expertise</span>
                            <h2 className="text-4xl md:text-6xl font-[var(--font-playfair)] mb-6 md:mb-8 text-neutral-900">
                                Áreas de<br />Prática.
                            </h2>
                            <p className="text-neutral-500 font-light mb-8 max-w-sm text-sm md:text-base leading-relaxed">
                                Uma abordagem integrada para problemas complexos. Cobrimos o espectro completo das necessidades jurídicas.
                            </p>
                            <Link href="/areas-pratica" className="inline-flex items-center gap-2 border-b border-black pb-1 uppercase tracking-widest text-[10px] md:text-xs font-bold hover:text-[#3a0c25] hover:border-[#3a0c25] transition-colors text-neutral-900">
                                Ver Detalhes <ArrowRight className="w-3 h-3" />
                            </Link>
                        </motion.div>
                    </div>

                    {/* Minimal Interactive List */}
                    <div className="lg:col-span-8">
                        <div className="flex flex-col">
                            {areas.map((area, index) => (
                                <motion.div
                                    key={area.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                >
                                    <Link href={`/areas-pratica/${area.id}`} className="group block py-8 border-b border-neutral-300 hover:border-[#3a0c25] transition-colors duration-500">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-baseline gap-6">
                                                <span className="text-xs font-mono text-neutral-400 group-hover:text-[#3a0c25] transition-colors">{(index + 1).toString().padStart(2, '0')}</span>
                                                <h3 className="text-2xl md:text-4xl font-[var(--font-playfair)] text-neutral-800 group-hover:text-[#3a0c25] group-hover:pl-4 transition-all duration-500">
                                                    {area.title}
                                                </h3>
                                            </div>
                                            <div className="w-12 h-12 rounded-full border border-neutral-200 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:border-[#3a0c25]">
                                                <ArrowRight className="w-4 h-4 text-[#3a0c25] -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
