import { useState } from 'react';
import {
    ArrowLeft,
    Building2,
    ShieldCheck,
    MapPin,
    Briefcase,
    User,
    ChevronRight,
    Check,
    TrendingUp,
    Phone,
    Mail,
    Hash,
    Users
} from 'lucide-react';

export default function CreateG2BProfilePage() {
    const [currentStep, setCurrentStep] = useState(1);

    const nextStep = () => {
        if (currentStep < 3) setCurrentStep(currentStep + 1);
    };

    const prevStep = () => {
        if (currentStep > 1) setCurrentStep(currentStep - 1);
    };

    return (
        <div className="flex min-h-screen bg-white font-sans">
            {/* Left Side - Visual & Branding */}
            <div className="hidden lg:flex lg:w-1/2 bg-[#990A0F] text-white p-12 xl:p-16 flex-col justify-between relative overflow-hidden">

                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
                        </pattern>
                        <rect width="100%" height="100%" fill="url(#grid)" />
                    </svg>
                </div>

                {/* Abstract Shapes */}
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-black/10 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

                {/* Header / Back Link */}
                <div className="relative z-10">
                    <a href="/g2b" className="inline-flex items-center gap-2 text-red-100 hover:text-white transition-colors text-sm font-medium mb-8">
                        <ArrowLeft size={16} />
                        Retour à la connexion
                    </a>

                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/20">
                            <TrendingUp size={24} />
                        </div>
                        <h1 className="font-bold text-sm tracking-[0.2em] uppercase leading-relaxed text-red-100 border-l border-red-400 pl-4">
                            République<br />de Djibouti
                        </h1>
                    </div>
                </div>

                {/* Process Info */}
                <div className="relative z-10 max-w-lg">
                    <h2 className="text-4xl xl:text-5xl font-extrabold mb-8 leading-tight">
                        Création Profil<br />MPME
                    </h2>

                    <div className="space-y-8">
                        {/* Step Indicators */}
                        <div className={`flex items-start gap-4 transition-opacity duration-300 group ${currentStep === 1 ? 'opacity-100' : 'opacity-60'}`}>
                            <div className={`mt-1 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border transition-all ${currentStep === 1 ? 'bg-white text-[#990A0F] border-white scale-110' : 'border-red-300 text-red-100'}`}>1</div>
                            <div>
                                <h3 className="font-bold text-lg">Identification</h3>
                                <p className="text-sm text-red-100 mt-1">Lien avec le Guichet Unique</p>
                            </div>
                        </div>

                        <div className={`flex items-start gap-4 transition-opacity duration-300 group ${currentStep === 2 ? 'opacity-100' : 'opacity-60'}`}>
                            <div className={`mt-1 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border transition-all ${currentStep === 2 ? 'bg-white text-[#990A0F] border-white scale-110' : 'border-red-300 text-red-100'}`}>2</div>
                            <div>
                                <h3 className="font-bold text-lg">Contact</h3>
                                <p className="text-sm text-red-100 mt-1">Coordonnées & Représentant</p>
                            </div>
                        </div>

                        <div className={`flex items-start gap-4 transition-opacity duration-300 group ${currentStep === 3 ? 'opacity-100' : 'opacity-60'}`}>
                            <div className={`mt-1 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border transition-all ${currentStep === 3 ? 'bg-white text-[#990A0F] border-white scale-110' : 'border-red-300 text-red-100'}`}>3</div>
                            <div>
                                <h3 className="font-bold text-lg">Activité</h3>
                                <p className="text-sm text-red-100 mt-1">Secteur & Taille</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="relative z-10 pt-8 border-t border-white/10 flex items-center gap-3 text-xs text-red-200 font-medium tracking-wide">
                    <ShieldCheck size={14} />
                    <span>Plateforme officielle sécurisée par l'État</span>
                </div>
            </div>

            {/* Right Side - Form (White Background) */}
            <div className="w-full lg:w-1/2 flex flex-col bg-gray-50 h-screen overflow-hidden">

                {/* Mobile Header */}
                <div className="lg:hidden bg-[#990A0F] text-white p-4 flex items-center justify-between shadow-md z-20">
                    <div className="flex items-center gap-3">
                        <a href="/g2b" className="p-2 -ml-2 hover:bg-white/10 rounded-lg">
                            <ArrowLeft size={20} />
                        </a>
                        <span className="font-bold">Création Profil</span>
                    </div>
                    <span className="text-xs font-medium bg-white/20 px-3 py-1 rounded-full">Étape {currentStep}/3</span>
                </div>

                {/* Scrollable Form Container */}
                <div className="flex-1 overflow-y-auto p-4 md:p-8 lg:p-12 flex items-center justify-center">
                    <div className="w-full max-w-2xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 my-auto">

                        <form className="space-y-6">
                            {/* STEP 1: IDENTIFICATION */}
                            {currentStep === 1 && (
                                <div className="animate-in fade-in slide-in-from-right-4 duration-300 space-y-8">
                                    <div className="mb-8 border-b border-gray-100 pb-6">
                                        <h2 className="text-3xl font-bold text-gray-900">Identification MPME</h2>
                                        <p className="text-gray-500 mt-2">Reliez votre entreprise enregistrée au Guichet Unique.</p>
                                    </div>

                                    <div className="space-y-6">
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">Numéro d'enregistrement (NINEA / RC) <span className="text-red-500">*</span></label>
                                            <div className="relative group">
                                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#990A0F] transition-colors">
                                                    <Hash size={20} />
                                                </div>
                                                <input
                                                    type="text"
                                                    className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-4 focus:ring-red-50 focus:border-[#990A0F] outline-none transition-all placeholder-gray-400 text-sm font-medium"
                                                    placeholder="Ex: 123456789"
                                                    autoFocus
                                                />
                                            </div>
                                            <p className="text-xs text-gray-400 mt-2 ml-1">Ce numéro permet de récupérer automatiquement vos informations légales.</p>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">Nom de l'entreprise <span className="text-red-500">*</span></label>
                                            <div className="relative group">
                                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#990A0F] transition-colors">
                                                    <Building2 size={20} />
                                                </div>
                                                <input
                                                    type="text"
                                                    className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-4 focus:ring-red-50 focus:border-[#990A0F] outline-none transition-all placeholder-gray-400 text-sm font-medium"
                                                    placeholder="Nom officiel"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-sm font-semibold text-gray-700 mb-2">Date de création</label>
                                                <input
                                                    type="date"
                                                    className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-4 focus:ring-red-50 focus:border-[#990A0F] outline-none transition-all text-gray-700 text-sm font-medium"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-semibold text-gray-700 mb-2">Ville / Siège</label>
                                                <div className="relative group">
                                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#990A0F] transition-colors">
                                                        <MapPin size={20} />
                                                    </div>
                                                    <input
                                                        type="text"
                                                        className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-4 focus:ring-red-50 focus:border-[#990A0F] outline-none transition-all placeholder-gray-400 text-sm font-medium"
                                                        placeholder="Djibouti"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* STEP 2: CONTACT */}
                            {currentStep === 2 && (
                                <div className="animate-in fade-in slide-in-from-right-4 duration-300 space-y-8">
                                    <div className="mb-8 border-b border-gray-100 pb-6">
                                        <h2 className="text-3xl font-bold text-gray-900">Représentant & Contact</h2>
                                        <p className="text-gray-500 mt-2">Qui gérera ce compte MPME ?</p>
                                    </div>

                                    <div className="space-y-6">
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">Nom du Représentant Légal <span className="text-red-500">*</span></label>
                                            <div className="relative group">
                                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#990A0F] transition-colors">
                                                    <User size={20} />
                                                </div>
                                                <input
                                                    type="text"
                                                    className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-4 focus:ring-red-50 focus:border-[#990A0F] outline-none transition-all placeholder-gray-400 text-sm font-medium"
                                                    placeholder="Prénom Nom"
                                                    autoFocus
                                                />
                                            </div>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-sm font-semibold text-gray-700 mb-2">Email (Notifications)</label>
                                                <div className="relative group">
                                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#990A0F] transition-colors">
                                                        <Mail size={20} />
                                                    </div>
                                                    <input
                                                        type="email"
                                                        className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-4 focus:ring-red-50 focus:border-[#990A0F] outline-none transition-all placeholder-gray-400 text-sm font-medium"
                                                        placeholder="contact@..."
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <label className="block text-sm font-semibold text-gray-700 mb-2">Téléphone (SMS) <span className="text-red-500">*</span></label>
                                                <div className="relative group">
                                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#990A0F] transition-colors">
                                                        <Phone size={20} />
                                                    </div>
                                                    <input
                                                        type="tel"
                                                        className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-4 focus:ring-red-50 focus:border-[#990A0F] outline-none transition-all placeholder-gray-400 text-sm font-medium"
                                                        placeholder="+253..."
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* STEP 3: ACTIVITY */}
                            {currentStep === 3 && (
                                <div className="animate-in fade-in slide-in-from-right-4 duration-300 space-y-8">
                                    <div className="mb-8 border-b border-gray-100 pb-6">
                                        <h2 className="text-3xl font-bold text-gray-900">Activité & Taille</h2>
                                        <p className="text-gray-500 mt-2">Mieux vous connaître pour mieux vous accompagner.</p>
                                    </div>

                                    <div className="space-y-6">
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">Secteur d'activité <span className="text-red-500">*</span></label>
                                            <div className="relative group">
                                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#990A0F] transition-colors">
                                                    <Briefcase size={20} />
                                                </div>
                                                <select className="w-full pl-12 pr-10 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-4 focus:ring-red-50 focus:border-[#990A0F] outline-none transition-all text-gray-700 text-sm font-medium appearance-none cursor-pointer">
                                                    <option value="">Sélectionner...</option>
                                                    <option>Agriculture & Pêche</option>
                                                    <option>Industrie / Artisanat</option>
                                                    <option>BTP</option>
                                                    <option>Commerce</option>
                                                    <option>Services</option>
                                                    <option>TIC / Numérique</option>
                                                    <option>Tourisme</option>
                                                </select>
                                                <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-gray-400">
                                                    <ChevronRight size={16} className="rotate-90" />
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-4">Taille de l'entreprise <span className="text-red-500">*</span></label>
                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                                {[
                                                    { id: 'micro', label: 'Micro', desc: '1-9 employés', sub: '< 30M DJF' },
                                                    { id: 'petite', label: 'Petite', desc: '10-49 employés', sub: '< 100M DJF' },
                                                    { id: 'moyenne', label: 'Moyenne', desc: '50-249 employés', sub: '> 100M DJF' },
                                                ].map((size) => (
                                                    <label key={size.id} className="cursor-pointer relative">
                                                        <input type="radio" name="size" className="peer sr-only" />
                                                        <div className="p-4 rounded-xl border-2 border-gray-100 bg-white peer-checked:border-[#990A0F] peer-checked:bg-red-50/50 hover:border-red-100 transition-all h-full flex flex-col items-center text-center">
                                                            <div className="bg-gray-100 p-2 rounded-full mb-3 peer-checked:bg-[#990A0F] peer-checked:text-white text-gray-500">
                                                                <Users size={20} />
                                                            </div>
                                                            <span className="font-bold text-gray-900 block mb-1">{size.label}</span>
                                                            <span className="text-xs text-gray-500 block">{size.desc}</span>
                                                            <span className="text-[10px] text-gray-400 block mt-1">{size.sub}</span>
                                                        </div>
                                                        <div className="absolute top-3 right-3 opacity-0 peer-checked:opacity-100 text-[#990A0F] transition-opacity">
                                                            <Check size={16} />
                                                        </div>
                                                    </label>
                                                ))}
                                            </div>
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
                                    className={`px-8 py-4 bg-[#990A0F] text-white font-bold rounded-xl hover:bg-[#b01015] transition-all shadow-lg shadow-red-900/10 hover:shadow-red-900/20 active:scale-[0.98] flex items-center gap-2 text-sm ${currentStep === 3 ? 'bg-[#0E1A2B] hover:bg-[#1a2c42]' : ''}`}
                                >
                                    {currentStep === 3 ? (
                                        <>
                                            <Check size={20} />
                                            Créer mon profil
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
