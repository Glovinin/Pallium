"use client";

import { useEffect, useState } from "react";
import { collection, query, orderBy, onSnapshot, limit, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { MessageSquare, User, Clock, ChevronRight } from "lucide-react";

type ChatSession = {
    id: string;
    lastMessage: string;
    updatedAt: any; // Firestore timestamp
    language: string;
};

type Message = {
    id: string;
    text: string;
    isUser: boolean;
    createdAt: any;
};

export default function AdminChatPage() {
    const [sessions, setSessions] = useState<ChatSession[]>([]);
    const [selectedSessionId, setSelectedSessionId] = useState<string | null>(null);
    const [messages, setMessages] = useState<Message[]>([]);
    const [loading, setLoading] = useState(true);

    // Subscribe to chat sessions
    useEffect(() => {
        const q = query(collection(db, "chats"), orderBy("updatedAt", "desc"), limit(50));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const data = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            })) as ChatSession[];
            setSessions(data);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    // Load messages when a session is selected
    useEffect(() => {
        if (!selectedSessionId) return;

        const q = query(collection(db, "chats", selectedSessionId, "messages"), orderBy("createdAt", "asc"));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const data = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            })) as Message[];
            setMessages(data);
        });

        return () => unsubscribe();
    }, [selectedSessionId]);

    if (loading) return <div className="text-white/50">A carregar chats...</div>;

    return (
        <div className="h-[calc(100vh-100px)] flex gap-6">
            {/* Sidebar List */}
            <div className="w-1/3 bg-[#1a1a1a] border border-white/5 rounded-xl overflow-hidden flex flex-col">
                <div className="p-4 border-b border-white/5 bg-white/5">
                    <h2 className="font-playfair text-lg text-white">Conversas Recentes</h2>
                </div>
                <div className="flex-1 overflow-y-auto">
                    {sessions.length === 0 ? (
                        <div className="p-4 text-white/40 text-sm">Nenhuma conversa iniciada.</div>
                    ) : (
                        sessions.map(session => (
                            <button
                                key={session.id}
                                onClick={() => setSelectedSessionId(session.id)}
                                className={`w-full text-left p-4 border-b border-white/5 hover:bg-white/5 transition-colors flex flex-col gap-2 ${selectedSessionId === session.id ? "bg-white/10" : ""
                                    }`}
                            >
                                <div className="flex justify-between items-start w-full">
                                    <span className="text-xs font-mono text-white/40 uppercase truncate w-20">
                                        {session.id.substring(0, 8)}...
                                    </span>
                                    {session.updatedAt && (
                                        <span className="text-[10px] text-white/30 flex items-center gap-1">
                                            <Clock className="w-3 h-3" />
                                            {/* Handle Timestamp or Date */}
                                            {session.updatedAt.toDate ?
                                                session.updatedAt.toDate().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) :
                                                "Agora"
                                            }
                                        </span>
                                    )}
                                </div>
                                <p className="text-sm text-white/80 line-clamp-2">
                                    {session.lastMessage || "Nova conversa..."}
                                </p>
                                <div className="flex items-center gap-2 mt-1">
                                    <span className="text-[10px] px-1.5 py-0.5 bg-white/10 rounded text-white/60">
                                        {session.language || "PT"}
                                    </span>
                                </div>
                            </button>
                        ))
                    )}
                </div>
            </div>

            {/* Chat View */}
            <div className="flex-1 bg-[#1a1a1a] border border-white/5 rounded-xl overflow-hidden flex flex-col relative">
                {!selectedSessionId ? (
                    <div className="flex-1 flex flex-col items-center justify-center text-white/30">
                        <MessageSquare className="w-12 h-12 mb-4 opacity-50" />
                        <p>Selecione uma conversa para ver o histórico.</p>
                    </div>
                ) : (
                    <>
                        <div className="p-4 border-b border-white/5 bg-white/5 flex justify-between items-center">
                            <h3 className="font-medium text-white flex items-center gap-2">
                                <User className="w-4 h-4 text-[#810E47]" />
                                Visitante ({selectedSessionId.substring(0, 6)})
                            </h3>
                        </div>
                        <div className="flex-1 overflow-y-auto p-6 space-y-4">
                            {messages.map((msg) => (
                                <div key={msg.id} className={`flex ${msg.isUser ? "justify-start" : "justify-end"}`}>
                                    <div className={`max-w-[70%] p-3 rounded-lg text-sm ${msg.isUser
                                            ? "bg-white/10 text-white rounded-tl-none border border-white/5"
                                            : "bg-[#810E47]/20 text-white border border-[#810E47]/20 rounded-tr-none"
                                        }`}>
                                        <div className="text-xs opacity-40 mb-1">
                                            {msg.isUser ? "Visitante" : "Wanzeller AI"}
                                        </div>
                                        {msg.text}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
