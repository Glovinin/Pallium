"use client";

import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import Image from "next/image";
import { CheckCircle2, GraduationCap, Award, BookOpen } from "lucide-react";

export default function EquipaPage() {
    return (
        <main className="min-h-screen bg-background">
            <PageHeader
                label="Sobre Nós"
                title="A Profissional"
                subtitle="Conheça a Dr.ª Alessandra Morati, a psicóloga responsável pela Pallium PSI."
            />

            {/* Profile Section */}
            <section className="bg-white py-24 relative" data-theme="light">
                <div className="container mx-auto px-6 md:px-12 lg:px-24 max-w-[90rem]">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

                        {/* Left Column: Image & Quick Stats */}
                        <div className="lg:col-span-5 lg:sticky lg:top-32">
                            <div className="relative rounded-[2rem] overflow-hidden aspect-[3/4] shadow-2xl mb-8">
                                <Image
                                    src="/tmokup.jpg"
                                    alt="Dr.ª Alessandra Morati"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                <div className="absolute bottom-8 left-8 text-white">
                                    <div className="text-sm font-bold uppercase tracking-widest mb-1 opacity-80">Diretora Clínica</div>
                                    <h3 className="text-2xl font-[var(--font-playfair)]">Dr.ª Alessandra Morati</h3>
                                </div>
                            </div>

                            {/* Credentials */}
                            <div className="bg-[#F5F5F7] rounded-3xl p-8 space-y-6">
                                <h4 className="font-bold text-neutral-900 flex items-center gap-2">
                                    <Award className="w-5 h-5 text-[#006d77]" />
                                    Credenciais
                                </h4>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3 text-sm text-neutral-600">
                                        <CheckCircle2 className="w-4 h-4 text-[#006d77] mt-0.5 shrink-0" />
                                        <span>Membro Efetivo da Ordem dos Psicólogos Portugueses (OPP)</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-sm text-neutral-600">
                                        <CheckCircle2 className="w-4 h-4 text-[#006d77] mt-0.5 shrink-0" />
                                        <span>Certificação Europeia de Psicologia (EuroPsy)</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Right Column: Bio & Details */}
                        <div className="lg:col-span-7 space-y-12">
                            <div>
                                <h2 className="text-4xl lg:text-5xl font-[var(--font-playfair)] text-neutral-900 mb-6 leading-tight">
                                    Psicóloga Clínica e <span className="text-[#006d77] italic">Neuropsicóloga.</span>
                                </h2>
                                <div className="space-y-6 text-lg text-neutral-600 font-light leading-relaxed">
                                    <p>
                                        A Dr.ª Alessandra Morati é a fundadora e responsável pela Pallium PSI. Com uma abordagem ética, empática e humanizada, dedica-se a compreender e transformar o comportamento humano, valorizando o cuidado psicológico como ferramenta essencial de mudança e bem-estar.
                                    </p>
                                    <p>
                                        A sua prática clínica integra a psicologia clínica e a neuropsicologia, oferecendo um acompanhamento personalizado que respeita a singularidade de cada pessoa. O seu objetivo é promover uma melhor qualidade de vida individual e coletiva através de intervenções baseadas na evidência.
                                    </p>
                                </div>
                            </div>

                            <div className="w-full h-px bg-neutral-100" />

                            {/* Academic Formation */}
                            <div>
                                <h3 className="text-2xl font-[var(--font-playfair)] text-neutral-900 mb-6 flex items-center gap-3">
                                    <GraduationCap className="w-6 h-6 text-[#006d77]" />
                                    Formação Académica
                                </h3>
                                <ul className="space-y-4">
                                    <li className="bg-[#F5F5F7]/50 p-4 rounded-xl border border-neutral-100">
                                        <strong className="block text-neutral-900 text-sm mb-1">Mestrado em Psicologia Clínica e da Saúde</strong>
                                        <span className="text-sm text-neutral-500">Especialização avançada em intervenção clínica e saúde mental.</span>
                                    </li>
                                    <li className="bg-[#F5F5F7]/50 p-4 rounded-xl border border-neutral-100">
                                        <strong className="block text-neutral-900 text-sm mb-1">Pós-Graduação em Neuropsicologia Clínica</strong>
                                        <span className="text-sm text-neutral-500">Avaliação e Reabilitação Neuropsicológica.</span>
                                    </li>
                                    <li className="bg-[#F5F5F7]/50 p-4 rounded-xl border border-neutral-100">
                                        <strong className="block text-neutral-900 text-sm mb-1">Licenciatura em Psicologia</strong>
                                        <span className="text-sm text-neutral-500">Formação base completa em ciências psicológicas.</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Specializations */}
                            <div>
                                <h3 className="text-2xl font-[var(--font-playfair)] text-neutral-900 mb-6 flex items-center gap-3">
                                    <BookOpen className="w-6 h-6 text-[#006d77]" />
                                    Especializações Avançadas
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="p-4 rounded-xl border border-neutral-100 hover:border-[#006d77]/30 transition-colors">
                                        <div className="text-[#006d77] text-xs font-bold uppercase tracking-wider mb-2">Trânsito</div>
                                        <div className="font-medium text-neutral-900">Avaliação Psicológica de Condutores</div>
                                    </div>
                                    <div className="p-4 rounded-xl border border-neutral-100 hover:border-[#006d77]/30 transition-colors">
                                        <div className="text-[#006d77] text-xs font-bold uppercase tracking-wider mb-2">Segurança</div>
                                        <div className="font-medium text-neutral-900">Avaliação de Pessoal de Vigilância</div>
                                    </div>
                                    <div className="p-4 rounded-xl border border-neutral-100 hover:border-[#006d77]/30 transition-colors">
                                        <div className="text-[#006d77] text-xs font-bold uppercase tracking-wider mb-2">Saúde</div>
                                        <div className="font-medium text-neutral-900">Cuidados Paliativos</div>
                                    </div>
                                    <div className="p-4 rounded-xl border border-neutral-100 hover:border-[#006d77]/30 transition-colors">
                                        <div className="text-[#006d77] text-xs font-bold uppercase tracking-wider mb-2">Intervenção</div>
                                        <div className="font-medium text-neutral-900">Problemas Ligados ao Álcool</div>
                                    </div>
                                </div>
                            </div>

                            {/* Areas of Activity */}
                            <div>
                                <h3 className="text-2xl font-[var(--font-playfair)] text-neutral-900 mb-6">Áreas de Atuação</h3>
                                <div className="prose prose-neutral max-w-none text-neutral-600 font-light text-sm">
                                    <ul className="grid grid-cols-1 gap-3 list-none pl-0">
                                        <li className="flex gap-3">
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#006d77] mt-2 shrink-0" />
                                            <span><strong>Psicologia Clínica e da Saúde:</strong> Diagnóstico, psicoterapia para ansiedade, depressão e luto.</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#006d77] mt-2 shrink-0" />
                                            <span><strong>Neuropsicologia Clínica:</strong> Avaliação e reabilitação de funções cognitivas (memória, atenção).</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#006d77] mt-2 shrink-0" />
                                            <span><strong>Consulta do Imigrante:</strong> Apoio especializado na adaptação cultural e gestão de stress migratório.</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#006d77] mt-2 shrink-0" />
                                            <span><strong>Promoção de Autoconhecimento:</strong> Crescimento pessoal e compreensão de conflitos internos.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
