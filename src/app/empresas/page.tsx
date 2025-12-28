"use client";

import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { areas } from "@/data/areas";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function EmpresasPage() {
    // Filter services relevant to Companies
    const corporateIds = ["comercial", "trabalho", "administrativo", "penal", "marcas", "contraordenacional"];
    const corporateServices = areas.filter(area => corporateIds.includes(area.id));

    return (
        <main className="min-h-screen bg-white">
            <PageHeader
                label="Serviços"
                title="Empresas"
                subtitle="Estruturação societária, fusões, aquisições e conformidade complexa para o mercado global."
                backgroundImage="/pagehero.jpg"
            />

            <section className="py-24 bg-[#fafafa]" data-theme="light">
                <div className="container mx-auto px-6">
                    {/* Introduction */}
                    <div className="max-w-4xl mb-20 text-center mx-auto">
                        <h2 className="text-3xl md:text-5xl font-[var(--font-playfair)] mb-8 text-neutral-900 leading-tight">
                            Soluções jurídicas estratégicas para <span className="text-[#810E47]">negócios de excelência.</span>
                        </h2>
                        <p className="text-lg text-neutral-500 font-light leading-relaxed max-w-2xl mx-auto">
                            Apoiamos empresas nacionais e internacionais em todas as fases do seu ciclo de vida, garantindo segurança jurídica e potenciando o crescimento.
                        </p>
                    </div>

                    {/* Services Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {corporateServices.map((area, index) => (
                            <Link
                                key={area.id}
                                href={`/areas-pratica/${area.id}?from=empresas`}
                                className="group relative p-10 bg-white border border-neutral-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 rounded-sm"
                            >
                                <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity">
                                    <span className="text-7xl font-[var(--font-playfair)] font-bold text-black">
                                        {(index + 1).toString().padStart(2, '0')}
                                    </span>
                                </div>

                                <div className="relative z-10 text-center flex flex-col items-center">
                                    <div className="w-16 h-16 rounded-full bg-[#fafafa] flex items-center justify-center mb-6 text-[#810E47] group-hover:bg-[#810E47] group-hover:text-white transition-colors duration-500">
                                        <area.icon className="w-7 h-7 stroke-1" />
                                    </div>

                                    <h3 className="text-xl font-[var(--font-playfair)] mb-4 text-neutral-900">
                                        {area.title}
                                    </h3>

                                    <p className="text-sm text-neutral-500 mb-8 leading-relaxed font-light">
                                        {area.description}
                                    </p>

                                    <div className="mt-auto pt-6 border-t border-neutral-50 w-full flex justify-center">
                                        <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#810E47] group-hover:underline underline-offset-4">
                                            Detalhes <ArrowRight className="w-4 h-4" />
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 bg-[#0F0F0F] text-white">
                <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="flex-1">
                        <span className="text-white/40 font-bold tracking-widest uppercase text-xs mb-4 block">Parceria Estratégica</span>
                        <h2 className="text-4xl font-[var(--font-playfair)] mb-6">
                            Pronto para impulsionar o seu negócio?
                        </h2>
                        <p className="text-white/60 font-light text-lg">
                            Agende uma reunião com a nossa equipa de corporate e descubra como podemos valorizar a sua empresa.
                        </p>
                    </div>
                    <Link href="/contactos">
                        <button className="px-10 py-5 bg-white text-[#0F0F0F] text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#810E47] hover:text-white transition-colors rounded-full shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                            Falar com Especialista
                        </button>
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
