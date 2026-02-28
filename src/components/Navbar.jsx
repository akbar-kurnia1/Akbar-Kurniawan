const Navbar = () => {
    const menuItems = ["Home", "About", "Skills", "Projects", "Contact"];
  
    return (
      <nav className="fixed top-0 w-full bg-slate-50/90 backdrop-blur-md z-50 border-b border-slate-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <ul className="hidden md:flex gap-8 text-sm font-semibold text-slate-600">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a href={`#${item.toLowerCase()}`} className="hover:text-blue-600 transition-colors duration-300 relative group">
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    );
  };
  
  export default Navbar;