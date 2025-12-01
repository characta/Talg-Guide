import React, { useState } from 'react';
import { Leaf, Info, BarChart3, Briefcase, MessageSquare, Menu, X, ArrowRight, HeartPulse, Sparkles, ChefHat } from 'lucide-react';
import ComparisonChart from './components/ComparisonChart';
import BusinessAdvisor from './components/BusinessAdvisor';
import ChatInterface from './components/ChatInterface';
import { AppSection } from './types';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<AppSection>(AppSection.HOME);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const NavItem = ({ section, label, icon: Icon }: { section: AppSection; label: string; icon: any }) => (
    <button
      onClick={() => {
        setActiveSection(section);
        setMobileMenuOpen(false);
      }}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${
        activeSection === section
          ? 'bg-tallow-600 text-white shadow-md'
          : 'text-tallow-800 hover:bg-tallow-100'
      }`}
    >
      <Icon size={18} />
      <span className="font-medium">{label}</span>
    </button>
  );

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-tallow-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div 
              className="flex items-center gap-2 cursor-pointer" 
              onClick={() => setActiveSection(AppSection.HOME)}
            >
              <div className="bg-tallow-600 p-2 rounded-lg text-white">
                <Leaf size={24} />
              </div>
              <span className="text-xl font-serif font-bold text-tallow-900 tracking-tight">Talg Guide</span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-2">
              <NavItem section={AppSection.BENEFITS} label="Wissen & Fakten" icon={Info} />
              <NavItem section={AppSection.COMPARISON} label="Vergleich" icon={BarChart3} />
              <NavItem section={AppSection.BUSINESS} label="Business Idee" icon={Briefcase} />
              <NavItem section={AppSection.CHAT} label="Frag AI" icon={MessageSquare} />
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-tallow-800 p-2"
              >
                {mobileMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-tallow-100 px-4 py-4 space-y-2 shadow-lg">
            <NavItem section={AppSection.BENEFITS} label="Wissen & Fakten" icon={Info} />
            <NavItem section={AppSection.COMPARISON} label="Vergleich" icon={BarChart3} />
            <NavItem section={AppSection.BUSINESS} label="Business Idee" icon={Briefcase} />
            <NavItem section={AppSection.CHAT} label="Frag AI" icon={MessageSquare} />
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        
        {activeSection === AppSection.HOME && (
          <div className="space-y-16 animate-fade-in">
            {/* Hero */}
            <div className="text-center max-w-4xl mx-auto space-y-6 pt-8 pb-12">
              <span className="inline-block px-4 py-1 bg-tallow-200 text-tallow-800 rounded-full text-sm font-semibold tracking-wide uppercase">
                Traditionell. Gesund. Ehrlich.
              </span>
              <h1 className="text-5xl md:text-7xl font-serif font-bold text-tallow-900 leading-tight">
                Rindertalg <br/><span className="text-tallow-600 italic">Zurück zum Ursprung</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Warum unsere Großeltern recht hatten und warum modernes Pflanzenöl oft das eigentliche Problem ist.
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <button 
                  onClick={() => setActiveSection(AppSection.BENEFITS)}
                  className="bg-tallow-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-tallow-700 transition shadow-lg hover:shadow-xl flex items-center gap-2"
                >
                  Warum Rindertalg? <ArrowRight size={20} />
                </button>
                <button 
                   onClick={() => setActiveSection(AppSection.BUSINESS)}
                   className="bg-white text-tallow-800 border-2 border-tallow-200 px-8 py-4 rounded-xl font-bold text-lg hover:border-tallow-400 hover:bg-tallow-50 transition flex items-center gap-2"
                >
                  Selber herstellen & verkaufen?
                </button>
              </div>
            </div>

            {/* Teaser Grid */}
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-tallow-100 hover:shadow-md transition">
                <div className="w-12 h-12 bg-green-100 text-green-700 rounded-lg flex items-center justify-center mb-6">
                  <Leaf />
                </div>
                <h3 className="text-xl font-bold mb-3">Keine Chemie</h3>
                <p className="text-gray-600">Rindertalg wird einfach geschmolzen (ausgelassen). Pflanzenöle wie Rapsöl benötigen oft Hexan-Lösungsmittel und Desodorierung.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-tallow-100 hover:shadow-md transition">
                <div className="w-12 h-12 bg-amber-100 text-amber-700 rounded-lg flex items-center justify-center mb-6">
                  <HeartPulse />
                </div>
                <h3 className="text-xl font-bold mb-3">Gesundes Fett?</h3>
                <p className="text-gray-600">Ja! Es enthält natürliche, stabile gesättigte Fette, die unser Körper für Zellwände und Hormonproduktion braucht.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-tallow-100 hover:shadow-md transition">
                <div className="w-12 h-12 bg-blue-100 text-blue-700 rounded-lg flex items-center justify-center mb-6">
                  <Sparkles />
                </div>
                <h3 className="text-xl font-bold mb-3">Hautpflege</h3>
                <p className="text-gray-600">Die Fettsäurestruktur ist der menschlichen Haut extrem ähnlich. Es zieht tief ein, statt nur aufzuliegen.</p>
              </div>
            </div>
          </div>
        )}

        {activeSection === AppSection.BENEFITS && (
          <div className="space-y-12 animate-fade-in max-w-4xl mx-auto">
            
            {/* 1. Warum unbekannt? */}
            <div className="space-y-4">
              <h2 className="text-3xl font-serif font-bold text-tallow-900">Warum ist es so unbekannt?</h2>
              <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-tallow-400">
                <p className="text-gray-700 leading-relaxed">
                  <strong>Die Kurzfassung:</strong> Marketing und fehlerhafte Wissenschaft. <br/><br/>
                  In den 1950ern wurde die These aufgestellt, dass gesättigte Fette Herzkrankheiten verursachen (Ancel Keys). Gleichzeitig hatte die Industrie riesige Mengen an billigen Pflanzenölen (Baumwollsaat, Soja, später Raps) zur Verfügung. 
                  Rindertalg, das Fett, das die Menschheit seit Jahrtausenden nutzte, wurde als "gefährlich" gebrandmarkt. Heute zeigen moderne Daten: <strong>Natürliche</strong> gesättigte Fette sind nicht der Feind. Hochverarbeitete Öle und Zucker sind das Problem.
                </p>
              </div>
            </div>

            {/* 2. Ist es besser als Öl? */}
            <div className="space-y-4">
               <h3 className="text-2xl font-bold text-tallow-800">Ist es wirklich besser als Öl?</h3>
               <p className="text-gray-600">Es kommt darauf an, wofür. Aber für das Erhitzen (Braten/Kochen) ist die Antwort wissenschaftlich gesehen: <strong>Ja.</strong></p>
               
               <div className="grid md:grid-cols-2 gap-6 mt-4">
                 <div className="bg-green-50 p-5 rounded-xl border border-green-100">
                   <h4 className="font-bold text-green-800 mb-2">Vorteile Talg (Gesättigt & Einfach Ungesättigt)</h4>
                   <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
                     <li>Extrem hitzestabil (hoher Rauchpunkt).</li>
                     <li>Oxidiert kaum (wenig freie Radikale beim Braten).</li>
                     <li>Reich an Vitamin A, D, E, K (fettlöslich).</li>
                     <li>Enthält CLA (gut für den Stoffwechsel).</li>
                   </ul>
                 </div>
                 <div className="bg-red-50 p-5 rounded-xl border border-red-100">
                   <h4 className="font-bold text-red-800 mb-2">Probleme Pflanzenöle (Mehrfach Ungesättigt)</h4>
                   <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
                     <li>Instabil bei Hitze (oxidieren sofort).</li>
                     <li>Hoher Omega-6 Gehalt (fördert Entzündungen im Körper).</li>
                     <li>Oft hochverarbeitet (Bleichmittel, Desodorierung).</li>
                     <li>Bildung toxischer Aldehyde beim Erhitzen.</li>
                   </ul>
                 </div>
               </div>
            </div>

            {/* 3. Konkrete Anwendungen */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-tallow-800">Was kann man damit machen?</h3>
              <div className="grid md:grid-cols-2 gap-6">
                
                {/* Kochen */}
                <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-tallow-600">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-tallow-100 p-2 rounded-lg"><ChefHat className="text-tallow-700"/></div>
                    <h4 className="text-xl font-bold">In der Küche</h4>
                  </div>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex gap-2">
                      <span className="font-bold text-tallow-600">Pommes Frites:</span> 
                      Das Originalrezept von McDonald's nutzte Talg. Sie werden knuspriger als je zuvor.
                    </li>
                    <li className="flex gap-2">
                      <span className="font-bold text-tallow-600">Steaks anbraten:</span> 
                      Perfekte Kruste dank extremer Hitzebeständigkeit ohne verbrannten Ölgeschmack.
                    </li>
                    <li className="flex gap-2">
                      <span className="font-bold text-tallow-600">Saucenbasis:</span> 
                      Verleiht Saucen und Suppen eine tiefe, herzhafte Note ("Umami").
                    </li>
                  </ul>
                </div>

                {/* Hautpflege */}
                <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-blue-400">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-blue-50 p-2 rounded-lg"><Sparkles className="text-blue-600"/></div>
                    <h4 className="text-xl font-bold">Hautpflege (Skincare)</h4>
                  </div>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex gap-2">
                      <span className="font-bold text-blue-600">Tallow Balm:</span> 
                      Aufgeschlagener Talg als Feuchtigkeitscreme. Hilft oft bei Neurodermitis, da er die Hautbarriere stärkt.
                    </li>
                    <li className="flex gap-2">
                      <span className="font-bold text-blue-600">Lippenbalsam:</span> 
                      Natürlicher Schutz ohne Erdöl-Derivate (Vaseline).
                    </li>
                    <li className="flex gap-2">
                      <span className="font-bold text-blue-600">Seifen:</span> 
                      Macht Seifen hart und langlebig mit cremigem Schaum.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeSection === AppSection.COMPARISON && (
          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
            <h2 className="text-3xl font-serif font-bold text-tallow-900 text-center">Fett gegen Öl: Der direkte Vergleich</h2>
            <ComparisonChart />
            <div className="bg-white p-8 rounded-xl shadow border border-tallow-100">
                <h3 className="font-bold text-lg mb-4">Wissenschaftlicher Hintergrund (Vereinfacht)</h3>
                <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-700">
                  <div>
                    <strong className="block text-tallow-700 text-base mb-2">Warum Rauchpunkt wichtig ist:</strong> 
                    <p>Wenn ein Öl raucht, zersetzt es sich. Dabei entstehen giftige Stoffe (Aldehyde) und freie Radikale, die Zellen schädigen können. Rindertalg hält extrem hohen Temperaturen stand, bevor dies passiert.</p>
                  </div>
                  <div>
                    <strong className="block text-tallow-700 text-base mb-2">Das Omega-6 Problem:</strong> 
                    <p>Sonnenblumen- und Distelöl bestehen fast nur aus Omega-6 Fettsäuren. Im Übermaß (was heute normal ist) wirken diese entzündungsfördernd im Körper. Talg ist neutraler und balancierter.</p>
                  </div>
                </div>
            </div>
          </div>
        )}

        {activeSection === AppSection.BUSINESS && (
          <div className="animate-fade-in">
            <BusinessAdvisor />
          </div>
        )}

        {activeSection === AppSection.CHAT && (
          <div className="animate-fade-in space-y-6">
             <div className="text-center">
                <h2 className="text-3xl font-serif font-bold text-tallow-900">Frag den Experten</h2>
                <p className="text-gray-600 mt-2">Du hast noch spezifische Fragen? Unsere AI erklärt es dir.</p>
             </div>
             <ChatInterface />
          </div>
        )}

      </main>

      {/* Footer */}
      <footer className="bg-tallow-900 text-tallow-100 py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="font-serif font-bold text-xl mb-2">Talg Guide</p>
          <p className="text-sm opacity-70">Die Wiederentdeckung traditioneller Ernährung.</p>
          <div className="mt-8 text-xs opacity-50">
            © {new Date().getFullYear()} Talg Guide. Disclaimer: Diese App dient nur zu Informationszwecken und ersetzt keine ärztliche Beratung.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;