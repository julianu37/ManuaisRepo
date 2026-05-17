import AdminLayout from '@/layouts/admin/admin-layout';
import { Brand, PrinterModel } from '@/types';
import { useForm } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { useState, useEffect } from 'react';
import { Loader2, Upload } from 'lucide-react';

interface Props {
    brands: Brand[];
}

export default function ManualUpload({ brands }: Props) {
    const [models, setModels] = useState<PrinterModel[]>([]);
    const [isEpson, setIsEpson] = useState(false);
    
    const { data, setData, post, processing, errors } = useForm({
        brand_id: '',
        printer_model_ids: [] as string[],
        title: '',
        folder_path: '',
        pdf: null as File | null,
    });

    useEffect(() => {
        if (data.brand_id) {
            const selectedBrand = brands.find(b => b.id.toString() === data.brand_id);
            setModels(selectedBrand?.printer_models || []);
            setIsEpson(selectedBrand?.name.toLowerCase() === 'epson');
        } else {
            setModels([]);
            setIsEpson(false);
        }
    }, [data.brand_id]);

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/dashboard/manuais');
    };

    return (
        <AdminLayout 
            title="Upload de Manual"
            breadcrumbs={[
                { title: 'Admin', href: '/admin' }, 
                { title: 'Manuais', href: '/admin/manuais' },
                { title: 'Novo', href: '/admin/manuais/create' }
            ]}
        >
            <form onSubmit={submit} className="max-w-2xl space-y-8">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
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
                        <Label htmlFor="model" className="text-xs font-bold uppercase tracking-wider" style={{ color: '#00875a' }}>Modelos</Label>
                        {!data.brand_id ? (
                            <div className="p-4 text-sm text-slate-500 border rounded-md bg-slate-50">Selecione o fabricante primeiro</div>
                        ) : models.length === 0 ? (
                            <div className="p-4 text-sm text-slate-500 border rounded-md bg-slate-50">Nenhum modelo encontrado</div>
                        ) : (
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 p-4 border rounded-md max-h-48 overflow-y-auto bg-white">
                                {models.map(model => (
                                    <label key={model.id} className="flex items-center gap-2 cursor-pointer text-sm hover:text-emerald-700 transition-colors">
                                        <Checkbox 
                                            checked={data.printer_model_ids.includes(model.id.toString())}
                                            onCheckedChange={(checked) => {
                                                if (checked) {
                                                    setData('printer_model_ids', [...data.printer_model_ids, model.id.toString()]);
                                                } else {
                                                    setData('printer_model_ids', data.printer_model_ids.filter(id => id !== model.id.toString()));
                                                }
                                            }}
                                        />
                                        {model.name}
                                    </label>
                                ))}
                            </div>
                        )}
                        {errors.printer_model_ids && <p className="text-xs text-destructive">{errors.printer_model_ids}</p>}
                    </div>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="title" className="text-xs font-bold uppercase tracking-wider" style={{ color: '#00875a' }}>Título do Manual</Label>
                    <Input 
                        id="title" 
                        value={data.title} 
                        onChange={e => setData('title', e.target.value)} 
                        placeholder="Ex: Service Manual, Guia de Manutenção"
                        className="h-12 border-slate-200 focus:border-emerald-500 focus:ring-emerald-500/20 shadow-sm"
                    />
                    {errors.title && <p className="text-xs text-destructive">{errors.title}</p>}
                </div>

                {isEpson ? (
                    <div className="space-y-2">
                        <Label htmlFor="folder_path" className="text-xs font-bold uppercase tracking-wider" style={{ color: '#00875a' }}>Caminho da Pasta</Label>
                        <Input 
                            id="folder_path" 
                            value={data.folder_path} 
                            onChange={e => setData('folder_path', e.target.value)} 
                            placeholder="Ex: manuais/epson/EPSON_WF_C5890_5810_SERVICE_MANUAL"
                            className="h-12 border-slate-200 focus:border-emerald-500 focus:ring-emerald-500/20 shadow-sm"
                        />
                        <p className="text-xs text-slate-500 mt-1">Faça o upload da pasta via FTP/MobaXterm para <code className="bg-slate-100 px-1 rounded">/storage/app/public/</code> e digite o caminho relativo aqui.</p>
                        {errors.folder_path && <p className="text-xs text-destructive">{errors.folder_path}</p>}
                    </div>
                ) : (
                    <div className="space-y-2">
                        <Label htmlFor="pdf" className="text-xs font-bold uppercase tracking-wider" style={{ color: '#00875a' }}>Arquivo PDF</Label>
                        <div className="flex items-center justify-center w-full">
                            <label className="flex flex-col items-center justify-center w-full min-h-[14rem] py-8 border-2 border-dashed rounded-xl cursor-pointer bg-slate-50 border-slate-300 hover:bg-emerald-50/50 hover:border-emerald-500 transition-all group">
                                <div className="flex flex-col items-center justify-center pt-5 pb-6 text-center px-4">
                                    <div className="p-3 bg-white shadow-sm rounded-full mb-3 group-hover:scale-110 transition-transform">
                                        <Upload className="w-6 h-6" style={{ color: '#00875a' }} />
                                    </div>
                                    <p className="mb-1 text-sm text-slate-600">
                                        <span className="font-bold" style={{ color: '#00875a' }}>Clique para enviar</span> ou arraste o arquivo até aqui
                                    </p>
                                    <p className="text-xs font-medium text-slate-400">
                                        Suporta PDF (Máximo 1GB)
                                    </p>
                                    {data.pdf && (
                                        <div className="mt-4 px-4 py-2 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-full flex items-center gap-2">
                                            ✓ {data.pdf.name} ({(data.pdf.size / 1024 / 1024).toFixed(2)} MB)
                                        </div>
                                    )}
                                </div>
                                <input 
                                    type="file" 
                                    className="hidden" 
                                    accept="application/pdf"
                                    onChange={e => setData('pdf', e.target.files?.[0] || null)}
                                />
                            </label>
                        </div>
                        {errors.pdf && <p className="text-xs text-destructive">{errors.pdf}</p>}
                    </div>
                )}

                <div className="flex justify-end gap-3 pt-6 border-t border-slate-100">
                    <Button variant="ghost" type="button" onClick={() => window.history.back()} className="text-slate-500 font-bold hover:bg-slate-100">Cancelar</Button>
                    <Button type="submit" disabled={processing} className="min-w-[140px] font-bold text-white shadow-md hover:shadow-lg transition-all" style={{ backgroundColor: '#00875a' }}>
                        {processing ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Processando...</> : 'Salvar Manual'}
                    </Button>
                </div>
            </form>
        </AdminLayout>
    );
}
