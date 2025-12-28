"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Footer } from "@/components/layout/Footer";
import { ArrowRight, Lock, Mail } from "lucide-react";
import Image from "next/image";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate network request
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsLoading(false);
        // Simple redirect for now
        router.push("/admin/dashboard");
    };

    return (
        <main className="min-h-screen bg-neutral-50 flex flex-col">
            <div className="flex-1 flex flex-col md:flex-row h-full">

                {/* Left Side - Visual */}
                <div className="hidden md:flex md:w-1/2 bg-[#0F0F0F] relative items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-[#3a0c25]/40 mix-blend-multiply z-10" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60 z-10" />

                    {/* Background Image/Pattern */}
                    <div className="absolute inset-0 z-0 opacity-40">
                        {/* Using the hero image as background for consistency */}
                        <Image
                            src="/pagehero.jpg"
                            alt="Login background"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    <div className="relative z-20 p-12 text-center max-w-lg">
                        <span className="inline-block py-1 px-4 border border-white/20 rounded-full bg-white/5 backdrop-blur-md text-xs font-medium tracking-[0.25em] text-white/80 uppercase mb-8">
                            Área Reservada
                        </span>
                        <h1 className="text-4xl lg:text-5xl font-[var(--font-playfair)] text-white mb-6 leading-tight">
                            Wanzeller & <br /> Associados
                        </h1>
                        <p className="text-white/60 font-light text-lg leading-relaxed">
                            Gestão administrativa e controlo de processos internos. Acesso restrito a colaboradores autorizados.
                        </p>
                    </div>
                </div>

                {/* Right Side - Form */}
                <div className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-12 relative bg-white">
                    <Link href="/" className="absolute top-8 right-8 text-xs font-bold uppercase tracking-widest text-neutral-400 hover:text-[#810E47] transition-colors">
                        Voltar ao site
                    </Link>

                    <div className="w-full max-w-md">
                        <div className="md:hidden text-center mb-10">
                            <h2 className="text-2xl font-[var(--font-playfair)] text-neutral-900">
                                Área Reservada
                            </h2>
                        </div>

                        <div className="mb-10">
                            <h2 className="text-3xl font-[var(--font-playfair)] text-neutral-900 mb-2">Bem-vindo de volta.</h2>
                            <p className="text-neutral-500 font-light">Introduza as suas credenciais para aceder.</p>
                        </div>

                        <form onSubmit={handleLogin} className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-neutral-500 ml-1">Email</label>
                                <div className="relative group">
                                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 group-focus-within:text-[#810E47] transition-colors">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        className="w-full bg-neutral-50 border border-neutral-200 rounded-lg py-4 pl-12 pr-4 text-neutral-900 outline-none focus:border-[#810E47] focus:ring-1 focus:ring-[#810E47]/20 transition-all placeholder:text-neutral-400"
                                        placeholder="exemplo@wanzeller.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-neutral-500 ml-1">Password</label>
                                <div className="relative group">
                                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 group-focus-within:text-[#810E47] transition-colors">
                                        <Lock className="w-5 h-5" />
                                    </div>
                                    <input
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                        className="w-full bg-neutral-50 border border-neutral-200 rounded-lg py-4 pl-12 pr-4 text-neutral-900 outline-none focus:border-[#810E47] focus:ring-1 focus:ring-[#810E47]/20 transition-all placeholder:text-neutral-400"
                                        placeholder="••••••••"
                                    />
                                </div>
                            </div>

                            <div className="flex items-center justify-between text-sm">
                                <label className="flex items-center gap-2 cursor-pointer group">
                                    <input type="checkbox" className="w-4 h-4 rounded border-neutral-300 text-[#810E47] focus:ring-[#810E47]" />
                                    <span className="text-neutral-500 group-hover:text-neutral-700 transition-colors">Manter sessão iniciada</span>
                                </label>
                                <Link href="/register" className="text-[#810E47] hover:underline font-medium">
                                    Registrar conta admin
                                </Link>
                            </div>

                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full bg-[#0F0F0F] text-white rounded-lg py-4 font-bold uppercase tracking-widest text-xs hover:bg-[#810E47] transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3 group"
                            >
                                {isLoading ? (
                                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                ) : (
                                    <>
                                        Entrar
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
}
