import { Head, Link, router } from '@inertiajs/react';
import { Search, Printer, FileText, Download, Eye, ArrowRight, ChevronRight, AlertTriangle, ArrowLeft } from 'lucide-react';
import { useState } from 'react';

export default function ModelShow({ printerModel, searchTerm, errorResults }: any) {
    const [query, setQuery] = useState(searchTerm || '');

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        router.get(`/modelo/${printerModel.id}`, { q: query }, { preserveState: true });
    };

    return (
        <div className="min-h-screen flex flex-col font-sans relative" style={{ backgroundColor: '#061a15', color: '#ffffff' }}>
            <Head title={`${printerModel.brand.name} ${printerModel.name} - PrinterDocs`} />
            
            {/* Navbar */}
            <nav className="h-20" style={{ backgroundColor: '#04120e', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <div className="max-w-6xl mx-auto h-full px-6 flex items-center justify-between">
                    <Link className="flex items-center gap-3" href="/">
                        <Printer size={28} style={{ color: '#00a36c' }} />
                        <span className="font-bold text-2xl tracking-tight hidden sm:inline">Printer<span style={{ color: '#00a36c' }}>Docs</span></span>
                    </Link>
                    <div className="flex gap-4">
                        <Link href="/" className="font-bold px-4 py-2 flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                            <ArrowLeft size={18} /> Trocar Modelo
                        </Link>
                        <Link href="/dashboard" className="font-bold px-6 py-2 rounded transition-colors border hover:bg-white/5 hidden sm:flex" style={{ borderColor: '#00a36c', color: '#00a36c' }}>
                            Dashboard
                        </Link>
                    </div>
                </div>
            </nav>

            <main className="flex-1 max-w-6xl mx-auto w-full px-6 py-12">
                {/* Header do Modelo */}
                <div className="mb-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <span className="px-3 py-1 text-xs font-bold uppercase rounded bg-[#00a36c] text-white">
                                {printerModel.brand.name}
                            </span>
                            <span className="text-gray-400 text-sm">Central de Diagnóstico</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold">{printerModel.name}</h1>
                    </div>
                </div>

                {/* Grid principal */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    
                    {/* Coluna da Esquerda (Busca de Erros) */}
                    <div className="lg:col-span-2 space-y-8">
                        
                        {/* Barra de Busca de Erros */}
                        <div className="p-6 md:p-8 rounded-xl border bg-[#04120e] border-white/5 shadow-2xl">
                            <h2 className="text-2xl font-bold mb-2 text-[#e2e8f0]">Buscar Código de Erro</h2>
                            <p className="text-[#94a3b8] mb-6">Digite o código SC (ex: SC554) ou sintoma para este modelo.</p>
                            
                            <form onSubmit={handleSearch} className="flex items-center w-full h-16 shadow-inner relative rounded border focus-within:border-[#f97316] transition-colors"
                                 style={{ backgroundColor: 'rgba(255,255,255,0.03)', borderColor: 'rgba(255,255,255,0.1)' }}>
                                <div className="pl-4 pr-2 text-[#f97316]">
                                    <Search size={22} />
                                </div>
                                <input 
                                    type="text" 
                                    className="flex-1 min-w-0 h-full bg-transparent border-0 focus:ring-0 focus:outline-none text-lg px-2 text-white" 
                                    placeholder="Qual o erro?"
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                />
                                <button type="submit" className="h-12 px-6 font-bold flex items-center gap-2 mr-2 transition-all bg-[#f97316] text-white rounded hover:brightness-110">
                                    <span className="hidden sm:inline">BUSCAR</span> <ChevronRight size={18} />
                                </button>
                            </form>
                        </div>

                        {/* Resultados de Erro */}
                        {errorResults && errorResults.data.length > 0 && (
                            <div className="space-y-4">
                                <h3 className="text-xl font-bold mb-6 flex items-center gap-2 border-b pb-2 border-white/5 text-[#f97316]">
                                    <AlertTriangle size={20} /> Resultados Encontrados ({errorResults.total})
                                </h3>
                                
                                {errorResults.data.map((item: any) => (
                                    <div key={item.id} className="p-6 rounded-xl border bg-[#04120e] border-white/5 flex flex-col md:flex-row gap-6 items-start md:items-center hover:bg-white/5 transition-colors">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-3">
                                                <span className="font-black text-2xl text-[#f97316]">{item.code}</span>
                                                <span className="text-xs font-semibold px-2 py-1 rounded bg-white/10 text-[#e2e8f0]">Página {item.page_number}</span>
                                                <span className="text-xs text-gray-500 italic">{item.manual.title}</span>
                                            </div>
                                            <p className="text-sm line-clamp-3 leading-relaxed text-[#94a3b8]">...{item.raw_context}...</p>
                                        </div>
                                        <Link 
                                            href={`/manual/${item.manual_id}/pagina/${item.page_number}`}
                                            className="w-full md:w-auto px-6 py-3 text-center font-bold text-sm flex items-center justify-center gap-2 transition-colors hover:brightness-110 bg-[#00875a] text-white rounded shrink-0"
                                        >
                                            Abrir Página <ArrowRight size={16} />
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        )}
                        
                        {errorResults && errorResults.data.length === 0 && (
                             <div className="p-12 text-center border rounded-xl bg-[#04120e] border-white/5">
                                 <AlertTriangle size={48} className="mx-auto mb-4 text-[#f97316] opacity-50" />
                                 <h3 className="text-xl font-bold text-white mb-2">Nenhum erro encontrado</h3>
                                 <p className="text-[#94a3b8]">Não encontramos nenhum resultado para "{searchTerm}" nos manuais deste modelo.</p>
                             </div>
                        )}
                    </div>

                    {/* Coluna da Direita (Manuais Completos) */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-bold flex items-center gap-2 border-b pb-2 border-white/5 text-[#00a36c]">
                            <FileText size={20} /> Manuais em PDF
                        </h3>
                        {printerModel.manuals.length > 0 ? (
                            printerModel.manuals.map((manual: any) => (
                                <div key={manual.id} className="p-5 rounded-xl border flex flex-col gap-4 bg-[#04120e] border-white/5 shadow-lg">
                                    <div>
                                        <h4 className="text-sm font-bold text-white uppercase mb-1">{manual.title}</h4>
                                        <p className="text-xs text-[#94a3b8]">{manual.total_pages} páginas</p>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <a href={`/manual/${manual.id}/stream`} target="_blank" rel="noreferrer" className="w-full flex items-center justify-center gap-2 py-2 rounded text-sm font-bold transition-colors hover:bg-white/10 bg-white/5 text-white">
                                            <Eye size={16} /> Visualizar Inteiro
                                        </a>
                                        <a href={`/manual/${manual.id}/stream`} download={`${printerModel.name} - ${manual.title}.pdf`} className="w-full flex items-center justify-center gap-2 py-2 rounded text-sm font-bold transition-colors hover:brightness-110 bg-[#00875a] text-white">
                                            <Download size={16} /> Fazer Download
                                        </a>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="p-6 text-center border rounded-xl bg-[#04120e] border-white/5">
                                <FileText size={32} className="mx-auto mb-3 text-gray-600" />
                                <p className="text-sm text-[#94a3b8]">Nenhum manual indexado para este modelo.</p>
                            </div>
                        )}
                    </div>
                    
                </div>
            </main>
        </div>
    );
}
