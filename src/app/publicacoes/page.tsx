"use client";

import { useEffect, useState } from "react";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { motion } from "framer-motion";
import { Clock, ArrowRight } from "lucide-react";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";

type Post = {
    id: string;
    title: string;
    content: string;
    imageUrl?: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    createdAt: any;
};

export default function PublicacoesPage() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const q = query(collection(db, "posts"), orderBy("createdAt", "desc"));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const data = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            })) as Post[];
            setPosts(data);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    return (
        <main className="min-h-screen bg-neutral-50">
            <PageHeader
                label="Insights"
                title="Publicações"
                subtitle="Artigos, notícias e atualizações sobre o mundo jurídico português e internacional."
            />

            <section className="py-24 bg-neutral-50" data-theme="light">
                <div className="container mx-auto px-6 max-w-6xl">
                    {loading ? (
                        <div className="flex justify-center py-20">
                            <div className="w-8 h-8 border-2 border-[#810E47]/20 border-t-[#810E47] rounded-full animate-spin" />
                        </div>
                    ) : posts.length === 0 ? (
                        <div className="text-center py-20 bg-white rounded-3xl border border-neutral-200">
                            <div className="w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Clock className="w-8 h-8 text-neutral-400" />
                            </div>
                            <h3 className="text-2xl font-playfair text-neutral-900 mb-2">Sem publicações</h3>
                            <p className="text-neutral-500">Volte mais tarde para ler as novidades.</p>
                        </div>
                    ) : (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {posts.map((post, idx) => (
                                <motion.article
                                    key={post.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="group bg-white rounded-2xl overflow-hidden border border-neutral-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
                                >
                                    <div className="h-48 overflow-hidden bg-neutral-200 relative">
                                        {post.imageUrl ? (
                                            <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                        ) : (
                                            <div className="absolute inset-0 flex items-center justify-center text-neutral-400 bg-neutral-100">
                                                <span className="text-xs uppercase tracking-widest font-bold opacity-30">Wanzeller & Associados</span>
                                            </div>
                                        )}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </div>

                                    <div className="p-8 flex flex-col flex-1">
                                        <div className="flex items-center gap-3 mb-4 text-xs font-bold text-[#810E47] uppercase tracking-widest">
                                            <span>Artigo</span>
                                            <span className="w-1 h-1 rounded-full bg-neutral-300" />
                                            <span className="text-neutral-400 font-medium">
                                                {post.createdAt?.toDate
                                                    ? post.createdAt.toDate().toLocaleDateString('pt-PT')
                                                    : "Recente"}
                                            </span>
                                        </div>

                                        <h3 className="text-xl font-playfair font-bold text-neutral-900 mb-4 leading-tight group-hover:text-[#810E47] transition-colors">
                                            {post.title}
                                        </h3>

                                        <p className="text-neutral-500 text-sm leading-relaxed mb-6 line-clamp-3">
                                            {post.content}
                                        </p>

                                        <div className="mt-auto pt-6 border-t border-neutral-100 flex items-center justify-between">
                                            <span className="text-xs font-bold uppercase tracking-widest text-neutral-900 group-hover:text-[#810E47] transition-colors">
                                                Ler Mais
                                            </span>
                                            <div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center group-hover:bg-[#810E47] group-hover:text-white transition-all">
                                                <ArrowRight className="w-3.5 h-3.5" />
                                            </div>
                                        </div>
                                    </div>
                                </motion.article>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            <Footer />
        </main>
    );
}
