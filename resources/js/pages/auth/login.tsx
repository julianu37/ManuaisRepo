import { Head, Link, useForm } from '@inertiajs/react';
import React from 'react';
import { Printer, Lock, Mail, Loader2, ArrowLeft } from 'lucide-react';

export default function Login() {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/login');
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-4 font-sans relative" style={{ backgroundColor: '#061a15' }}>
            <Head title="Acesso Restrito - PrinterDocs" />
            
            {/* Forma de decoração de fundo */}
            <div className="absolute bottom-10 right-10 flex items-center justify-center gap-4 opacity-50 pointer-events-none">
                <div className="w-16 h-16 border-2" style={{ borderColor: '#f97316' }}></div>
                <div className="w-16 h-16 border-2 rounded-full" style={{ borderColor: '#00a36c' }}></div>
            </div>

            <div className="w-full max-w-md relative z-10">
                <div className="text-center mb-8">
                    <Link href="/" className="inline-flex items-center gap-2 mb-6 hover:opacity-80 transition-opacity">
                        <Printer size={32} style={{ color: '#00a36c' }} />
                    </Link>
                    <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Printer<span style={{ color: '#00a36c' }}>Docs</span></h1>
                    <p className="font-medium" style={{ color: '#94a3b8' }}>Acesso corporativo</p>
                </div>

                <div className="bg-white p-8 rounded shadow-2xl border-t-4" style={{ borderColor: '#00875a' }}>
                    <form onSubmit={submit} className="space-y-6">
                        <div className="space-y-2 relative">
                            <label htmlFor="email" className="font-bold text-xs uppercase tracking-wider block" style={{ color: '#00875a' }}>E-mail corporativo</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none" style={{ color: '#94a3b8' }}>
                                    <Mail size={18} />
                                </div>
                                <input 
                                    id="email"
                                    type="email" 
                                    className="w-full pl-10 h-12 rounded bg-slate-50 border border-slate-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-colors"
                                    placeholder="tecnico@empresa.com.br"
                                    value={data.email}
                                    onChange={e => setData('email', e.target.value)}
                                    autoFocus
                                    required
                                />
                            </div>
                            {errors.email && <p className="text-xs text-red-500 font-semibold">{errors.email}</p>}
                        </div>

                        <div className="space-y-2 relative">
                            <label htmlFor="password" className="font-bold text-xs uppercase tracking-wider block" style={{ color: '#00875a' }}>Senha de acesso</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none" style={{ color: '#94a3b8' }}>
                                    <Lock size={18} />
                                </div>
                                <input 
                                    id="password"
                                    type="password" 
                                    className="w-full pl-10 h-12 rounded bg-slate-50 border border-slate-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-colors"
                                    placeholder="••••••••"
                                    value={data.password}
                                    onChange={e => setData('password', e.target.value)}
                                    required
                                />
                            </div>
                            {errors.password && <p className="text-xs text-red-500 font-semibold">{errors.password}</p>}
                        </div>

                        <div className="flex items-center justify-between">
                            <label className="flex items-center gap-2 cursor-pointer group">
                                <input 
                                    type="checkbox" 
                                    checked={data.remember} 
                                    onChange={e => setData('remember', e.target.checked)}
                                    className="rounded border-slate-300 w-4 h-4 cursor-pointer"
                                    style={{ accentColor: '#00875a' }}
                                />
                                <span className="text-sm font-medium text-slate-600 group-hover:text-slate-900 transition-colors">Manter conectado</span>
                            </label>
                        </div>

                        <button 
                            type="submit" 
                            disabled={processing} 
                            className="w-full h-12 text-base font-bold rounded flex items-center justify-center gap-2 text-white transition-opacity hover:opacity-90"
                            style={{ backgroundColor: '#00875a' }}
                        >
                            {processing ? (
                                <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Autenticando...</>
                            ) : 'Acessar Sistema'}
                        </button>
                    </form>
                </div>

                <div className="mt-8 text-center">
                    <Link href="/" className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-white" style={{ color: '#00a36c' }}>
                        <ArrowLeft size={16} /> Retornar
                    </Link>
                </div>
            </div>
        </div>
    );
}
