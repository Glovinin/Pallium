import { notFound } from "next/navigation";
import { PageHeader } from "@/components/layout/PageHeader";
import { Footer } from "@/components/layout/Footer";
import { areas } from "@/data/areas";
import { ArrowLeft, ArrowRight, Phone, Mail } from "lucide-react";
import Link from "next/link";

export function generateStaticParams() {
    return areas.map((area) => ({
        slug: area.id,
    }));
}

export default async function ServicePage({ params, searchParams }: { params: Promise<{ slug: string }>, searchParams: Promise<{ from?: string }> }) {
    const { slug } = await params;
    const { from } = await searchParams;
    const area = areas.find((a) => a.id === slug);

    if (!area) {
        notFound();
    }

    let backLink = { href: "/areas-pratica", label: "Voltar a Áreas de Prática" };
    if (from === "empresas") {
        backLink = { href: "/empresas", label: "Voltar a Empresas" };
    } else if (from === "privado") {
        backLink = { href: "/privado", label: "Voltar a Privado" };
    }

    return (
        <main className="min-h-screen bg-background">
            <PageHeader
                label="Área de Prática"
                title={area.title}
                subtitle={area.description}
            />

            <section className="py-24 bg-white" data-theme="light">
                <div className="container mx-auto px-6">
                    {/* Breadcrumb / Back Link */}
                    <div className="mb-12">
                        <Link
                            href={backLink.href}
                            className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-[#006d77] transition-colors font-medium uppercase tracking-wider"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            {backLink.label}
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                        {/* Main Content */}
                        <div className="lg:col-span-8">
                            {/* Icon and Title */}
                            <div className="flex items-center gap-4 mb-10">
                                <div className="w-14 h-14 rounded-2xl bg-[#006d77] flex items-center justify-center text-white">
                                    <area.icon className="w-6 h-6" />
                                </div>
                                <div>
                                    <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#006d77]">Área de Intervenção</span>
                                </div>
                            </div>

                            <p className="text-xl md:text-2xl text-neutral-800 leading-relaxed font-light mb-12">
                                {area.fullDescription}
                            </p>

                            {/* Services List */}
                            <div className="mb-16">
                                <h3 className="text-2xl font-[var(--font-playfair)] mb-8 text-neutral-900">
                                    Serviços Prestados
                                </h3>
                                <div className="space-y-4">
                                    {area.items.map((item, index) => (
                                        <div
                                            key={index}
                                            className="bg-[#F5F5F7] p-6 border-l-4 border-[#006d77] hover:bg-[#F0F0F2] transition-colors"
                                        >
                                            <div className="flex items-start gap-4">
                                                <ArrowRight className="w-4 h-4 text-[#006d77] shrink-0 mt-1" />
                                                <div>
                                                    <h4 className="text-neutral-900 font-semibold mb-1">
                                                        {item.title}
                                                    </h4>
                                                    <p className="text-neutral-600 text-sm font-light leading-relaxed">
                                                        {item.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* CTA */}
                            <div className="bg-[#F8F8F8] p-8 md:p-10">
                                <p className="text-neutral-600 leading-relaxed font-light">
                                    Para mais informações sobre os nossos serviços de {area.title},
                                    entre em contacto connosco. A nossa equipa está disponível para
                                    esclarecer as suas dúvidas e analisar o seu caso.
                                </p>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <aside className="lg:col-span-4 order-last lg:order-none">
                            <div className="space-y-6 lg:sticky lg:top-36">
                                {/* Contact Card */}
                                <div className="bg-[#006d77] text-white p-6 lg:p-8 relative overflow-hidden">
                                    <div className="absolute -bottom-6 -right-6 opacity-10">
                                        <area.icon className="w-24 h-24" />
                                    </div>
                                    <h3 className="text-lg lg:text-xl font-[var(--font-playfair)] mb-2 relative z-10">
                                        Precisa de Ajuda?
                                    </h3>
                                    <p className="text-white/70 font-light text-xs lg:text-sm mb-6 leading-relaxed relative z-10">
                                        Fale connosco para uma análise do seu caso.
                                    </p>

                                    <div className="space-y-3 relative z-10">
                                        <a
                                            href="tel:+351912220771"
                                            className="flex items-center gap-3 text-white/90 hover:text-white transition-colors group/item"
                                        >
                                            <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center group-hover/item:bg-white group-hover/item:text-[#006d77] transition-all shrink-0">
                                                <Phone className="w-4 h-4" />
                                            </div>
                                            <span className="text-sm font-medium">+351 912 220 771</span>
                                        </a>
                                        <a
                                            href="mailto:contato@palliumpsi.com"
                                            className="flex items-center gap-3 text-white/90 hover:text-white transition-colors group/item"
                                        >
                                            <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center group-hover/item:bg-white group-hover/item:text-[#006d77] transition-all shrink-0">
                                                <Mail className="w-4 h-4" />
                                            </div>
                                            <span className="text-sm font-medium truncate">contato@palliumpsi.com</span>
                                        </a>
                                    </div>

                                    <Link
                                        href="/agendar"
                                        className="mt-6 w-full py-3 bg-white text-[#006d77] text-xs font-bold uppercase tracking-[0.1em] hover:bg-neutral-100 transition-all flex items-center justify-center gap-2 relative z-10 rounded-full"
                                    >
                                        Marcar Consulta
                                        <ArrowRight className="w-3 h-3" />
                                    </Link>
                                </div>

                                {/* Other Areas CTA */}
                                <div className="border border-neutral-200 p-5 lg:p-6 bg-white">
                                    <h4 className="font-bold text-xs uppercase tracking-widest text-[#006d77] mb-4">
                                        Outras Áreas
                                    </h4>
                                    <ul className="space-y-0">
                                        {areas.filter(a => a.id !== area.id).slice(0, 4).map(other => (
                                            <li key={other.id}>
                                                <Link
                                                    href={`/areas-pratica/${other.id}`}
                                                    className="group/link flex items-center justify-between text-neutral-600 hover:text-neutral-900 transition-colors py-2 border-b border-neutral-100 last:border-0"
                                                >
                                                    <span className="text-xs lg:text-sm group-hover/link:text-[#006d77] transition-colors">
                                                        {other.title}
                                                    </span>
                                                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all text-[#006d77] shrink-0" />
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                    <Link
                                        href="/areas-pratica"
                                        className="mt-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#006d77] hover:underline"
                                    >
                                        Ver Todas
                                        <ArrowRight className="w-3 h-3" />
                                    </Link>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
