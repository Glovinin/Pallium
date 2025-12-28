"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, ChevronDown, Globe, ArrowRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";


// --- Utility Components ---

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";

// --- Utility Components ---

function Magnetic({ children }: { children: React.ReactNode }) {
    const ref = useRef<HTMLDivElement>(null);

    function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
        const { clientX, clientY } = e;
        const { height, width, left, top } = ref.current!.getBoundingClientRect();
        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);

        if (ref.current) {
            ref.current.style.transform = `translate(${middleX * 0.1}px, ${middleY * 0.1}px)`;
        }
    }

    function handleMouseLeave() {
        if (ref.current) {
            ref.current.style.transform = 'translate(0px, 0px)';
        }
    }

    return (
        <div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ transition: 'transform 0.2s ease-out' }}
        >
            {children}
        </div>
    );
}

function NavLink({ href, children, isLightTheme, hasDropdown, isOpen }: { href: string; children: React.ReactNode; isLightTheme: boolean; hasDropdown?: boolean; isOpen?: boolean }) {
    const inactiveColor = isLightTheme ? "rgba(0,0,0,0.7)" : "rgba(255,255,255,0.7)";
    const activeColor = isLightTheme ? "#000" : "#fff";
    const chevronInactive = isLightTheme ? "rgba(0,0,0,0.4)" : "rgba(255,255,255,0.4)";
    const chevronActive = isLightTheme ? "#000" : "#fff";

    if (hasDropdown) {
        return (
            <Link href={href} className="relative group block px-4 py-2 whitespace-nowrap">
                <div className="relative z-10 flex items-center gap-1.5">
                    <span
                        className="block font-medium text-base transition-colors duration-300"
                        style={{ color: isOpen ? activeColor : inactiveColor }}
                    >
                        {children}
                    </span>
                    <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                        style={{ color: isOpen ? chevronActive : chevronInactive }}
                    />
                </div>
                {/* Background hover effect */}
                <span className={`absolute inset-0 rounded-full bg-current transition-opacity duration-300 ${isOpen ? 'opacity-5' : 'opacity-0 group-hover:opacity-5'}`} />
            </Link>
        );
    }

    return (
        <Link href={href} className="relative group block px-4 py-2 overflow-hidden whitespace-nowrap">
            <div className="relative z-10 flex flex-col items-center">
                <div className="flex items-center gap-1.5">
                    <motion.span
                        className="block font-medium text-base transition-transform duration-500 group-hover:-translate-y-[150%]"
                        style={{ color: inactiveColor }}
                    >
                        {children}
                    </motion.span>
                </div>
                <div className="absolute top-0 flex items-center gap-1.5 transition-transform duration-500 translate-y-[150%] group-hover:translate-y-0">
                    <span
                        className="block font-medium text-base"
                        style={{ color: activeColor }}
                    >
                        {children}
                    </span>
                </div>
            </div>
            <span className="absolute inset-0 rounded-full bg-current opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
        </Link>
    );
}

// --- Main Header Component ---

import { usePathname } from "next/navigation";

import { useIntro } from "@/context/IntroContext";

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLightTheme, setIsLightTheme] = useState(false);
    const [hoveredNav, setHoveredNav] = useState<string | null>(null);
    const [isBannerClosed, setIsBannerClosed] = useState(false);
    const pathname = usePathname();
    const shouldHideTopBanner = ["/login", "/agendar", "/contactos"].includes(pathname);
    const isAdminPage = pathname?.startsWith("/admin") || pathname === "/register";

    // Determine effective banner visibility
    const showBanner = !shouldHideTopBanner && !isBannerClosed;

    // Intro context
    const { isIntroComplete, shouldRunIntro } = useIntro();

    // Hide header if intro is running on homepage
    // We use a small delay or transition to make it smooth, but hard hiding is safer to ensure attention on video
    const isHidden = shouldRunIntro && !isIntroComplete;

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('[data-theme]');
            const navbarY = 60;

            let currentTheme = 'light';

            sections.forEach((section) => {
                const rect = section.getBoundingClientRect();
                if (rect.top <= navbarY && rect.bottom >= navbarY) {
                    currentTheme = section.getAttribute('data-theme') || 'light';
                }
            });

            // Assuming data-theme="dark" means dark background -> text should be white (isLightTheme = false)
            setIsLightTheme(currentTheme === 'dark');
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const islandBaseClasses = "relative pointer-events-auto flex items-center backdrop-blur-[40px] border border-white/10 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.12)] transition-shadow group/island shrink-0";
    const islandBg = isLightTheme ? "rgba(255, 255, 255, 0.65)" : "rgba(0, 0, 0, 0.65)";

    const practiceAreas = [
        { title: "Direito Administrativo e Tributário", href: "/areas-pratica/administrativo" },
        { title: "Direito do Trabalho", href: "/areas-pratica/trabalho" },
        { title: "Direito Comercial e Societário", href: "/areas-pratica/comercial" },
        { title: "Direito Penal", href: "/areas-pratica/penal" },
        { title: "Direito Europeu", href: "/areas-pratica/europeu" },
        { title: "Direito de Família", href: "/areas-pratica/familia" },
        { title: "Direito Civil", href: "/areas-pratica/civil" },
        { title: "Legalização de Estrangeiros", href: "/areas-pratica/estrangeiros" },
        { title: "Registos e Notariado", href: "/areas-pratica/notariado" },
        { title: "Marcas e Patentes", href: "/areas-pratica/marcas" },
        { title: "Direito do Consumidor", href: "/areas-pratica/consumidor" },
        { title: "Direito Contra-Ordenacional", href: "/areas-pratica/contraordenacional" },
    ];

    const navItems = [
        { name: "Página Inicial", href: "/" },
        { name: "Áreas de Prática", href: "/areas-pratica", hasDropdown: true },
        { name: "Equipa", href: "/equipa" },
        { name: "Contactos", href: "/contactos" },
    ];

    if (isHidden || isAdminPage) return null;

    return (
        <>
            {/* Top Banner */}
            <AnimatePresence>
                {showBanner && (
                    <motion.div
                        initial={{ height: 36, opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="fixed top-0 left-0 right-0 z-[60] bg-[#810E47] text-white/90 hidden lg:flex items-center justify-center px-4 md:px-8 text-[10px] md:text-xs font-medium tracking-wide border-b border-white/5 overflow-hidden"
                    >
                        <div className="hidden lg:flex items-center gap-8 max-w-7xl mx-auto relative w-full justify-center">
                            <div className="flex items-center gap-8">
                                <div className="flex items-center gap-2">
                                    <Phone className="w-3 h-3 text-pink-200" />
                                    <span>+351 217 958 255</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Mail className="w-3 h-3 text-pink-200" />
                                    <span>geral@wanzelleradvogados.com</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <MapPin className="w-3 h-3 text-pink-200" />
                                    <span>Lisboa, Portugal</span>
                                </div>
                            </div>

                            {/* Close Button Desktop */}
                            <button
                                onClick={() => setIsBannerClosed(true)}
                                className="absolute right-0 p-1 hover:bg-white/10 rounded-full transition-colors"
                            >
                                <X className="w-3.5 h-3.5 text-pink-200" />
                            </button>
                        </div>
                        <div className="lg:hidden flex items-center justify-between w-full">
                            <div className="flex items-center gap-2">
                                <Phone className="w-3 h-3 text-pink-200" />
                                <span>+351 217 958 255</span>
                            </div>
                            <button
                                onClick={() => setIsBannerClosed(true)}
                                className="p-1 hover:bg-white/10 rounded-full transition-colors"
                            >
                                <X className="w-3.5 h-3.5 text-pink-200" />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.header
                initial={{ y: -100, opacity: 0, top: 56 }}
                animate={{
                    y: 0,
                    opacity: 1,
                    top: showBanner ? 56 : 24
                }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="fixed left-0 right-0 z-50 flex justify-center items-start gap-4 px-4 pointer-events-none max-lg:!top-4"
            >
                {/* Desktop Layout */}
                <div className="hidden lg:flex items-center justify-center">
                    <motion.div
                        initial={false}
                        animate={{ backgroundColor: islandBg }}
                        transition={{ duration: 0.4 }}
                        className={`${islandBaseClasses} px-6 py-2 h-[72px] gap-4`}
                    >
                        {/* Logo */}
                        <Link href="/" className="flex items-center z-50">
                            <Magnetic>
                                <motion.div
                                    animate={{ opacity: 0.95 }}
                                    className="flex items-center gap-3"
                                >
                                    <div className="w-10 h-10 bg-[#810E47] rounded-lg flex items-center justify-center p-2">
                                        <img src="/logo icon.svg" alt="Wanzeller Logo" className="w-full h-full object-contain brightness-0 invert" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className={`font-bold text-sm tracking-tight ${isLightTheme ? 'text-neutral-900' : 'text-white'}`}>
                                            Wanzeller
                                        </span>
                                        <span className={`text-[10px] uppercase tracking-[0.2em] ${isLightTheme ? 'text-neutral-500' : 'text-neutral-400'}`}>
                                            & Associados
                                        </span>
                                    </div>
                                </motion.div>
                            </Magnetic>
                        </Link>

                        {/* Divider */}
                        <span className={`mx-2 text-2xl font-light select-none ${isLightTheme ? 'text-black/10' : 'text-white/10'}`}>/</span>

                        {/* Desktop Navigation */}
                        <nav className="flex items-center gap-1 relative z-10" onMouseLeave={() => setHoveredNav(null)}>
                            {navItems.map((item) => (
                                <div
                                    key={item.name}
                                    onMouseEnter={() => setHoveredNav(item.name)}
                                    className="relative flex items-center"
                                >
                                    <NavLink
                                        href={item.href}
                                        isLightTheme={isLightTheme}
                                        hasDropdown={item.hasDropdown}
                                        isOpen={hoveredNav === item.name}
                                    >
                                        {item.name}
                                    </NavLink>

                                    {/* Dropdown for Áreas de Prática */}
                                    {item.hasDropdown && hoveredNav === item.name && (
                                        <AnimatePresence>
                                            <motion.div
                                                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                exit={{ opacity: 0, y: 10, scale: 0.98 }}
                                                transition={{ duration: 0.2 }}
                                                className="absolute top-full left-1/2 -translate-x-1/2 pt-6 w-[750px]"
                                            >
                                                <div className="p-10 rounded-[28px] border border-white/10 shadow-2xl backdrop-blur-3xl bg-[#050505] text-white overflow-hidden">
                                                    <div className="flex flex-col gap-6">
                                                        <div>
                                                            <h4 className="text-[10px] font-bold tracking-[0.2em] text-neutral-500 uppercase mb-6 border-b border-white/10 pb-4">
                                                                Áreas de Prática
                                                            </h4>
                                                            <div className="grid grid-cols-3 gap-x-12 gap-y-4">
                                                                {practiceAreas.map((area) => (
                                                                    <Link
                                                                        key={area.href}
                                                                        href={area.href}
                                                                        className="group flex items-center justify-between text-[13px] font-medium text-neutral-400 hover:text-white transition-colors duration-200"
                                                                    >
                                                                        <span>{area.title}</span>
                                                                        <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#ec407a]" />
                                                                    </Link>
                                                                ))}
                                                            </div>
                                                        </div>

                                                        {/* Ver Todas Button */}
                                                        <div className="pt-4 border-t border-white/10">
                                                            <Link
                                                                href="/areas-pratica"
                                                                className="group inline-flex items-center gap-2 px-5 py-2.5 bg-[#810E47] hover:bg-[#9a1156] text-white text-xs font-bold uppercase tracking-[0.1em] rounded-full transition-all duration-300"
                                                            >
                                                                Ver Todas as Áreas
                                                                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        </AnimatePresence>
                                    )}
                                </div>
                            ))}
                        </nav>

                        {/* Divider */}
                        <span className={`mx-2 text-2xl font-light select-none ${isLightTheme ? 'text-black/10' : 'text-white/10'}`}>/</span>

                        {/* Language Selector */}
                        <div
                            className="relative flex items-center"
                            onMouseEnter={() => setHoveredNav("lang")}
                            onMouseLeave={() => setHoveredNav(null)}
                        >
                            <button className={`p-2 rounded-full transition-colors ${isLightTheme ? 'hover:bg-black/5 text-neutral-600' : 'hover:bg-white/10 text-white/80 hover:text-white'}`}>
                                <Globe className="w-5 h-5 stroke-[1.5]" />
                            </button>

                            <AnimatePresence>
                                {hoveredNav === "lang" && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10, scale: 0.98 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 10, scale: 0.98 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute top-full left-1/2 -translate-x-1/2 pt-6 w-[260px]"
                                    >
                                        <div className="p-6 rounded-[28px] border border-white/10 shadow-2xl backdrop-blur-3xl bg-[#050505] text-white overflow-hidden flex flex-col gap-2">
                                            <h4 className="text-[10px] font-bold tracking-[0.2em] text-neutral-500 uppercase mb-2 border-b border-white/10 pb-2">
                                                Idioma
                                            </h4>

                                            <Link href="/" className="w-full group flex items-center justify-between text-[14px] font-medium text-white transition-colors duration-200">
                                                <span>Português</span>
                                                <div className="w-1.5 h-1.5 rounded-full bg-[#ec407a] shadow-[0_0_8px_#ec407a]" />
                                            </Link>

                                            <Link href="/en" className="w-full group flex items-center justify-between text-[14px] font-medium text-neutral-400 hover:text-white transition-colors duration-200">
                                                <span>English</span>
                                                <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#ec407a]" />
                                            </Link>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* CTA Button */}
                        <Magnetic>
                            <Link href="/agendar">
                                <Button
                                    className="rounded-full bg-[#810E47] text-white hover:bg-[#9a1156] px-6 h-11 transition-all shadow-lg hover:scale-105 active:scale-95 font-medium"
                                >
                                    Marcar Consulta
                                </Button>
                            </Link>
                        </Magnetic>
                    </motion.div>
                </div>

                {/* Mobile Layout */}
                <motion.div
                    animate={{ backgroundColor: islandBg }}
                    className="lg:hidden pointer-events-auto flex items-center justify-between w-full max-w-[95vw] px-4 py-2 backdrop-blur-3xl border border-white/10 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.12)] h-[72px]"
                >
                    {/* Logo */}
                    <Link href="/" className="flex items-center z-50 shrink-0">
                        <div className="flex items-center gap-2">
                            <div className="w-9 h-9 bg-[#810E47] rounded-lg flex items-center justify-center p-2">
                                <img src="/logo icon.svg" alt="Wanzeller Logo" className="w-full h-full object-contain brightness-0 invert" />
                            </div>
                            <div className="flex flex-col">
                                <span className={`font-bold text-sm tracking-tight ${isLightTheme ? 'text-neutral-900' : 'text-white'}`}>
                                    Wanzeller
                                </span>
                                <span className={`text-[9px] uppercase tracking-[0.2em] ${isLightTheme ? 'text-neutral-500' : 'text-neutral-400'}`}>
                                    & Associados
                                </span>
                            </div>
                        </div>
                    </Link>

                    <div className="flex items-center gap-2">
                        {/* Language - Mobile */}
                        <button className={`p-2 rounded-full transition-colors ${isLightTheme ? 'text-neutral-600' : 'text-white/80'}`}>
                            <Globe className="w-5 h-5 stroke-[1.5]" />
                        </button>

                        {/* CTA Button - Mobile */}
                        <Link href="/agendar" className="hidden xs:block">
                            <Button
                                size="sm"
                                className="rounded-full bg-[#810E47] text-white hover:bg-[#9a1156] px-4 h-9 text-xs font-medium"
                            >
                                Marcar Consulta
                            </Button>
                        </Link>

                        {/* Mobile Menu Button */}
                        <Button
                            variant="ghost"
                            size="icon"
                            className="rounded-full hover:bg-white/10 w-9 h-9"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <motion.div
                                animate={{ color: isLightTheme ? '#000' : '#fff' }}
                                transition={{ duration: 0.3 }}
                            >
                                {isMenuOpen ? (
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                ) : (
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                )}
                            </motion.div>
                        </Button>
                    </div>
                </motion.div>
            </motion.header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-40 bg-black/90 backdrop-blur-xl lg:hidden"
                    >
                        <motion.nav
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            className="flex flex-col items-center justify-center h-full gap-6 pt-20"
                        >
                            {navItems.map((item, index) => (
                                <motion.div
                                    key={item.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Link
                                        href={item.href}
                                        onClick={() => setIsMenuOpen(false)}
                                        className="text-2xl font-medium text-white hover:text-[#d81b60] transition-colors"
                                    >
                                        {item.name}
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: navItems.length * 0.1 }}
                            >
                                <Link href="/agendar" onClick={() => setIsMenuOpen(false)}>
                                    <Button className="mt-4 rounded-full bg-[#810E47] text-white hover:bg-[#9a1156] px-8 h-12">
                                        Marcar Consulta
                                    </Button>
                                </Link>
                            </motion.div>
                        </motion.nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
