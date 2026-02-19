import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
    {
        id: 1,
        image: '/slider/g2b.jpeg',
        title: 'Programme MSMEs : Transformation Numérique',
        description: 'Lancement officiel du programme MSMEs à Djibouti : une étape clé pour la transformation numérique et le développement des entreprises.',
        cta: 'En savoir plus'
    },
    {
        id: 2,
        image: '/slider/mobileid.jpg',
        title: 'Identité Numérique Nationale',
        description: 'Lancement du projet Mobile ID sous le haut patronage de SE Ismaïl Omar Guelleh. Une identité sécurisée pour tous les citoyens.',
        cta: 'Détails du projet'
    },
    {
        id: 3,
        image: '/slider/startupact.jpeg',
        title: 'Djibouti Smart Nation & Startup Act',
        description: 'Soutien à +30 startups, École 42 (IA & Cybersécurité) et Cloud National. Djibouti : une nation stable et tournée vers l\'avenir.',
        cta: 'Découvrir la vision'
    }
];

const stats = [
    { label: 'Entreprises', value: '2,847' },
    { label: 'Délai moyen', value: '48h' },
    { label: 'Portails', value: '3' },
    { label: 'Service', value: '24/7' },
];

const HeroSlider: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Auto-play logic
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 6000);
        return () => clearInterval(interval);
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <section className="relative w-full h-[600px] md:h-[700px] overflow-hidden bg-gray-900 font-sans group">

            {/* Slider Container - transform based animation */}
            <div
                className="flex w-full h-full transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
                {slides.map((slide) => (
                    <div
                        key={slide.id}
                        className="w-full h-full flex-shrink-0 relative"
                    >
                        {/* Image */}
                        <img
                            src={slide.image}
                            alt={slide.title}
                            className="w-full h-full object-cover"
                        />

                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent"></div>

                        {/* Content */}
                        <div className="absolute inset-0 flex items-center">
                            <div className="container mx-auto px-4 md:px-8">
                                <div className="max-w-3xl">
                                    {/* Content is static relative to the slide, so it moves with the slide */}
                                    <h2 className="text-sm md:text-base font-bold text-[#6AB2E7] uppercase tracking-widest mb-2 flex items-center gap-2">
                                        <span className="w-8 h-[2px] bg-[#12AD2B]"></span>
                                        Actualités Officielles
                                    </h2>
                                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg">
                                        {slide.title}
                                    </h1>
                                    <p className="text-gray-200 text-lg md:text-xl mb-8 leading-relaxed max-w-2xl border-l-4 border-[#D7141A] pl-4 drop-shadow-md">
                                        {slide.description}
                                    </p>
                                    <button className="bg-[#0F172A] hover:bg-[#6AB2E7] text-white px-8 py-3 rounded text-sm md:text-base font-semibold transition-all duration-300 shadow-lg hover:shadow-blue-400/20 flex items-center gap-2">
                                        {slide.cta}
                                        <ChevronRight size={18} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation Controls */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300 border border-white/20 opacity-0 group-hover:opacity-100 hover:scale-110"
            >
                <ChevronLeft size={24} />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300 border border-white/20 opacity-0 group-hover:opacity-100 hover:scale-110"
            >
                <ChevronRight size={24} />
            </button>

            {/* Pagination Dots */}
            <div className="absolute bottom-32 md:bottom-36 left-0 w-full z-20">
                <div className="container mx-auto px-4 flex justify-start gap-3">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`h-1.5 transition-all duration-300 rounded-full shadow-sm ${index === currentSlide ? 'w-12 bg-[#6AB2E7]' : 'w-4 bg-white/50 hover:bg-white'
                                }`}
                        />
                    ))}
                </div>
            </div>

            {/* Statistics Bar (Transparent / Glassmorphism) */}
            <div className="absolute bottom-3 left-0 w-full z-30">
                <div className="container mx-auto px-4">
                    {/* Glassmorphism Panel */}
                    <div className="bg-black/30 backdrop-blur-md rounded-lg border border-white/10 grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10 pb-6 pt-6 shadow-2xl">
                        {stats.map((stat, index) => (
                            <div key={index} className="px-4 text-center group cursor-default">
                                <div className="text-3xl md:text-4xl font-bold text-white mb-1 group-hover:text-[#6AB2E7] transition-colors duration-300 drop-shadow-lg transform group-hover:scale-110 transition-transform">{stat.value}</div>
                                <div className="text-xs md:text-sm font-medium text-gray-300 uppercase tracking-wider">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSlider;
