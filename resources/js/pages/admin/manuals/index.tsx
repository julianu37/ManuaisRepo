import AdminLayout from '@/layouts/admin/admin-layout';
import { Manual } from '@/types';
import { Link, router } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { FileText, RefreshCw, Upload, AlertCircle, CheckCircle, Clock, Trash2 } from 'lucide-react';

interface Props {
    manuals: {
        data: any[];
        links: any[];
    };
}

export default function ManualsIndex({ manuals }: Props) {
    const getStatusBadge = (status: string) => {
        switch (status) {
            case 'pending': return <Badge variant="outline" className="flex items-center gap-1"><Clock size={12} /> Pendente</Badge>;
            case 'processing': return <Badge variant="secondary" className="flex items-center gap-1 animate-pulse"><RefreshCw size={12} className="animate-spin" /> Processando</Badge>;
            case 'indexed': return <Badge variant="default" className="bg-green-500 hover:bg-green-600 flex items-center gap-1"><CheckCircle size={12} /> Indexado</Badge>;
            case 'failed': return <Badge variant="destructive" className="flex items-center gap-1"><AlertCircle size={12} /> Falhou</Badge>;
            default: return <Badge>{status}</Badge>;
        }
    };

    const handleReprocess = (id: number) => {
        router.post('/dashboard/manuais/' + id + '/reprocessar');
    };

    return (
        <AdminLayout 
            title="Gestão de Manuais"
            breadcrumbs={[{ title: 'Admin', href: '/admin' }, { title: 'Manuais', href: '/admin/manuais' }]}
        >
            <div className="mb-6 flex justify-end">
                <Link href={'/dashboard/manuais/create'}>
                    <Button className="flex items-center gap-2">
                        <Upload size={16} /> Upload Manual
                    </Button>
                </Link>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                    <thead>
                        <tr className="border-b border-slate-200 bg-slate-50">
                            <th className="pb-3 pt-0 font-semibold">Título</th>
                            <th className="pb-3 pt-0 font-semibold">Marca / Modelo</th>
                            <th className="pb-3 pt-0 font-semibold">Páginas</th>
                            <th className="pb-3 pt-0 font-semibold">Status</th>
                            <th className="pb-3 pt-0 font-semibold">Ações</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 bg-white">
                        {manuals.data.map((manual) => (
                            <tr key={manual.id} className="group hover:bg-muted/50">
                                <td className="py-4">
                                    <div className="flex items-center gap-2">
                                        <FileText size={18} className="text-muted-foreground" />
                                        <span className="font-medium">{manual.title}</span>
                                    </div>
                                    <div className="text-xs text-muted-foreground">{manual.original_filename}</div>
                                </td>
                                <td className="py-4">
                                    <span className="font-semibold">{manual.printer_model.brand.name}</span>
                                    <div className="text-xs">{manual.printer_model.name}</div>
                                </td>
                                <td className="py-4">{manual.total_pages || '-'}</td>
                                <td className="py-4">{getStatusBadge(manual.status)}</td>
                                <td className="py-4">
                                    <div className="flex items-center gap-2">
                                        {(manual.status === 'failed' || manual.status === 'indexed') && (
                                            <Button 
                                                variant="outline" 
                                                size="sm" 
                                                onClick={() => handleReprocess(manual.id)}
                                                title="Re-indexar Manual"
                                            >
                                                <RefreshCw size={14} />
                                            </Button>
                                        )}
                                        {manual.status === 'indexed' && (
                                            <Link href={'/manual/' + manual.id + '/pagina/1'}>
                                                <Button variant="ghost" size="sm">Ver</Button>
                                            </Link>
                                        )}
                                        <Button 
                                            variant="ghost" 
                                            size="icon" 
                                            className="h-8 w-8 text-red-500 hover:text-red-700 hover:bg-red-50"
                                            onClick={() => {
                                                if (confirm('Tem certeza que deseja excluir este manual e todo o seu índice?')) {
                                                    router.delete('/dashboard/manuais/' + manual.id);
                                                }
                                            }}
                                            title="Excluir Manual"
                                        >
                                            <Trash2 size={14} />
                                        </Button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                        {manuals.data.length === 0 && (
                            <tr>
                                <td colSpan={5} className="py-8 text-center text-muted-foreground">
                                    Nenhum manual encontrado. Comece fazendo um upload!
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </AdminLayout>
    );
}
