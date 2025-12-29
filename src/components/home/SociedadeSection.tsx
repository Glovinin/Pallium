"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function SociedadeSection() {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const yParallax = useTransform(scrollYProgress, [0, 1], [100, -100]);

    return (
        <section ref={sectionRef} className="py-32 md:py-48 bg-[#0F0F0F] text-white overflow-hidden relative" data-theme="dark">
            <div className="container mx-auto px-6 relative z-10">
                {/* Part 1: A Clínica */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-24 md:mb-32">
                    {/* Sticky Label */}
                    <div className="lg:col-span-3 sticky top-32 hidden lg:block">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-4"
                        >
                            <div className="h-[1px] w-12 bg-white/30" />
                            <span className="text-xs font-bold tracking-[0.3em] uppercase opacity-60">A Clínica</span>
                        </motion.div>
                    </div>

                    {/* Main Statement */}
                    <div className="lg:col-span-9">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <h2 className="text-4xl sm:text-5xl md:text-6xl leading-[1.1] font-[var(--font-playfair)] font-medium mb-16 md:mb-24">
                                &quot;Desconstrua quem lhe disseram para ser. Reencontre <span className="text-[#83c5be] italic">quem realmente é</span>.&quot;
                            </h2>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 border-t border-white/10 pt-16">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: 0.2 }}
                            >
                                <p className="text-lg text-white/70 leading-relaxed font-light">
                                    <strong className="text-white font-medium">Desde a sua fundação</strong>, a Pallium PSI, localizada na Praça de Londres em Lisboa, construiu uma reputação de integridade e cuidado sob a direção da Dr.ª Alessandra Morati.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: 0.4 }}
                            >
                                <p className="text-lg text-white/70 leading-relaxed font-light">
                                    A nossa prática integra a psicologia clínica e a neuropsicologia com as mais recentes evidências científicas, garantindo um acompanhamento seguro, ético e focado no seu bem-estar global.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Part 2: A Equipa */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                    {/* Sticky Label Equipa */}
                    <div className="lg:col-span-3 sticky top-32 hidden lg:block">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-4"
                        >
                            <div className="h-[1px] w-12 bg-white/30" />
                            <span className="text-xs font-bold tracking-[0.3em] uppercase opacity-60">A Profissional</span>
                        </motion.div>
                    </div>

                    {/* Team Section Content */}
                    <div className="lg:col-span-9">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.6 }}
                            className="relative group rounded-2xl overflow-hidden"
                        >
                            <div className="relative h-[400px] w-full">
                                <Image
                                    src="/tmokup.jpg"
                                    alt="Consultório Pallium PSI"
                                    fill
                                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                                <div className="absolute bottom-0 left-0 p-8 md:p-12 max-w-2xl">
                                    <h3 className="text-2xl md:text-3xl font-[var(--font-playfair)] text-white mb-4">
                                        Dedicação exclusiva e personalizada.
                                    </h3>
                                    <p className="text-white/80 font-light mb-8 text-lg leading-relaxed">
                                        &quot;A minha abordagem integra a psicologia clínica com as mais recentes evidências científicas, garantindo um acompanhamento personalizado e eficaz para cada fase da vida.&quot;
                                    </p>
                                    <Link href="/sobre">
                                        <button className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-[#006d77] bg-white px-8 py-4 rounded-full hover:bg-[#006d77] hover:text-white transition-all duration-300">
                                            Conhecer a Dr.ª Alessandra <ArrowRight className="w-4 h-4" />
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Parallax Decor Element - Refined (Less "Zoomed") */}
            <motion.div
                style={{ y: yParallax }}
                className="absolute top-1/4 -right-10 w-64 h-64 bg-[#006d77] rounded-full blur-[100px] opacity-20 pointer-events-none mix-blend-screen"
            />
        </section>
    );
}
