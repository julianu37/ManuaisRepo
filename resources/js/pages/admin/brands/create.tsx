import AdminLayout from '@/layouts/admin/admin-layout';
import { useForm, Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function BrandsCreate() {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        slug: '',
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/dashboard/marcas');
    };

    return (
        <AdminLayout 
            title="Novo Fabricante"
            breadcrumbs={[{ title: 'Admin', href: '/admin' }, { title: 'Fabricantes', href: '/admin/marcas' }, { title: 'Novo', href: '/admin/marcas/create' }]}
        >
            <form onSubmit={submit} className="max-w-md space-y-6">
                <div className="space-y-2">
                    <Label htmlFor="name" className="text-xs font-bold uppercase tracking-wider" style={{ color: '#00875a' }}>Nome do Fabricante</Label>
                    <Input 
                        id="name" 
                        value={data.name} 
                        onChange={e => {
                            setData('name', e.target.value);
                            // Auto-generate simple slug for UX
                            setData('slug', e.target.value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, ''));
                        }} 
                        placeholder="Ex: Ricoh, Epson"
                        className="h-12 border-slate-200 focus:border-emerald-500 focus:ring-emerald-500/20 shadow-sm"
                    />
                    {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
                </div>

                <div className="space-y-2">
                    <Label htmlFor="slug" className="text-xs font-bold uppercase tracking-wider" style={{ color: '#00875a' }}>Slug (URL)</Label>
                    <Input 
                        id="slug" 
                        value={data.slug} 
                        onChange={e => setData('slug', e.target.value)} 
                        placeholder="ex: ricoh"
                        className="h-12 border-slate-200 focus:border-emerald-500 focus:ring-emerald-500/20 shadow-sm"
                    />
                    {errors.slug && <p className="text-xs text-destructive">{errors.slug}</p>}
                </div>

                <div className="flex justify-end gap-3 pt-6 border-t border-slate-100">
                    <Link href="/dashboard/marcas">
                        <Button variant="ghost" type="button" className="text-slate-500 font-bold hover:bg-slate-100">Cancelar</Button>
                    </Link>
                    <Button type="submit" disabled={processing} className="min-w-[140px] font-bold text-white shadow-md hover:shadow-lg transition-all" style={{ backgroundColor: '#00875a' }}>
                        {processing ? 'Salvando...' : 'Criar Fabricante'}
                    </Button>
                </div>
            </form>
        </AdminLayout>
    );
}
