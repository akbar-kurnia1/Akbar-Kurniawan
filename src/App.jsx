const App = () => {
  const nama = "Akbar Kurniawan";
  const jurusan = "Mahasiswa Fisika, Universitas Sriwijaya";
  const organisasi = "Anggota Front-End GDGoC";

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center p-4">
      <div className="bg-white p-8 shadow-lg text-center max-w-sm w-full border-t-4 border-blue-600">
        <div className="bg-blue-100 w-24 h-24 rounded mx-auto mb-4 flex items-center justify-center">
          <span className="text-4xl">😎</span>
        </div>
        <h1 className="text-2xl font-bold text-gray-800">{nama}</h1>
        <p className="text-blue-600 font-semibold mt-2">{jurusan}</p>
        <p className="text-gray-500 mt-1">{organisasi}</p>

        <a 
          href="https://github.com/akbar-kurnia1" 
          target="_blank" 
          
          className="mt-6 block w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors"
        >
          GitHub
        </a>

      </div>

    </div>
  );
}

export default App;