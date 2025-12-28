
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment } from "react";
import { ChevronRight, Home } from "lucide-react";
import { motion } from "framer-motion";

export function Breadcrumb({ className = "", theme = "light" }: { className?: string, theme?: "light" | "dark" }) {
    const pathname = usePathname();

    // Split pathname into segments and filter empty strings
    const segments = pathname.split('/').filter(Boolean);

    // If on homepage, usually we don't show breadcrumb or just show Home. 
    // But typically breadcrumbs start appearing on subpages.
    if (segments.length === 0) return null;

    const textColor = theme === "dark" ? "text-white/60 hover:text-white" : "text-neutral-500 hover:text-neutral-900";
    const separatorColor = theme === "dark" ? "text-white/30" : "text-neutral-300";
    const activeColor = theme === "dark" ? "text-white font-medium" : "text-neutral-900 font-medium";

    // Map strict segment names to pretty labels if needed
    const prettyName = (name: string) => {
        const labels: Record<string, string> = {
            "equipa": "Equipa",
            "areas-pratica": "Áreas de Prática",
            "contactos": "Contactos",
            "publicacoes": "Publicações",
            "administrativo": "Administrativo e Tributário",
            "trabalho": "Trabalho",
            "comercial": "Comercial e Societário",
            "penal": "Penal",
            "europeu": "Europeu",
            "familia": "Família",
            "civil": "Civil",
            "estrangeiros": "Legalização de Estrangeiros",
            "notariado": "Registos e Notariado",
            "marcas": "Marcas e Patentes",
            "consumidor": "Consumidor",
            "contraordenacional": "Contra-Ordenacional",
        };
        return labels[name] || name.charAt(0).toUpperCase() + name.slice(1).replace(/-/g, ' ');
    };

    return (
        <nav aria-label="Breadcrumb" className={`${className}`}>
            <motion.ol
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-center space-x-2 text-xs md:text-sm tracking-wide"
            >
                <li>
                    <Link
                        href="/"
                        className={`transition-colors duration-200 flex items-center ${textColor}`}
                    >
                        <Home className="w-3.5 h-3.5" />
                    </Link>
                </li>

                {segments.map((segment, index) => {
                    const href = `/${segments.slice(0, index + 1).join('/')}`;
                    const isLast = index === segments.length - 1;
                    const name = prettyName(segment);

                    return (
                        <Fragment key={href}>
                            <li className={separatorColor}>
                                <ChevronRight className="w-3.5 h-3.5" />
                            </li>
                            <li>
                                {isLast ? (
                                    <span className={`${activeColor} pointer-events-none capitalize`}>
                                        {name}
                                    </span>
                                ) : (
                                    <Link
                                        href={href}
                                        className={`transition-colors duration-200 capitalize ${textColor}`}
                                    >
                                        {name}
                                    </Link>
                                )}
                            </li>
                        </Fragment>
                    );
                })}
            </motion.ol>
        </nav>
    );
}
