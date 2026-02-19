
import './App.css'
import { useState } from 'react'
import Navbar from './components/Navbar'
import HeroSlider from './components/HeroSlider'
import PortalsSection from './components/PortalsSection'
import DigitalEcosystemSection from './components/DigitalEcosystemSection'
import NewsSection from './components/NewsSection'
import ExcellenceSection from './components/ExcellenceSection'
import PartnersSection from './components/PartnersSection'
import Footer from './components/Footer'
import ContactPage from './components/ContactPage'

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigation = (sectionId: string) => {
    if (sectionId === 'contact') {
      setCurrentPage('contact');
      window.scrollTo(0, 0);
    } else {
      setCurrentPage('home');
      // Use setTimeout to allow rendering if switching from contact page
      setTimeout(() => {
        if (sectionId === 'home') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }, 100);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <Navbar onNavigate={handleNavigation} />

      <main className="flex-grow">
        {currentPage === 'home' ? (
          <>
            <div id="home"><HeroSlider /></div>
            <div id="portals"><PortalsSection /></div>
            <DigitalEcosystemSection />
            <div id="news"><NewsSection /></div>
            <div id="resources"><ExcellenceSection /></div>
            <PartnersSection />

            <div className="container mx-auto px-4 py-16 hidden">
              <div className="text-center text-gray-500 mt-10">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Bienvenue sur le portail officiel</h2>
                <p className="text-lg">Découvrez nos services et actualités.</p>
              </div>
            </div>
          </>
        ) : (
          <ContactPage onNavigateHome={() => handleNavigation('home')} />
        )}
      </main>

      <Footer />
    </div>
  )
}

export default App
