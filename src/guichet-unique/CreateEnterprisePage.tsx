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
    Star,
    Info,
    Scale
} from 'lucide-react';

export default function CreateEnterprisePage() {
    const [currentStep, setCurrentStep] = useState(1);
    const [legalForm, setLegalForm] = useState('');

    const nextStep = () => {
        if (currentStep < 3) setCurrentStep(currentStep + 1);
    };

    const prevStep = () => {
        if (currentStep > 1) setCurrentStep(currentStep - 1);
    };

    return (
        <div className="flex min-h-screen bg-white font-sans">
            {/* Left Side - Visual & Branding */}
            <div className="hidden lg:flex lg:w-1/2 bg-[#0E8A22] text-white p-12 xl:p-16 flex-col justify-between relative overflow-hidden">

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

                {/* Header / Back Link */}
                <div className="relative z-10">
                    <a href="/guichet" className="inline-flex items-center gap-2 text-green-100 hover:text-white transition-colors text-sm font-medium mb-8">
                        <ArrowLeft size={16} />
                        Retour à la connexion
                    </a>

                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/20">
                            <Building2 size={24} />
                        </div>
                        <h1 className="font-bold text-sm tracking-[0.2em] uppercase leading-relaxed text-green-100 border-l border-green-400 pl-4">
                            République<br />de Djibouti
                        </h1>
                    </div>
                </div>

                {/* Process Info */}
                <div className="relative z-10 max-w-lg">
                    <h2 className="text-4xl xl:text-5xl font-extrabold mb-8 leading-tight">
                        Création<br />d'Entreprise
                    </h2>

                    <div className="space-y-8">
                        {/* Step Indicators */}
                        <div className={`flex items-start gap-4 transition-opacity duration-300 group ${currentStep === 1 ? 'opacity-100' : 'opacity-60'}`}>
                            <div className={`mt-1 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border transition-all ${currentStep === 1 ? 'bg-white text-[#0E8A22] border-white scale-110' : 'border-green-300 text-green-100'}`}>1</div>
                            <div>
                                <h3 className="font-bold text-lg">Forme Juridique</h3>
                                <p className="text-sm text-green-100 mt-1">Choix de la structure légale</p>
                            </div>
                        </div>

                        <div className={`flex items-start gap-4 transition-opacity duration-300 group ${currentStep === 2 ? 'opacity-100' : 'opacity-60'}`}>
                            <div className={`mt-1 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border transition-all ${currentStep === 2 ? 'bg-white text-[#0E8A22] border-white scale-110' : 'border-green-300 text-green-100'}`}>2</div>
                            <div>
                                <h3 className="font-bold text-lg">Identité</h3>
                                <p className="text-sm text-green-100 mt-1">Informations de l'entreprise</p>
                            </div>
                        </div>

                        <div className={`flex items-start gap-4 transition-opacity duration-300 group ${currentStep === 3 ? 'opacity-100' : 'opacity-60'}`}>
                            <div className={`mt-1 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border transition-all ${currentStep === 3 ? 'bg-white text-[#0E8A22] border-white scale-110' : 'border-green-300 text-green-100'}`}>3</div>
                            <div>
                                <h3 className="font-bold text-lg">Finalisation</h3>
                                <p className="text-sm text-green-100 mt-1">Dépôt et validation</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="relative z-10 pt-8 border-t border-white/10 flex items-center gap-3 text-xs text-green-200 font-medium tracking-wide">
                    <ShieldCheck size={14} />
                    <span>Plateforme officielle sécurisée par l'État</span>
                </div>
            </div>

            {/* Right Side - Form (White Background) */}
            <div className="w-full lg:w-1/2 flex flex-col bg-gray-50 h-screen overflow-hidden">

                {/* Mobile Header */}
                <div className="lg:hidden bg-[#0E8A22] text-white p-4 flex items-center justify-between shadow-md z-20">
                    <div className="flex items-center gap-3">
                        <a href="/guichet" className="p-2 -ml-2 hover:bg-white/10 rounded-lg">
                            <ArrowLeft size={20} />
                        </a>
                        <span className="font-bold">Création</span>
                    </div>
                    <span className="text-xs font-medium bg-white/20 px-3 py-1 rounded-full">Étape {currentStep}/3</span>
                </div>

                {/* Scrollable Form Container */}
                <div className="flex-1 overflow-y-auto p-4 md:p-8 lg:p-12 flex items-center justify-center">
                    <div className="w-full max-w-2xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 my-auto">

                        <form className="space-y-6">
                            {/* STEP 1: LEGAL FORM */}
                            {currentStep === 1 && (
                                <div className="animate-in fade-in slide-in-from-right-4 duration-300 space-y-8">
                                    <div className="mb-8 border-b border-gray-100 pb-6">
                                        <h2 className="text-3xl font-bold text-gray-900">Forme Juridique</h2>
                                        <p className="text-gray-500 mt-2">Choisissez le statut juridique adapté à votre activité.</p>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {[
                                            { id: 'sarl', label: 'SARL', desc: 'Société à Responsabilité Limitée', icon: Building2 },
                                            { id: 'eurl', label: 'EURL', desc: 'Entreprise Unipersonnelle', icon: User },
                                            { id: 'sa', label: 'SA', desc: 'Société Anonyme', icon: Scale },
                                            { id: 'sas', label: 'SAS', desc: 'Société par Actions Simplifiée', icon: Briefcase },
                                            { id: 'ets', label: 'Ets', desc: 'Établissement / Patente', icon: MapPin },
                                        ].map((type) => (
                                            <div
                                                key={type.id}
                                                onClick={() => setLegalForm(type.id)}
                                                className={`cursor-pointer p-4 rounded-xl border-2 transition-all hover:shadow-md flex items-start gap-4 ${legalForm === type.id ? 'border-[#0E8A22] bg-green-50' : 'border-gray-100 hover:border-green-200'}`}
                                            >
                                                <div className={`mt-1 p-2 rounded-lg ${legalForm === type.id ? 'bg-[#0E8A22] text-white' : 'bg-gray-100 text-gray-500'}`}>
                                                    <type.icon size={20} />
                                                </div>
                                                <div>
                                                    <h3 className={`font-bold ${legalForm === type.id ? 'text-[#0E8A22]' : 'text-gray-900'}`}>{type.label}</h3>
                                                    <p className="text-xs text-gray-500 mt-1">{type.desc}</p>
                                                </div>
                                                {legalForm === type.id && (
                                                    <div className="ml-auto text-[#0E8A22]">
                                                        <Check size={20} />
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>

                                    <div className="bg-blue-50 border border-blue-100 p-4 rounded-xl flex gap-3 text-sm text-blue-800">
                                        <Info size={20} className="flex-shrink-0 mt-0.5" />
                                        <p>En cas de doute sur le statut juridique, vous pouvez consulter le guide de l'investisseur ou demander conseil à un expert ANPI.</p>
                                    </div>
                                </div>
                            )}

                            {/* STEP 2: IDENTITY */}
                            {currentStep === 2 && (
                                <div className="animate-in fade-in slide-in-from-right-4 duration-300 space-y-8">
                                    <div className="mb-8 border-b border-gray-100 pb-6">
                                        <h2 className="text-3xl font-bold text-gray-900">Identité de l'entreprise</h2>
                                        <p className="text-gray-500 mt-2">Définissez l'identité de votre future structure.</p>
                                    </div>

                                    <div className="space-y-6">
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">Dénomination Sociale (Nom) <span className="text-red-500">*</span></label>
                                            <div className="relative group">
                                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#0E8A22] transition-colors">
                                                    <Building2 size={20} />
                                                </div>
                                                <input
                                                    type="text"
                                                    className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-4 focus:ring-green-50 focus:border-[#0E8A22] outline-none transition-all placeholder-gray-400 text-sm font-medium"
                                                    placeholder="Ex: Djibouti Trading Co."
                                                    autoFocus
                                                />
                                            </div>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-sm font-semibold text-gray-700 mb-2">Enseigne Commerciale (Optionnel)</label>
                                                <div className="relative group">
                                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#0E8A22] transition-colors">
                                                        <Star size={20} />
                                                    </div>
                                                    <input
                                                        type="text"
                                                        className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-4 focus:ring-green-50 focus:border-[#0E8A22] outline-none transition-all placeholder-gray-400 text-sm font-medium"
                                                        placeholder="Nom commercial"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <label className="block text-sm font-semibold text-gray-700 mb-2">Secteur d'activité <span className="text-red-500">*</span></label>
                                                <div className="relative group">
                                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#0E8A22] transition-colors">
                                                        <Briefcase size={20} />
                                                    </div>
                                                    <select className="w-full pl-12 pr-10 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-4 focus:ring-green-50 focus:border-[#0E8A22] outline-none transition-all text-gray-700 text-sm font-medium appearance-none cursor-pointer">
                                                        <option value="">Sélectionner...</option>
                                                        <option>Commerce Général</option>
                                                        <option>BTP & Construction</option>
                                                        <option>Services</option>
                                                        <option>Transport & Logistique</option>
                                                        <option>Industrie</option>
                                                        <option>Tourisme</option>
                                                        <option>Autre</option>
                                                    </select>
                                                    <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-gray-400">
                                                        <ChevronRight size={16} className="rotate-90" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">Adresse du Siège <span className="text-red-500">*</span></label>
                                            <div className="relative group">
                                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#0E8A22] transition-colors">
                                                    <MapPin size={20} />
                                                </div>
                                                <input
                                                    type="text"
                                                    className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-4 focus:ring-green-50 focus:border-[#0E8A22] outline-none transition-all placeholder-gray-400 text-sm font-medium"
                                                    placeholder="Quartier, Rue, Ville"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* STEP 3: FINALIZATION */}
                            {currentStep === 3 && (
                                <div className="animate-in fade-in slide-in-from-right-4 duration-300 space-y-8">
                                    <div className="mb-8 border-b border-gray-100 pb-6">
                                        <h2 className="text-3xl font-bold text-gray-900">Finalisation</h2>
                                        <p className="text-gray-500 mt-2">Dernière étape avant la création de votre dossier.</p>
                                    </div>

                                    <div className="space-y-6">
                                        <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                                            <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                                                <User size={20} className="text-[#0E8A22]" />
                                                Représentant Légal
                                            </h3>
                                            <div className="grid md:grid-cols-2 gap-4">
                                                <div>
                                                    <label className="block text-xs font-semibold text-gray-500 mb-1">Nom Complet</label>
                                                    <input type="text" className="w-full p-2.5 bg-white border border-gray-200 rounded-lg text-sm" placeholder="Nom Prénom" />
                                                </div>
                                                <div>
                                                    <label className="block text-xs font-semibold text-gray-500 mb-1">Téléphone</label>
                                                    <input type="tel" className="w-full p-2.5 bg-white border border-gray-200 rounded-lg text-sm" placeholder="+253..." />
                                                </div>
                                                <div className="md:col-span-2">
                                                    <label className="block text-xs font-semibold text-gray-500 mb-1">Email de contact</label>
                                                    <input type="email" className="w-full p-2.5 bg-white border border-gray-200 rounded-lg text-sm" placeholder="contact@..." />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bg-green-50 border border-green-100 rounded-2xl p-6 flex gap-4">
                                            <div className="bg-white p-2 rounded-lg shadow-sm h-fit">
                                                <Info size={24} className="text-[#0E8A22]" />
                                            </div>
                                            <div className="text-sm text-green-900">
                                                <p className="font-bold mb-1">Pièces justificatives</p>
                                                <p className="opacity-90 leading-relaxed">Pour finaliser votre immatriculation, vous devrez fournir ultérieurement : une copie de votre pièce d'identité et un justificatif de domicile. Vous pouvez soumettre votre demande préliminaire dès maintenant.</p>
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
                                    className={`px-8 py-4 bg-[#0E8A22] text-white font-bold rounded-xl hover:bg-[#0b6e1b] transition-all shadow-lg shadow-green-900/10 hover:shadow-green-900/20 active:scale-[0.98] flex items-center gap-2 text-sm ${currentStep === 3 ? 'bg-[#0E1A2B] hover:bg-[#1a2c42]' : ''}`}
                                >
                                    {currentStep === 3 ? (
                                        <>
                                            <Check size={20} />
                                            Confirmer la demande
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
