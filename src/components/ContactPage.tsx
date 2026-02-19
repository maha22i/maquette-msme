import React, { useState } from 'react';
import { Home, ChevronRight, Send, Paperclip, MapPin, Phone, Mail, AlertTriangle, HelpCircle, Facebook, Linkedin, Instagram, Youtube, CheckCircle2 } from 'lucide-react';

interface ContactPageProps {
    onNavigateHome: () => void;
}

const ContactPage: React.FC<ContactPageProps> = ({ onNavigateHome }) => {
    const [formType, setFormType] = useState('general'); // general, support, partnership

    return (
        <div className="font-sans text-gray-800">
            {/* Header */}
            <div className="relative bg-[#0B1D2E] text-white pt-32 pb-24 overflow-hidden">
                {/* Background Image and Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="/section-ecosysteme.jpg"
                        alt="Background Djibouti"
                        className="w-full h-full object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0B1D2E]/90 via-[#0B1D2E]/80 to-[#0B1D2E]/95"></div>
                </div>

                <div className="container mx-auto px-4 text-center relative z-10">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Contactez-nous</h1>
                    <div className="flex items-center justify-center gap-2 text-sm text-blue-300">
                        <button onClick={onNavigateHome} className="hover:text-white transition-colors flex items-center gap-1">
                            <Home size={14} /> Accueil
                        </button>
                        <ChevronRight size={14} />
                        <span className="text-white font-bold">Contact</span>
                    </div>
                    <p className="mt-6 text-blue-100/80 max-w-2xl mx-auto">
                        Notre équipe est à votre écoute pour répondre à toutes vos questions et vous accompagner dans vos démarches.
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-10 pb-24 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Left Column: Form */}
                    <div className="lg:col-span-2 bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
                        <div className="mb-8 border-b border-gray-100 pb-6">
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">Envoyez-nous un message</h2>
                            <div className="flex items-center gap-2 text-sm text-green-600 font-medium">
                                <CheckCircle2 size={16} /> Réponse sous 24h
                            </div>
                        </div>

                        {/* Type Selection */}
                        <div className="mb-8">
                            <label className="block text-sm font-bold text-gray-700 mb-3">Type de demande <span className="text-red-500">*</span></label>
                            <div className="flex flex-wrap gap-3">
                                {[
                                    { id: 'general', label: 'Question générale' },
                                    { id: 'support', label: 'Support technique' },
                                    { id: 'partnership', label: 'Partenariat' }
                                ].map((type) => (
                                    <button
                                        key={type.id}
                                        onClick={() => setFormType(type.id)}
                                        className={`px-5 py-2.5 rounded-lg text-sm font-bold transition-all border ${formType === type.id
                                            ? 'bg-[#0B1D2E] text-white border-[#0B1D2E]'
                                            : 'bg-white text-gray-600 border-gray-200 hover:border-gray-400 hover:bg-gray-50'
                                            }`}
                                    >
                                        {type.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <form className="space-y-6">
                            {/* Portal Dropdown */}
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Portail <span className="text-red-500">*</span></label>
                                <div className="relative">
                                    <select className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 appearance-none text-gray-600">
                                        <option>-- Sélectionner un portail concerné --</option>
                                        <option>Portail Startups</option>
                                        <option>Guichet Unique</option>
                                        <option>G2B MPME</option>
                                        <option>Autre</option>
                                    </select>
                                    <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 rotate-90 text-gray-400 pointer-events-none" size={16} />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Nom complet <span className="text-red-500">*</span></label>
                                    <input type="text" placeholder="Votre nom complet" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Email <span className="text-red-500">*</span></label>
                                    <input type="email" placeholder="votre@email.com" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Téléphone (Optionnel)</label>
                                <input type="tel" placeholder="+253 XX XX XX XX" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10" />
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Sujet <span className="text-red-500">*</span></label>
                                <input type="text" placeholder="Objet de votre message" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10" />
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Message <span className="text-red-500">*</span></label>
                                <textarea rows={6} placeholder="Décrivez votre demande en détail..." className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 resize-none"></textarea>
                                <div className="text-right text-xs text-gray-400 mt-1">0/1000 caractères</div>
                            </div>

                            {/* File Upload */}
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Fichier joint (Optionnel)</label>
                                <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 text-center hover:bg-gray-50 transition-colors cursor-pointer group">
                                    <div className="w-12 h-12 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                                        <Paperclip size={20} />
                                    </div>
                                    <p className="text-sm text-gray-600 font-medium">Cliquez pour ajouter un fichier ou <span className="text-blue-600">parcourir</span></p>
                                    <p className="text-xs text-gray-400 mt-1">PDF, JPG, PNG — Max 5 Mo</p>
                                </div>
                            </div>

                            {/* Checkbox */}
                            <div className="flex items-start gap-3">
                                <input type="checkbox" id="privacy" className="mt-1 w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500" />
                                <label htmlFor="privacy" className="text-sm text-gray-600">
                                    J'accepte la <a href="#" className="text-blue-600 hover:underline">politique de confidentialité</a> et le traitement de mes données personnelles. <span className="text-red-500">*</span>
                                </label>
                            </div>

                            {/* Submit Button */}
                            <button type="submit" className="w-full bg-[#0B1D2E] text-white font-bold py-4 rounded-xl hover:bg-blue-900 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2">
                                <Send size={18} /> Envoyer le message
                            </button>
                        </form>
                    </div>

                    {/* Right Column: Sidebar */}
                    <div className="space-y-6">
                        {/* Info Card */}
                        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
                            <h3 className="text-xl font-serif font-bold text-[#0B1D2E] mb-6">Nos Coordonnées</h3>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-yellow-50 flex items-center justify-center text-yellow-600 flex-shrink-0">
                                        <MapPin size={20} />
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-900">Cité Ministeriel</p>
                                        <p className="text-sm text-gray-500">Rue de Venise, Plateau du Serpent</p>
                                        <p className="text-sm text-gray-500">Djibouti, République de Djibouti</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-yellow-50 flex items-center justify-center text-yellow-600 flex-shrink-0">
                                        <Phone size={20} />
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-900">+253 21 35 48 50</p>
                                        <p className="text-xs text-gray-400">Lun-Jeu : 7h30 - 16h00</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-yellow-50 flex items-center justify-center text-yellow-600 flex-shrink-0">
                                        <Mail size={20} />
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-900">contact@mpme.gov.dj</p>
                                        <p className="text-xs text-gray-400">Réponse sous 24h</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Urgent Support */}
                        <div className="bg-[#FFF8E7] rounded-2xl border border-[#FFD700]/30 p-8">
                            <div className="flex items-center gap-3 mb-4 text-[#B45309]">
                                <AlertTriangle size={24} />
                                <h3 className="font-bold text-lg">Besoin d'aide urgente ?</h3>
                            </div>
                            <p className="text-[#B45309] font-mono text-2xl font-bold mb-4">+253 21 35 48 51</p>
                            <button className="w-full bg-[#E85D04] text-white font-bold py-3 rounded-lg hover:bg-[#D94E00] transition-colors shadow-md flex items-center justify-center gap-2">
                                <span className="relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                                </span>
                                Chat en direct
                            </button>
                        </div>

                        {/* FAQ Links */}
                        <div className="bg-blue-50 rounded-2xl border border-blue-100 p-8">
                            <h3 className="font-bold text-lg text-[#0B1D2E] mb-4 flex items-center gap-2">
                                <HelpCircle size={20} className="text-blue-500" /> Questions Fréquentes
                            </h3>
                            <ul className="space-y-3 mb-6">
                                <li><a href="#" className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 transition-colors"><ChevronRight size={14} className="text-blue-400" /> Comment créer une entreprise ?</a></li>
                                <li><a href="#" className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 transition-colors"><ChevronRight size={14} className="text-blue-400" /> Quels documents nécessaires ?</a></li>
                                <li><a href="#" className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 transition-colors"><ChevronRight size={14} className="text-blue-400" /> Quels sont les délais ?</a></li>
                            </ul>
                            <button className="w-full border border-blue-200 bg-white text-blue-700 font-bold py-2 rounded-lg hover:bg-blue-50 transition-colors text-sm">
                                Voir toutes les FAQ
                            </button>
                        </div>

                        {/* Socials */}
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                            <h3 className="font-bold text-gray-900 mb-4">Suivez-nous</h3>
                            <div className="flex gap-3">
                                {[Facebook, Linkedin, Instagram, Youtube].map((Icon, idx) => (
                                    <a key={idx} href="#" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-[#0B1D2E] hover:text-white hover:border-[#0B1D2E] transition-all">
                                        <Icon size={18} />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Map Section */}
            <div className="h-[400px] w-full bg-gray-200 relative">
                {/* Embed Map for Djibouti */}
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31526.97498767355!2d43.136009893673396!3d11.588824177435132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1637dd43af181023%3A0xe549557451455551!2sDjibouti!5e0!3m2!1sfr!2sdj!4v1709904000000!5m2!1sfr!2sdj"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: 'grayscale(0.2)' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Map Djibouti"
                ></iframe>

                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur px-4 py-2 rounded-lg shadow-md text-xs font-bold text-gray-700 flex items-center gap-2">
                    <MapPin size={14} className="text-red-500" />
                    Obtenir l'itinéraire
                </div>
            </div>

        </div>
    );
};

export default ContactPage;
