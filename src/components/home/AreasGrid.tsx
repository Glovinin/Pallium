"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { psicologiaClinicaAreas, neuropsicologiaAreas } from "@/data/areas";

export function AreasGrid() {
    return (
        <section className="py-32 bg-[#F5F5F7] text-neutral-900" data-theme="dark">
            <div className="container mx-auto max-w-[90rem] px-6 md:px-12 lg:px-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
                    {/* Sticky Header (Desktop) / Normal (Mobile) */}
                    <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit mb-8 lg:mb-0">
                        <div>
                            <span className="text-xs font-bold tracking-[0.2em] text-[#006d77] uppercase mb-4 md:mb-6 block">Especialidades</span>
                            <h2 className="text-4xl md:text-6xl font-[var(--font-playfair)] mb-6 md:mb-8 text-neutral-900">
                                Áreas de<br />Intervenção.
                            </h2>
                            <p className="text-neutral-500 font-light mb-8 max-w-sm text-sm md:text-base leading-relaxed">
                                Uma abordagem integrada para o seu bem-estar. Cobrimos diversas áreas da saúde mental.
                            </p>
                            <Link href="/areas-pratica" className="inline-flex items-center gap-2 border-b border-black pb-1 uppercase tracking-widest text-[10px] md:text-xs font-bold hover:text-[#006d77] hover:border-[#006d77] transition-colors text-neutral-900">
                                Ver Detalhes <ArrowRight className="w-3 h-3" />
                            </Link>
                        </div>
                    </div>

                    {/* Minimal Interactive List */}
                    <div className="lg:col-span-8">
                        <div className="flex flex-col space-y-12">
                            {/* Grupo: Psicologia Clínica */}
                            <div>
                                <h3 className="text-sm font-bold tracking-[0.2em] text-neutral-400 uppercase mb-6 ml-2">Psicologia Clínica</h3>
                                <div className="flex flex-col">
                                    {psicologiaClinicaAreas.map((area, index) => (
                                        <div key={area.id}>
                                            <Link href={`/areas-pratica/${area.id}`} className="group block py-8 border-b border-neutral-300 hover:border-[#006d77] transition-colors duration-500">
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-baseline gap-6">
                                                        <span className="text-xs font-mono text-neutral-400 group-hover:text-[#006d77] transition-colors">{(index + 1).toString().padStart(2, '0')}</span>
                                                        <h3 className="text-xl md:text-3xl font-[var(--font-playfair)] text-neutral-800 group-hover:text-[#006d77] group-hover:pl-4 transition-all duration-500">
                                                            {area.title}
                                                        </h3>
                                                    </div>
                                                    <div className="w-12 h-12 rounded-full border border-neutral-200 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:border-[#006d77]">
                                                        <ArrowRight className="w-4 h-4 text-[#006d77] -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Grupo: Neuropsicologia */}
                            <div>
                                <h3 className="text-sm font-bold tracking-[0.2em] text-neutral-400 uppercase mb-6 ml-2">Neuropsicologia</h3>
                                <div className="flex flex-col">
                                    {neuropsicologiaAreas.map((area, index) => (
                                        <div key={area.id}>
                                            <Link href={`/areas-pratica/${area.id}`} className="group block py-8 border-b border-neutral-300 hover:border-[#006d77] transition-colors duration-500">
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-baseline gap-6">
                                                        <span className="text-xs font-mono text-neutral-400 group-hover:text-[#006d77] transition-colors">{(index + 1).toString().padStart(2, '0')}</span>
                                                        <h3 className="text-xl md:text-3xl font-[var(--font-playfair)] text-neutral-800 group-hover:text-[#006d77] group-hover:pl-4 transition-all duration-500">
                                                            {area.title}
                                                        </h3>
                                                    </div>
                                                    <div className="w-12 h-12 rounded-full border border-neutral-200 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:border-[#006d77]">
                                                        <ArrowRight className="w-4 h-4 text-[#006d77] -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
