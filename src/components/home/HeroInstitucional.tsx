"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useIntro } from "@/context/IntroContext";

export function HeroInstitucional() {
    const { isIntroComplete, setIntroComplete, shouldRunIntro } = useIntro();
    // Phases: 'video' -> 'text1' ("Olá") -> 'text2' ("Seja bem-vindo") -> 'done'
    const [introPhase, setIntroPhase] = useState<'video' | 'text1' | 'text2' | 'done'>('video');

    useEffect(() => {
        if (!shouldRunIntro) {
            setIntroPhase('done');
            return;
        }

        // Slower & Premium Timeline
        // 0ms: Video only
        // 500ms: "Olá."
        // 2500ms: "Seja bem-vindo."
        // 5000ms: Complete

        const t1 = setTimeout(() => setIntroPhase('text1'), 500);
        const t2 = setTimeout(() => setIntroPhase('text2'), 2500);
        const t3 = setTimeout(() => {
            setIntroComplete(true);
            setIntroPhase('done');
        }, 5000);

        return () => {
            clearTimeout(t1);
            clearTimeout(t2);
            clearTimeout(t3);
        };
    }, [shouldRunIntro, setIntroComplete]);

    const showIntroContent = introPhase === 'text1' || introPhase === 'text2';
    const showMainContent = introPhase === 'done';

    // Dynamic text based on phase
    const introText = introPhase === 'text1' ? "Olá." : "Seja bem-vindo.";

    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#1a0510]">
            {/* --- Background Layer --- */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover scale-105"
                >
                    <source src="/video/herovideo1.webm" type="video/webm" />
                </video>

                {/* Sophisticated Overlay System */}
                <div className="absolute inset-0 bg-[#3a0c25]/40 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(45,10,30,0.4)_100%)]" />
            </div>

            {/* --- Content Layer --- */}
            <div className="relative z-10 container mx-auto px-6 flex flex-col items-center justify-center text-center h-full pt-20">
                <AnimatePresence mode="wait">
                    {showIntroContent && (
                        <motion.div
                            key={introPhase} // Changed key to trigger exit/enter on text change
                            initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                            exit={{ opacity: 0, scale: 1.05, filter: "blur(20px)" }}
                            transition={{ duration: 0.5, ease: "easeOut" }} // Faster transitions
                            className="absolute inset-0 flex items-center justify-center"
                        >
                            <h2 className="font-[var(--font-playfair)] text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-white leading-[0.95] tracking-tight drop-shadow-2xl">
                                {introText}
                            </h2>
                        </motion.div>
                    )}

                    {showMainContent && (
                        <motion.div
                            key="main-content"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                            className="flex flex-col items-center"
                        >
                            {/* Top Label */}
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.2 }}
                                className="mb-12 overflow-hidden"
                            >
                                <span className="inline-block py-1 px-4 border border-white/20 rounded-full bg-white/5 backdrop-blur-md text-[10px] md:text-xs font-medium tracking-[0.25em] text-white/80 uppercase">
                                    Sociedade de Advogados
                                </span>
                            </motion.div>

                            {/* Main Title */}
                            <div className="relative mb-8">
                                <motion.h1
                                    initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
                                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                                    className="font-[var(--font-playfair)] text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-white leading-[0.95] tracking-tight drop-shadow-2xl"
                                >
                                    WANZELLER
                                </motion.h1>
                                <motion.div
                                    initial={{ opacity: 0, scaleX: 0 }}
                                    animate={{ opacity: 1, scaleX: 1 }}
                                    transition={{ duration: 1.5, delay: 0.5, ease: "circOut" }}
                                    className="flex items-center justify-center gap-6 mt-4 md:mt-6"
                                >
                                    <div className="h-[1px] w-8 md:w-20 bg-white/30" />
                                    <span className="font-[var(--font-inter)] text-sm md:text-xl font-light tracking-[0.4em] text-white/90 uppercase">
                                        & Associados
                                    </span>
                                    <div className="h-[1px] w-8 md:w-20 bg-white/30" />
                                </motion.div>
                            </div>

                            {/* Slogan */}
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1, delay: 0.8 }}
                                className="max-w-xl mx-auto text-sm md:text-base text-white/70 font-light leading-relaxed mb-12 tracking-wide"
                            >
                                Excelência jurídica e visão estratégica
                                <span className="mx-3 text-white/30">•</span>
                                Desde 2009
                            </motion.p>

                            {/* Actions */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 1 }}
                                className="flex flex-col sm:flex-row items-center gap-6"
                            >
                                <Link href="/agendar">
                                    <button className="group relative px-10 py-4 bg-white text-[#3a0c25] text-xs md:text-sm tracking-[0.2em] uppercase font-bold transition-all hover:bg-[#ffeef6] shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] rounded-full">
                                        Marcar Consulta
                                    </button>
                                </Link>
                                <Link href="/areas-pratica">
                                    <button className="group px-10 py-4 border border-white/20 text-white text-xs md:text-sm tracking-[0.2em] uppercase font-medium hover:bg-white/5 hover:border-white/40 transition-all backdrop-blur-sm w-full sm:w-auto rounded-full">
                                        Áreas de Prática
                                    </button>
                                </Link>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* --- Scroll Indicator (Minimal) --- */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-50 mix-blend-screen"
            >
                <div className="w-[1px] h-12 bg-white/10 overflow-hidden relative">
                    <motion.div
                        animate={{ y: ["-100%", "100%"] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 w-full h-full bg-gradient-to-b from-transparent via-white to-transparent"
                    />
                </div>
            </motion.div>
        </section>
    );
}
