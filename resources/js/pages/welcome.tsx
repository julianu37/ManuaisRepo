import { Head, Link, router } from '@inertiajs/react';
import React, { useState } from 'react';
import { Search, Printer, Book, AlertTriangle, Cpu, ArrowRight } from 'lucide-react';

export default function Welcome() {
    const [query, setQuery] = useState('');

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (query.trim()) {
            router.get('/buscar', { q: query });
        }
    };

    return (
        <div className="min-h-screen flex flex-col font-sans relative" style={{ backgroundColor: '#061a15', color: '#ffffff' }}>
            <Head title="PrinterDocs - Repositório Técnico" />
            
            {/* Navbar */}
            <nav className="h-20" style={{ backgroundColor: '#04120e', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <div className="max-w-6xl mx-auto h-full px-6 flex items-center justify-between">
                    <Link className="flex items-center gap-3" href="/">
                        <Printer size={28} style={{ color: '#00a36c' }} />
                        <span className="font-bold text-2xl tracking-tight">Printer<span style={{ color: '#00a36c' }}>Docs</span></span>
                    </Link>
                    <Link href="/dashboard" className="font-bold px-6 py-2 rounded transition-colors border hover:bg-white/5" style={{ borderColor: '#00a36c', color: '#00a36c' }}>
                        Dashboard
                    </Link>
                </div>
            </nav>

            {/* Hero Section */}
            <main className="flex-1 flex flex-col items-center justify-center relative px-6 py-20 text-center">
                <div className="max-w-4xl mx-auto w-full z-10">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight tracking-tight" style={{ color: '#e2e8f0' }}>
                        A inteligência técnica <br className="hidden md:block"/>
                        <span style={{ color: '#ffffff' }}>na palma da sua mão.</span>
                    </h1>
                    <p className="text-xl mb-12 leading-relaxed mx-auto" style={{ color: '#94a3b8', maxWidth: '700px' }}>
                        Repositório unificado de manuais de serviço e diagnóstico de códigos de erro para técnicos especializados.
                    </p>

                    <form onSubmit={handleSearch} className="w-full max-w-2xl mx-auto relative group">
                        <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none" style={{ color: '#00a36c' }}>
                            <Search size={24} />
                        </div>
                        <input 
                            type="text" 
                            className="w-full h-20 pl-16 pr-20 border-0 focus:ring-0 focus:outline-none text-xl font-medium shadow-2xl transition-all" 
                            style={{ 
                                backgroundColor: 'rgba(255,255,255,0.03)', 
                                color: '#ffffff', 
                                borderRadius: '8px', 
                                border: '1px solid rgba(255,255,255,0.1)',
                                borderBottom: '3px solid #00a36c' 
                            }}
                            placeholder="Digite o código de erro ou modelo..."
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        />
                        <button 
                            type="submit"
                            className="absolute inset-y-3 right-3 px-6 font-bold flex items-center gap-2 transition-transform hover:scale-105"
                            style={{ backgroundColor: '#00a36c', color: '#ffffff', borderRadius: '4px' }}
                        >
                            BUSCAR <ArrowRight size={18} />
                        </button>
                    </form>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-24 relative z-10 w-full text-left">
                    <div className="p-8 rounded-xl border transition-all hover:-translate-y-1" style={{ backgroundColor: '#04120e', borderColor: 'rgba(255,255,255,0.05)' }}>
                        <div className="w-12 h-12 rounded flex items-center justify-center mb-6" style={{ backgroundColor: 'rgba(0, 163, 108, 0.1)', color: '#00a36c' }}>
                            <AlertTriangle size={24} />
                        </div>
                        <h3 className="text-xl font-bold mb-3" style={{ color: '#ffffff' }}>Resolução de Erros</h3>
                        <p className="leading-relaxed" style={{ color: '#94a3b8' }}>Milhares de códigos de erro mapeados com instruções precisas de solução direto do fabricante.</p>
                    </div>
                    <div className="p-8 rounded-xl border transition-all hover:-translate-y-1" style={{ backgroundColor: '#04120e', borderColor: 'rgba(255,255,255,0.05)' }}>
                        <div className="w-12 h-12 rounded flex items-center justify-center mb-6" style={{ backgroundColor: 'rgba(0, 163, 108, 0.1)', color: '#00a36c' }}>
                            <Book size={24} />
                        </div>
                        <h3 className="text-xl font-bold mb-3" style={{ color: '#ffffff' }}>Manuais em PDF</h3>
                        <p className="leading-relaxed" style={{ color: '#94a3b8' }}>Acesse o acervo completo de manuais de serviço, catálogos de peças e diagramas.</p>
                    </div>
                    <div className="p-8 rounded-xl border transition-all hover:-translate-y-1" style={{ backgroundColor: '#04120e', borderColor: 'rgba(255,255,255,0.05)' }}>
                        <div className="w-12 h-12 rounded flex items-center justify-center mb-6" style={{ backgroundColor: 'rgba(0, 163, 108, 0.1)', color: '#00a36c' }}>
                            <Cpu size={24} />
                        </div>
                        <h3 className="text-xl font-bold mb-3" style={{ color: '#ffffff' }}>Multi-Marcas</h3>
                        <p className="leading-relaxed" style={{ color: '#94a3b8' }}>Suporte unificado para as principais fabricantes do mercado: Ricoh, Epson, Brother e Lexmark.</p>
                    </div>
                </div>

            </main>

            <footer className="py-8 text-center text-sm mt-auto" style={{ backgroundColor: '#04120e', color: '#64748b' }}>
                <div className="flex items-center justify-center gap-2 mb-2 font-bold" style={{ color: '#00a36c' }}>
                    <Printer size={16} /> PrinterDocs
                </div>
                &copy; {new Date().getFullYear()} &bull; Repositório Inteligente de Manuais Técnicos
            </footer>
        </div>
    );
}
