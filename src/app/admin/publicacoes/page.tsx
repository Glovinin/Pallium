"use client";

import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { toast } from "sonner";
import { Image as ImageIcon, Send } from "lucide-react";

export default function BlogPostsPage() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!title || !content) {
            toast.error("Preencha o título e o conteúdo.");
            return;
        }

        setIsSubmitting(true);
        try {
            await addDoc(collection(db, "posts"), {
                title,
                content,
                imageUrl,
                createdAt: serverTimestamp(),
                status: "published" // or draft
            });
            toast.success("Publicação criada com sucesso!");
            setTitle("");
            setContent("");
            setImageUrl("");
        } catch (error) {
            console.error("Error creating post:", error);
            toast.error("Erro ao criar publicação.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="max-w-4xl">
            <h1 className="text-3xl font-playfair mb-8">Criar Nova Publicação</h1>

            <div className="bg-[#1a1a1a] border border-white/5 rounded-xl p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-xs uppercase tracking-wider text-white/50 font-bold">Título da Publicação</label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-[#810E47] transition-colors font-playfair text-xl"
                            placeholder="Ex: Wanzeller & Associados reconhecida como..."
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs uppercase tracking-wider text-white/50 font-bold">Imagem de Capa (URL)</label>
                        <div className="relative">
                            <ImageIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 w-5 h-5" />
                            <input
                                type="url"
                                value={imageUrl}
                                onChange={(e) => setImageUrl(e.target.value)}
                                className="w-full bg-white/5 border border-white/10 rounded-lg py-3 pl-12 pr-4 text-white focus:outline-none focus:border-[#810E47] transition-colors text-sm"
                                placeholder="https://..."
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs uppercase tracking-wider text-white/50 font-bold">Conteúdo</label>
                        <textarea
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-[#810E47] transition-colors min-h-[300px] leading-relaxed"
                            placeholder="Escreva o conteúdo da publicação aqui..."
                        />
                    </div>

                    <div className="flex justify-end pt-4">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="bg-[#810E47] text-white px-8 py-3 rounded-lg font-bold uppercase tracking-widest text-xs hover:bg-[#600a35] transition-all flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? "A publicar..." : (
                                <>
                                    Publicar Artigo <Send className="w-4 h-4" />
                                </>
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
