import { Head, Link, router } from '@inertiajs/react';
import { Search, FileText, ArrowRight, Printer, Download, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

interface Props {
    errorResults: {
        data: any[];
        links: any[];
        total: number;
    };
    manualResults: {
        data: any[];
        links: any[];
        total: number;
    };
    searchTerm: string;
}

export default function SearchResults({ errorResults, manualResults, searchTerm }: Props) {
    const [query, setQuery] = useState(searchTerm);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (query.trim()) {
            router.get('/buscar', { q: query });
        }
    };

    const totalFound = errorResults.total + manualResults.total;

    return (
        <div className="min-h-screen font-sans flex flex-col" style={{ backgroundColor: '#061a15', color: '#ffffff' }}>
            <Head title={`Resultados para "${searchTerm}"`} />

            {/* Header / Search Bar */}
            <header className="sticky top-0 z-20 shadow-xl p-4 border-b" style={{ backgroundColor: '#04120e', borderColor: 'rgba(255,255,255,0.05)' }}>
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-6">
                    <Link href="/" className="flex items-center gap-3 pr-4">
                        <Printer size={28} style={{ color: '#00a36c' }} />
                        <span className="text-xl font-bold tracking-tight hidden sm:inline">Printer<span style={{ color: '#00a36c' }}>Docs</span></span>
                    </Link>

                    <form onSubmit={handleSearch} className="flex-1 relative w-full">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center" style={{ color: '#00a36c' }}>
                            <Search size={20} />
                        </div>
                        <input 
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            className="w-full border-none py-3 pl-12 pr-4 focus:ring-0 outline-none transition-all text-lg"
                            style={{ 
                                backgroundColor: 'rgba(255,255,255,0.05)', 
                                color: '#ffffff', 
                                borderRadius: '4px',
                                borderBottom: '2px solid #00a36c'
                            }}
                            placeholder="Buscar modelo ou código de erro..."
                        />
                    </form>
                    
                    <Link href="/dashboard" className="hidden md:flex font-bold px-6 py-2 rounded transition-colors border hover:bg-white/5 whitespace-nowrap" style={{ borderColor: '#00a36c', color: '#00a36c' }}>
                        Dashboard
                    </Link>
                </div>
            </header>

            <main className="max-w-6xl mx-auto p-6 w-full flex-1">
                <div className="mb-10 mt-6">
                    <p className="mb-2 uppercase tracking-widest text-xs font-bold" style={{ color: '#00a36c' }}>Resultados da Busca</p>
                    <h2 className="text-3xl md:text-4xl font-bold" style={{ color: '#e2e8f0' }}>
                        Encontramos {totalFound} ocorrências para "<span style={{ color: '#00a36c' }}>{searchTerm}</span>"
                    </h2>
                </div>

                {/* Seção de Manuais */}
                {manualResults.data.length > 0 && (
                    <div className="mb-12">
                        <h3 className="text-xl font-bold mb-6 flex items-center gap-2 border-b pb-2" style={{ borderColor: 'rgba(255,255,255,0.05)', color: '#00a36c' }}>
                            <FileText size={20} /> Manuais e Modelos ({manualResults.total})
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {manualResults.data.map((manual: any) => (
                                <div key={manual.id} className="p-5 rounded-xl border flex flex-col justify-between" style={{ backgroundColor: '#04120e', borderColor: 'rgba(255,255,255,0.05)' }}>
                                    <div>
                                        <div className="flex items-start justify-between mb-2">
                                            <div className="px-2 py-0.5 rounded font-bold uppercase tracking-wide text-[10px]" style={{ backgroundColor: '#00a36c', color: '#ffffff' }}>
                                                {manual.printer_model.brand.name}
                                            </div>
                                            <span className="text-xs font-medium" style={{ color: '#94a3b8' }}>{manual.total_pages} pág.</span>
                                        </div>
                                        <h4 className="text-lg font-bold mb-1" style={{ color: '#ffffff' }}>{manual.printer_model.name}</h4>
                                        <p className="text-sm mb-4" style={{ color: '#94a3b8' }}>{manual.title}</p>
                                    </div>
                                    <div className="flex gap-2 mt-2">
                                        <a href={'/manual/' + manual.id + '/stream'} target="_blank" rel="noreferrer" className="flex-1 flex items-center justify-center gap-2 py-2 rounded text-sm font-bold transition-colors hover:bg-white/10" style={{ backgroundColor: 'rgba(255,255,255,0.05)', color: '#ffffff' }}>
                                            <Eye size={16} /> Visualizar PDF
                                        </a>
                                        <a href={'/manual/' + manual.id + '/stream'} download={`${manual.printer_model.name} - ${manual.title}.pdf`} className="flex-1 flex items-center justify-center gap-2 py-2 rounded text-sm font-bold transition-colors hover:brightness-110" style={{ backgroundColor: '#00875a', color: '#ffffff' }}>
                                            <Download size={16} /> Baixar PDF
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Seção de Códigos de Erro */}
                {errorResults.data.length > 0 && (
                    <div className="mb-12">
                        <h3 className="text-xl font-bold mb-6 flex items-center gap-2 border-b pb-2" style={{ borderColor: 'rgba(255,255,255,0.05)', color: '#f97316' }}>
                            <Search size={20} /> Códigos de Erro ({errorResults.total})
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {errorResults.data.map((item: any) => (
                                <div key={item.id} className="group rounded-xl border shadow-lg transition-all hover:-translate-y-1 overflow-hidden flex flex-col" style={{ backgroundColor: '#04120e', borderColor: 'rgba(255,255,255,0.05)' }}>
                                    <div className="p-6 flex-1">
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="px-3 py-1 rounded font-bold uppercase tracking-wide text-xs" style={{ backgroundColor: '#00a36c', color: '#ffffff' }}>
                                                {item.manual.printer_model.brand.name}
                                            </div>
                                            <div className="transition-colors opacity-50 group-hover:opacity-100" style={{ color: '#f97316' }}>
                                                <FileText size={20} />
                                            </div>
                                        </div>
                                        
                                        <h3 className="text-xl font-bold mb-1 truncate" title={item.manual.printer_model.name} style={{ color: '#ffffff' }}>
                                            {item.manual.printer_model.name}
                                        </h3>
                                        <p className="text-sm mb-6 truncate italic" style={{ color: '#94a3b8' }}>
                                            {item.manual.title}
                                        </p>

                                        <div className="rounded p-4 border" style={{ backgroundColor: 'rgba(255,255,255,0.02)', borderColor: 'rgba(255,255,255,0.05)' }}>
                                            <div className="flex items-center gap-3 mb-3">
                                                <span className="font-black text-2xl" style={{ color: '#f97316' }}>{item.code}</span>
                                                <span className="text-sm font-semibold px-2 py-1 rounded" style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: '#e2e8f0' }}>Pág. {item.page_number}</span>
                                            </div>
                                            <p className="text-sm line-clamp-3 leading-relaxed" style={{ color: '#94a3b8' }}>
                                                ...{item.raw_context}...
                                            </p>
                                        </div>
                                    </div>

                                    <Link 
                                        href={'/manual/' + item.manual_id + '/pagina/' + item.page_number}
                                        className="p-4 text-center font-bold text-sm flex items-center justify-center gap-2 transition-colors hover:brightness-110"
                                        style={{ backgroundColor: '#00875a', color: '#ffffff' }}
                                    >
                                        Ver Página no Manual <ArrowRight size={16} />
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {totalFound === 0 && (
                    <div className="py-24 text-center">
                        <div className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: 'rgba(255,255,255,0.02)' }}>
                            <Search size={48} style={{ color: '#00a36c', opacity: 0.5 }} />
                        </div>
                        <h3 className="text-2xl font-bold mb-4" style={{ color: '#ffffff' }}>Nenhum resultado encontrado</h3>
                        <p className="max-w-md mx-auto mb-8" style={{ color: '#94a3b8' }}>
                            Tente buscar por um modelo diferente ou verifique se o fabricante está cadastrado no sistema.
                        </p>
                        <Link href="/">
                            <Button className="px-6 py-6 font-bold text-base" style={{ backgroundColor: '#00a36c', color: '#ffffff' }}>
                                Voltar para o Início
                            </Button>
                        </Link>
                    </div>
                )}
            </main>

            <footer className="py-6 text-center text-sm border-t" style={{ backgroundColor: '#04120e', borderColor: 'rgba(255,255,255,0.05)', color: '#64748b' }}>
                <div className="flex items-center justify-center gap-2 mb-2 font-bold" style={{ color: '#00a36c' }}>
                    <Printer size={16} /> PrinterDocs
                </div>
                &copy; {new Date().getFullYear()} &bull; Repositório Inteligente de Manuais
            </footer>
        </div>
    );
}
