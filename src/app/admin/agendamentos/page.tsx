"use client";

import { useEffect, useState } from "react";
import { collection, query, orderBy, onSnapshot, doc, updateDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { format } from "date-fns";
import { pt } from "date-fns/locale";
import { Check, X, Clock, Calendar, Mail, Phone, User } from "lucide-react";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";

type Appointment = {
    id: string;
    name: string;
    email: string;
    phone: string;
    topic: string;
    message?: string;
    date: string;
    time: string;
    status: "pending" | "confirmed" | "cancelled" | "completed";
    createdAt: string;
};

export default function AppointmentsPage() {
    const [appointments, setAppointments] = useState<Appointment[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const q = query(collection(db, "appointments"), orderBy("createdAt", "desc"));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const data = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            })) as Appointment[];
            setAppointments(data);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const updateStatus = async (id: string, newStatus: Appointment['status']) => {
        try {
            await updateDoc(doc(db, "appointments", id), { status: newStatus });
            toast.success(`Estado atualizado para ${newStatus}`);
        } catch (error) {
            console.error("Error updating status:", error);
            toast.error("Erro ao atualizar estado.");
        }
    };

    if (loading) {
        return <div className="text-white/50">A carregar agendamentos...</div>;
    }

    return (
        <div className="max-w-5xl">
            <h1 className="text-3xl font-playfair mb-8">Agendamentos</h1>

            <div className="space-y-4">
                <AnimatePresence>
                    {appointments.length === 0 ? (
                        <div className="text-white/40 italic">Nenhum agendamento encontrado.</div>
                    ) : (
                        appointments.map((apt) => (
                            <motion.div
                                key={apt.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, height: 0 }}
                                className="bg-[#1a1a1a] border border-white/5 rounded-xl p-6 flex flex-col lg:flex-row gap-6 relative overflow-hidden group"
                            >
                                <div className={`absolute top-0 left-0 w-1 h-full ${apt.status === 'confirmed' ? 'bg-green-500' :
                                    apt.status === 'cancelled' ? 'bg-red-500' : 'bg-yellow-500'
                                    }`} />

                                {/* Date & Time */}
                                <div className="flex-shrink-0 flex flex-col items-center justify-center p-4 bg-white/5 rounded-lg min-w-[100px] text-center">
                                    <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-tr from-white to-white/60">
                                        {new Date(apt.date).getDate()}
                                    </span>
                                    <span className="text-xs uppercase text-white/40 font-medium tracking-wider mb-2">
                                        {format(new Date(apt.date), 'MMM', { locale: pt })}
                                    </span>
                                    <div className="flex items-center gap-1.5 text-xs bg-white/10 px-2 py-1 rounded">
                                        <Clock className="w-3 h-3" />
                                        {apt.time}
                                    </div>
                                </div>

                                {/* Details */}
                                <div className="flex-1 space-y-3">
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                                        <h3 className="text-lg font-bold text-white flex items-center gap-2">
                                            <User className="w-4 h-4 text-[#810E47]" />
                                            {apt.name}
                                        </h3>
                                        <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider w-fit ${apt.status === 'confirmed' ? 'bg-green-500/10 text-green-400 border border-green-500/20' :
                                            apt.status === 'cancelled' ? 'bg-red-500/10 text-red-400 border border-red-500/20' :
                                                'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20'
                                            }`}>
                                            {apt.status === 'pending' ? 'Pendente' :
                                                apt.status === 'confirmed' ? 'Confirmado' :
                                                    apt.status === 'cancelled' ? 'Cancelado' : apt.status}
                                        </span>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-white/60">
                                        <div className="flex items-center gap-2">
                                            <Mail className="w-3.5 h-3.5" />
                                            {apt.email}
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Phone className="w-3.5 h-3.5" />
                                            {apt.phone}
                                        </div>
                                    </div>

                                    <div className="pt-2">
                                        <p className="text-xs uppercase tracking-wider text-white/30 mb-1">Assunto</p>
                                        <p className="text-white/80">{apt.topic}</p>
                                    </div>

                                    {apt.message && (
                                        <div className="bg-black/20 p-3 rounded-lg text-sm text-white/70 italic border border-white/5">
                                            &quot;{apt.message}&quot;
                                        </div>
                                    )}
                                </div>

                                {/* Actions */}
                                <div className="flex lg:flex-col gap-2 justify-center border-t lg:border-t-0 lg:border-l border-white/5 pt-4 lg:pt-0 lg:pl-6">
                                    {apt.status === 'pending' && (
                                        <>
                                            <button
                                                onClick={() => updateStatus(apt.id, 'confirmed')}
                                                className="flex items-center gap-2 px-4 py-2 bg-green-500/10 hover:bg-green-500/20 text-green-400 rounded-lg text-xs font-bold transition-colors border border-green-500/20"
                                            >
                                                <Check className="w-4 h-4" /> Confirmar
                                            </button>
                                            <button
                                                onClick={() => updateStatus(apt.id, 'cancelled')}
                                                className="flex items-center gap-2 px-4 py-2 bg-red-500/10 hover:bg-red-500/20 text-red-400 rounded-lg text-xs font-bold transition-colors border border-red-500/20"
                                            >
                                                <X className="w-4 h-4" /> Cancelar
                                            </button>
                                        </>
                                    )}
                                    {apt.status === 'confirmed' && (
                                        <button
                                            onClick={() => updateStatus(apt.id, 'cancelled')}
                                            className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 text-white/60 hover:text-white rounded-lg text-xs font-bold transition-colors"
                                        >
                                            Cancelar
                                        </button>
                                    )}
                                </div>
                            </motion.div>
                        ))
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
