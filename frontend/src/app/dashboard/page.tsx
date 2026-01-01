import { Calendar as CalendarIcon, LogOut, Plus } from "lucide-react";
import Link from "next/link";

export default function Dashboard() {
    return (
        <div className="flex-1 container mx-auto px-4 py-8">
            <header className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-3xl font-bold">Reserva da Quadra</h1>
                    <p className="text-white/60">Bem-vindo, Morador</p>
                </div>
                <div className="flex gap-4">
                    <button className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-colors text-sm">
                        <LogOut className="w-4 h-4" />
                        Sair
                    </button>
                </div>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Calendar Section (Mock) */}
                <div className="md:col-span-2 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 h-96 flex items-center justify-center flex-col gap-4">
                    <CalendarIcon className="w-16 h-16 text-white/20" />
                    <p className="text-white/50">Calendário de Reservas (Em construção)</p>
                </div>

                {/* Quick Actions / My Reservations */}
                <div className="space-y-6">
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                        <h2 className="text-lg font-semibold mb-4">Ações Rápidas</h2>
                        <button className="w-full flex items-center justify-center gap-2 bg-indigo-500 hover:bg-indigo-400 text-white py-3 rounded-xl transition-all shadow-lg">
                            <Plus className="w-5 h-5" />
                            Nova Reserva
                        </button>
                    </div>

                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                        <h2 className="text-lg font-semibold mb-4">Minhas Reservas</h2>
                        <div className="text-center text-white/40 py-8 text-sm">
                            Nenhuma reserva ativa
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
