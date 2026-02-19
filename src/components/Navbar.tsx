import React, { useState } from 'react';
import { Search, Globe, User, ChevronDown, Menu, X, LogIn, FileText } from 'lucide-react';

interface NavbarProps {
    onNavigate: (section: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
    const [currentLang, setCurrentLang] = useState('FR');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const languages = [
        { code: 'FR', label: 'Français' },
        { code: 'EN', label: 'English' },
        { code: 'AR', label: 'العربية' }
    ];

    const navItems = [
        { label: 'Accueil', action: () => onNavigate('home') },
        { label: 'Actualités', action: () => onNavigate('news') },
        { label: 'Ressources', action: () => onNavigate('resources') },
    ];

    return (
        <header className="w-full font-sans flex flex-col sticky top-0 z-50 bg-white shadow-md">
            {/* 1. Top Bar: Djibouti Flag Colors - Increased Height */}
            <div className="flex w-full h-3">
                <div className="w-1/3 bg-[#6AB2E7]"></div> {/* Sky Blue */}
                <div className="w-1/3 bg-[#D7141A]"></div> {/* Red */}
                <div className="w-1/3 bg-[#12AD2B]"></div> {/* Green */}
            </div>

            {/* 2. Info Bar */}
            <div className="bg-[#F8F9FA] border-b border-gray-100 py-1.5 hidden md:block">
                <div className="container mx-auto px-4 flex justify-between items-center text-xs text-gray-500 font-medium tracking-wide">
                    <div className="flex items-center gap-2">
                        <span className="uppercase tracking-wider">République de Djibouti</span>
                        <span className="text-gray-300">|</span>
                        <span>Ministère délégué chargé de l'Économie numérique et de l'Innovation</span>
                    </div>
                    <div>
                        <a href="#" className="hover:text-[#0F172A] transition-colors duration-300">FAQ</a>
                    </div>
                </div>
            </div>

            {/* 3. Main Navbar */}
            <div className="bg-white/95 backdrop-blur-sm py-4 transition-all duration-300">
                <div className="container mx-auto px-4 flex flex-wrap items-center justify-between gap-4">

                    {/* Left: Logos */}
                    <div className="flex items-center gap-6 md:gap-8 group cursor-pointer" onClick={() => onNavigate('home')}>
                        <img
                            src="/logo-cle.jpeg"
                            alt="CLE Logo"
                            className="h-12 md:h-14 object-contain transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="h-10 w-px bg-gray-200 hidden md:block"></div>
                        <img
                            src="/mistere-logo.jpeg"
                            alt="Ministère Logo"
                            className="h-12 md:h-14 object-contain transition-transform duration-300 group-hover:scale-105"
                        />
                    </div>

                    {/* Right: Navigation & Utilities */}
                    <div className="flex items-center gap-8 ml-auto">
                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center gap-8 text-[15px] font-medium text-gray-600">
                            {navItems.map((item) => (
                                <button
                                    key={item.label}
                                    onClick={item.action}
                                    className="relative py-2 hover:text-blue-900 transition-colors duration-300 group"
                                >
                                    {item.label}
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                                </button>
                            ))}

                            <button
                                onClick={() => onNavigate('contact')}
                                className="relative py-2 hover:text-blue-900 transition-colors duration-300 group"
                            >
                                Contact
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                            </button>

                            <div className="group relative flex items-center gap-1 cursor-pointer hover:text-blue-900 transition-colors duration-300 py-2">
                                <button onClick={() => onNavigate('portals')}>Portails</button>
                                <ChevronDown size={14} className="transition-transform duration-300 group-hover:rotate-180" />
                                {/* Dropdown placeholder (hidden by default) */}
                                <div className="absolute top-full right-0 mt-2 w-48 bg-white shadow-xl rounded-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                                    <div className="p-2">
                                        <button onClick={() => onNavigate('portals')} className="block w-full text-left px-4 py-2 hover:bg-gray-50 rounded text-sm text-gray-700">Portail Startup</button>
                                        <button onClick={() => onNavigate('portals')} className="block w-full text-left px-4 py-2 hover:bg-gray-50 rounded text-sm text-gray-700">Portail Guichet Unique</button>
                                        <button onClick={() => onNavigate('portals')} className="block w-full text-left px-4 py-2 hover:bg-gray-50 rounded text-sm text-gray-700">Portail G2B</button>
                                    </div>
                                </div>
                            </div>
                        </nav>

                        {/* Utilities */}
                        <div className="flex items-center gap-5 border-l border-gray-200 pl-6">
                            <button className="text-gray-500 hover:text-blue-600 transition-colors duration-300 p-1 rounded-full hover:bg-blue-50 hidden md:block">
                                <Search size={20} />
                            </button>

                            {/* Language Selector */}
                            <div className="group relative hidden md:flex items-center gap-1 text-gray-600 font-medium text-sm cursor-pointer hover:text-blue-600 transition-colors duration-300 py-2">
                                <span>{currentLang}</span>
                                <Globe size={18} />

                                {/* Language Dropdown */}
                                <div className="absolute top-full right-0 mt-2 w-32 bg-white shadow-xl rounded-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                                    <div className="p-1">
                                        {languages.map((lang) => (
                                            <button
                                                key={lang.code}
                                                onClick={() => setCurrentLang(lang.code)}
                                                className={`w-full text-left px-4 py-2 rounded text-sm transition-colors duration-200 ${currentLang === lang.code
                                                    ? 'bg-blue-50 text-blue-700 font-semibold'
                                                    : 'text-gray-700 hover:bg-gray-50'
                                                    }`}
                                            >
                                                {lang.label}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <a
                                href="#"
                                className="hidden md:flex items-center gap-2 bg-[#0F172A] text-white px-5 py-2.5 rounded-lg text-sm font-medium 
                                hover:bg-blue-800 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 active:scale-95"
                            >
                                <User size={18} />
                                <span>Mon Espace</span>
                            </a>

                            {/* Mobile Menu Button */}
                            <button className="lg:hidden p-2 text-gray-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                                {isMenuOpen ? <X /> : <Menu />}
                            </button>
                        </div>
                    </div>

                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="lg:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg h-screen overflow-y-auto z-40 pb-20">
                    <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
                        <button onClick={() => { onNavigate('home'); setIsMenuOpen(false); }} className="py-3 text-blue-700 font-bold text-left border-b border-gray-50">Accueil</button>
                        <button onClick={() => { onNavigate('news'); setIsMenuOpen(false); }} className="py-3 text-gray-600 text-left border-b border-gray-50 hover:text-blue-600">Actualités</button>
                        <button onClick={() => { onNavigate('resources'); setIsMenuOpen(false); }} className="py-3 text-gray-600 text-left border-b border-gray-50 hover:text-blue-600">Ressources</button>
                        <button onClick={() => { onNavigate('portals'); setIsMenuOpen(false); }} className="py-3 text-gray-600 text-left border-b border-gray-50 hover:text-blue-600">Portails</button>
                        <button onClick={() => { onNavigate('contact'); setIsMenuOpen(false); }} className="py-3 text-gray-600 text-left border-b border-gray-50 hover:text-blue-600">Contact</button>

                        <div className="h-px bg-gray-100 my-2"></div>
                        <a href="#" className="flex items-center gap-2 py-3 text-blue-700 font-bold hover:bg-blue-50 rounded px-2">
                            <LogIn size={18} /> Se connecter
                        </a>
                        <a href="#" className="flex items-center gap-2 py-3 text-[#0057b7] font-bold hover:bg-blue-50 rounded px-2">
                            <FileText size={18} /> Rapport
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;
