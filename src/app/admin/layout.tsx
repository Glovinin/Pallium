"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { LayoutDashboard, Calendar, MessageSquare, FileText, LogOut } from "lucide-react";

const navItems = [
    { name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
    { name: "Agendamentos", href: "/admin/agendamentos", icon: Calendar },
    { name: "Chatbot", href: "/admin/chat", icon: MessageSquare },
    { name: "Publicações", href: "/admin/publicacoes", icon: FileText },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    return (
        <div className="min-h-screen bg-[#0F0F0F] flex font-inter text-white">
            {/* Sidebar */}
            <aside className="w-64 bg-[#141414] border-r border-white/5 flex flex-col fixed inset-y-0 z-50">
                <div className="h-20 flex items-center px-8 border-b border-white/5">
                    <span className="font-playfair text-xl font-bold">Wanzeller<span className="text-[#810E47]">.</span></span>
                </div>

                <nav className="flex-1 p-4 space-y-2">
                    {navItems.map((item) => {
                        const isActive = pathname.startsWith(item.href);
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${isActive
                                        ? "bg-[#810E47] text-white font-medium shadow-lg shadow-[#810E47]/20"
                                        : "text-white/60 hover:bg-white/5 hover:text-white"
                                    }`}
                            >
                                <item.icon className="w-5 h-5" />
                                <span>{item.name}</span>
                            </Link>
                        );
                    })}
                </nav>

                <div className="p-4 border-t border-white/5">
                    <Link
                        href="/login"
                        className="flex items-center gap-3 px-4 py-3 rounded-xl text-white/60 hover:bg-red-500/10 hover:text-red-400 transition-all cursor-pointer"
                    >
                        <LogOut className="w-5 h-5" />
                        <span>Sair</span>
                    </Link>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 ml-64 p-8">
                {children}
            </main>
        </div>
    );
}
