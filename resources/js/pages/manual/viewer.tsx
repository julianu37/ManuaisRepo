import { Head, Link } from '@inertiajs/react';
import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Download, Printer as PrinterIcon, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

// Configura o worker do PDF.js
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface Props {
    manual: any;
    initialPage: number;
    pdfUrl: string;
}

export default function ManualViewer({ manual, initialPage, pdfUrl }: Props) {
    const [numPages, setNumPages] = useState<number | null>(null);
    const [pageNumber, setPageNumber] = useState(initialPage || 1);
    const [scale, setScale] = useState(1.2);

    function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
        setNumPages(numPages);
    }

    const changePage = (offset: number) => {
        setPageNumber(prevPageNumber => {
            const next = prevPageNumber + offset;
            return Math.min(Math.max(next, 1), numPages || 1);
        });
    };

    return (
        <div className="flex flex-col h-screen bg-[#1e1e1e] text-white overflow-hidden">
            <Head title={`Visualizando: ${manual.title}`} />

            {/* Top Toolbar */}
            <header className="flex items-center justify-between px-2 md:px-6 py-2 md:py-3 bg-[#2d2d2d] border-b border-white/5 z-20 shadow-lg">
                <div className="flex items-center gap-2 md:gap-4 shrink-0">
                    <Link href="/">
                        <Button variant="ghost" size="icon" className="h-8 w-8 md:h-10 md:w-10 text-gray-400 hover:text-white shrink-0">
                            <X size={18} className="md:w-5 md:h-5" />
                        </Button>
                    </Link>
                    <div className="hidden sm:block">
                        <h1 className="font-bold text-xs md:text-sm leading-none truncate max-w-[140px] md:max-w-xs">{manual.printer_model.brand.name} {manual.printer_model.name}</h1>
                        <p className="text-[9px] md:text-[10px] text-gray-400 mt-1 uppercase tracking-widest truncate max-w-[140px] md:max-w-xs">{manual.title}</p>
                    </div>
                </div>

                <div className="flex items-center bg-[#1a1a1a] rounded-md px-1 py-1 md:px-2 md:py-1.5 gap-0.5 md:gap-1 shrink-0 mx-2">
                    <Button variant="ghost" size="icon" onClick={() => changePage(-1)} disabled={pageNumber <= 1} className="h-6 w-6 md:h-7 md:w-7 text-gray-400 shrink-0">
                        <ChevronLeft size={16} />
                    </Button>
                    <div className="flex items-center gap-1 px-1 md:px-2 text-[11px] md:text-xs font-mono shrink-0">
                        <input 
                            type="number" 
                            value={pageNumber} 
                            onChange={(e) => setPageNumber(Math.min(Math.max(parseInt(e.target.value) || 1, 1), numPages || 1))}
                            className="bg-transparent border-none w-6 md:w-8 text-center p-0 focus:ring-0"
                        />
                        <span className="text-gray-600">/</span>
                        <span>{numPages || '--'}</span>
                    </div>
                    <Button variant="ghost" size="icon" onClick={() => changePage(1)} disabled={pageNumber >= (numPages || 1)} className="h-6 w-6 md:h-7 md:w-7 text-gray-400 shrink-0">
                        <ChevronRight size={16} />
                    </Button>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                    <div className="hidden md:flex items-center bg-[#1a1a1a] rounded-md mr-1 md:mr-2 shrink-0">
                        <Button variant="ghost" size="icon" onClick={() => setScale(s => Math.max(s - 0.2, 0.5))} className="h-7 w-7 text-gray-400 shrink-0"><ZoomOut size={14} /></Button>
                        <span className="text-[10px] text-gray-500 font-bold w-10 text-center shrink-0">{Math.round(scale * 100)}%</span>
                        <Button variant="ghost" size="icon" onClick={() => setScale(s => Math.min(s + 0.2, 3))} className="h-7 w-7 text-gray-400 shrink-0"><ZoomIn size={14} /></Button>
                    </div>
                    <a href={pdfUrl} download={manual.original_filename} className="shrink-0">
                        <Button variant="secondary" size="sm" className="text-white border-none h-8 px-3 md:px-4 gap-1.5 md:gap-2 hover:brightness-110" style={{ backgroundColor: '#00875a' }}>
                            <Download size={14} /> <span className="hidden sm:inline">Baixar PDF</span>
                        </Button>
                    </a>
                </div>
            </header>

            {/* PDF Canvas Area */}
            <main className="flex-1 overflow-auto flex justify-center bg-[#0f0f0f] p-8 custom-scrollbar">
                <div className="shadow-2xl ring-1 ring-white/10">
                    <Document 
                        file={pdfUrl} 
                        onLoadSuccess={onDocumentLoadSuccess}
                        loading={
                            <div className="flex flex-col items-center justify-center p-20 space-y-4">
                                <div className="w-12 h-12 border-4 border-t-transparent rounded-full animate-spin" style={{ borderColor: '#00875a', borderTopColor: 'transparent' }} />
                                <p className="text-gray-400 animate-pulse font-medium">Carregando manual...</p>
                            </div>
                        }
                        error={
                            <div className="bg-red-500/10 border border-red-500/20 p-8 rounded-xl text-center max-w-sm">
                                <p className="text-red-400 font-bold mb-2">Erro ao carregar PDF</p>
                                <p className="text-xs text-red-400/60">O arquivo pode ter sido removido ou está corrompido.</p>
                            </div>
                        }
                    >
                        <Page 
                            pageNumber={pageNumber} 
                            scale={scale} 
                            renderAnnotationLayer={true}
                            renderTextLayer={true}
                            className="rounded-sm"
                        />
                    </Document>
                </div>
            </main>

            <style dangerouslySetInnerHTML={{ __html: `
                .custom-scrollbar::-webkit-scrollbar { width: 10px; height: 10px; }
                .custom-scrollbar::-webkit-scrollbar-track { background: #0f0f0f; }
                .custom-scrollbar::-webkit-scrollbar-thumb { background: #333; border-radius: 5px; border: 2px solid #0f0f0f; }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #444; }
                .react-pdf__Page__canvas { margin: 0 auto; }
            `}} />
        </div>
    );
}
