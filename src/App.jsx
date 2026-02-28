import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
const App = () => {
  return (
    <div className="bg-slate-50 min-h-screen font-sans selection:bg-blue-200 selection:text-blue-900">
      <Navbar />
      <Home />
      <Skills />
      <Projects />
      <Contact />

    </div>
  );
};

export default App;