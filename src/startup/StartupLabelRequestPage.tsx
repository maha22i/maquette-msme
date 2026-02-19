import { useState } from 'react';
import {
    ArrowLeft,
    Building2,
    ShieldCheck,
    MapPin,
    Briefcase,
    User,
    FileText,
    ChevronRight,
    Check,
    Star,
    Mail,
    Phone,
    Info
} from 'lucide-react';

export default function StartupLabelRequestPage() {
    const [currentStep, setCurrentStep] = useState(1);

    const nextStep = () => {
        if (currentStep < 3) setCurrentStep(currentStep + 1);
    };

    const prevStep = () => {
        if (currentStep > 1) setCurrentStep(currentStep - 1);
    };

    return (
        <div className="flex min-h-screen bg-white font-sans">
            {/* Left Side - Visual & Branding (Identical to Login Page but with Flag elements) */}
            <div className="hidden lg:flex lg:w-1/2 bg-[#0055AA] text-white p-12 xl:p-16 flex-col justify-between relative overflow-hidden">

                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
                        </pattern>
                        <rect width="100%" height="100%" fill="url(#grid)" />
                    </svg>
                </div>

                {/* Djibouti Flag Motif Watermark (Triangle + Star) */}
                <div className="absolute top-1/2 left-0 w-[150%] h-[50%] bg-white/5 -rotate-12 translate-y-[-50%] blur-3xl rounded-full pointer-events-none"></div>
                <div className="absolute bottom-[-10%] left-[-10%] opacity-10 pointer-events-none text-white">
                    <Star size={400} fill="currentColor" stroke="none" />
                </div>
                {/* Subtle Green hint at bottom for flag colors */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#12AD2B]/20 to-transparent pointer-events-none"></div>


                {/* Header / Back Link */}
                <div className="relative z-10">
                    <a href="/startup" className="inline-flex items-center gap-2 text-blue-200 hover:text-white transition-colors text-sm font-medium mb-8">
                        <ArrowLeft size={16} />
                        Retour à la connexion
                    </a>

                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/20">
                            <Building2 size={24} />
                        </div>
                        <h1 className="font-bold text-sm tracking-[0.2em] uppercase leading-relaxed text-blue-100 border-l border-blue-400 pl-4">
                            République<br />de Djibouti
                        </h1>
                    </div>
                </div>

                {/* Process Info */}
                <div className="relative z-10 max-w-lg">
                    <h2 className="text-4xl xl:text-5xl font-extrabold mb-8 leading-tight">
                        Demande de<br />Labellisation
                    </h2>

                    <div className="space-y-8">
                        {/* Step Indicators */}
                        <div className={`flex items-start gap-4 transition-opacity duration-300 group ${currentStep === 1 ? 'opacity-100' : 'opacity-60'}`}>
                            <div className={`mt-1 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border transition-all ${currentStep === 1 ? 'bg-white text-[#0055AA] border-white scale-110' : 'border-blue-300 text-blue-200'}`}>1</div>
                            <div>
                                <h3 className="font-bold text-lg">Identité</h3>
                                <p className="text-sm text-blue-200 mt-1">Informations générales de la startup</p>
                            </div>
                        </div>

                        <div className={`flex items-start gap-4 transition-opacity duration-300 group ${currentStep === 2 ? 'opacity-100' : 'opacity-60'}`}>
                            <div className={`mt-1 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border transition-all ${currentStep === 2 ? 'bg-white text-[#0055AA] border-white scale-110' : 'border-blue-300 text-blue-200'}`}>2</div>
                            <div>
                                <h3 className="font-bold text-lg">Représentant</h3>
                                <p className="text-sm text-blue-200 mt-1">Coordonnées du porteur de projet</p>
                            </div>
                        </div>

                        <div className={`flex items-start gap-4 transition-opacity duration-300 group ${currentStep === 3 ? 'opacity-100' : 'opacity-60'}`}>
                            <div className={`mt-1 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border transition-all ${currentStep === 3 ? 'bg-white text-[#0055AA] border-white scale-110' : 'border-blue-300 text-blue-200'}`}>3</div>
                            <div>
                                <h3 className="font-bold text-lg">Projet</h3>
                                <p className="text-sm text-blue-200 mt-1">Documents requis et pitch</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="relative z-10 pt-8 border-t border-white/10 flex items-center gap-3 text-xs text-blue-300 font-medium tracking-wide">
                    <ShieldCheck size={14} />
                    <span>Plateforme officielle sécurisée par l'État</span>
                </div>
            </div>

            {/* Right Side - Form (White Background) */}
            <div className="w-full lg:w-1/2 flex flex-col bg-gray-50 h-screen overflow-hidden">

                {/* Mobile Header */}
                <div className="lg:hidden bg-[#0055AA] text-white p-4 flex items-center justify-between shadow-md z-20">
                    <div className="flex items-center gap-3">
                        <a href="/startup" className="p-2 -ml-2 hover:bg-white/10 rounded-lg">
                            <ArrowLeft size={20} />
                        </a>
                        <span className="font-bold">Labellisation</span>
                    </div>
                    <span className="text-xs font-medium bg-white/20 px-3 py-1 rounded-full">Étape {currentStep}/3</span>
                </div>

                {/* Scrollable Form Container */}
                <div className="flex-1 overflow-y-auto p-4 md:p-8 lg:p-12 flex items-center justify-center">
                    <div className="w-full max-w-2xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 my-auto">

                        <form className="space-y-6">
                            {/* STEP 1: IDENTITY */}
                            {currentStep === 1 && (
                                <div className="animate-in fade-in slide-in-from-right-4 duration-300 space-y-8">
                                    <div className="mb-8 border-b border-gray-100 pb-6">
                                        <h2 className="text-3xl font-bold text-gray-900">Identité de la Startup</h2>
                                        <p className="text-gray-500 mt-2">Commencez par les informations de base de votre structure.</p>
                                    </div>

                                    <div className="space-y-6">
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">Nom de la Startup <span className="text-red-500">*</span></label>
                                            <div className="relative group">
                                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#0055AA] transition-colors">
                                                    <Building2 size={20} />
                                                </div>
                                                <input
                                                    type="text"
                                                    className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-4 focus:ring-blue-50 focus:border-[#0055AA] outline-none transition-all placeholder-gray-400 text-sm font-medium"
                                                    placeholder="Ex: Tech Djibouti Solutions"
                                                    autoFocus
                                                />
                                            </div>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-sm font-semibold text-gray-700 mb-2">Date de création</label>
                                                <input
                                                    type="date"
                                                    className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-4 focus:ring-blue-50 focus:border-[#0055AA] outline-none transition-all text-gray-700 text-sm font-medium"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-semibold text-gray-700 mb-2">Secteur d'activité <span className="text-red-500">*</span></label>
                                                <div className="relative group">
                                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#0055AA] transition-colors">
                                                        <Briefcase size={20} />
                                                    </div>
                                                    <select className="w-full pl-12 pr-10 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-4 focus:ring-blue-50 focus:border-[#0055AA] outline-none transition-all text-gray-700 text-sm font-medium appearance-none cursor-pointer">
                                                        <option value="">Sélectionner...</option>
                                                        <option>FinTech</option>
                                                        <option>AgriTech</option>
                                                        <option>HealthTech</option>
                                                        <option>EduTech</option>
                                                        <option>E-commerce</option>
                                                        <option>Logistique</option>
                                                        <option>Autre</option>
                                                    </select>
                                                    <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-gray-400">
                                                        <ChevronRight size={16} className="rotate-90" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">Adresse / Siège <span className="text-red-500">*</span></label>
                                            <div className="relative group">
                                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#0055AA] transition-colors">
                                                    <MapPin size={20} />
                                                </div>
                                                <input
                                                    type="text"
                                                    className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-4 focus:ring-blue-50 focus:border-[#0055AA] outline-none transition-all placeholder-gray-400 text-sm font-medium"
                                                    placeholder="Ex: Quartier Héron, Djibouti"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* STEP 2: REPRESENTATIVE */}
                            {currentStep === 2 && (
                                <div className="animate-in fade-in slide-in-from-right-4 duration-300 space-y-8">
                                    <div className="mb-8 border-b border-gray-100 pb-6">
                                        <h2 className="text-3xl font-bold text-gray-900">Représentant Légal</h2>
                                        <p className="text-gray-500 mt-2">Détails sur la personne portant le projet.</p>
                                    </div>

                                    <div className="space-y-6">
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="md:col-span-2">
                                                <label className="block text-sm font-semibold text-gray-700 mb-2">Nom Complet <span className="text-red-500">*</span></label>
                                                <div className="relative group">
                                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#0055AA] transition-colors">
                                                        <User size={20} />
                                                    </div>
                                                    <input
                                                        type="text"
                                                        className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-4 focus:ring-blue-50 focus:border-[#0055AA] outline-none transition-all placeholder-gray-400 text-sm font-medium"
                                                        placeholder="Votre nom et prénom"
                                                        autoFocus
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <label className="block text-sm font-semibold text-gray-700 mb-2">Email <span className="text-red-500">*</span></label>
                                                <div className="relative group">
                                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#0055AA] transition-colors">
                                                        <Mail size={20} />
                                                    </div>
                                                    <input
                                                        type="email"
                                                        className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-4 focus:ring-blue-50 focus:border-[#0055AA] outline-none transition-all placeholder-gray-400 text-sm font-medium"
                                                        placeholder="email@exemple.com"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <label className="block text-sm font-semibold text-gray-700 mb-2">Téléphone <span className="text-red-500">*</span></label>
                                                <div className="relative group">
                                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#0055AA] transition-colors">
                                                        <Phone size={20} />
                                                    </div>
                                                    <input
                                                        type="tel"
                                                        className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-4 focus:ring-blue-50 focus:border-[#0055AA] outline-none transition-all placeholder-gray-400 text-sm font-medium"
                                                        placeholder="+253"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* STEP 3: PROJECT */}
                            {currentStep === 3 && (
                                <div className="animate-in fade-in slide-in-from-right-4 duration-300 space-y-8">
                                    <div className="mb-8 border-b border-gray-100 pb-6">
                                        <h2 className="text-3xl font-bold text-gray-900">Description du projet</h2>
                                        <p className="text-gray-500 mt-2">Dites-nous en plus sur votre innovation.</p>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Pitch du projet <span className="text-red-500">*</span></label>
                                        <div className="relative group">
                                            <div className="absolute top-4 left-4 flex items-start pointer-events-none text-gray-400 group-focus-within:text-[#0055AA] transition-colors">
                                                <FileText size={20} />
                                            </div>
                                            <textarea
                                                className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-4 focus:ring-blue-50 focus:border-[#0055AA] outline-none transition-all placeholder-gray-400 text-sm font-medium min-h-[180px] leading-relaxed"
                                                placeholder="Décrivez votre innovation, le problème résolu et votre marché cible..."
                                                autoFocus
                                            />
                                        </div>
                                    </div>

                                    <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 flex gap-4">
                                        <div className="bg-white p-2 rounded-lg shadow-sm h-fit">
                                            <Info size={24} className="text-[#0055AA]" />
                                        </div>
                                        <div className="text-sm text-blue-900">
                                            <p className="font-bold mb-1">Documents requis plus tard</p>
                                            <p className="opacity-90 leading-relaxed">Vous n'avez pas besoin de charger vos documents (Statuts, Business Plan) maintenant. Ils vous seront demandés lors de l'instruction du dossier par nos équipes.</p>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Actions */}
                            <div className="pt-8 flex items-center justify-between gap-4 border-t border-gray-50 mt-8">
                                {currentStep > 1 ? (
                                    <button
                                        type="button"
                                        onClick={prevStep}
                                        className="px-6 py-3.5 text-gray-500 font-bold hover:bg-gray-50 hover:text-gray-800 rounded-xl transition-colors flex items-center gap-2 text-sm"
                                    >
                                        <ArrowLeft size={18} />
                                        Précédent
                                    </button>
                                ) : (
                                    <div></div>
                                )}

                                <button
                                    type="button"
                                    onClick={nextStep}
                                    className={`px-8 py-4 bg-[#0055AA] text-white font-bold rounded-xl hover:bg-[#004488] transition-all shadow-lg shadow-blue-900/10 hover:shadow-blue-900/20 active:scale-[0.98] flex items-center gap-2 text-sm ${currentStep === 3 ? 'bg-green-600 hover:bg-green-700 shadow-green-900/10 hover:shadow-green-900/20' : ''}`}
                                >
                                    {currentStep === 3 ? (
                                        <>
                                            <Check size={20} />
                                            Soumettre la demande
                                        </>
                                    ) : (
                                        <>
                                            Suivant
                                            <ChevronRight size={20} />
                                        </>
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

