import Link from "next/link";

export function Footer() {
    return (
        <footer className="w-full border-t border-white/10 text-xs text-white/60">
            <div className="mx-auto max-w-5xl px-4 py-3 flex flex-col sm:flex-row items-center justify-between gap-2">
                <span className="select-none">
                    © 2026 eek029 Sistemas e Automação. Todos os direitos reservados.
                </span>
                <nav className="flex items-center gap-3">
                    <Link
                        href="https://t.me/eek029"
                        className="hover:text-white/90 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Telegram
                    </Link>
                    <span className="text-white/30">•</span>
                    <Link
                        href="https://x.com/eek029"
                        className="hover:text-white/90 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        X
                    </Link>
                </nav>
            </div>
        </footer>
    );
}
