import { useState } from 'react';
import {
    Lock,
    Eye,
    EyeOff,
    Building2,
    ShieldCheck,
    TrendingUp,
    Smartphone,
    ArrowRight,
    Users,
    GraduationCap,
    Lightbulb
} from 'lucide-react';

export default function G2BLoginPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [identifier, setIdentifier] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="flex min-h-screen bg-gray-50 font-sans">
            {/* Left Side - Red Branding */}
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

                {/* Floating Elements (Growth/Development) */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {/* Circle 1 */}
                    <div className="absolute top-[10%] left-[10%] w-32 h-32 bg-red-300/10 rounded-full blur-3xl animate-pulse"></div>
                    {/* Circle 2 */}
                    <div className="absolute top-[40%] right-[10%] w-64 h-64 bg-orange-400/10 rounded-full blur-3xl animate-pulse delay-700"></div>
                    {/* Star (Djibouti Flag Reference - Subtle) */}
                    <div className="absolute top-[15%] right-[15%] opacity-5 animate-bounce duration-[5000ms]">
                        <svg width="100" height="100" viewBox="0 0 24 24" fill="currentColor" className="text-white transform rotate-12">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                    </div>

                    {/* Network Lines */}
                    <svg className="absolute top-0 left-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="20%" cy="30%" r="2" fill="white" className="animate-ping" style={{ animationDuration: '3s' }} />
                        <circle cx="80%" cy="20%" r="2" fill="white" className="animate-ping" style={{ animationDuration: '4s' }} />
                        <path d="M 100 100 Q 300 300 500 100" stroke="white" strokeWidth="1" fill="none" strokeDasharray="5,5" className="opacity-50" />
                    </svg>
                </div>

                {/* Bottom Waves (Sea/Coast) */}
                <div className="absolute bottom-0 left-0 w-full z-0 pointer-events-none">
                    {/* Wave 1 - Back */}
                    <div className="absolute bottom-0 w-full opacity-10 transform translate-y-2">
                        <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto text-white fill-current">
                            <path d="M0,256L48,245.3C96,235,192,213,288,213.3C384,213,480,235,576,245.3C672,256,768,256,864,240C960,224,1056,192,1152,192C1248,192,1344,224,1392,240L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                        </svg>
                    </div>
                    {/* Wave 2 - Front */}
                    <div className="relative opacity-20">
                        <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto text-white fill-current">
                            <path d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,202.7C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                        </svg>
                    </div>
                </div>

                {/* Header */}
                <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/20">
                            <Building2 size={20} />
                        </div>
                        <h1 className="font-bold text-xs tracking-[0.2em] uppercase leading-relaxed text-red-100 border-l border-red-400 pl-4">
                            République<br />de Djibouti
                        </h1>
                    </div>
                </div>

                {/* Main Content */}
                <div className="relative z-10 max-w-xl mb-8">
                    <div className="inline-block px-3 py-1 rounded-full border border-red-300/30 bg-red-800/30 backdrop-blur-md text-[10px] font-bold tracking-wider mb-4 text-red-100">
                        CROISSANCE & DÉVELOPPEMENT
                    </div>

                    <h2 className="text-4xl font-serif font-medium mb-4 leading-tight">
                        Plateforme G2B<br />MPME
                    </h2>

                    <p className="text-lg text-red-100 mb-8 leading-relaxed font-light opacity-90">
                        Développez votre entreprise avec un accompagnement expert. Accédez aux marchés, aux formations et au réseau de mentors.
                    </p>

                    {/* Feature Cards Grid (Mockup inspired) */}
                    <div className="grid grid-cols-2 gap-3">
                        <div className="bg-white/10 backdrop-blur-sm border border-white/10 p-4 rounded-xl hover:bg-white/20 transition-colors">
                            <div className="text-red-200 mb-2"><Users size={20} /></div>
                            <h3 className="font-bold text-xs mb-0.5">Accompagnement BDS</h3>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm border border-white/10 p-4 rounded-xl hover:bg-white/20 transition-colors">
                            <div className="text-yellow-300 mb-2"><GraduationCap size={20} /></div>
                            <h3 className="font-bold text-xs mb-0.5">Formation & capacités</h3>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm border border-white/10 p-4 rounded-xl hover:bg-white/20 transition-colors">
                            <div className="text-blue-300 mb-2"><Users size={20} /></div>
                            <h3 className="font-bold text-xs mb-0.5">Réseau mentors</h3>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm border border-white/10 p-4 rounded-xl hover:bg-white/20 transition-colors">
                            <div className="text-green-300 mb-2"><Lightbulb size={20} /></div>
                            <h3 className="font-bold text-xs mb-0.5">Outils intelligents</h3>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="relative z-10 pt-6 border-t border-white/10 flex items-center justify-between text-[10px] text-red-100/70 font-medium tracking-wide">
                    <div className="flex items-center gap-4">
                        <span>ANSIE</span>
                        <span className="w-px h-2 bg-white/20"></span>
                        <span>CNSS</span>
                        <span className="w-px h-2 bg-white/20"></span>
                        <span>Impôts</span>
                    </div>
                    <div>PLATEFORME OFFICIELLE DU GOUVERNEMENT</div>
                </div>
            </div>

            {/* Right Side - Login Form */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center p-6 md:p-12 lg:p-16 bg-gray-50 text-gray-900">
                <div className="max-w-md w-full mx-auto bg-white p-8 rounded-2xl shadow-xl shadow-gray-200/50">

                    <div className="text-center mb-6">
                        <div className="inline-flex justify-center items-center w-12 h-12 bg-red-50 rounded-full mb-3 text-[#990A0F]">
                            <TrendingUp size={24} />
                        </div>
                        <h2 className="text-xl font-bold text-gray-900">Bienvenue sur votre espace MPME</h2>
                        <p className="text-gray-500 text-xs mt-1">Accédez à vos outils de développement</p>
                    </div>

                    {/* Pills (Visual only as in mockup) */}
                    <div className="flex flex-wrap justify-center gap-2 mb-8">
                        {['Commerce', 'Services', 'Production', 'Tech'].map((pill) => (
                            <span key={pill} className="px-3 py-1 bg-gray-50 text-gray-500 text-[10px] font-bold uppercase tracking-wider rounded-full border border-gray-100">
                                {pill}
                            </span>
                        ))}
                    </div>

                    <form className="space-y-4">
                        <button
                            type="button"
                            className="w-full relative group flex items-center justify-center gap-2 bg-white border-2 border-[#990A0F] text-[#990A0F] py-2.5 px-4 rounded-xl font-bold hover:bg-red-50 transition-all focus:ring-4 focus:ring-red-100 text-sm"
                        >
                            <Smartphone size={18} className="group-hover:scale-110 transition-transform" />
                            Se connecter avec Mobile ID
                            <span className="absolute right-4 flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#990A0F]"></span>
                            </span>
                        </button>

                        <div className="relative flex py-1 items-center">
                            <div className="flex-grow border-t border-gray-200"></div>
                            <span className="flex-shrink-0 mx-4 text-gray-400 text-[10px] font-medium uppercase tracking-widest">Ou par email / téléphone</span>
                            <div className="flex-grow border-t border-gray-200"></div>
                        </div>

                        <div>
                            <label className="block text-xs font-semibold text-gray-700 mb-1">Email professionnel ou téléphone</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                                    <Users size={16} />
                                </div>
                                <input
                                    type="text"
                                    value={identifier}
                                    onChange={(e) => setIdentifier(e.target.value)}
                                    className="block w-full pl-9 pr-3 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#990A0F] focus:border-transparent outline-none transition-all placeholder-gray-400 text-sm"
                                    placeholder="contact@entreprise.dj"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex justify-between items-center mb-1">
                                <label className="block text-xs font-semibold text-gray-700">Mot de passe</label>
                            </div>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                                    <Lock size={16} />
                                </div>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="block w-full pl-9 pr-9 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#990A0F] focus:border-transparent outline-none transition-all placeholder-gray-400 text-sm"
                                    placeholder="••••••••"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                                >
                                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                                </button>
                            </div>
                            <div className="flex justify-between items-center mt-2">
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input type="checkbox" className="w-3.5 h-3.5 rounded border-gray-300 text-[#990A0F] focus:ring-[#990A0F]" />
                                    <span className="text-xs text-gray-600">Se souvenir de moi</span>
                                </label>
                                <a href="#" className="text-xs font-semibold text-[#990A0F] hover:text-red-700 hover:underline">
                                    Besoin d'aide ?
                                </a>
                            </div>
                        </div>

                        <button
                            type="button"
                            className="w-full bg-[#990A0F] text-white py-3 px-4 rounded-xl font-bold hover:bg-[#b01015] transition-all shadow-lg shadow-gray-200 active:scale-[0.98] flex items-center justify-center gap-2 text-sm"
                        >
                            <ShieldCheck size={16} />
                            Accéder à mon espace
                            <ArrowRight size={16} />
                        </button>
                    </form>

                    <div className="mt-6 bg-red-50 p-4 rounded-xl border border-red-100 text-center">
                        <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-2 text-[#990A0F]">
                            <TrendingUp size={16} />
                        </div>
                        <p className="text-xs font-bold text-gray-900 mb-1">Première fois sur la plateforme ?</p>
                        <p className="text-[10px] text-gray-500 mb-3">Créez votre profil MPME et accédez à l'accompagnement personnalisé.</p>
                        <a href="/g2b/create" className="w-full block py-2 bg-[#990A0F] text-white text-xs font-bold rounded-lg hover:bg-[#b01015] transition-colors">
                            Créer mon profil d'entreprise
                        </a>
                    </div>
                </div>

                <div className="mt-8 text-center text-[10px] text-gray-400 space-x-4">
                    <a href="#" className="hover:text-gray-600 transition-colors">Politique de confidentialité</a>
                    <a href="#" className="hover:text-gray-600 transition-colors">Conditions d'utilisation</a>
                    <a href="#" className="hover:text-gray-600 transition-colors flex items-center gap-1 inline-flex justify-center">
                        Support technique
                    </a>
                </div>
            </div>
        </div>
    );
}
