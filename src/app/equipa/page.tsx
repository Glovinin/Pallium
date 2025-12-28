"use client";

import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { TeamCard } from "@/components/equipa/TeamCard";

const equipa = [
    {
        name: "Alexandre Wanzeller",
        role: "Sócio",
        email: "alexandrewanzeller@wanzelleradvogados.com",
        bio: "Inscrito na Ordem dos Advogados desde 2003. Pós-graduação em Propriedade Industrial. Mandatário europeu de marcas e patentes.",
        initial: "AW",
        image: "/equipa/Alexandre Wanzeller.jpg"
    },
    {
        name: "João Diogo Cortes Frazão",
        role: "Sócio",
        email: "jfrazao@wanzelleradvogados.com",
        bio: "Inscrito na Ordem dos Advogados desde 1999. Licenciatura em Direito pela Universidade Lusíada.",
        initial: "JF",
        image: "/equipa/João Diogo Cortes Frazão.jpg"
    },
    {
        name: "Hélia Wanzeller",
        role: "Sócia",
        email: "helia@wanzelleradvogados.com",
        bio: "Inscrita na Ordem dos Advogados desde 1997. Licenciatura em Direito pela Faculdade de Direito da Universidade de Lisboa. Frequência de Mestrado. Formadora na área de Direito.",
        initial: "HW"
    },
    {
        name: "Fernando Barbosa Ribeiro",
        role: "Sócio",
        email: "fbarbosaribeiro@wanzelleradvogados.com",
        bio: "Inscrito na Ordem dos Advogados desde 2018. Mestrado em Ciências Jurídico-Criminais. Doutorando em Ciências Jurídico-Criminais pela Faculdade de Direito da Universidade de Lisboa. Pós-Graduações em Direito Penal Económico e Compliance.",
        initial: "FR",
        image: "/equipa/Fernando Barbosa Ribeiro.jpg"
    },
];

export default function EquipaPage() {
    return (
        <main className="min-h-screen bg-background">
            <PageHeader
                label="Quem Somos"
                title="A Nossa Equipa"
                subtitle="Conheça os sócios que lideram a Wanzeller & Associados, com décadas de experiência combinada em diversas áreas do direito."
                backgroundImage="/pagehero.jpg"
            />

            {/* Team Grid */}
            <section className="bg-white min-h-screen relative py-32" data-theme="light">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-24">
                        {equipa.map((member, index) => (
                            <TeamCard key={member.name} member={member} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
