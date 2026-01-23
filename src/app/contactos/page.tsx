
"use client";


import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { useState } from "react";
import { toast } from "sonner";
import { sendContactEmail } from "@/app/actions/contact";

export default function ContactosPage() {
    const [formData, setFormData] = useState({
        nome: "",
        email: "",
        assunto: "",
        mensagem: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [activeField, setActiveField] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        const form = new FormData();
        form.append("nome", formData.nome);
        form.append("email", formData.email);
        form.append("assunto", formData.assunto);
        form.append("mensagem", formData.mensagem);

        const result = await sendContactEmail(form);

        if (result.success) {
            toast.success("Mensagem enviada com sucesso!");
            setFormData({ nome: "", email: "", assunto: "", mensagem: "" });
        } else {
            toast.error(result.error || "Erro ao enviar mensagem.");
        }

        setIsSubmitting(false);
    };

    const contactInfo = [
        {
            icon: MapPin,
            label: "Morada",
            content: ["Praça de Londres, 3, 8º Drt", "1000-191 Lisboa, Portugal"],
            action: { href: "https://maps.google.com/?q=Praca+de+Londres+3+Lisboa", label: "Ver no mapa" }
        },
        {
            icon: Phone,
            label: "Telefone",
            content: ["+351 912 220 771"],
            action: { href: "tel:+351912220771", label: "Ligar agora" }
        },
        {
            icon: Mail,
            label: "Email",
            content: ["contacto@palliumpsi.com"],
            action: { href: "mailto:contacto@palliumpsi.com", label: "Enviar email" }
        },
        {
            icon: Clock,
            label: "Horário",
            content: ["Segunda a Sexta", "9h00 - 13h00 | 14h00 - 18h00"],
            action: null
        }
    ];

    return (
        <main className="min-h-screen bg-white">
            <PageHeader
                label="Fale Connosco"
                title="Contactos"
                subtitle="Estamos disponíveis para esclarecer as suas dúvidas e agendar uma consulta presencial ou online."
            />

            {/* Main Content Split */}
            <section className="relative z-10 bg-white" data-theme="light">
                <div className="container mx-auto max-w-[90rem] px-6 md:px-12 lg:px-24">
                    <div className="flex flex-col lg:flex-row">

                        {/* Left Column: Contact Info (Sticky) */}
                        <div className="lg:w-[40%] py-24 lg:pr-24 lg:border-r border-neutral-100">
                            <div className="lg:sticky lg:top-32 h-fit">
                                <div>
                                    <h2 className="text-4xl md:text-5xl font-[var(--font-playfair)] text-neutral-900 mb-12">
                                        O Nosso<br />Consultório.
                                    </h2>

                                    <div className="grid grid-cols-1 gap-12">
                                        {contactInfo.map((item, index) => (
                                            <div key={item.label} className="group flex items-start gap-6">
                                                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-neutral-50 text-[#006d77] group-hover:bg-[#006d77] group-hover:text-white transition-all duration-500 shrink-0">
                                                    <item.icon className="w-5 h-5 stroke-[1.5]" />
                                                </div>
                                                <div>
                                                    <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-400 mb-2">
                                                        {item.label}
                                                    </h3>
                                                    <div className="text-neutral-900 font-light leading-relaxed text-lg mb-2">
                                                        {item.content.map((line, i) => (
                                                            <p key={i}>{line}</p>
                                                        ))}
                                                    </div>
                                                    {item.action && (
                                                        <a
                                                            href={item.action.href}
                                                            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#006d77] hover:underline"
                                                        >
                                                            {item.action.label}
                                                            <ArrowRight className="w-3 h-3" />
                                                        </a>
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Form (Scrollable) */}
                        <div className="lg:w-[60%] py-24 lg:pl-24 bg-white relative">
                            <div className="max-w-2xl">
                                <div className="mb-16">
                                    <span className="text-[#006d77] font-bold tracking-widest uppercase text-xs mb-4 block">Formulário de Contacto</span>
                                    <h2 className="text-4xl md:text-5xl font-[var(--font-playfair)] text-neutral-900">
                                        Envie-nos uma mensagem.
                                    </h2>
                                    <p className="mt-6 text-neutral-500 font-light text-lg leading-relaxed">
                                        Utilize o formulário abaixo para nos expor o seu caso ou solicitar informações.
                                        Entraremos em contacto com a maior brevidade possível.
                                    </p>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-8">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        {/* Nome */}
                                        <div className="relative group">
                                            <input
                                                type="text"
                                                id="nome"
                                                required
                                                value={formData.nome}
                                                onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                                                onFocus={() => setActiveField('nome')}
                                                onBlur={() => setActiveField(null)}
                                                className="w-full bg-transparent border-b border-neutral-200 py-4 text-neutral-900 text-lg focus:outline-none focus:border-[#810E47] transition-colors placeholder:text-transparent peer"
                                                placeholder="Nome"
                                            />
                                            <label
                                                htmlFor="nome"
                                                className={`absolute left-0 transition-all duration-300 pointer-events-none
                                                    ${activeField === 'nome' || formData.nome
                                                        ? '-top-2 text-xs text-[#006d77] font-bold tracking-widest uppercase'
                                                        : 'top-4 text-neutral-400 text-lg font-light'
                                                    }`}
                                            >
                                                Nome Completo
                                            </label>
                                        </div>

                                        {/* Email */}
                                        <div className="relative group">
                                            <input
                                                type="email"
                                                id="email"
                                                required
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                onFocus={() => setActiveField('email')}
                                                onBlur={() => setActiveField(null)}
                                                className="w-full bg-transparent border-b border-neutral-200 py-4 text-neutral-900 text-lg focus:outline-none focus:border-[#810E47] transition-colors placeholder:text-transparent"
                                                placeholder="Email"
                                            />
                                            <label
                                                htmlFor="email"
                                                className={`absolute left-0 transition-all duration-300 pointer-events-none
                                                    ${activeField === 'email' || formData.email
                                                        ? '-top-2 text-xs text-[#006d77] font-bold tracking-widest uppercase'
                                                        : 'top-4 text-neutral-400 text-lg font-light'
                                                    }`}
                                            >
                                                Email
                                            </label>
                                        </div>
                                    </div>

                                    {/* Assunto */}
                                    <div className="relative group">
                                        <input
                                            type="text"
                                            id="assunto"
                                            required
                                            value={formData.assunto}
                                            onChange={(e) => setFormData({ ...formData, assunto: e.target.value })}
                                            onFocus={() => setActiveField('assunto')}
                                            onBlur={() => setActiveField(null)}
                                            className="w-full bg-transparent border-b border-neutral-200 py-4 text-neutral-900 text-lg focus:outline-none focus:border-[#810E47] transition-colors placeholder:text-transparent"
                                            placeholder="Assunto"
                                        />
                                        <label
                                            htmlFor="assunto"
                                            className={`absolute left-0 transition-all duration-300 pointer-events-none
                                                ${activeField === 'assunto' || formData.assunto
                                                    ? '-top-2 text-xs text-[#006d77] font-bold tracking-widest uppercase'
                                                    : 'top-4 text-neutral-400 text-lg font-light'
                                                }`}
                                        >
                                            Assunto
                                        </label>
                                    </div>

                                    {/* Mensagem */}
                                    <div className="relative group">
                                        <textarea
                                            id="mensagem"
                                            required
                                            rows={4}
                                            value={formData.mensagem}
                                            onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                                            onFocus={() => setActiveField('mensagem')}
                                            onBlur={() => setActiveField(null)}
                                            className="w-full bg-transparent border-b border-neutral-200 py-4 text-neutral-900 text-lg focus:outline-none focus:border-[#810E47] transition-colors placeholder:text-transparent resize-none"
                                            placeholder="Mensagem"
                                        />
                                        <label
                                            htmlFor="mensagem"
                                            className={`absolute left-0 transition-all duration-300 pointer-events-none
                                                ${activeField === 'mensagem' || formData.mensagem
                                                    ? '-top-2 text-xs text-[#006d77] font-bold tracking-widest uppercase'
                                                    : 'top-4 text-neutral-400 text-lg font-light'
                                                }`}
                                        >
                                            Mensagem
                                        </label>
                                    </div>

                                    <div className="pt-8">
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="group relative overflow-hidden rounded-full bg-[#002b30] text-white px-10 py-5 transition-all duration-300 hover:bg-[#006d77] disabled:opacity-70 disabled:cursor-not-allowed"
                                        >
                                            <span className="relative z-10 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em]">
                                                {isSubmitting ? (
                                                    <>
                                                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                        A enviar...
                                                    </>
                                                ) : (
                                                    <>
                                                        Enviar Mensagem
                                                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                                    </>
                                                )}
                                            </span>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Full Width Map with Overlay */}
                <div className="h-[600px] w-full relative grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out">
                    <div className="absolute inset-0 bg-neutral-900/10 pointer-events-none z-10 mix-blend-multiply" />
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3112.597950293126!2d-9.1396!3d38.7405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1933a386121703%3A0x6b4c10a301463e27!2sPra%C3%A7a%20de%20Londres%203%2C%201000-191%20Lisboa!5e0!3m2!1spt-PT!2spt!4v1709224000000!5m2!1spt-PT!2spt"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            </section>

            <Footer />
        </main>
    );
}
