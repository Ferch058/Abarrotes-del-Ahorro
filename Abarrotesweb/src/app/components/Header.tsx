import { ShoppingCart, User, Menu, X } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';
import { useState } from 'react';

interface HeaderProps {
  onNavigate: (page: string) => void;
  currentPage: string;
  onCartOpen: () => void;
}

export function Header({ onNavigate, currentPage, onCartOpen }: HeaderProps) {
  const { getItemCount } = useCart();
  const { user, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const itemCount = getItemCount();

  const menuItems = [
    { id: 'home', label: 'Inicio' },
    { id: 'products', label: 'Productos' },
    { id: 'about', label: 'Acerca de' },
    { id: 'faq', label: 'FAQ' },
    { id: 'blog', label: 'Blog' },
    { id: 'customer-service', label: 'Ayuda' },
    { id: 'contact', label: 'Contacto' },
  ];

  return (
    <header className="bg-green-600 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => onNavigate('home')}
          >
            <div className="relative w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center shadow-lg transform hover:scale-105 transition-transform">
              <span className="text-white font-bold text-2xl">🛒</span>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">$</span>
              </div>
            </div>
            <div>
              <h1 className="font-bold text-xl">Abarrotes El Ahorro</h1>
              <p className="text-xs text-green-100">www.abarrotesahorro.com.mx</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`hover:text-green-200 transition-colors ${
                  currentPage === item.id ? 'border-b-2 border-white' : ''
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            {/* Cart Button */}
            <button
              onClick={onCartOpen}
              className="relative p-2 hover:bg-green-700 rounded-lg transition-colors"
            >
              <ShoppingCart size={24} />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>

            {/* User Button */}
            {user ? (
              <div className="hidden md:flex items-center gap-2">
                <User size={20} />
                <div className="text-sm">
                  <p className="font-medium">{user.name}</p>
                  <button
                    onClick={logout}
                    className="text-xs text-green-200 hover:text-white"
                  >
                    Cerrar sesión
                  </button>
                </div>
              </div>
            ) : (
              <button
                onClick={() => onNavigate('login')}
                className="hidden md:flex items-center gap-2 bg-white text-green-600 px-4 py-2 rounded-lg hover:bg-green-50 transition-colors"
              >
                <User size={20} />
                <span>Ingresar</span>
              </button>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-green-700 rounded-lg"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-green-700">
            <nav className="flex flex-col gap-2">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-left px-4 py-2 hover:bg-green-700 rounded ${
                    currentPage === item.id ? 'bg-green-700' : ''
                  }`}
                >
                  {item.label}
                </button>
              ))}
              {user ? (
                <button
                  onClick={() => {
                    logout();
                    setMobileMenuOpen(false);
                  }}
                  className="text-left px-4 py-2 hover:bg-green-700 rounded text-green-200"
                >
                  Cerrar sesión ({user.name})
                </button>
              ) : (
                <button
                  onClick={() => {
                    onNavigate('login');
                    setMobileMenuOpen(false);
                  }}
                  className="text-left px-4 py-2 bg-white text-green-600 rounded mx-4"
                >
                  Ingresar
                </button>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
