"use client";

import { Car, CheckCircle2, Clock, CreditCard, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function ServicosSection() {
    return (
        <section className="bg-[#F5F5F7] text-neutral-900 overflow-hidden py-24 px-6 md:px-12 lg:px-24 relative" data-theme="light">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,109,119,0.03)_0%,transparent_100%)]" />

            <div className="container mx-auto max-w-[90rem] relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-32 items-center">

                    {/* Left Column: Title & Intro */}
                    <div>
                        <div>
                            <span className="text-xs font-bold tracking-[0.2em] text-[#006d77] uppercase mb-4 block">
                                Destaque
                            </span>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-[var(--font-playfair)] mb-8 leading-tight text-neutral-900">
                                Avaliação Psicológica<br />
                                <span className="text-[#006d77]">para Condutores</span>
                            </h2>
                            <p className="text-lg text-neutral-600 leading-relaxed font-light mb-8 max-w-xl">
                                Um exame especializado que verifica a aptidão psicológica e cognitiva para conduzir com segurança. Realizado pela <strong className="text-neutral-900">Dr.ª Alessandra Morati</strong>.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href="/areas-pratica/avaliacao-condutores">
                                    <Button className="bg-[#006d77] hover:bg-[#005f68] text-white rounded-full px-8 py-6 text-sm font-bold tracking-widest uppercase transition-all hover:scale-105 shadow-lg shadow-[#006d77]/20">
                                        Saber Mais
                                    </Button>
                                </Link>
                                <Link href="/agendar">
                                    <Button variant="outline" className="border-neutral-300 text-neutral-900 hover:bg-neutral-100 rounded-full px-8 py-6 text-sm font-bold tracking-widest uppercase bg-transparent">
                                        Marcar Agora
                                    </Button>
                                </Link>
                            </div>
                        </div>

                        {/* Quick Specs */}
                        <div className="grid grid-cols-2 gap-6 mt-16 border-t border-neutral-200 pt-8">
                            <div>
                                <h4 className="flex items-center gap-2 text-sm font-bold text-neutral-900 mb-2">
                                    <Clock className="w-4 h-4 text-[#006d77]" /> Duração
                                </h4>
                                <p className="text-neutral-600 text-sm">40 min - 1 hora</p>
                            </div>
                            <div>
                                <h4 className="flex items-center gap-2 text-sm font-bold text-neutral-900 mb-2">
                                    <CreditCard className="w-4 h-4 text-[#006d77]" /> Preço
                                </h4>
                                <p className="text-neutral-600 text-sm">40€ (Valor fixo)</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Cards/Details */}
                    <div className="grid gap-6">
                        {/* Card 1: Groups */}
                        <div className="bg-white border border-neutral-100 p-8 rounded-3xl hover:shadow-lg transition-all group">
                            <Car className="w-8 h-8 text-[#006d77] mb-4 group-hover:scale-110 transition-transform" />
                            <h3 className="text-xl font-[var(--font-playfair)] mb-2 text-neutral-900">Para Quem?</h3>
                            <p className="text-neutral-500 text-sm leading-relaxed mb-4">
                                <strong>Grupo 1:</strong> Ligeiros e Motos (quando indicado).<br />
                                <strong>Grupo 2:</strong> Pesados, TVDE, Táxis, Ambulâncias, Instrutores (Obrigatória).
                            </p>
                        </div>

                        {/* Card 2: What is evaluated */}
                        <div className="bg-white border border-neutral-100 p-8 rounded-3xl hover:shadow-lg transition-all group">
                            <ShieldCheck className="w-8 h-8 text-[#006d77] mb-4 group-hover:scale-110 transition-transform" />
                            <h3 className="text-xl font-[var(--font-playfair)] mb-2 text-neutral-900">O Que Avaliamos?</h3>
                            <p className="text-neutral-500 text-sm leading-relaxed">
                                Concentração, tempos de reação, capacidade de decisão, controlo emocional e comportamento sob pressão.
                            </p>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}
