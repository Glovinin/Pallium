"use client";

import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

export function BapconSection() {
    return (
        <section className="bg-white py-24 px-6 md:px-12 lg:px-24 relative overflow-hidden">
            <div className="container mx-auto max-w-[90rem]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Left Column: Content */}
                    <div className="relative z-10">
                        <span className="text-xs font-bold tracking-[0.2em] text-[#006d77] uppercase mb-4 block">
                            Certificação de Qualidade
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-[var(--font-playfair)] mb-6 leading-tight text-neutral-900">
                            Centro Certificado <span className="text-[#006d77]">Bapcon</span>
                        </h2>

                        <div className="flex items-start gap-4 mb-6">
                            <div className="bg-[#006d77]/10 p-3 rounded-full mt-1">
                                <CheckCircle2 className="w-6 h-6 text-[#006d77]" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-neutral-900 mb-2">Padrões de Excelência</h3>
                                <p className="text-neutral-600 leading-relaxed font-light">
                                    A Pallium PSI é um centro reconhecido e certificado pela Bapcon, garantindo que todas as avaliações seguem os mais rigorosos padrões de qualidade e fiabilidade.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="bg-[#006d77]/10 p-3 rounded-full mt-1">
                                <CheckCircle2 className="w-6 h-6 text-[#006d77]" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-neutral-900 mb-2">Certificado na Hora</h3>
                                <p className="text-neutral-600 leading-relaxed font-light">
                                    Graças à nossa certificação e tecnologia avançada, garantimos a emissão do seu certificado psicotécnico no momento da avaliação.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Images */}
                    <div className="relative">
                        {/* Decorative Background Element - Simplified */}
                        <div className="absolute inset-0 bg-[#006d77] rounded-3xl rotate-3 opacity-10 transform scale-105" />

                        <div className="grid grid-cols-2 gap-4 relative z-10">
                            <div className="space-y-4 pt-8">
                                <div className="aspect-[4/5] relative rounded-2xl overflow-hidden shadow-lg">
                                    <Image
                                        src="/Bapcon1.jpg"
                                        alt="Equipamento Bapcon 1"
                                        fill
                                        className="object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="aspect-[4/5] relative rounded-2xl overflow-hidden shadow-lg">
                                    <Image
                                        src="/Bapcon2.jpg"
                                        alt="Equipamento Bapcon 2"
                                        fill
                                        className="object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
