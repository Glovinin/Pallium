"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, MessageSquare, Phone, X } from "lucide-react";
import Link from "next/link";

export function Chatbot() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    if (pathname?.startsWith("/admin") || pathname === "/login" || pathname === "/register") {
        return null;
    }

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        id="pallium-contact-panel"
                        initial={{ opacity: 0, y: 16, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 16, scale: 0.96 }}
                        transition={{ duration: 0.22, ease: "easeOut" }}
                        className="pointer-events-auto fixed bottom-24 left-4 right-4 overflow-hidden rounded-2xl border border-neutral-100 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.18)] sm:relative sm:bottom-auto sm:left-auto sm:right-auto sm:mb-4 sm:w-[360px]"
                    >
                        <div className="flex items-center justify-between bg-[#006d77] px-5 py-4 text-white">
                            <div>
                                <h2 className="font-[var(--font-playfair)] text-lg">Pallium PSI</h2>
                                <p className="text-xs text-white/80">Chat offline</p>
                            </div>
                            <button
                                type="button"
                                onClick={() => setIsOpen(false)}
                                aria-label="Fechar contactos"
                                className="rounded-full p-2 transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                            >
                                <X className="h-5 w-5" aria-hidden="true" />
                            </button>
                        </div>

                        <div className="space-y-4 p-5 text-sm text-neutral-700">
                            <p>O chat está offline neste momento. Para falar connosco, ligue para a Pallium PSI ou envie-nos uma mensagem pela página de contactos.</p>
                            <a
                                href="tel:+351912220771"
                                className="flex items-center gap-3 rounded-xl border border-[#006d77]/15 bg-[#006d77]/5 px-4 py-3 font-semibold text-[#006d77] transition-colors hover:bg-[#006d77]/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#006d77]"
                            >
                                <Phone className="h-4 w-4" aria-hidden="true" />
                                +351 912 220 771
                            </a>
                            <Link
                                href="/contactos"
                                onClick={() => setIsOpen(false)}
                                className="flex items-center justify-between rounded-xl bg-[#006d77] px-4 py-3 font-semibold text-white transition-colors hover:bg-[#005f68] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#006d77]"
                            >
                                Abrir página de contactos
                                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                type="button"
                onClick={() => setIsOpen((open) => !open)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label={isOpen ? "Fechar contactos" : "Abrir contactos"}
                aria-expanded={isOpen}
                aria-controls="pallium-contact-panel"
                className="pointer-events-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#006d77] text-white shadow-[0_8px_30px_rgba(0,109,119,0.3)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#006d77]"
            >
                {isOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <MessageSquare className="h-6 w-6" aria-hidden="true" />}
            </motion.button>
        </div>
    );
}
