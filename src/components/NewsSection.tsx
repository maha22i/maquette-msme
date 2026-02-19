import React from 'react';
import { Scale, Calendar, ArrowRight, Building2, Newspaper } from 'lucide-react';

interface NewsItem {
    id: number;
    tag: string;
    tagColor: string;
    tagBg: string;
    date: string;
    author: string;
    title: string;
    excerpt: string;
    image: string;
    readMoreLink: string;
}

const newsData: NewsItem[] = [
    {
        id: 1,
        tag: 'RÉGLEMENTATION',
        tagColor: 'text-blue-700',
        tagBg: 'bg-blue-100',
        date: '15 FÉVRIER 2026',
        author: 'MINISTÈRE DE L\'ÉCONOMIE',
        title: "Nouveau décret simplifiant la création d'entreprise et l'investissement",
        excerpt: "Dans une volonté d'accélérer le dynamisme économique, le gouvernement annonce la simplification des procédures administratives pour les investisseurs locaux et étrangers.",
        image: 'https://images.unsplash.com/photo-1577415124269-fc1140a69e91?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        readMoreLink: '#'
    },
    {
        id: 2,
        tag: 'STARTUP-ACT',
        tagColor: 'text-orange-700',
        tagBg: 'bg-orange-100',
        date: '12 FÉVRIER 2026',
        author: 'ANSIE',
        title: "Le Startup-Act Djibouti franchit le cap symbolique des 100 labellisations",
        excerpt: "Une étape clé pour l'écosystème numérique national, confirmant l'attractivité du nouveau cadre fiscal pour les jeunes pousses innovantes.",
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0WTGcP1i7wuxxqmBrF2JfJabq5tqcrXnC6w&s',
        readMoreLink: '#'
    },
    {
        id: 3,
        tag: 'COOPÉRATION',
        tagColor: 'text-green-700',
        tagBg: 'bg-green-100',
        date: '10 FÉVRIER 2026',
        author: 'AFFAIRES ÉTRANGÈRES',
        title: "Accord stratégique avec l'Union Européenne pour le développement durable",
        excerpt: "Signature d'une convention de financement visant à moderniser les infrastructures portuaires et technologiques du pays.",
        image: 'https://www.africaintelligence.fr/utils/imageresize?x=800&web=1&file64=QUlcUGhvdG9zXEFJLTA3LTA0LTI0LUlPRy5qcGc=',
        readMoreLink: '#'
    }
];

const NewsSection: React.FC = () => {
    return (
        <section className="py-20 bg-white font-sans border-t border-gray-100">
            <div className="container mx-auto px-4">

                {/* Header */}
                <div className="mb-12">
                    <div className="flex items-center gap-3 mb-4">
                        <Scale className="text-blue-800" size={32} />
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-blue-900 border-b-4 border-blue-500 pb-2 inline-block">
                            Actualités & Annonces Officielles
                        </h2>
                    </div>
                    <p className="text-gray-500 text-lg max-w-2xl">
                        Restez informé des dernières initiatives, décrets et réglementations de la République.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {newsData.map((item) => (
                        <div key={item.id} className="group flex flex-col bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                            {/* Image Container */}
                            <div className="relative h-56 overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                                <div className="absolute bottom-3 right-3 flex items-center gap-1 text-[10px] text-white/90 font-bold uppercase tracking-widest opacity-80 decoration-slice">
                                    <Building2 size={10} />
                                    <span>Gouvernement de Djibouti</span>
                                </div>
                                <div className={`absolute top-4 left-4 px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-md ${item.tagBg} ${item.tagColor}`}>
                                    {item.tag}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex flex-col flex-grow p-6">
                                {/* Meta */}
                                <div className="flex items-center gap-3 text-xs text-gray-400 font-medium mb-4">
                                    <div className="flex items-center gap-1">
                                        <Calendar size={12} />
                                        <span>{item.date}</span>
                                    </div>
                                    <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                                    <span className="uppercase">{item.author}</span>
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-serif font-bold text-gray-900 mb-3 group-hover:text-blue-800 transition-colors line-clamp-2">
                                    {item.title}
                                </h3>

                                {/* Excerpt */}
                                <p className="text-sm text-gray-500 mb-6 line-clamp-3 leading-relaxed flex-grow">
                                    {item.excerpt}
                                </p>

                                {/* Link */}
                                <a href={item.readMoreLink} className="inline-flex items-center gap-2 text-sm font-bold text-blue-700 hover:text-blue-900 transition-colors mt-auto">
                                    {item.id === 1 ? 'Consulter le décret' : item.id === 2 ? 'Lire le dossier' : 'Voir le communiqué'}
                                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer Action */}
                <div className="mt-16 text-center">
                    <a href="#" className="inline-flex items-center gap-3 px-8 py-3 bg-white text-blue-800 border-2 border-blue-100 hover:border-blue-300 rounded-lg font-bold text-sm uppercase tracking-wide transition-all hover:bg-blue-50">
                        <Newspaper size={18} />
                        Voir toutes les actualités
                        <ArrowRight size={18} />
                    </a>
                </div>

            </div>
        </section>
    );
};

export default NewsSection;
