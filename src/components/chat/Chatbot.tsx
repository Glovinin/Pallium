"use client";

import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Minus, Globe, ArrowRight } from "lucide-react";
import Link from "next/link";
import { sendMessageToGemini } from "@/app/actions/chat";
import { db } from "@/lib/firebase";
import { collection, addDoc, doc, setDoc, serverTimestamp, updateDoc } from "firebase/firestore";

export function Chatbot() {
    const pathname = usePathname();
    const isAdminPage = pathname?.startsWith("/admin") || pathname === "/login" || pathname === "/register";
    const [isOpen, setIsOpen] = useState(false);
    const [language, setLanguage] = useState("pt-PT");
    const [isLangOpen, setIsLangOpen] = useState(false);
    const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([
        { text: "Olá! Seja bem-vindo à Wanzeller & Associados. Sou a sua assistente virtual. Em que posso ajudar hoje?", isUser: false }
    ]);
    const [inputValue, setInputValue] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [sessionId, setSessionId] = useState<string | null>(null);

    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Initialize session ID
    useEffect(() => {
        let sid = sessionStorage.getItem("wanzeller_chat_session_id");
        if (!sid) {
            sid = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
            sessionStorage.setItem("wanzeller_chat_session_id", sid);
        }
        setSessionId(sid);
    }, []);

    const languages = [
        { code: "pt-PT", label: "PT", greeting: "Olá! Seja bem-vindo à Wanzeller & Associados. Sou a sua assistente virtual. Em que posso ajudar hoje?" },
        { code: "en", label: "EN", greeting: "Hello! Welcome to Wanzeller & Associados. I am your virtual assistant. How can I help you today?" },
        { code: "es", label: "ES", greeting: "¡Hola! Bienvenido a Wanzeller & Associados. Soy su asistente virtual. ¿En qué puedo ayudarle hoy?" },
        { code: "fr", label: "FR", greeting: "Bonjour! Bienvenue chez Wanzeller & Associados. Je suis votre assistant virtuel. Comment puis-je vous aider aujourd'hui?" },
        { code: "it", label: "IT", greeting: "Ciao! Benvenuto in Wanzeller & Associados. Sono il tuo assistente virtuale. Come posso aiutarti oggi?" },
        { code: "de", label: "DE", greeting: "Hallo! Willkommen bei Wanzeller & Associados. Ich bin Ihr virtueller Assistent. Wie kann ich Ihnen heute helfen?" },
        { code: "nl", label: "NL", greeting: "Hallo! Welkom bij Wanzeller & Associados. Ik ben uw virtuele assistent. Hoe kan ik u vandaag helpen?" },
    ];

    const changeLanguage = (langCode: string) => {
        const selected = languages.find(l => l.code === langCode);
        if (selected) {
            setLanguage(langCode);
            setMessages([{ text: selected.greeting, isUser: false }]);
            setIsLangOpen(false);
        }
    };

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    const saveMessageToFirestore = async (text: string, isUser: boolean) => {
        if (!sessionId) return;

        try {
            // Save message to subcollection
            await addDoc(collection(db, "chats", sessionId, "messages"), {
                text,
                isUser,
                createdAt: serverTimestamp()
            });

            // Update chat session metadata
            await setDoc(doc(db, "chats", sessionId), {
                lastMessage: text,
                updatedAt: serverTimestamp(),
                language: language
            }, { merge: true });
        } catch (error) {
            console.error("Error saving message:", error);
        }
    };

    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!inputValue.trim() || isLoading) return;

        const userInput = inputValue.trim();
        setInputValue("");
        setMessages(prev => [...prev, { text: userInput, isUser: true }]);
        saveMessageToFirestore(userInput, true);

        setIsLoading(true);

        try {
            // Chat - Call Server Action
            // Prepare history for context
            const history = messages
                .map(m => ({
                    role: m.isUser ? "user" : "model",
                    parts: [{ text: m.text }]
                }));

            const response = await sendMessageToGemini(history, userInput, language);

            if (response.success && response.text) {
                setMessages(prev => [...prev, { text: response.text, isUser: false }]);
                saveMessageToFirestore(response.text, false);
            } else {
                setMessages(prev => [...prev, { text: "Desculpe, ocorreu um erro. Tente novamente.", isUser: false }]);
            }
            setIsLoading(false);
        } catch (error) {
            console.error("Chat error", error);
            setMessages(prev => [...prev, { text: "Ocorreu um erro inesperado.", isUser: false }]);
            setIsLoading(false);
        }
    };

    if (isAdminPage) return null;

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="bg-white/90 backdrop-blur-xl border border-white/20 shadow-[0_20px_40px_rgba(0,0,0,0.15)] rounded-2xl w-[90vw] sm:w-[380px] h-[500px] mb-4 pointer-events-auto overflow-hidden flex flex-col"
                    >
                        {/* Header */}
                        <div className="bg-[#810E47] text-white p-4 flex items-center justify-between shrink-0 relative z-10">
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                                <div>
                                    <h3 className="font-[var(--font-playfair)] font-medium text-sm tracking-wide">
                                        Wanzeller AI
                                    </h3>
                                    <p className="text-[10px] text-white/70 uppercase tracking-widest">
                                        {languages.find(l => l.code === language)?.label || "PT"}
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="relative">
                                    <button
                                        onClick={() => setIsLangOpen(!isLangOpen)}
                                        className="p-1 hover:bg-white/10 rounded-full transition-colors"
                                    >
                                        <Globe className="w-4 h-4" />
                                    </button>

                                    <AnimatePresence>
                                        {isLangOpen && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                                className="absolute top-10 right-0 bg-white text-neutral-800 rounded-lg shadow-xl border border-neutral-100 overflow-hidden w-32 py-1"
                                            >
                                                {languages.map((lang) => (
                                                    <button
                                                        key={lang.code}
                                                        onClick={() => changeLanguage(lang.code)}
                                                        className={`w-full text-left px-4 py-2 text-xs hover:bg-neutral-50 transition-colors ${language === lang.code ? "bg-neutral-50 font-medium text-[#810E47]" : ""
                                                            }`}
                                                    >
                                                        {lang.label} - {lang.code === "pt-PT" ? "Português" : lang.code.toUpperCase()}
                                                    </button>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-1 hover:bg-white/10 rounded-full transition-colors"
                                >
                                    <Minus className="w-4 h-4" />
                                </button>
                            </div>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#F5F5F7]/50 scroll-smooth">
                            {messages.map((msg, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`flex ${msg.isUser ? "justify-end" : "justify-start"}`}
                                >
                                    <div
                                        className={`max-w-[80%] p-3 text-sm leading-relaxed rounded-2xl shadow-sm ${msg.isUser
                                            ? "bg-[#810E47] text-white rounded-tr-sm"
                                            : "bg-white text-neutral-800 border border-neutral-100 rounded-tl-sm"
                                            }`}
                                    >
                                        {msg.text.split("{{SCHEDULE_BUTTON}}").map((part, i, arr) => (
                                            <span key={i}>
                                                {part}
                                                {i < arr.length - 1 && (
                                                    <Link href="/agendar" className="block w-fit mt-3 mb-1">
                                                        <button className="px-5 py-2.5 bg-[#810E47] text-white rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-[#600a35] transition-colors shadow-md flex items-center gap-2">
                                                            Agendar Consulta
                                                            <ArrowRight className="w-3 h-3" />
                                                        </button>
                                                    </Link>
                                                )}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                            {isLoading && (
                                <div className="flex justify-start">
                                    <div className="bg-white border border-neutral-100 rounded-2xl rounded-tl-sm p-4 shadow-sm">
                                        <div className="flex gap-1">
                                            <span className="w-1.5 h-1.5 bg-[#810E47]/40 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                                            <span className="w-1.5 h-1.5 bg-[#810E47]/40 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                                            <span className="w-1.5 h-1.5 bg-[#810E47]/40 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                                        </div>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Area */}
                        <form onSubmit={handleSendMessage} className="p-3 bg-white border-t border-neutral-100 flex gap-2 shrink-0">
                            <input
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                placeholder="Escreva a sua mensagem..."
                                disabled={isLoading}
                                className="flex-1 bg-neutral-100 hover:bg-neutral-50 focus:bg-white border text-sm px-4 py-3 rounded-full outline-none border-transparent focus:border-[#810E47]/20 transition-all placeholder:text-neutral-400 text-neutral-800 disabled:opacity-70"
                            />
                            <button
                                type="submit"
                                disabled={!inputValue.trim() || isLoading}
                                className="w-10 h-10 bg-[#810E47] text-white rounded-full flex items-center justify-center hover:bg-[#600a35] disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
                            >
                                <Send className="w-4 h-4 ml-0.5" />
                            </button>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Launcher Button */}
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`pointer-events-auto w-14 h-14 rounded-full flex items-center justify-center shadow-[0_8px_30px_rgba(129,14,71,0.3)] transition-all duration-300 ${isOpen ? "bg-white text-[#810E47]" : "bg-[#810E47] text-white"
                    }`}
            >
                <AnimatePresence mode="wait">
                    {isOpen ? (
                        <motion.div
                            key="close"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <X className="w-6 h-6" />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="chat"
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.5, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <MessageSquare className="w-6 h-6" />
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.button>
        </div>
    );
}
