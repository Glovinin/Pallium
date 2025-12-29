import { PageHeader } from "@/components/layout/PageHeader";
import { Footer } from "@/components/layout/Footer";
import { ArrowLeft, ArrowRight, Phone, Mail, Car, CheckCircle2, Clock, CreditCard, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AvaliacaoCondutoresPage() {
    const backLink = { href: "/areas-pratica", label: "Voltar a Áreas de Prática" };

    return (
        <main className="min-h-screen bg-background">
            <PageHeader
                label="Área de Prática"
                title="Avaliação de Condutores"
                subtitle="Avaliação da aptidão psicológica para condução (Grupos 1 e 2)."
            />

            <section className="py-24 bg-white" data-theme="light">
                <div className="container mx-auto px-6">
                    {/* Breadcrumb / Back Link */}
                    <div className="mb-12">
                        <Link
                            href={backLink.href}
                            className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-[#006d77] transition-colors font-medium uppercase tracking-wider"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            {backLink.label}
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                        {/* Main Content */}
                        <div className="lg:col-span-8">
                            {/* Icon and Title */}
                            <div className="flex items-center gap-4 mb-10">
                                <div className="w-14 h-14 rounded-2xl bg-[#006d77] flex items-center justify-center text-white">
                                    <Car className="w-6 h-6" />
                                </div>
                                <div>
                                    <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#006d77]">Área de Intervenção</span>
                                </div>
                            </div>

                            <div className="prose prose-lg max-w-none text-neutral-600 font-light leading-relaxed">
                                <p className="text-xl md:text-2xl text-neutral-800 mb-8 font-normal">
                                    A avaliação psicológica para condutores é um exame especializado que verifica se uma pessoa possui as competências psicológicas e cognitivas necessárias para conduzir com segurança.
                                </p>
                                <p className="mb-8">
                                    Na Pallium PSI, este serviço é realizado pela <strong>Dr.ª Alessandra Morati</strong>, que possui especialização específica nesta área.
                                </p>

                                <div className="my-12 p-8 bg-neutral-50 rounded-2xl border border-neutral-100">
                                    <h3 className="text-xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
                                        <CheckCircle2 className="w-6 h-6 text-[#006d77]" />
                                        Para Quem é Necessária?
                                    </h3>
                                    <p className="mb-6">A avaliação é dividida em dois grupos de condutores:</p>

                                    <div className="space-y-6">
                                        <div>
                                            <h4 className="font-bold text-neutral-900 mb-2">Grupo 1 (Recomendada)</h4>
                                            <p>Condutores das categorias AM, A1, A2, A, B1, B e BE (motos e veículos ligeiros). Neste caso, a avaliação é recomendada apenas quando indicada na avaliação médica.</p>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-neutral-900 mb-2">Grupo 2 (Obrigatória)</h4>
                                            <p>Este grupo inclui condutores de veículos pesados (categorias C1, C, C1E, CE para mercadorias e D1, D, D1E, DE para passageiros), condutores de táxis e Uber (TVDE), ambulâncias, bombeiros, transporte de doentes, transporte coletivo de crianças, transportes de matérias perigosas (ADR), instrutores e examinadores de condução, além de trocas de cartas estrangeiras ou títulos militares.</p>
                                        </div>
                                    </div>
                                </div>

                                <h3 className="text-2xl font-[var(--font-playfair)] text-neutral-900 mb-6 mt-12">O Que é Avaliado?</h3>
                                <p className="mb-8">
                                    O exame verifica a aptidão psicológica, emocional e comportamental do condutor, incluindo aspectos como:
                                </p>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none pl-0 mb-12">
                                    {[
                                        "Concentração e Atenção",
                                        "Tempos de Reação",
                                        "Capacidade de Decisão",
                                        "Controlo Emocional",
                                        "Comportamento sob Pressão",
                                        "Coordenação Perceptivo-Motora"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-sm font-medium p-3 bg-white border border-neutral-100 rounded-lg shadow-sm">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#006d77]" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                                    <div className="bg-[#F5F5F7] p-6 rounded-xl border-l-4 border-[#006d77]">
                                        <h3 className="text-lg font-bold text-neutral-900 mb-4 flex items-center gap-2">
                                            <Clock className="w-5 h-5 text-[#006d77]" />
                                            Duração e Processo
                                        </h3>
                                        <p className="text-sm mb-4">A avaliação tem uma duração de 40 minutos a 1 hora e inclui:</p>
                                        <ul className="space-y-2 text-sm">
                                            <li className="flex items-start gap-2">
                                                <span className="text-[#006d77] font-bold">•</span>
                                                Realização do exame psicológico
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-[#006d77] font-bold">•</span>
                                                Elaboração do relatório
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-[#006d77] font-bold">•</span>
                                                Entrega do certificado na hora (Modelo IMT)
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="bg-[#006d77] text-white p-6 rounded-xl relative overflow-hidden">
                                        <div className="relative z-10">
                                            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                                                <CreditCard className="w-5 h-5" />
                                                Preço
                                            </h3>
                                            <p className="text-sm opacity-90 mb-6">
                                                Na Pallium PSI, a avaliação psicológica de condutores tem um valor fixo.
                                            </p>
                                            <div className="text-4xl font-bold mb-2">40€</div>
                                            <span className="text-xs opacity-75 uppercase tracking-wider">Valor total com certificado</span>
                                        </div>
                                        <div className="absolute -bottom-6 -right-6 opacity-10">
                                            <CreditCard className="w-32 h-32" />
                                        </div>
                                    </div>
                                </div>


                                <div className="mb-12">
                                    <h3 className="text-2xl font-[var(--font-playfair)] text-neutral-900 mb-4 flex items-center gap-3">
                                        <ShieldCheck className="w-8 h-8 text-[#006d77]" />
                                        Por Que é Importante?
                                    </h3>
                                    <p>
                                        Este tipo de avaliação garante que apenas pessoas psicologicamente aptas estejam ao volante, promovendo a segurança rodoviária e protegendo tanto o condutor quanto os outros utilizadores da estrada.
                                    </p>
                                </div>
                            </div>

                            {/* CTA */}
                            <div className="bg-[#F8F8F8] p-8 md:p-10 rounded-2xl text-center">
                                <h4 className="text-xl font-bold text-neutral-900 mb-4">Precisa de renovar a sua carta?</h4>
                                <p className="text-neutral-600 leading-relaxed font-light mb-8 max-w-2xl mx-auto">
                                    Marque já a sua avaliação psicológica de condutores connosco. Processo rápido, certificado na hora e realizado por especialistas.
                                </p>
                                <Link href="/agendar">
                                    <Button className="rounded-full bg-[#006d77] text-white hover:bg-[#005f68] px-8 h-12 text-sm font-bold uppercase tracking-widest shadow-lg hover:scale-105 transition-all">
                                        Marcar Avaliação Agora
                                    </Button>
                                </Link>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <aside className="lg:col-span-4 order-last lg:order-none">
                            <div className="space-y-6 lg:sticky lg:top-36">
                                {/* Contact Card */}
                                <div className="bg-[#006d77] text-white p-6 lg:p-8 relative overflow-hidden rounded-2xl">
                                    <div className="absolute -bottom-6 -right-6 opacity-10">
                                        <Car className="w-24 h-24" />
                                    </div>
                                    <h3 className="text-lg lg:text-xl font-[var(--font-playfair)] mb-2 relative z-10">
                                        Marcação Rápida
                                    </h3>
                                    <p className="text-white/70 font-light text-xs lg:text-sm mb-6 leading-relaxed relative z-10">
                                        Certificado emitido na hora.
                                    </p>

                                    <div className="space-y-3 relative z-10">
                                        <a
                                            href="tel:+351217958255"
                                            className="flex items-center gap-3 text-white/90 hover:text-white transition-colors group/item"
                                        >
                                            <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center group-hover/item:bg-white group-hover/item:text-[#810E47] transition-all shrink-0">
                                                <Phone className="w-4 h-4" />
                                            </div>
                                            <span className="text-sm font-medium">+351 217 958 255</span>
                                        </a>
                                        <a
                                            href="mailto:geral@palliumpsi.com"
                                            className="flex items-center gap-3 text-white/90 hover:text-white transition-colors group/item"
                                        >
                                            <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center group-hover/item:bg-white group-hover/item:text-[#006d77] transition-all shrink-0">
                                                <Mail className="w-4 h-4" />
                                            </div>
                                            <span className="text-sm font-medium truncate">geral@palliumpsi.com</span>
                                        </a>
                                    </div>

                                    <Link
                                        href="/agendar"
                                        className="mt-6 w-full py-3 bg-white text-[#006d77] text-xs font-bold uppercase tracking-[0.1em] hover:bg-neutral-100 transition-all flex items-center justify-center gap-2 relative z-10 rounded-full"
                                    >
                                        Marcar Consulta
                                        <ArrowRight className="w-3 h-3" />
                                    </Link>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
