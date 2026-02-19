import { useState } from 'react';
import {
    Lock,
    Mail,
    Eye,
    EyeOff,
    CheckCircle2,
    Smartphone,
    Building2,
    ShieldCheck
} from 'lucide-react';

export default function StartupLoginPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="flex min-h-screen bg-white font-sans">
            {/* Left Side - Visual & Branding */}
            <div className="hidden lg:flex lg:w-1/2 bg-[#0055AA] text-white p-16 flex-col justify-between relative overflow-hidden">

                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
                        </pattern>
                        <rect width="100%" height="100%" fill="url(#grid)" />
                    </svg>
                </div>

                {/* Floating Elements (Innovation/Tech) */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {/* Circle 1 */}
                    <div className="absolute top-[10%] left-[10%] w-32 h-32 bg-blue-300/10 rounded-full blur-3xl animate-pulse"></div>
                    {/* Circle 2 */}
                    <div className="absolute top-[40%] right-[10%] w-64 h-64 bg-indigo-400/10 rounded-full blur-3xl animate-pulse delay-700"></div>
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

                {/* Logo Area */}
                <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/20">
                            <Building2 size={24} />
                        </div>
                        <h1 className="font-bold text-sm tracking-[0.2em] uppercase leading-relaxed text-blue-100 border-l border-blue-400 pl-4">
                            République<br />de Djibouti
                        </h1>
                    </div>
                </div>

                {/* Main Content */}
                <div className="relative z-10 max-w-xl">
                    <h2 className="text-5xl font-extrabold mb-6 leading-tight tracking-tight">
                        Portail Numérique<br />
                        <span className="text-blue-200">des Startups</span>
                    </h2>

                    <p className="text-xl text-blue-100 mb-12 leading-relaxed font-light">
                        Accédez à l'ensemble des services de l'État pour le développement de votre entreprise innovante.
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-start gap-4 group">
                            <div className="mt-1 p-1 bg-blue-400/20 rounded-full text-blue-300 group-hover:bg-blue-400 group-hover:text-white transition-colors">
                                <CheckCircle2 size={20} />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">Labellisation simplifiée</h3>
                                <p className="text-sm text-blue-200 mt-1">Obtenez votre label Startup Act 100% en ligne</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 group">
                            <div className="mt-1 p-1 bg-blue-400/20 rounded-full text-blue-300 group-hover:bg-blue-400 group-hover:text-white transition-colors">
                                <CheckCircle2 size={20} />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">Suivi des dossiers en temps réel</h3>
                                <p className="text-sm text-blue-200 mt-1">Visualisez l'avancement de vos demandes</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 group">
                            <div className="mt-1 p-1 bg-blue-400/20 rounded-full text-blue-300 group-hover:bg-blue-400 group-hover:text-white transition-colors">
                                <CheckCircle2 size={20} />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">Accès aux dispositifs d'aide</h3>
                                <p className="text-sm text-blue-200 mt-1">Financements, exonérations et mentoring</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="relative z-10 pt-8 border-t border-white/10 flex items-center gap-4 text-xs text-blue-300 font-medium tracking-wide">
                    <ShieldCheck size={14} />
                    <span>Plateforme officielle sécurisée par l'État</span>
                </div>
            </div>

            {/* Right Side - Login Form */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center p-8 md:p-16 lg:p-24 bg-gray-50">
                <div className="max-w-md w-full mx-auto bg-white p-8 rounded-2xl shadow-xl shadow-gray-200/50">

                    <div className="text-center mb-10">
                        <div className="inline-flex justify-center items-center w-16 h-16 bg-blue-50 rounded-full mb-4 text-[#0055AA]">
                            <Lock size={28} />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900">Connexion</h2>
                        <p className="text-gray-500 text-sm mt-2">Accédez à votre espace sécurisé</p>
                    </div>

                    <form className="space-y-5">
                        <button
                            type="button"
                            className="w-full relative group flex items-center justify-center gap-3 bg-white border-2 border-[#0055AA] text-[#0055AA] py-3 px-4 rounded-xl font-bold hover:bg-blue-50 transition-all focus:ring-4 focus:ring-blue-100"
                        >
                            <Smartphone size={20} className="group-hover:scale-110 transition-transform" />
                            Se connecter avec Mobile ID
                            <span className="absolute right-4 flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0055AA]"></span>
                            </span>
                        </button>

                        <div className="relative flex py-2 items-center">
                            <div className="flex-grow border-t border-gray-200"></div>
                            <span className="flex-shrink-0 mx-4 text-gray-400 text-xs font-medium uppercase tracking-widest">Ou par email</span>
                            <div className="flex-grow border-t border-gray-200"></div>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email professionnel</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                                    <Mail size={18} />
                                </div>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0055AA] focus:border-transparent outline-none transition-all placeholder-gray-400 text-sm"
                                    placeholder="nom@startup.dj"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex justify-between items-center mb-1.5">
                                <label className="block text-sm font-semibold text-gray-700">Mot de passe</label>
                            </div>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                                    <Lock size={18} />
                                </div>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="block w-full pl-10 pr-10 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0055AA] focus:border-transparent outline-none transition-all placeholder-gray-400 text-sm"
                                    placeholder="••••••••"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                                >
                                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>
                            <div className="flex justify-end mt-2">
                                <a href="#" className="text-xs font-semibold text-[#0055AA] hover:text-blue-700 hover:underline">
                                    Mot de passe oublié ?
                                </a>
                            </div>
                        </div>

                        <button
                            type="button"
                            className="w-full bg-[#0055AA] text-white py-3.5 px-4 rounded-xl font-bold hover:bg-[#004488] transition-all shadow-lg shadow-blue-900/10 hover:shadow-blue-900/20 active:scale-[0.98]"
                        >
                            Se connecter
                        </button>
                    </form>

                    <div className="mt-8 text-center text-sm text-gray-500">
                        Pas encore de compte ?{' '}
                        <a href="/startup/register" className="font-bold text-[#0055AA] hover:underline">
                            Demander une labellisation
                        </a>
                    </div>
                </div>

                <div className="mt-12 text-center text-xs text-gray-400 space-x-6">
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
