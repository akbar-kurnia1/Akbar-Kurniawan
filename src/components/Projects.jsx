import RevealOnScroll from "./RevealOnScroll";
import imgWBMGF from "../assets/apalah.png";
import imgAtom from "../assets/atom.png";
import imgDilatasi from "../assets/dilatasi.png";
import imgGameOfLife from "../assets/conways.png";
import imgElin from "../assets/elin.jpg";
import imgPemro from "../assets/pemro.jpeg";
import imgJaket from "../assets/jaket.png";
import imgKisi from "../assets/kisi.png";
import imgKisi2 from "../assets/kisi2.png";
import imgTodolist from "../assets/todolist.png";
import imgWishlist from "../assets/wishlist.png";

const Projects = () => {
    
    const projectList = [
      {
        title: "Simulasi Atom dan Struktur Kisi",
        description: "Proyek yang dikembangkan untuk memenuhi tugas mata kuliah Pendahuluan Fisika Zat Padat. Menyediakan visualisasi tiga dimensi (3D) mengenai struktur atom dan berbagai jenis kisi kristal yang dirancang dengan prinsip desain responsif untuk fungsionalitas dan estetika yang optimal di berbagai perangkat.",
        image: imgAtom,
        tags: ["Front-end", "Website", "Fisika Zat Padat"]
      },
      {
        title: "Dilatasi Waktu",
        description: "Visualisasi dari fenomena Dilatasi Waktu (Time Dilation) berdasarkan Teori Relativitas Khusus Einstein. Proyek ini awalnya adalah program C++ yang saya buat pada tahun 2024 sebagai Projek UAS Mata Kuliah Pemrograman, yang kini telah dimodernisasi dan di-porting ke web menggunakan HTML, CSS, dan JavaScript untuk memberikan pengalaman visual yang lebih intuitif.",
        image: imgDilatasi,
        tags: ["Front-end", "Website", "C++"]
      },
      {
        title: "Conway's Game of Life",
        description: "Implementasi berbasis web dari Conway’s Game of Life, sebuah cellular automaton terkenal yang diciptakan oleh matematikawan John Conway. Proyek ini menunjukkan bagaimana aturan-aturan sederhana dapat menghasilkan perilaku yang kompleks dan bersifat emergen, serta diimplementasikan menggunakan teknologi web untuk memungkinkan visualisasi interaktif secara langsung di browser.",
        image: imgGameOfLife,
        tags: ["Front-end", "Website", "Algorithm"]
      },
      {
        title: "Will you be my girlfriend?",
        description: "Website yang terinspirasi dari reels (video pendek) yang saya temukan di sosial media. udah, ntar ini saya hapus soalnya malu, awokawok.",
        image: imgWBMGF,
        tags: ["Front-end", "Website", "Hobbies"]
      },
      {
        title: "To-Do List",
        description: "Website berbasis software To-do list sederhana yang dikembangkan sebagai mini-project untuk menyelesaikan kursus RevoU Coding Camp: Intro to Software Engineering. Dikembangkan dengan HTML, CSS, dan Javascript, serta didukung penyimpanan data menggunakan memori browser pengguna sehingga data tidak akan hilang jika keluar dari website.",
        image: imgTodolist,
        tags: ["Front-end", "Website", "Course Project"]
      },
      {
        title: "Wishlist",
        description: "Aplikasi ini dibuat untuk memenuhi Studi Kasus II pada Front-End Development Assignment GDGOC UNSRI. Aplikasi ini sudah mendukung fitur CRUD (Create, Read, Update, Delete) dan penyimpanan data lokal.",
        image: imgWishlist,
        tags: ["Front-end", "Website", "Commissioned Project"]
      },
      {
        title: "Desain Jaket Asisten Laboratorium Jurusan Fisika UNSRI",
        description: "Desain jaket Korps Asisten Laboratorium Elektronika dan Laboratorium Komputasi Fisika, Jurusan Fisika FMIPA, Universitas Sriwijaya. Jaket didesain menggunakan software CorelDRAW 2020 dengan komposisi warna utama CMYK sesuai dengan standar percetakan dan konveksi.",
        image: imgJaket,
        tags: ["Design", "Hobbies", "Commissioned Project"]
      }
    ];
  
    return (
      <section id="projects" className="py-24 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Latest Work</h2>
              <p className="text-slate-500 max-w-2xl mx-auto">Below are some examples of my work, from academic projects to personal programming projects. Each one represents a step in my journey of learning and creating.</p>
            </div>
          </RevealOnScroll>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectList.map((project, index) => (
              <RevealOnScroll key={index}>

                <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-100 transition-all duration-300 hover:-translate-y-2 group flex flex-col h-full">
                  
                  <div className="h-52 bg-slate-200 overflow-hidden relative">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-300"></div>
                  </div>
  
                  {/* Bagian Bawah: Teks dan Tag */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-slate-800 mb-3">{project.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">
                      {project.description}
                    </p>
                    
                    {/* Looping untuk lencana/tag di bagian bawah kartu */}
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="bg-slate-100 text-slate-600 border border-slate-200 text-xs px-3 py-1 rounded-full font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
  
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>
    );
  };

export default Projects;