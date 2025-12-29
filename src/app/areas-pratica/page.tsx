"use client";


import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { ArrowRight, Brain, Heart } from "lucide-react";
import { psicologiaClinicaAreas, neuropsicologiaAreas } from "@/data/areas";
import Image from "next/image";

// Component for rendering area cards
const AreaCard = ({ area, index }: { area: typeof psicologiaClinicaAreas[0]; index: number }) => (
    <Link
        href={`/areas-pratica/${area.id}`}
        className="group relative overflow-hidden bg-white border border-neutral-100 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.1)] transition-all duration-500 flex flex-col"
    >
        {/* Top accent bar */}
        <div className="h-1 bg-gradient-to-r from-[#006d77] to-[#83c5be] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

        {/* Card content */}
        <div className="p-6 flex flex-col flex-1">
            {/* Header with icon and number */}
            <div className="flex items-start justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-[#F5F5F7] text-[#006d77] group-hover:bg-[#006d77] group-hover:text-white flex items-center justify-center transition-all duration-500">
                    <area.icon className="w-5 h-5" />
                </div>
                <span className="text-3xl font-[var(--font-playfair)] font-bold text-neutral-100 group-hover:text-[#006d77]/10 transition-colors">
                    {(index + 1).toString().padStart(2, '0')}
                </span>
            </div>

            {/* Title */}
            <h2 className="text-lg font-semibold text-neutral-900 group-hover:text-[#006d77] transition-colors mb-3 leading-tight">
                {area.title}
            </h2>

            {/* Description */}
            <p className="text-sm text-neutral-500 font-light leading-relaxed mb-5 flex-1">
                {area.description}
            </p>

            {/* Services preview - show first 3 items */}
            <ul className="space-y-2 pt-4 border-t border-neutral-100">
                {area.items.slice(0, 3).map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                        <ArrowRight className="w-3 h-3 text-[#006d77] opacity-40 group-hover:opacity-100 transition-opacity shrink-0" />
                        <span className="text-xs text-neutral-600 group-hover:text-neutral-800 transition-colors truncate">
                            {item.title}
                        </span>
                    </li>
                ))}
                {area.items.length > 3 && (
                    <li className="text-xs text-[#006d77] font-medium pt-1">
                        + {area.items.length - 3} serviços
                    </li>
                )}
            </ul>
        </div>

        {/* Footer with CTA */}
        <div className="px-6 py-4 bg-neutral-50 group-hover:bg-[#006d77] transition-colors duration-500">
            <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400 group-hover:text-white transition-colors flex items-center gap-2">
                Ver detalhes
                <ArrowRight className="w-3 h-3 transform group-hover:translate-x-1 transition-transform" />
            </span>
        </div>
    </Link>
);

export default function AreasPage() {
    return (
        <main className="min-h-screen bg-background">
            <PageHeader
                label="Especialidades"
                title="Áreas de Intervenção"
                subtitle="A Pallium PSI oferece um acompanhamento especializado em diversas áreas da saúde mental, adaptado às suas necessidades."
            />

            {/* Psicologia Clínica Section */}
            <section className="py-24 bg-[#fafafa]" data-theme="light">
                <div className="container mx-auto max-w-[90rem] px-6 md:px-12 lg:px-24">
                    {/* Section Header */}
                    <div className="flex items-center gap-4 mb-12">
                        <div className="w-14 h-14 rounded-2xl bg-[#006d77] flex items-center justify-center text-white">
                            <Heart className="w-6 h-6" />
                        </div>
                        <div>
                            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#006d77]">Tema</span>
                            <h2 className="text-2xl md:text-3xl font-[var(--font-playfair)] text-neutral-900">Psicologia Clínica</h2>
                        </div>
                    </div>

                    {/* Grid with uniform cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {psicologiaClinicaAreas.map((area, index) => (
                            <AreaCard key={area.id} area={area} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Neuropsicologia Section */}
            <section className="py-24 bg-white border-t border-neutral-100" data-theme="light">
                <div className="container mx-auto max-w-[90rem] px-6 md:px-12 lg:px-24">
                    {/* Section Header */}
                    <div className="flex items-center gap-4 mb-12">
                        <div className="w-14 h-14 rounded-2xl bg-[#006d77] flex items-center justify-center text-white">
                            <Brain className="w-6 h-6" />
                        </div>
                        <div>
                            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#006d77]">Tema</span>
                            <h2 className="text-2xl md:text-3xl font-[var(--font-playfair)] text-neutral-900">Neuropsicologia</h2>
                        </div>
                    </div>

                    {/* Grid with uniform cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {neuropsicologiaAreas.map((area, index) => (
                            <AreaCard key={area.id} area={area} index={index} />
                        ))}
                    </div>
                </div>
            </section>



            {/* Tabela de Preços Section */}
            <section id="precos" className="py-24 bg-white border-t border-neutral-100">
                <div className="container mx-auto max-w-5xl px-6 md:px-12">
                    <div className="text-center mb-16">
                        <span className="text-[#006d77] font-bold text-xs tracking-[0.2em] uppercase mb-4 block">Transparência</span>
                        <h2 className="text-3xl md:text-4xl font-[var(--font-playfair)] text-neutral-900 mb-6">
                            Tabela de Preços
                        </h2>
                        <div className="w-20 h-1 bg-[#006d77] mx-auto rounded-full opacity-20" />
                    </div>

                    {/* Desktop Table View */}
                    <div className="hidden md:block overflow-hidden rounded-3xl border border-neutral-100 shadow-xl shadow-neutral-100/50">
                        <table className="w-full text-left text-sm">
                            <thead className="bg-[#002b30] text-white">
                                <tr>
                                    <th className="py-6 px-8 font-playfair text-lg font-medium">Especialidade / Serviço</th>
                                    <th className="py-6 px-8 font-bold uppercase tracking-wider text-xs w-48 text-center bg-white/5">1.ª Consulta</th>
                                    <th className="py-6 px-8 font-bold uppercase tracking-wider text-xs w-48 text-center">Seguintes</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-neutral-100">
                                <tr className="hover:bg-neutral-50 transition-colors">
                                    <td className="py-6 px-8 font-medium text-neutral-900">Consulta de Psicologia Clínica</td>
                                    <td className="py-6 px-8 text-center text-[#006d77] font-bold">40€</td>
                                    <td className="py-6 px-8 text-center text-neutral-600">35€</td>
                                </tr>
                                <tr className="hover:bg-neutral-50 transition-colors">
                                    <td className="py-6 px-8 font-medium text-neutral-900">Avaliação Psicológica</td>
                                    <td className="py-6 px-8 text-center text-[#006d77] font-bold">55€</td>
                                    <td className="py-6 px-8 text-center text-neutral-400">—</td>
                                </tr>
                                <tr className="hover:bg-neutral-50 transition-colors">
                                    <td className="py-6 px-8 font-medium text-neutral-900">Avaliação Neuropsicológica</td>
                                    <td className="py-6 px-8 text-center text-[#006d77] font-bold">60€</td>
                                    <td className="py-6 px-8 text-center text-neutral-400">—</td>
                                </tr>
                                <tr className="hover:bg-neutral-50 transition-colors">
                                    <td className="py-6 px-8 font-medium text-neutral-900">Consulta de Reabilitação Neuropsicológica</td>
                                    <td className="py-6 px-8 text-center text-[#006d77] font-bold">35€</td>
                                    <td className="py-6 px-8 text-center text-neutral-600">30€</td>
                                </tr>
                                <tr className="hover:bg-neutral-50 transition-colors">
                                    <td className="py-6 px-8 font-medium text-neutral-900">Avaliação Psicológica de Condutores</td>
                                    <td className="py-6 px-8 text-center text-[#006d77] font-bold">40€</td>
                                    <td className="py-6 px-8 text-center text-neutral-400">—</td>
                                </tr>
                                <tr className="bg-[#F5F5F7]">
                                    <td className="py-6 px-8 font-medium text-neutral-900 flex flex-col">
                                        <span>Relatórios de Avaliação (Psicológica/Neuropsicológica)</span>
                                        <span className="text-xs text-neutral-500 font-light mt-1">* varia consoante complexidade (síntese vs complexo)</span>
                                    </td>
                                    <td colSpan={2} className="py-6 px-8 text-center font-bold text-[#006d77]">
                                        25€ <span className="text-neutral-400 font-light mx-2">a</span> 180€
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Mobile Card View */}
                    <div className="md:hidden space-y-4">
                        {[
                            { name: "Consulta de Psicologia Clínica", first: "40€", subsequent: "35€" },
                            { name: "Avaliação Psicológica", first: "55€", subsequent: "—" },
                            { name: "Avaliação Neuropsicológica", first: "60€", subsequent: "—" },
                            { name: "Consulta de Reabilitação Neuropsicológica", first: "35€", subsequent: "30€" },
                            { name: "Avaliação Psicológica de Condutores", first: "40€", subsequent: "—" },
                        ].map((item, index) => (
                            <div key={index} className="bg-white p-5 rounded-2xl border border-neutral-100 shadow-sm flex flex-col gap-4">
                                <h3 className="font-[var(--font-playfair)] text-lg font-bold text-neutral-900 leading-tight">
                                    {item.name}
                                </h3>
                                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-neutral-100">
                                    <div>
                                        <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-1 block">1.ª Consulta</span>
                                        <span className="text-xl font-bold text-[#006d77]">{item.first}</span>
                                    </div>
                                    <div>
                                        <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-1 block">Seguintes</span>
                                        <span className={`text-lg font-medium ${item.subsequent === '—' ? 'text-neutral-300' : 'text-neutral-600'}`}>
                                            {item.subsequent}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* Relatórios Card Mobile */}
                        <div className="bg-[#F5F5F7] p-5 rounded-2xl border border-neutral-100 shadow-sm">
                            <h3 className="font-[var(--font-playfair)] text-lg font-bold text-neutral-900 leading-tight mb-2">
                                Relatórios de Avaliação
                                <span className="block text-sm font-sans font-normal text-neutral-500 mt-1">(Psicológica/Neuropsicológica)</span>
                            </h3>
                            <p className="text-xs text-neutral-400 mb-4">* varia consoante complexidade</p>
                            <div className="pt-4 border-t border-black/5">
                                <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-1 block">Valor</span>
                                <span className="text-xl font-bold text-[#006d77]">
                                    25€ <span className="text-neutral-400 font-normal text-sm mx-1">a</span> 180€
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
