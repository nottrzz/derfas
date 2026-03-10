import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Gamepad2 } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black/90 border-b border-red-500/30 sticky top-0 z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text-gradient">
            DERF4S
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">Tentang</NavLink>
            <NavLink to="/gallery">Galeri</NavLink>
            <NavLink to="/members">Anggota</NavLink>
            <NavLink to="/contact">Kontak</NavLink>
            <NavLink to="/game" className="flex items-center gap-1 text-orange-500 hover:text-orange-400">
              <Gamepad2 size={18} /> Game
            </NavLink>
          </div>

          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden text-white hover:text-red-500"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <MobileNavLink to="/" onClick={() => setIsOpen(false)}>Home</MobileNavLink>
            <MobileNavLink to="/about" onClick={() => setIsOpen(false)}>Tentang</MobileNavLink>
            <MobileNavLink to="/gallery" onClick={() => setIsOpen(false)}>Galeri</MobileNavLink>
            <MobileNavLink to="/members" onClick={() => setIsOpen(false)}>Anggota</MobileNavLink>
            <MobileNavLink to="/contact" onClick={() => setIsOpen(false)}>Kontak</MobileNavLink>
            <MobileNavLink to="/game" onClick={() => setIsOpen(false)} className="text-orange-500">🎮 Game</MobileNavLink>
          </div>
        )}
      </div>
    </nav>
  );
}

function NavLink({ to, children, className = "" }: { to: string; children: React.ReactNode; className?: string }) {
  return (
    <Link 
      to={to} 
      className={`text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors relative group ${className}`}
    >
      {children}
      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-red-500 to-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
    </Link>
  );
}

function MobileNavLink({ to, onClick, children, className = "" }: { to: string; onClick: () => void; children: React.ReactNode; className?: string }) {
  return (
    <Link 
      to={to} 
      onClick={onClick}
      className={`block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-red-500/10 transition ${className}`}
    >
      {children}
    </Link>
  );
}