import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  onNavigate?: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps = {}) {
  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Acerca de */}
          <div>
            <h3 className="font-bold text-lg mb-4">Abarrotes El Ahorro</h3>
            <p className="text-gray-400 text-sm">
              Tu tienda de abarrotes de confianza desde 2020. Ofrecemos productos de calidad a los mejores precios.
            </p>
          </div>

          {/* Enlaces Rápidos */}
          <div>
            <h3 className="font-bold text-lg mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => onNavigate?.('home')} className="text-gray-400 hover:text-white">
                  Inicio
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate?.('products')} className="text-gray-400 hover:text-white">
                  Productos
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate?.('blog')} className="text-gray-400 hover:text-white">
                  Blog
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate?.('customer-service')} className="text-gray-400 hover:text-white">
                  Atención al Cliente
                </button>
              </li>
            </ul>
          </div>

          {/* Políticas */}
          <div>
            <h3 className="font-bold text-lg mb-4">Información Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => onNavigate?.('terms')}
                  className="text-gray-400 hover:text-white"
                >
                  Términos y Condiciones
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate?.('privacy')}
                  className="text-gray-400 hover:text-white"
                >
                  Política de Privacidad
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate?.('returns')}
                  className="text-gray-400 hover:text-white"
                >
                  Cancelación y Devolución
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate?.('faq')}
                  className="text-gray-400 hover:text-white"
                >
                  Preguntas Frecuentes
                </button>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contacto</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <span>+52 55 1234 5678</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <span>info@abarrotesahorro.com</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Ciudad de México, México</span>
              </li>
            </ul>
          </div>

          {/* Redes Sociales */}
          <div>
            <h3 className="font-bold text-lg mb-4">Síguenos</h3>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors"
              >
                <Twitter size={20} />
              </a>
            </div>
            <div className="mt-4">
              <p className="text-sm text-gray-400">Horario de atención:</p>
              <p className="text-sm text-white">Lun - Sáb: 8:00 AM - 9:00 PM</p>
              <p className="text-sm text-white">Dom: 9:00 AM - 6:00 PM</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm text-gray-400">
          <p>&copy; 2026 Abarrotes El Ahorro. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
