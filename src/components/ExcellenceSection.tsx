import React from 'react';
import { FileDigit, Activity, ShieldCheck, Headphones, Bot, Globe2 } from 'lucide-react';

const features = [
    {
        icon: FileDigit,
        title: "Dématérialisation",
        description: "100% digital, zéro papier. Simplifiez vos archives et gagnez du temps dans vos démarches."
    },
    {
        icon: Activity,
        title: "Suivi en temps réel",
        description: "Suivez l'avancement de vos démarches à chaque étape depuis votre espace personnel."
    },
    {
        icon: ShieldCheck,
        title: "Paiement sécurisé",
        description: "Transactions protégées, chiffrées et 100% conformes aux standards internationaux."
    },
    {
        icon: Headphones,
        title: "Accompagnement",
        description: "Un support expert dédié et multicanal pour répondre à toutes vos questions."
    },
    {
        icon: Bot,
        title: "Simulateurs IA",
        description: "Estimez vos coûts et délais instantanément grâce à nos algorithmes intelligents."
    },
    {
        icon: Globe2,
        title: "Multilingue",
        description: "Une interface totalement accessible et disponible en Français, Arabe et Anglais."
    }
];

const ExcellenceSection: React.FC = () => {
    return (
        <section className="relative py-24 font-sans overflow-hidden">
            {/* Background Gradient - Djibouti Blue to Green */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0057b7] via-[#207e99] to-[#43b02a]"></div>

            {/* Overlay pattern for texture */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>

            <div className="container mx-auto px-4 relative z-10">

                {/* Header */}
                <div className="text-center mb-16 text-white max-w-3xl mx-auto">
                    <span className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-xs font-bold tracking-widest uppercase mb-6">
                        Pourquoi nous choisir
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                        L'excellence numérique <br />
                        <span className="text-blue-100 opacity-90">à portée de main</span>
                    </h2>
                    <p className="text-lg text-blue-50/90 leading-relaxed font-light">
                        Une suite d'outils puissants conçus pour simplifier votre quotidien avec élégance, sécurité et efficacité.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {features.map((feature, idx) => (
                        <div
                            key={idx}
                            className="group p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 hover:-translate-y-2 shadow-lg shadow-black/5"
                        >
                            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-white/20 to-white/5 flex items-center justify-center mb-6 text-white shadow-inner group-hover:scale-110 transition-transform duration-300 border border-white/20">
                                <feature.icon size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 tracking-wide">
                                {feature.title}
                            </h3>
                            <p className="text-blue-50/80 leading-relaxed text-sm">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default ExcellenceSection;
