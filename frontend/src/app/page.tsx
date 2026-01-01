import { Calendar, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const googleLoginUrl = process.env.NEXT_PUBLIC_API_URL
    ? `${process.env.NEXT_PUBLIC_API_URL}/auth/login/google`
    : "http://localhost:8000/api/v1/auth/login/google";

  return (
    <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 sm:p-12 shadow-2xl border border-white/20 max-w-md w-full">
        <div className="mb-6 flex justify-center">
          <div className="p-4 bg-white/20 rounded-full">
            <Calendar className="w-12 h-12 text-white" />
          </div>
        </div>

        <h1 className="text-3xl font-bold mb-2">Quadra do Condomínio</h1>
        <p className="text-white/80 mb-8">
          Agende seu horário, gerencie reservas e receba notificações.
        </p>

        <Link
          href={googleLoginUrl}
          className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-white hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all shadow-lg hover:shadow-xl"
        >
          <span className="absolute left-0 inset-y-0 flex items-center pl-3">
            <ShieldCheck className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
          </span>
          Entrar com Google
        </Link>

        <div className="mt-6 text-xs text-white/40">
          Acesso restrito a moradores e administração.
        </div>
      </div>
    </div>
  );
}
