"use client";


import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { ArrowRight } from "lucide-react";
import { areas } from "@/data/areas";

export default function AreasPage() {
    return (
        <main className="min-h-screen bg-background">
            <PageHeader
                label="Áreas de Atuação"
                title="Áreas de Prática"
                subtitle="A W&A possui larga experiência em diversos setores do direito, oferecendo soluções jurídicas completas e personalizadas."
                backgroundImage="/pagehero.jpg"
            />

            {/* Premium Grid Layout */}
            <section className="py-24 bg-[#fafafa]" data-theme="light">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
                        {areas.map((area, index) => (
                            <Link
                                key={area.id}
                                href={`/areas-pratica/${area.id}`}
                                className={`
                                    group relative overflow-hidden p-10 
                                    border border-neutral-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)]
                                    hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-500
                                    flex flex-col
                                    ${area.size === 'large' ? 'lg:col-span-2 lg:aspect-auto' : ''}
                                    ${area.size === 'wide'
                                        ? 'lg:col-span-3 bg-[#1a0510] text-white hover:bg-[#250718] border-none'
                                        : 'bg-white hover:border-[#810E47]/10'
                                    }
                                    ${area.size === 'tall' ? 'lg:row-span-2' : ''}
                                `}
                            >
                                {/* Decorative Number */}
                                <span className={`
                                    absolute top-6 right-8 text-6xl font-[var(--font-playfair)] font-bold opacity-[0.03] select-none
                                    ${area.size === 'wide' ? 'text-white opacity-[0.05]' : ''}
                                `}>
                                    {(index + 1).toString().padStart(2, '0')}
                                </span>

                                {/* Icon */}
                                <div className={`
                                    w-14 h-14 rounded-2xl flex items-center justify-center mb-8 shrink-0
                                    transition-colors duration-500
                                    ${area.size === 'wide'
                                        ? 'bg-white/10 text-white'
                                        : 'bg-[#F5F5F7] text-[#810E47] group-hover:bg-[#810E47] group-hover:text-white'
                                    }
                                `}>
                                    <area.icon className="w-6 h-6" />
                                </div>

                                {/* Content */}
                                <div className="flex-1">
                                    <h2 className={`
                                        text-2xl md:text-3xl font-[var(--font-playfair)] mb-4
                                        ${area.size === 'wide' ? 'text-white' : 'text-neutral-900 group-hover:text-[#810E47] transition-colors'}
                                    `}>
                                        {area.title}
                                    </h2>

                                    <p className={`
                                        text-sm font-light leading-relaxed mb-8 max-w-sm
                                        ${area.size === 'wide' ? 'text-white/70' : 'text-neutral-500'}
                                    `}>
                                        {area.description}
                                    </p>

                                    <ul className={`
                                        space-y-3 pt-6 border-t
                                        ${area.size === 'wide' ? 'border-white/10' : 'border-neutral-100'}
                                    `}>
                                        {area.items.map((item, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <ArrowRight className={`
                                                    w-3 h-3 mt-1 shrink-0 transition-transform duration-300 group-hover:translate-x-1
                                                    ${area.size === 'wide' ? 'text-[#e91e63]' : 'text-[#810E47] opacity-50 group-hover:opacity-100'}
                                                `} />
                                                <span className={`
                                                    text-sm font-medium
                                                    ${area.size === 'wide' ? 'text-white/90' : 'text-neutral-600 group-hover:text-neutral-900'}
                                                `}>
                                                    {item.title}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Hover Interaction Line - Only for light cards */}
                                {area.size !== 'wide' && (
                                    <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#810E47] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                                )}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
