import AdminLayout from '@/layouts/admin/admin-layout';
import { Brand } from '@/types';
import { Button } from '@/components/ui/button';
import { Link, router } from '@inertiajs/react';
import { Plus, Trash2, Edit } from 'lucide-react';

interface Props {
    brands: Brand[];
}

export default function BrandsIndex({ brands }: Props) {
    return (
        <AdminLayout 
            title="Fabricantes"
            breadcrumbs={[{ title: 'Admin', href: '/admin' }, { title: 'Fabricantes', href: '/admin/marcas' }]}
        >
            <div className="mb-6 flex justify-end">
                <Link href={'/dashboard/marcas/create'}>
                    <Button className="flex items-center gap-2">
                        <Plus size={16} /> Nova Marca
                    </Button>
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {brands.map(brand => (
                    <div key={brand.id} className="p-5 border border-slate-200 bg-white rounded-2xl flex items-center justify-between hover:shadow-md transition-all">
                        <div>
                            <h3 className="font-bold">{brand.name}</h3>
                            <p className="text-xs text-muted-foreground">slug: {brand.slug}</p>
                        </div>
                        <div className="flex gap-1">
                            <Button 
                                variant="ghost" 
                                size="icon" 
                                className="h-8 w-8 text-destructive"
                                onClick={() => {
                                    if (confirm('Atenção: Excluir um fabricante apaga todos os seus modelos e manuais. Confirmar?')) {
                                        router.delete('/dashboard/marcas/' + brand.id);
                                    }
                                }}
                            >
                                <Trash2 size={14} />
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </AdminLayout>
    );
}
