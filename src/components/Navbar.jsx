import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const menuItems = ["Home", "About", "Skills", "Projects", "Contact"];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 flex justify-center transition-all duration-500 px-4">
      <div 
        className={`flex justify-between items-center w-full transition-all duration-500 ${
          isScrolled 
            ? "max-w-4xl bg-white/80 backdrop-blur-md shadow-lg border border-slate-200 rounded-full py-3 px-8 mt-4" 
            : "max-w-6xl bg-transparent py-6 px-6"
        }`}
      >
        <h1 className="text-2xl font-extrabold text-slate-800 tracking-tighter cursor-pointer">
          <a href="#home">Akbar<span className="text-blue-600">.</span></a>
        </h1>
        <ul className="hidden md:flex gap-8 text-sm font-bold text-slate-600">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a 
                href={`#${item.toLowerCase()}`} 
                className="hover:text-blue-600 transition-colors duration-300 relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden md:block">
          <a href="#contact" className={`font-bold transition-all duration-300 ${
            isScrolled ? "text-blue-600 hover:text-blue-700" : "text-slate-800 hover:text-blue-600"
          }`}>
            Let's Talk
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;