import AdminLayout from '@/layouts/admin/admin-layout';
import { Brand } from '@/types';
import { useForm } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Loader2 } from 'lucide-react';

interface Props {
    brands: Brand[];
}

export default function ModelCreate({ brands }: Props) {
    const { data, setData, post, processing, errors } = useForm({
        brand_id: '',
        name: '',
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/dashboard/modelos');
    };

    return (
        <AdminLayout 
            title="Novo Modelo"
            breadcrumbs={[
                { title: 'Admin', href: '/admin' }, 
                { title: 'Modelos', href: '/admin/modelos' },
                { title: 'Novo', href: '/admin/modelos/create' }
            ]}
        >
            <form onSubmit={submit} className="max-w-md space-y-6">
                <div className="space-y-2">
                    <Label htmlFor="brand" className="text-xs font-bold uppercase tracking-wider" style={{ color: '#00875a' }}>Fabricante</Label>
                    <Select value={data.brand_id} onValueChange={(v) => setData('brand_id', v)}>
                        <SelectTrigger>
                            <SelectValue placeholder="Selecione o fabricante" />
                        </SelectTrigger>
                        <SelectContent>
                            {brands.map(brand => (
                                <SelectItem key={brand.id} value={brand.id.toString()}>{brand.name}</SelectItem>
                             ))}
                        </SelectContent>
                    </Select>
                    {errors.brand_id && <p className="text-xs text-destructive">{errors.brand_id}</p>}
                </div>

                <div className="space-y-2">
                    <Label htmlFor="name" className="text-xs font-bold uppercase tracking-wider" style={{ color: '#00875a' }}>Nome do Modelo</Label>
                    <Input 
                        id="name" 
                        value={data.name} 
                        onChange={e => setData('name', e.target.value)} 
                        placeholder="Ex: SPC 430DN, EcoTank L3250"
                        className="h-12 border-slate-200 focus:border-emerald-500 focus:ring-emerald-500/20 shadow-sm"
                    />
                    {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
                </div>

                <div className="flex justify-end gap-3 pt-6 border-t border-slate-100">
                    <Button variant="ghost" type="button" onClick={() => window.history.back()} className="text-slate-500 font-bold hover:bg-slate-100">Cancelar</Button>
                    <Button type="submit" disabled={processing} className="min-w-[140px] font-bold text-white shadow-md hover:shadow-lg transition-all" style={{ backgroundColor: '#00875a' }}>
                        {processing ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Salvando...</> : 'Criar Modelo'}
                    </Button>
                </div>
            </form>
        </AdminLayout>
    );
}
