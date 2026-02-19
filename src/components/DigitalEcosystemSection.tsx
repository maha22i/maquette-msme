
import React from 'react';
import { ArrowRight, Layers, Smartphone, ShieldCheck, MousePointerClick } from 'lucide-react';

const DigitalEcosystemSection: React.FC = () => {
    return (
        <section className="relative py-24 overflow-hidden font-sans">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 w-full h-full">
                <img
                    src="/section-ecosysteme.jpg"
                    alt="Background"
                    className="w-full h-full object-cover"
                />
                {/* Gradient Overlay for Readability - White to Transparent */}
                <div className="absolute inset-0 bg-white/50"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 bg-blue-50 border border-blue-100 rounded-full shadow-sm">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        <span className="text-xs font-bold tracking-widest text-blue-800 uppercase">Portail Officiel E-Gouvernement</span>
                    </div>

                    {/* Title */}
                    <h1 className="text-5xl md:text-6xl font-serif text-gray-900 mb-6 leading-tight">
                        Votre <span className="italic text-blue-700">Écosystème Numérique</span> pour
                        Entreprendre à <span className="text-green-600">Djibouti</span>
                    </h1>

                    {/* Subtitle */}
                    <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
                        Une plateforme unifiée pour créer, développer et faire croître votre entreprise.
                        Accédez à tous les services administratifs en un clic, en toute sécurité.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                        <a
                            href="#"
                            className="group flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-full font-semibold shadow-lg shadow-blue-600/20 hover:bg-blue-700 hover:shadow-blue-600/30 transition-all duration-300 hover:-translate-y-1"
                        >
                            Créer mon entreprise
                            <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
                        </a>
                        <a
                            href="#"
                            className="group flex items-center gap-2 px-8 py-4 bg-white text-gray-700 border border-gray-200 rounded-full font-semibold hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 transform hover:-translate-y-1"
                        >
                            <Layers size={20} className="text-green-600" />
                            Découvrir les services
                        </a>
                    </div>

                    {/* Stats / Features Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-gray-100">
                        {/* Stat 1 */}
                        <div className="flex flex-col items-center">
                            <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl mb-3">
                                <MousePointerClick size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">100% Dématérialisé</h3>
                            <p className="text-sm text-gray-500">Zéro papier, tout en ligne</p>
                        </div>

                        {/* Stat 2 */}
                        <div className="flex flex-col items-center">
                            <div className="p-3 bg-green-50 text-green-600 rounded-2xl mb-3">
                                <Smartphone size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">24/7 Accessible</h3>
                            <p className="text-sm text-gray-500">Disponible à tout moment</p>
                        </div>

                        {/* Stat 3 */}
                        <div className="flex flex-col items-center">
                            <div className="p-3 bg-indigo-50 text-indigo-600 rounded-2xl mb-3">
                                <ShieldCheck size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">Sécurisé</h3>
                            <p className="text-sm text-gray-500">Données protégées</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DigitalEcosystemSection;
