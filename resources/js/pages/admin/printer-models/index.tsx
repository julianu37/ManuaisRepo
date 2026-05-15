import AdminLayout from '@/layouts/admin/admin-layout';
import { PrinterModel } from '@/types';
import { Button } from '@/components/ui/button';
import { Link, router } from '@inertiajs/react';
import { Plus, Trash2, Edit, Printer } from 'lucide-react';

interface Props {
    models: {
        data: any[];
    };
}

export default function ModelsIndex({ models }: Props) {
    return (
        <AdminLayout 
            title="Modelos de Impressoras"
            breadcrumbs={[{ title: 'Admin', href: '/admin' }, { title: 'Modelos', href: '/admin/modelos' }]}
        >
            <div className="mb-6 flex justify-end">
                <Link href={'/dashboard/modelos/create'}>
                    <Button className="flex items-center gap-2">
                        <Plus size={16} /> Novo Modelo
                    </Button>
                </Link>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                    <thead>
                        <tr className="border-b border-slate-200 bg-slate-50">
                            <th className="pb-3 pt-0 font-semibold">Marca</th>
                            <th className="pb-3 pt-0 font-semibold">Nome do Modelo</th>
                            <th className="pb-3 pt-0 font-semibold">Slug</th>
                            <th className="pb-3 pt-0 font-semibold">Ações</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 bg-white">
                        {models.data.map((model) => (
                            <tr key={model.id} className="group hover:bg-muted/50">
                                <td className="py-4 font-bold">{model.brand.name}</td>
                                <td className="py-4">
                                    <div className="flex items-center gap-2">
                                        <Printer size={16} className="text-muted-foreground" />
                                        <span>{model.name}</span>
                                    </div>
                                </td>
                                <td className="py-4 text-xs text-muted-foreground">{model.slug}</td>
                                <td className="py-4">
                                    <div className="flex gap-1">
                                        <Button 
                                            variant="ghost" 
                                            size="icon" 
                                            className="h-8 w-8 text-destructive"
                                            onClick={() => {
                                                if (confirm('Tem certeza que deseja excluir este modelo?')) {
                                                    router.delete('/dashboard/modelos/' + model.id);
                                                }
                                            }}
                                        >
                                            <Trash2 size={14} />
                                        </Button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </AdminLayout>
    );
}
