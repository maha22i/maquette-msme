import React from 'react';
import { User, LayoutGrid, Search, HandHelping, MapPin, Phone, Mail, AlertTriangle, Facebook, Linkedin, Instagram, Youtube, BookOpen, PlayCircle, HelpCircle, FileText, Globe } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#0B1D2E] text-blue-50/80 font-sans border-t border-blue-900">

            {/* Top Bar */}
            <div className="border-b border-blue-900/50 bg-[#081624]">
                <div className="container mx-auto px-4 py-3 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-4 w-full md:w-auto">
                        <a href="#" className="flex items-center gap-2 px-4 py-2 rounded-md border border-blue-800 hover:bg-blue-900 transition-colors text-xs font-medium uppercase tracking-wide">
                            <User size={14} /> Espace Personnel
                        </a>
                        <a href="#" className="flex items-center gap-2 px-4 py-2 rounded-md border border-blue-800 hover:bg-blue-900 transition-colors text-xs font-medium uppercase tracking-wide">
                            <LayoutGrid size={14} /> Services en Ligne
                        </a>
                    </div>
                    <div className="flex items-center gap-4 w-full md:w-auto">
                        <div className="relative flex-grow md:flex-grow-0">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-400" size={14} />
                            <input
                                type="text"
                                placeholder="Rechercher un service..."
                                className="w-full md:w-64 bg-blue-900/30 border border-blue-800 rounded-md py-2 pl-9 pr-4 text-sm focus:outline-none focus:border-blue-500 placeholder-blue-400/50"
                            />
                        </div>
                        <a href="#" className="flex items-center gap-2 px-4 py-2 rounded-md bg-yellow-500 hover:bg-yellow-400 text-blue-950 transition-colors text-xs font-bold uppercase tracking-wide flex-shrink-0">
                            <HandHelping size={14} /> Besoin d'aide ?
                        </a>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">

                    {/* Brand Column */}
                    <div className="lg:col-span-3 space-y-6">
                        <div className="w-full max-w-[200px] bg-white/5 rounded-lg overflow-hidden border border-white/10 p-1">
                            <img src="/image-footer.png" alt="République de Djibouti" className="w-full h-auto rounded" />
                        </div>
                        <div>
                            <h3 className="text-xl font-serif font-bold text-white mb-1">République de Djibouti</h3>
                            <p className="text-blue-400 font-medium text-sm">Plateforme MPME Numérique</p>
                        </div>
                        <p className="text-sm leading-relaxed text-blue-100/60">
                            Accompagner les Micro, Petites et Moyennes Entreprises djiboutiennes dans leur transformation numérique et leur croissance économique durable.
                        </p>
                        <div className="flex gap-2 text-[10px] font-bold uppercase tracking-wider">
                            <span className="px-2 py-1 rounded bg-green-900/30 text-green-400 border border-green-800/50">Service Public</span>
                            <span className="px-2 py-1 rounded bg-green-900/30 text-green-400 border border-green-800/50">SSL</span>
                            <span className="px-2 py-1 rounded bg-green-900/30 text-green-400 border border-green-800/50">RGPD</span>
                        </div>
                        <div className="pt-4">
                            <p className="text-xs uppercase tracking-widest text-blue-400 mb-3">Suivez-nous</p>
                            <div className="flex gap-3">
                                {[Facebook, Linkedin, Instagram, Youtube].map((Icon, idx) => (
                                    <a key={idx} href="#" className="w-8 h-8 rounded-full bg-blue-900/50 flex items-center justify-center hover:bg-blue-800 hover:text-white transition-colors">
                                        <Icon size={14} />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Links Columns Combined */}
                    <div className="lg:col-span-5 grid grid-cols-2 gap-8">
                        {/* Access Rapides */}
                        <div>
                            <h4 className="text-gold-500 font-serif text-lg text-[#D4AF37] mb-6 border-b border-[#D4AF37]/30 pb-2 inline-block">Accès Rapides</h4>
                            <div className="space-y-6">
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-3">Portails</p>
                                    <ul className="space-y-2 text-sm">
                                        <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><ArrowRightIcon /> Portail Startups</a></li>
                                        <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><ArrowRightIcon /> Guichet Unique</a></li>
                                        <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><ArrowRightIcon /> G2B MPME</a></li>
                                    </ul>
                                </div>
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-3">Services Essentiels</p>
                                    <ul className="space-y-2 text-sm">
                                        <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><ArrowRightIcon /> Créer une entreprise</a></li>
                                        <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><ArrowRightIcon /> Simulateur</a></li>
                                        <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><ArrowRightIcon /> Suivi de dossier</a></li>
                                        <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><ArrowRightIcon /> Tableau de bord</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Centre de Ressources */}
                        <div>
                            <h4 className="text-gold-500 font-serif text-lg text-[#D4AF37] mb-6 border-b border-[#D4AF37]/30 pb-2 inline-block">Centre de Ressources</h4>
                            <div className="space-y-6">
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-3">Documentation</p>
                                    <ul className="space-y-2 text-sm">
                                        <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><BookOpen size={14} className="text-red-400" /> Guides</a></li>
                                        <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><PlayCircle size={14} className="text-blue-400" /> Tutoriels</a></li>
                                        <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><HelpCircle size={14} className="text-gray-400" /> FAQ</a></li>
                                        <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><FileText size={14} className="text-green-400" /> Base de connaissances</a></li>
                                    </ul>
                                </div>
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-3">Réglementation</p>
                                    <ul className="space-y-2 text-sm">
                                        <li className="flex items-center gap-2">
                                            <a href="#" className="hover:text-white transition-colors flex items-center gap-2"><ArrowRightIcon /> Startup-Act</a>
                                            <span className="text-[9px] font-bold bg-yellow-500 text-blue-950 px-1.5 rounded">Nouveau</span>
                                        </li>
                                        <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><ArrowRightIcon /> Textes de Loi</a></li>
                                        <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><ArrowRightIcon /> CGU</a></li>
                                        <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><ArrowRightIcon /> Confidentialité</a></li>
                                    </ul>
                                </div>
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-3">Support</p>
                                    <ul className="space-y-2 text-sm">
                                        <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><ArrowRightIcon /> Contact</a></li>
                                        <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><ArrowRightIcon /> Signaler un problème</a></li>
                                        <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><ArrowRightIcon /> Démo</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Column */}
                    <div className="lg:col-span-4 space-y-8">
                        <h4 className="text-gold-500 font-serif text-lg text-[#D4AF37] mb-6 border-b border-[#D4AF37]/30 pb-2 inline-block">Nous Contacter</h4>

                        <div className="bg-blue-900/20 border border-blue-800 p-6 rounded-xl space-y-6">
                            <div className="flex items-start gap-4">
                                <MapPin className="text-yellow-500 flex-shrink-0 mt-1" size={20} />
                                <div>
                                    <p className="text-white font-medium">Ministère de l'Économie Numérique</p>
                                    <p className="text-sm">Boulevard de la République</p>
                                    <p className="text-sm">B.P. 1846, Djibouti</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <Phone className="text-yellow-500 flex-shrink-0 mt-1" size={20} />
                                <div>
                                    <p className="text-white font-medium">+253 21 35 14 15</p>
                                    <p className="text-xs opacity-60">Lun-Jeu : 7h30 - 16h00</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <Mail className="text-yellow-500 flex-shrink-0 mt-1" size={20} />
                                <div>
                                    <p className="text-white font-medium">contact@mpme.gov.dj</p>
                                    <p className="text-xs opacity-60">Réponse sous 24h</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-yellow-500/10 border border-yellow-500/30 p-6 rounded-xl flex gap-4 items-center">
                            <div className="p-3 bg-yellow-500/20 rounded-full text-yellow-500">
                                <AlertTriangle size={24} />
                            </div>
                            <div>
                                <p className="text-yellow-500 font-bold mb-1">Support Urgent</p>
                                <p className="text-white font-mono text-lg">Hotline : +253 21 35 14 15</p>
                                <p className="text-xs text-blue-300">Disponible 24/7</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="bg-[#081624] border-t border-blue-900/50 py-6">
                <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-blue-400">
                    <div className="flex items-center gap-2">
                        <ShieldCheckIcon />
                        <span>&copy; {new Date().getFullYear()} République de Djibouti • Ministère de l'Économie Numérique</span>
                    </div>

                    <div className="flex flex-wrap gap-6">
                        <a href="#" className="hover:text-white transition-colors">Confidentialité</a>
                        <a href="#" className="hover:text-white transition-colors">Mentions Légales</a>
                        <a href="#" className="hover:text-white transition-colors">Accessibilité</a>
                        <a href="#" className="hover:text-white transition-colors">Plan du Site</a>
                        <a href="#" className="hover:text-white transition-colors">Cookies</a>
                    </div>

                    <div className="flex items-center gap-2">
                        <span className="uppercase tracking-widest opacity-60">Langue :</span>
                        <div className="flex bg-blue-900/50 rounded p-1">
                            <button className="px-2 py-0.5 rounded bg-blue-700 text-white font-bold">FR</button>
                            <button className="px-2 py-0.5 rounded hover:bg-blue-800 text-blue-300 hover:text-white transition-colors">AR</button>
                            <button className="px-2 py-0.5 rounded hover:bg-blue-800 text-blue-300 hover:text-white transition-colors">EN</button>
                        </div>
                        <button className="p-1.5 rounded hover:bg-blue-800 text-blue-300 hover:text-white transition-colors">
                            <Globe size={14} />
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

// Helper Components
const ArrowRightIcon = () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-50">
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
    </svg>
)

const ShieldCheckIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
    </svg>
)


export default Footer;
