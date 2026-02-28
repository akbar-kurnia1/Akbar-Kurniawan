import RevealOnScroll from "./RevealOnScroll.jsx";
import FotoProfil from "../assets/profil.jpeg";

const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 px-6 bg-slate-50 relative overflow-hidden">
      <div className="max-w-6xl mx-auto w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12 z-10">
        
        <div className="flex-1 text-center md:text-left">
          <RevealOnScroll>
            <p className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-3">Front-End | Software Engineer</p>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-6 leading-tight">
              Hi, I'm <br /> <span className="text-blue-600">Akbar Kurniawan</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed mx-auto md:mx-0">
            I'm a Physics student at Sriwijaya University, currently focusing my studies on the Electronics Instrumentation, Computational and Nuclear Physics (ELINKOMNUK) research group. This path sparked my curiosity in web programming, a field I'm now passionately exploring.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="#projects" className="bg-slate-900 hover:bg-blue-600 text-white px-8 py-3 rounded-xl font-bold transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex items-center justify-center gap-2">
                View My Work
              </a>
            </div>
          </RevealOnScroll>
        </div>

        <div className="flex-1 flex justify-center md:justify-end">
          <RevealOnScroll>
            <div className="relative group">
              <div className="absolute inset-0 bg-blue-200 rounded-[2.5rem] transform rotate-3 transition-transform group-hover:rotate-6"></div>
              <div className="relative w-64 h-80 md:w-80 md:h-96 bg-slate-200 rounded-[2.5rem] overflow-hidden border-4 border-white z-10 flex items-center justify-center shadow-xl">
                <img 
                src={FotoProfil} 
                alt="Akbar Kurniawan" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-50" 
                />
              </div>
            </div>
          </RevealOnScroll>
        </div>

      </div>
    </section>
  );
};

export default Home;