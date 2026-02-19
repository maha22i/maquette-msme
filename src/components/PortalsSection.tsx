import React from 'react';
import { Rocket, Building2, TrendingUp, ArrowRight, CheckCircle2, Globe2 } from 'lucide-react';

const portals = [
    {
        id: 'startups',
        tag: 'Innovation',
        title: 'Djibouti Startup Act',
        subtitle: 'Innover sans limites',
        description: 'Bénéficiez du cadre légal avantageux pour propulser votre startup : labellisation, accès aux financements et exonérations fiscales.',
        features: ['Labellisation Digitale', 'Accès aux Fonds de Soutien', 'Mentorat & Networking'],
        icon: Rocket,
        color: '#6AB2E7', // Sky Blue
        bg: 'bg-[#6AB2E7]/10',
        text: 'text-[#6AB2E7]',
        hoverBg: 'hover:bg-[#6AB2E7]',
        borderColor: 'border-[#6AB2E7]',
        linkText: 'Accéder à l\'espace Startup',
        linkUrl: '/startup',
        target: '_blank'
    },
    {
        id: 'guichet',
        tag: 'Citoyens & Entreprises',
        title: 'Guichet Unique Numérique',
        subtitle: 'L\'administration simplifiée',
        description: 'Votre point d\'entrée unique pour toutes les démarches administratives. Créez votre entreprise ou obtenez vos documents en quelques clics.',
        features: ['Création d\'entreprise 100% en ligne', 'Dépôt de documents sécurisé', 'Suivi de dossier en temps réel'],
        icon: Building2,
        color: '#12AD2B', // Green
        bg: 'bg-[#12AD2B]/10',
        text: 'text-[#12AD2B]',
        hoverBg: 'hover:bg-[#12AD2B]',
        borderColor: 'border-[#12AD2B]',
        linkText: 'Accéder au Guichet',
        linkUrl: '/guichet',
        target: '_blank'
    },
    {
        id: 'g2b',
        tag: 'Croissance',
        title: 'Plateforme e-G2B',
        subtitle: 'Accélérateur de croissance',
        description: 'Une suite d\'outils dédiés aux MPME pour accéder aux marchés publics, gérer la fiscalité et développer l\'export.',
        features: ['Accès aux appels d\'offres', 'Gestion fiscale simplifiée', 'Formations & Outils numériques'],
        icon: TrendingUp,
        color: '#990A0F', // Red
        bg: 'bg-[#990A0F]/10',
        text: 'text-[#990A0F]',
        hoverBg: 'hover:bg-[#990A0F]',
        borderColor: 'border-[#990A0F]',
        linkText: 'Espace Entreprises',
        linkUrl: '/g2b',
        target: '_blank'
    }
];

const PortalsSection: React.FC = () => {
    return (
        <section className="py-24 bg-gray-50/50 font-sans relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-10 right-0 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-10 left-0 w-96 h-96 bg-green-100/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <div className="text-center mb-20 max-w-4xl mx-auto">
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-widest mb-6 border border-blue-100">
                        <Globe2 size={14} />
                        Écosystème Numérique Unifié
                    </span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-[#0F172A] mb-6 tracking-tight">
                        Votre passerelle vers <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">l'administration de demain</span>
                    </h2>
                    <p className="text-lg text-gray-500 leading-relaxed max-w-2xl mx-auto">
                        Une infrastructure moderne et sécurisée connectant les citoyens, les entreprises et l'administration pour une nation plus agile et performante.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 xl:gap-10">
                    {portals.map((portal) => (
                        <div
                            key={portal.id}
                            className="group relative bg-white rounded-[2rem] p-8 lg:p-10 shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:shadow-blue-500/10 border border-gray-100 transition-all duration-300 hover:-translate-y-2 flex flex-col"
                        >
                            {/* Color Bar */}
                            <div className={`absolute top-0 left-10 right-10 h-1.5 rounded-b-lg ${portal.bg.replace('/10', '')}`}></div>

                            {/* Header Group */}
                            <div className="flex items-start justify-between mb-8 mt-2">
                                <div>
                                    <div className={`inline-block px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider mb-2 ${portal.bg} ${portal.text}`}>
                                        {portal.tag}
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-900 transition-colors">
                                        {portal.title}
                                    </h3>
                                    <p className={`text-sm font-medium mt-1 ${portal.text} opacity-80`}>
                                        {portal.subtitle}
                                    </p>
                                </div>
                                <div className={`p-3 rounded-2xl ${portal.bg} ${portal.text} transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                                    <portal.icon size={28} />
                                </div>
                            </div>

                            {/* Description */}
                            <p className="text-gray-500 leading-relaxed mb-8">
                                {portal.description}
                            </p>

                            {/* Features List */}
                            <ul className="space-y-3 mb-8 flex-grow">
                                {portal.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-sm text-gray-600">
                                        <CheckCircle2 size={16} className={`mt-0.5 flex-shrink-0 ${portal.text}`} />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* Button */}
                            <a
                                href={portal.linkUrl || '#'}
                                target={portal.target || '_self'}
                                className={`w-full py-4 px-6 rounded-xl flex items-center justify-between font-bold text-sm transition-all duration-300 group/btn border ${portal.bg} ${portal.text} ${portal.borderColor} ${portal.hoverBg} hover:text-white hover:border-transparent`}
                            >
                                <span>{portal.linkText}</span>
                                <ArrowRight size={18} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
                            </a>
                        </div>
                    ))}
                </div>


            </div>
        </section>
    );
};

export default PortalsSection;
