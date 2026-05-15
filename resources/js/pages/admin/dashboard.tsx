import AdminLayout from '@/layouts/admin/admin-layout';
import { Manual } from '@/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Printer, FileText, Hash, Bookmark } from 'lucide-react';

interface Props {
    stats: {
        brands_count: number;
        models_count: number;
        manuals_count: number;
        error_codes_count: number;
    };
    recent_manuals: any[];
}

export default function AdminDashboard({ stats, recent_manuals }: Props) {
    const statCards = [
        { title: 'Fabricantes', value: stats.brands_count, icon: Bookmark, color: 'text-blue-500' },
        { title: 'Modelos', value: stats.models_count, icon: Printer, color: 'text-purple-500' },
        { title: 'Manuais', value: stats.manuals_count, icon: FileText, color: 'text-orange-500' },
        { title: 'Códigos de Erro', value: stats.error_codes_count, icon: Hash, color: 'text-green-500' },
    ];

    return (
        <AdminLayout 
            title="Dashboard Administrativo"
            breadcrumbs={[{ title: 'Admin', href: '/admin' }]}
        >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {statCards.map((stat, i) => (
                    <Card key={i}>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                            <stat.icon className={`h-4 w-4 ${stat.color}`} />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{stat.value}</div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="space-y-4">
                <h2 className="text-lg font-bold">Uploads Recentes</h2>
                <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-slate-50 border-b border-slate-200">
                            <tr>
                                <th className="p-4 font-semibold">Manual</th>
                                <th className="p-4 font-semibold">Status</th>
                                <th className="p-4 font-semibold">Data</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {recent_manuals.map(manual => (
                                <tr key={manual.id}>
                                    <td className="p-4">
                                        <div className="font-medium">{manual.title}</div>
                                        <div className="text-xs text-slate-400 mt-0.5">{manual.printer_model.brand.name} {manual.printer_model.name}</div>
                                    </td>
                                    <td className="p-4">
                                        <span className={`px-2.5 py-1 text-xs font-bold rounded-full uppercase tracking-wider ${
                                            manual.status === 'indexed' ? 'bg-green-100 text-green-700' :
                                            manual.status === 'failed' ? 'bg-red-100 text-red-700' :
                                            'bg-yellow-100 text-yellow-700'
                                        }`}>
                                            {manual.status}
                                        </span>
                                    </td>
                                    <td className="p-4 text-xs text-muted-foreground">
                                        {new Date(manual.created_at).toLocaleDateString('pt-BR')}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </AdminLayout>
    );
}
