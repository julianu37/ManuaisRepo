import { Head, Link, router } from '@inertiajs/react';
import React, { useState } from 'react';
import { LayoutDashboard, Tags, Printer, Book, LogOut, Settings, Menu, X } from 'lucide-react';

interface Props {
    children: React.ReactNode;
    title: string;
    breadcrumbs?: { title: string, href: string }[];
}

export default function AdminLayout({ children, title, breadcrumbs }: Props) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const menuItems = [
        { label: 'Dashboard', href: '/dashboard', icon: <LayoutDashboard size={20} /> },
        { label: 'Fabricantes', href: '/dashboard/marcas', icon: <Tags size={20} /> },
        { label: 'Modelos', href: '/dashboard/modelos', icon: <Printer size={20} /> },
        { label: 'Manuais', href: '/dashboard/manuais', icon: <Book size={20} /> },
    ];

    const closeSidebar = () => setIsSidebarOpen(false);

    return (
        <div className="min-h-screen font-sans flex" style={{ backgroundColor: '#f8fafc', color: '#0f172a' }}>
            <Head title={title} />
            
            {/* Mobile Sidebar Overlay */}
            {isSidebarOpen && (
                <div 
                    className="fixed inset-0 bg-black/50 z-30 lg:hidden transition-opacity" 
                    onClick={closeSidebar}
                />
            )}

            {/* Sidebar Corporativa (Dark Green / Emerald) */}
            <aside 
                className={`w-72 fixed top-0 bottom-0 left-0 z-40 flex flex-col shadow-xl transition-transform duration-300 lg:translate-x-0 ${
                    isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                }`} 
                style={{ backgroundColor: '#061a15' }}
            >
                <div className="h-20 flex items-center justify-between px-8 border-b" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
                    <Link href="/dashboard" className="flex items-center gap-2">
                        <Printer size={26} style={{ color: '#00a36c' }} />
                        <span className="text-xl font-bold tracking-tight text-white">Printer<span style={{ color: '#00a36c' }}>Docs</span></span>
                    </Link>
                    <button onClick={closeSidebar} className="lg:hidden text-gray-400 hover:text-white">
                        <X size={24} />
                    </button>
                </div>

                <nav className="flex-1 px-4 py-8 flex flex-col gap-2 overflow-y-auto">
                    <div className="text-xs font-bold tracking-wider uppercase mb-2 px-4" style={{ color: '#00a36c' }}>Menu Operacional</div>
                    {menuItems.map((item) => {
                        const isActive = typeof window !== 'undefined' && window.location.pathname.startsWith(item.href) && (item.href !== '/dashboard' || window.location.pathname === '/dashboard');
                        
                        return (
                            <Link 
                                key={item.label}
                                href={item.href} 
                                onClick={closeSidebar}
                                className={`flex items-center gap-3 px-4 py-3 rounded font-semibold transition-all duration-200 ${
                                    isActive 
                                    ? 'shadow-sm' 
                                    : 'hover:bg-white/5'
                                }`}
                                style={{ 
                                    backgroundColor: isActive ? '#00875a' : 'transparent',
                                    color: isActive ? '#ffffff' : '#94a3b8' 
                                }}
                            >
                                <span style={{ color: isActive ? '#ffffff' : '#00a36c' }}>{item.icon}</span>
                                {item.label}
                            </Link>
                        );
                    })}
                </nav>

                <div className="p-6 border-t" style={{ borderColor: 'rgba(255,255,255,0.05)', backgroundColor: '#04120e' }}>
                    <button 
                        onClick={() => router.post('/logout')}
                        className="flex items-center gap-3 w-full px-4 py-3 font-semibold rounded hover:bg-white/5 transition-colors"
                        style={{ color: '#ef4444' }}
                    >
                        <LogOut size={20} /> Sair do Sistema
                    </button>
                    <div className="mt-4 text-center">
                        <Link href="/" className="text-xs font-medium transition-colors hover:text-white" style={{ color: '#00a36c' }}>Voltar ao Site Público</Link>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col min-h-screen lg:ml-72 w-full max-w-full overflow-hidden">
                {/* Header Claro */}
                <header className="h-20 bg-white border-b border-slate-200 flex items-center px-4 md:px-10 sticky top-0 z-20 shadow-sm gap-4">
                    <button 
                        onClick={() => setIsSidebarOpen(true)}
                        className="lg:hidden p-2 text-slate-500 hover:bg-slate-100 rounded transition-colors"
                    >
                        <Menu size={24} />
                    </button>
                    
                    <div className="flex-1 flex items-center gap-4 min-w-0">
                        <h1 className="text-xl md:text-2xl font-bold text-slate-800 truncate">{title}</h1>
                    </div>
                    
                    {breadcrumbs && breadcrumbs.length > 0 && (
                        <nav className="hidden lg:flex items-center gap-2 text-sm font-medium text-slate-400">
                            {breadcrumbs.map((crumb, idx) => (
                                <React.Fragment key={crumb.href}>
                                    {idx > 0 && <span>/</span>}
                                    <Link href={crumb.href} className="transition-colors hover:text-emerald-700 whitespace-nowrap" style={{ color: idx === breadcrumbs.length - 1 ? '#00875a' : '' }}>
                                        {crumb.title}
                                    </Link>
                                </React.Fragment>
                            ))}
                        </nav>
                    )}
                </header>

                {/* Content Area */}
                <div className="flex-1 p-4 md:p-10 w-full overflow-x-auto">
                    <div className="max-w-6xl mx-auto bg-white rounded border border-slate-200 p-4 md:p-8 shadow-sm overflow-x-auto">
                        {children}
                    </div>
                </div>
            </main>
        </div>
    );
}
