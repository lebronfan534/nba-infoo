import { TeamCards } from "./components";

function App() {
  return (
    <div className="min-h-screen bg-gray-950">
      <header className="bg-gradient-to-r from-blue-800 to-indigo-900 py-6 shadow-xl">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-white">NBA Teams Info</h1>
          <p className="text-blue-200 mt-2">Explore all 30 NBA teams by division</p>
        </div>
      </header>
      
      <main className="container mx-auto py-8">
        <TeamCards />
      </main>
      
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} NBA Info App | 
            <a href="https://github.com" className="text-blue-400 hover:text-blue-300 ml-1" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;