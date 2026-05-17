import { Head, Link, router } from '@inertiajs/react';
import React, { useState, useEffect, useRef } from 'react';
import { Search, Printer, Book, AlertTriangle, Cpu, ArrowRight, X, ChevronRight } from 'lucide-react';

type PrinterModel = {
    id: number;
    name: string;
    brand_id: number;
    brand: {
        id: number;
        name: string;
    };
};

export default function Welcome({ models = [] }: { models: PrinterModel[] }) {
    const [modelQuery, setModelQuery] = useState('');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    
    const dropdownRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    // Filter models based on search query
    const filteredModels = models.filter(m => 
        m.name.toLowerCase().includes(modelQuery.toLowerCase()) || 
        m.brand.name.toLowerCase().includes(modelQuery.toLowerCase())
    ).slice(0, 8); // Max 8 results for dropdown

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleSelectModel = (model: PrinterModel) => {
        router.get(`/modelo/${model.id}`);
    };

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        
        // If pressing enter, and there's exactly 1 matching model (or at least 1), auto-select the first one
        if (modelQuery.trim() && filteredModels.length > 0) {
            handleSelectModel(filteredModels[0]);
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
                <div className="max-w-4xl mx-auto w-full z-50 relative">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight tracking-tight" style={{ color: '#e2e8f0' }}>
                        A inteligência técnica <br className="hidden md:block"/>
                        <span style={{ color: '#ffffff' }}>na palma da sua mão.</span>
                    </h1>
                    <p className="text-xl mb-12 leading-relaxed mx-auto" style={{ color: '#94a3b8', maxWidth: '700px' }}>
                        Repositório unificado de manuais de serviço e diagnóstico de códigos de erro para técnicos especializados.
                    </p>

                    <form onSubmit={handleSearch} className="w-full max-w-2xl mx-auto relative">
                        <div className="flex items-center w-full h-16 md:h-20 shadow-2xl transition-all relative z-20"
                             style={{ 
                                 backgroundColor: 'rgba(255,255,255,0.03)', 
                                 borderRadius: '8px', 
                                 border: '1px solid rgba(255,255,255,0.1)',
                                 borderBottom: '3px solid #3b82f6' 
                             }}>
                            
                            <div className="pl-3 md:pl-5 pr-1 md:pr-2 flex items-center shrink-0" style={{ color: '#3b82f6' }}>
                                <Search className="w-5 h-5 md:w-6 md:h-6" />
                            </div>

                            {/* Input de Busca Dinâmico */}
                            <input 
                                ref={inputRef}
                                type="text" 
                                className="flex-1 min-w-0 h-full bg-transparent border-0 focus:ring-0 focus:outline-none text-base md:text-xl font-medium px-1 md:px-2" 
                                style={{ color: '#ffffff' }}
                                placeholder="Qual o modelo? (ex: IM 430)"
                                value={modelQuery}
                                onChange={(e) => {
                                    setModelQuery(e.target.value);
                                    setIsDropdownOpen(true);
                                }}
                                onFocus={() => setIsDropdownOpen(true)}
                                onClick={() => setIsDropdownOpen(true)}
                            />

                            <button 
                                type="submit"
                                onClick={(e) => {
                                    e.preventDefault();
                                    if (filteredModels.length > 0 && modelQuery.trim()) {
                                        handleSelectModel(filteredModels[0]);
                                    }
                                }}
                                className={`h-12 md:h-14 px-3 md:px-6 text-sm md:text-base font-bold flex items-center gap-1 md:gap-2 mr-2 md:mr-3 shrink-0 transition-all ${modelQuery.trim() ? 'hover:scale-105' : 'opacity-80'}`}
                                style={{ 
                                    backgroundColor: '#3b82f6', 
                                    color: '#ffffff', 
                                    borderRadius: '4px',
                                    cursor: !modelQuery.trim() ? 'not-allowed' : 'pointer'
                                }}
                            >
                                <span className="hidden sm:inline">AVANÇAR</span> <ChevronRight size={18} />
                            </button>
                        </div>

                        {/* Dropdown de Modelos */}
                        {isDropdownOpen && modelQuery.trim().length > 0 && (
                            <div ref={dropdownRef} className="absolute left-0 right-0 mt-2 rounded shadow-2xl overflow-hidden z-30" style={{ backgroundColor: '#0f2922', border: '1px solid rgba(255,255,255,0.1)' }}>
                                {filteredModels.length > 0 ? (
                                    <ul className="max-h-64 overflow-y-auto">
                                        {filteredModels.map((model, index) => (
                                            <li 
                                                key={model.id}
                                                onClick={() => handleSelectModel(model)}
                                                className="px-6 py-4 flex items-center justify-between cursor-pointer transition-colors"
                                                style={{ borderBottom: index < filteredModels.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}
                                                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)'}
                                                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                                            >
                                                <div className="flex items-center gap-3">
                                                    <Printer size={18} style={{ color: '#94a3b8' }} />
                                                    <span className="font-semibold text-lg">{model.name}</span>
                                                    <span className="text-sm px-2 py-0.5 rounded" style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: '#cbd5e1' }}>
                                                        {model.brand.name}
                                                    </span>
                                                </div>
                                                <ArrowRight size={16} style={{ color: '#3b82f6' }} />
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <div className="px-6 py-8 text-center" style={{ color: '#94a3b8' }}>
                                        Nenhum modelo encontrado para "{modelQuery}".
                                    </div>
                                )}
                            </div>
                        )}
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

            <footer className="py-8 text-center text-sm mt-auto relative z-10" style={{ backgroundColor: '#04120e', color: '#64748b' }}>
                <div className="flex items-center justify-center gap-2 mb-2 font-bold" style={{ color: '#00a36c' }}>
                    <Printer size={16} /> PrinterDocs
                </div>
                &copy; {new Date().getFullYear()} &bull; Repositório Inteligente de Manuais Técnicos
            </footer>
        </div>
    );
}
