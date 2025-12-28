export default function AdminDashboardPage() {
    return (
        <div>
            <h1 className="text-3xl font-playfair mb-8">Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-[#1a1a1a] border border-white/5 p-6 rounded-2xl">
                    <h3 className="text-white/60 text-sm uppercase tracking-wider mb-2">Total Agendamentos</h3>
                    <p className="text-4xl font-bold">0</p>
                </div>
                <div className="bg-[#1a1a1a] border border-white/5 p-6 rounded-2xl">
                    <h3 className="text-white/60 text-sm uppercase tracking-wider mb-2">Mensagens Chatbot</h3>
                    <p className="text-4xl font-bold">0</p>
                </div>
                <div className="bg-[#1a1a1a] border border-white/5 p-6 rounded-2xl">
                    <h3 className="text-white/60 text-sm uppercase tracking-wider mb-2">Publicações Blog</h3>
                    <p className="text-4xl font-bold">0</p>
                </div>
            </div>
            <div className="mt-12">
                <p className="text-white/40">Selecione uma opção no menu lateral para começar.</p>
            </div>
        </div>
    );
}
