"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import { Breadcrumb } from "@/components/ui/Breadcrumb";

import Image from "next/image";

interface PageHeaderProps {
    title: string;
    subtitle?: string;
    label?: string;
    image?: string;
    backgroundImage?: string;
}

export function PageHeader({ title, subtitle, label, image, backgroundImage = "/heropage1.jpg" }: PageHeaderProps) {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollY } = useScroll();
    const finalImage = image || backgroundImage;

    // Parallax logic matching HeroInstitucional
    const yText = useTransform(scrollY, [0, 300], [0, 100]);
    const opacityText = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <section
            ref={containerRef}
            className="relative h-[60vh] min-h-[500px] w-full flex items-center justify-center overflow-hidden bg-[#002b30]"
            data-theme="dark"
        >
            {/* --- Background Layer --- */}
            {finalImage && (
                <div className="absolute inset-0 z-0">
                    <Image
                        src={finalImage}
                        alt="Hero Background"
                        fill
                        className="object-cover"
                        priority
                    />

                    {/* Sophisticated Overlay System (Matching HeroInstitucional) */}
                    {/* 1. Base warmth tint */}
                    <div className="absolute inset-0 bg-[#002b30]/60 mix-blend-multiply" />

                    {/* 2. Gradient Maps for text legibility and focus */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70" />

                    {/* 3. Radial vignette for focus */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,43,48,0.5)_100%)]" />
                </div>
            )}

            {/* --- Content Layer --- */}
            <motion.div
                style={{ y: yText, opacity: opacityText }}
                className="relative z-10 container mx-auto px-6 flex flex-col items-center justify-center text-center h-full pt-20"
            >
                {label && (
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-[#83c5be] uppercase tracking-[0.2em] text-sm font-medium mb-4"
                    >
                        {label}
                    </motion.span>
                )}
                {/* Title */}
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="font-[var(--font-playfair)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-[0.95] tracking-tight drop-shadow-sm mb-6 text-balance"
                >
                    {title}
                </motion.h1>

                {/* Subtitle */}
                {subtitle && (
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="max-w-xl mx-auto text-sm md:text-lg text-white/80 font-light leading-relaxed tracking-wide text-pretty"
                    >
                        {subtitle}
                    </motion.p>
                )}
            </motion.div>

            {/* Breadcrumb - Positioned at Bottom */}
            <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center">
                <Breadcrumb theme="dark" />
            </div>
        </section>
    );
}
