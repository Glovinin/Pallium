"use client";

import { useState, useEffect } from "react";
import { sendSchedulingEmails } from "@/app/actions/scheduling";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar as CalendarIcon, Clock, User, Mail, Phone, ArrowRight, ArrowLeft, CheckCircle2, ChevronRight, MessageSquare } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import Link from "next/link";

// Schema validation
const appointmentSchema = z.object({
    name: z.string().min(3, "Por favor, insira o seu nome completo"),
    email: z.string().email("Endereço de email inválido"),
    phone: z.string().min(9, "Contacto telefónico inválido"),
    topic: z.string().min(1, "Por favor, selecione um motivo"),
    message: z.string().optional(),
});

type AppointmentFormData = z.infer<typeof appointmentSchema>;

const TIME_SLOTS = [
    "09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30",
    "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30"
];

const TOPICS = [
    "Psicologia Clínica (Adultos)",
    "Psicologia Infantil e Adolescente",
    "Terapia de Casal e Familiar",
    "Neuropsicologia",
    "Coaching Psicológico",
    "Psicoterapia Online",
    "Outro Assunto"
];

export default function AgendarPage() {
    const [step, setStep] = useState(1);
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [selectedTime, setSelectedTime] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm<AppointmentFormData>({
        resolver: zodResolver(appointmentSchema),
    });

    const goNext = async () => {
        if (step === 1) {
            if (!selectedDate || !selectedTime) {
                toast.error("Por favor, selecione uma data e um horário.");
                return;
            }
            setStep(2);
        }
    };

    const goBack = () => {
        setStep(1);
    };

    const onSubmit = async (data: AppointmentFormData) => {
        if (!selectedDate || !selectedTime) return;

        setIsSubmitting(true);

        const result = await sendSchedulingEmails({
            name: data.name,
            email: data.email,
            phone: data.phone,
            topic: data.topic,
            message: data.message,
            date: selectedDate,
            time: selectedTime
        });

        if (result.success) {
            setIsSuccess(true);
            toast.success("Pedido de agendamento enviado com sucesso!");
        } else {
            toast.error("Ocorreu um erro ao enviar o pedido. Por favor tente novamente.");
        }

        setIsSubmitting(false);
    };

    // Simple date generation for next 14 days (excluding weekends)
    const generateDates = () => {
        const dates = [];
        const current = new Date();
        // Start from tomorrow
        current.setDate(current.getDate() + 1);

        let count = 0;
        while (count < 12) {
            if (current.getDay() !== 0 && current.getDay() !== 6) {
                dates.push(new Date(current));
                count++;
            }
            current.setDate(current.getDate() + 1);
        }
        return dates;
    };

    const dates = generateDates();

    if (isSuccess) {
        return (
            <div className="min-h-screen bg-[#F8F7F5] flex items-center justify-center p-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white p-12 rounded-3xl shadow-xl max-w-lg w-full text-center border border-neutral-100"
                >
                    <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 className="w-10 h-10 text-green-600" />
                    </div>
                    <h2 className="text-3xl font-playfair text-neutral-900 mb-4">Pedido Confirmado</h2>
                    <p className="text-neutral-500 mb-8 leading-relaxed">
                        Recebemos o seu pedido de agendamento. Entraremos em contacto brevemente para confirmar a disponibilidade.
                    </p>
                    <Link href="/" className="inline-flex items-center gap-2 px-8 py-3 bg-[#002b30] text-white rounded-full font-medium hover:bg-[#006d77] transition-colors">
                        Voltar à Página Inicial
                    </Link>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#F8F7F5]" data-theme="light">
            {/* Header Separation */}
            <div className="pt-32 md:pt-40 lg:pt-48 pb-12 px-6">
                <div className="container mx-auto max-w-4xl">

                    <div className="text-center mb-16">
                        <span className="text-[#006d77] font-bold text-xs tracking-[0.2em] uppercase mb-4 block">Marcações Online</span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair text-neutral-900 mb-6">Agendar Consulta</h1>
                        <p className="text-neutral-500 max-w-xl mx-auto text-lg font-light leading-relaxed">
                            Selecione o horário mais conveniente para si. O processo é simples, rápido e totalmente confidencial.
                        </p>
                    </div>

                    {/* Steps Indicator */}
                    <div className="flex items-center justify-center gap-4 mb-12">
                        <div className={`flex items-center gap-2 ${step >= 1 ? 'text-[#006d77]' : 'text-neutral-300'}`}>
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border transition-colors ${step >= 1 ? 'border-[#006d77] bg-[#006d77] text-white' : 'border-neutral-300'}`}>1</div>
                            <span className="text-sm font-medium uppercase tracking-wider">Horário</span>
                        </div>
                        <div className="w-12 h-[1px] bg-neutral-200" />
                        <div className={`flex items-center gap-2 ${step >= 2 ? 'text-[#006d77]' : 'text-neutral-400'}`}>
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border transition-colors ${step >= 2 ? 'border-[#006d77] bg-[#006d77] text-white' : 'border-neutral-300 text-neutral-400'}`}>2</div>
                            <span className="text-sm font-medium uppercase tracking-wider">Dados</span>
                        </div>
                    </div>

                    <motion.div
                        layout
                        className="bg-white rounded-[2rem] shadow-[0_20px_40px_rgba(0,0,0,0.05)] border border-neutral-100 overflow-hidden relative z-10"
                    >
                        <div className="p-8 md:p-12">
                            <AnimatePresence mode="wait">
                                {step === 1 && (
                                    <motion.div
                                        key="step1"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        className="space-y-10"
                                    >
                                        {/* Date Selection */}
                                        <div>
                                            <h3 className="text-xl font-playfair text-neutral-900 mb-6 flex items-center gap-3">
                                                <CalendarIcon className="w-5 h-5 text-[#006d77]" />
                                                Escolha o Dia
                                            </h3>
                                            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-3">
                                                {dates.map((date, idx) => {
                                                    const isSelected = selectedDate?.toDateString() === date.toDateString();
                                                    return (
                                                        <button
                                                            key={idx}
                                                            onClick={() => setSelectedDate(date)}
                                                            className={`p-4 rounded-2xl border transition-all duration-300 group ${isSelected
                                                                ? "bg-[#006d77] border-[#006d77] text-white shadow-lg shadow-[#006d77]/20"
                                                                : "bg-neutral-50 border-neutral-100 text-neutral-600 hover:border-[#006d77]/30 hover:bg-white"
                                                                }`}
                                                        >
                                                            <div className="text-xs font-bold uppercase tracking-widest opacity-60 mb-1">
                                                                {/* Hydration safe rendering using consistent locale in client/server mismatch scenarios usually implies suppressing or client-only render, but simple replace here fixes the mismatch if caused by server locale diffs */}
                                                                <span suppressHydrationWarning>
                                                                    {date.toLocaleDateString('pt-PT', { weekday: 'short' }).replace('.', '')}
                                                                </span>
                                                            </div>
                                                            <div className="text-2xl font-playfair font-bold mb-1">
                                                                {date.getDate()}
                                                            </div>
                                                            <div className="text-[10px] uppercase tracking-wider opacity-60">
                                                                <span suppressHydrationWarning>
                                                                    {date.toLocaleDateString('pt-PT', { month: 'short' })}
                                                                </span>
                                                            </div>
                                                        </button>
                                                    );
                                                })}
                                            </div>
                                        </div>

                                        {/* Time Selection */}
                                        <div className={!selectedDate ? "opacity-40 pointer-events-none grayscale transition-all" : "transition-all"}>
                                            <h3 className="text-xl font-playfair text-neutral-900 mb-6 flex items-center gap-3">
                                                <Clock className="w-5 h-5 text-[#006d77]" />
                                                Escolha a Hora
                                            </h3>
                                            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-3">
                                                {TIME_SLOTS.map((time, idx) => {
                                                    const isSelected = selectedTime === time;
                                                    return (
                                                        <button
                                                            key={idx}
                                                            onClick={() => setSelectedTime(time)}
                                                            className={`py-3 px-2 rounded-xl text-sm font-medium border transition-all duration-200 ${isSelected
                                                                ? "bg-[#006d77] text-white border-[#006d77] shadow-md"
                                                                : "bg-white border-neutral-200 text-neutral-600 hover:border-[#006d77]/50 hover:bg-neutral-50"
                                                                }`}
                                                        >
                                                            {time}
                                                        </button>
                                                    )
                                                })}
                                            </div>
                                        </div>

                                        <div className="flex justify-end pt-6 border-t border-neutral-100">
                                            <button
                                                onClick={goNext}
                                                disabled={!selectedDate || !selectedTime}
                                                className="group flex items-center gap-2 bg-[#002b30] text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-[#006d77] transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                                            >
                                                Seguinte
                                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                            </button>
                                        </div>
                                    </motion.div>
                                )}

                                {step === 2 && (
                                    <motion.div
                                        key="step2"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 20 }}
                                        className="space-y-8"
                                    >
                                        <div className="bg-neutral-50 p-6 rounded-2xl border border-neutral-100 flex items-center justify-between mb-8">
                                            <div className="flex items-center gap-4">
                                                <div className="bg-white p-3 rounded-xl border border-neutral-100">
                                                    <CalendarIcon className="w-6 h-6 text-[#006d77]" />
                                                </div>
                                                <div>
                                                    <p className="text-xs uppercase tracking-wider text-neutral-500 font-bold mb-1">Data Selecionada</p>
                                                    <p className="text-neutral-900 font-playfair font-bold text-lg">
                                                        {selectedDate?.toLocaleDateString('pt-PT', { weekday: 'long', day: 'numeric', month: 'long' })}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-xs uppercase tracking-wider text-neutral-500 font-bold mb-1">Horário</p>
                                                <p className="text-neutral-900 font-playfair font-bold text-lg">{selectedTime}</p>
                                            </div>
                                        </div>

                                        <h3 className="text-xl font-playfair text-neutral-900 mb-6">Os seus dados pessoais</h3>

                                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                            <div className="grid md:grid-cols-2 gap-6">
                                                <div className="space-y-2">
                                                    <label className="text-xs font-bold uppercase tracking-widest text-neutral-500 pl-1">Nome Completo</label>
                                                    <div className="relative group">
                                                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400 group-focus-within:text-[#006d77] transition-colors" />
                                                        <input
                                                            {...register("name")}
                                                            className="w-full bg-neutral-50 border border-neutral-200 rounded-xl py-4 pl-12 pr-4 text-neutral-900 focus:outline-none focus:border-[#006d77] focus:bg-white transition-all placeholder:text-neutral-400"
                                                            placeholder="Insira o seu nome"
                                                        />
                                                    </div>
                                                    {errors.name && <span className="text-red-500 text-xs pl-1">{errors.name.message}</span>}
                                                </div>

                                                <div className="space-y-2">
                                                    <label className="text-xs font-bold uppercase tracking-widest text-neutral-500 pl-1">Telemóvel</label>
                                                    <div className="relative group">
                                                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400 group-focus-within:text-[#006d77] transition-colors" />
                                                        <input
                                                            {...register("phone")}
                                                            className="w-full bg-neutral-50 border border-neutral-200 rounded-xl py-4 pl-12 pr-4 text-neutral-900 focus:outline-none focus:border-[#006d77] focus:bg-white transition-all placeholder:text-neutral-400"
                                                            placeholder="+351 912 345 678"
                                                        />
                                                    </div>
                                                    {errors.phone && <span className="text-red-500 text-xs pl-1">{errors.phone.message}</span>}
                                                </div>
                                            </div>

                                            <div className="space-y-2">
                                                <label className="text-xs font-bold uppercase tracking-widest text-neutral-500 pl-1">Email</label>
                                                <div className="relative group">
                                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400 group-focus-within:text-[#006d77] transition-colors" />
                                                    <input
                                                        {...register("email")}
                                                        className="w-full bg-neutral-50 border border-neutral-200 rounded-xl py-4 pl-12 pr-4 text-neutral-900 focus:outline-none focus:border-[#006d77] focus:bg-white transition-all placeholder:text-neutral-400"
                                                        placeholder="seu@email.com"
                                                    />
                                                </div>
                                                {errors.email && <span className="text-red-500 text-xs pl-1">{errors.email.message}</span>}
                                            </div>

                                            <div className="space-y-2">
                                                <label className="text-xs font-bold uppercase tracking-widest text-neutral-500 pl-1">Motivo do Agendamento</label>
                                                <select
                                                    {...register("topic")}
                                                    className="w-full bg-neutral-50 border border-neutral-200 rounded-xl py-4 px-4 text-neutral-900 focus:outline-none focus:border-[#006d77] focus:bg-white transition-all cursor-pointer appearance-none"
                                                >
                                                    <option value="">Selecione um tópico...</option>
                                                    {TOPICS.map(t => (
                                                        <option key={t} value={t}>{t}</option>
                                                    ))}
                                                </select>
                                                {errors.topic && <span className="text-red-500 text-xs pl-1">{errors.topic.message}</span>}
                                            </div>

                                            <div className="space-y-2">
                                                <label className="text-xs font-bold uppercase tracking-widest text-neutral-500 pl-1">Mensagem (Opcional)</label>
                                                <textarea
                                                    {...register("message")}
                                                    className="w-full bg-neutral-50 border border-neutral-200 rounded-xl py-4 px-4 text-neutral-900 focus:outline-none focus:border-[#006d77] focus:bg-white transition-all placeholder:text-neutral-400 min-h-[120px]"
                                                    placeholder="Breve descrição do assunto..."
                                                />
                                            </div>

                                            <div className="flex items-center justify-between pt-6 border-t border-neutral-100">
                                                <button
                                                    type="button"
                                                    onClick={goBack}
                                                    className="text-neutral-500 hover:text-neutral-900 text-sm font-bold uppercase tracking-wider flex items-center gap-2 transition-colors"
                                                >
                                                    <ArrowLeft className="w-4 h-4" />
                                                    Voltar
                                                </button>
                                                <button
                                                    type="submit"
                                                    disabled={isSubmitting}
                                                    className="bg-[#006d77] text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-[#002b30] transition-all flex items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                                                >
                                                    {isSubmitting ? "A confirmar..." : (
                                                        <>
                                                            Confirmar <CheckCircle2 className="w-4 h-4" />
                                                        </>
                                                    )}
                                                </button>
                                            </div>
                                        </form>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>

                    {/* Fallback Contact Action */}
                    <div className="mt-12 text-center">
                        <p className="text-neutral-400 mb-4 text-sm">Não pretende agendar uma consulta neste momento?</p>
                        <Link href="/contactos">
                            <button className="group inline-flex items-center gap-2 px-6 py-3 border border-neutral-200 rounded-full text-neutral-600 font-medium text-sm hover:bg-white hover:text-[#006d77] hover:border-[#006d77]/30 transition-all">
                                <MessageSquare className="w-4 h-4" />
                                Enviar apenas uma mensagem
                                <ArrowRight className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                            </button>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
}
