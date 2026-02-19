import React from 'react';
import { Building2, ShieldCheck, Handshake, Landmark, FileText, ArrowRight, CheckCircle2 } from 'lucide-react';

const PartnersSection: React.FC = () => {
    return (
        <section className="py-24 bg-gray-50 font-sans border-t border-gray-100 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[url('/img/grid.svg')] opacity-[0.03]"></div>

            <div className="container mx-auto px-4 relative z-10">

                {/* Header */}
                <div className="text-center mb-16">
                    <Landmark className="mx-auto text-yellow-600 mb-4" size={40} />
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
                        Écosystème Institutionnel
                    </h2>
                    <div className="w-24 h-1 bg-yellow-500 mx-auto rounded-full mb-6"></div>
                    <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                        En partenariat avec les institutions clés de la République pour garantir un environnement de confiance.
                    </p>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">

                    {/* Card 1: ANPI (Large) */}
                    <div className="md:col-span-2 lg:col-span-2 bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Administration</span>
                        </div>
                        <div className="flex flex-col md:flex-row gap-8 items-start">
                            <div className="flex-1">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
                                    Agence Nationale de Promotion des Investissements
                                </h3>
                                <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                                    Organe central de facilitation et de promotion de l'investissement national et étranger. Guichet unique pour les démarches administratives des entreprises.
                                </p>
                                <div className="space-y-2 mb-6">
                                    <div className="flex items-center gap-2 text-sm text-gray-700 font-medium">
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                                        Services: Immatriculation • Visa fiscal • Accompagnement
                                    </div>
                                </div>
                                <a href="#" className="inline-flex items-center gap-2 text-sm font-bold text-gray-900 hover:text-blue-700 transition-colors">
                                    En savoir plus <ArrowRight size={16} />
                                </a>
                            </div>
                            <div className="w-full md:w-48 h-32 bg-gray-50 rounded-xl flex items-center justify-center p-4 border border-gray-100">
                                <img src="/slider/anpi-logo.jpeg" alt="ANPI Logo" className="max-h-full max-w-full object-contain mix-blend-multiply" />
                            </div>
                        </div>
                    </div>

                    {/* Card 2: Ministère du Numérique (Small) */}
                    <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center">
                        <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-6">Technique</span>
                        <div className="w-24 h-24 rounded-full bg-gray-50 flex items-center justify-center mb-6 p-4">
                            <img src="/mistere-logo.jpeg" alt="MDENI Logo" className="max-h-full max-w-full object-contain mix-blend-multiply" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-1">Ministère du Numérique</h3>
                        <p className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-4">Transformation digitale</p>
                        <div className="flex items-center gap-1 text-xs font-bold text-green-600 mt-auto">
                            <CheckCircle2 size={12} /> Partenaire officiel
                        </div>
                    </div>

                    {/* Card 3: Impôts (Wide) */}
                    <div className="md:col-span-2 bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 flex flex-col md:flex-row items-center gap-8">
                        <div className="w-32 h-32 flex-shrink-0 bg-gray-50 rounded-full flex items-center justify-center p-4">
                            <img src="/slider/impots-logo.jpeg" alt="Impôts Logo" className="max-h-full max-w-full object-contain mix-blend-multiply" />
                        </div>
                        <div className="flex-1 text-center md:text-left">
                            <div className="mb-4">
                                <span className="bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Administration</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Direction Générale des Impôts</h3>
                            <p className="text-gray-500 text-sm mb-4 leading-relaxed">
                                Administration fiscale chargée de l'assiette, du recouvrement et du contrôle des impôts directs et indirects sur l'ensemble du territoire national.
                            </p>
                            <div className="text-xs font-mono text-gray-600 bg-gray-50 inline-block px-3 py-1 rounded-lg border border-gray-200">
                                Services: NIF • Déclarations • Attestations fiscales
                            </div>
                        </div>
                    </div>

                    {/* Card 4: ODPIC (Small) */}
                    <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center">
                        <span className="bg-orange-100 text-orange-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-6">Support</span>
                        <div className="w-20 h-20 rounded-full bg-gray-50 flex items-center justify-center mb-6 p-2">
                            <img src="/slider/ODPIC-logo.jpeg" alt="ODPIC Logo" className="max-h-full max-w-full object-contain mix-blend-multiply" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-1">ODPIC</h3>
                        <p className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-4">Propriété Intellectuelle</p>
                        <div className="flex items-center gap-1 text-xs font-bold text-blue-600 mt-auto">
                            <CheckCircle2 size={12} /> Partenaire officiel
                        </div>
                    </div>

                    {/* Card 5: CNSS (Tall/Wide) */}
                    <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center justify-center min-h-[300px]">
                        <span className="bg-cyan-100 text-cyan-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-8">Social</span>
                        <div className="w-40 h-auto mb-8">
                            <img src="/slider/cnss-logo.png" alt="CNSS Logo" className="w-full object-contain" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Caisse Nationale de Sécurité Sociale</h3>
                        <p className="text-sm text-gray-500 mb-4">Protection sociale et gestion des cotisations</p>
                        <div className="flex items-center gap-1 text-xs font-bold text-green-600">
                            <CheckCircle2 size={12} /> Partenaire officiel
                        </div>
                    </div>

                    {/* Card 6: Stats (Dark) */}
                    <div className="md:col-span-2 bg-[#0F2936] rounded-[2rem] p-10 text-white flex flex-col justify-center items-center text-center relative overflow-hidden group">
                        {/* Background blobs */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                        <div className="relative z-10 flex flex-col gap-10 w-full max-w-lg">
                            <div className="flex justify-between items-center text-center divide-x divide-white/10">
                                <div className="flex-1 px-4">
                                    <Handshake className="mx-auto mb-2 text-green-400" size={32} />
                                    <div className="text-4xl font-bold mb-1">18</div>
                                    <div className="text-xs text-gray-400 uppercase tracking-widest">Partenaires</div>
                                </div>
                                <div className="flex-1 px-4">
                                    <Landmark className="mx-auto mb-2 text-blue-400" size={32} />
                                    <div className="text-4xl font-bold mb-1">6</div>
                                    <div className="text-xs text-gray-400 uppercase tracking-widest">Ministères</div>
                                </div>
                                <div className="flex-1 px-4">
                                    <ShieldCheck className="mx-auto mb-2 text-yellow-400" size={32} />
                                    <div className="text-4xl font-bold mb-1">100%</div>
                                    <div className="text-xs text-gray-400 uppercase tracking-widest">Certifiés</div>
                                </div>
                            </div>

                            <div className="pt-8 border-t border-white/10">
                                <a href="#" className="inline-flex items-center gap-2 text-xs font-bold text-gray-300 hover:text-white transition-colors uppercase tracking-widest border border-white/20 px-4 py-2 rounded-lg hover:bg-white/5">
                                    <FileText size={14} /> Liste complète (PDF)
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Operators Strip */}
                <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100 text-center">
                    <div className="flex items-center justify-center gap-2 mb-6 text-blue-800 font-bold uppercase tracking-widest text-xs">
                        <Building2 size={14} />
                        Opérateurs & Services Techniques
                    </div>
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
                        {/* Djibouti Telecom */}
                        <div className="flex items-center gap-3">
                            <img src="/slider/telecom-logo.png" alt="Djibouti Telecom" className="h-10 object-contain" />
                            <div className="text-left">
                                <div className="font-bold text-gray-900 text-sm">Djibouti Télécom</div>
                                <div className="text-[10px] text-gray-500">Service SMS</div>
                            </div>
                        </div>

                        {/* TO7 */}
                        <div className="flex items-center gap-3">
                            <img src="/slider/to7-logo.png" alt="TO7" className="h-8 object-contain" />
                            <div className="text-left">
                                <div className="font-bold text-gray-900 text-sm">TO7</div>
                                <div className="text-[10px] text-gray-500">Cloud Souverain</div>
                            </div>
                        </div>

                        {/* Mobile ID */}
                        <div className="flex items-center gap-3">
                            <img src="/slider/Mobileid-logo.jpeg" alt="Mobile ID" className="h-10 w-10 rounded-lg object-cover" />
                            <div className="text-left">
                                <div className="font-bold text-gray-900 text-sm">Mobile ID</div>
                                <div className="text-[10px] text-gray-500">Identité Numérique</div>
                            </div>
                        </div>

                        {/* CLE - Entité Régulatrice */}
                        <div className="flex items-center gap-3">
                            <img src="/logo-cle.jpeg" alt="CLE" className="h-10 object-contain" />
                            <div className="text-left">
                                <div className="font-bold text-gray-900 text-sm">CLE</div>
                                <div className="text-[10px] text-gray-500">Standards & Validations</div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default PartnersSection;
