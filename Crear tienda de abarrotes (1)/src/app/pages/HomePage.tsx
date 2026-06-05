import { ArrowRight, Truck, Shield, CreditCard, Star, Quote } from 'lucide-react';
import { products } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { Product } from '../contexts/CartContext';

interface HomePageProps {
  onNavigate: (page: string) => void;
  onViewProduct: (product: Product) => void;
}

export function HomePage({ onNavigate, onViewProduct }: HomePageProps) {
  const featuredProducts = products.slice(0, 6);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Bienvenido a Abarrotes El Ahorro
          </h1>
          <p className="text-xl mb-8 text-green-100">
            Los mejores productos para tu hogar al mejor precio
          </p>
          <button
            onClick={() => onNavigate('products')}
            className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors inline-flex items-center gap-2"
          >
            Ver todos los productos
            <ArrowRight size={20} />
          </button>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="text-green-600" size={32} />
              </div>
              <h3 className="font-semibold text-lg mb-2">Envío Gratis</h3>
              <p className="text-gray-600">
                En compras mayores a $500 pesos
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-blue-600" size={32} />
              </div>
              <h3 className="font-semibold text-lg mb-2">Compra Segura</h3>
              <p className="text-gray-600">
                Protección garantizada en todas tus compras
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="text-purple-600" size={32} />
              </div>
              <h3 className="font-semibold text-lg mb-2">Pago Fácil</h3>
              <p className="text-gray-600">
                Múltiples métodos de pago disponibles
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Productos Destacados</h2>
          <button
            onClick={() => onNavigate('products')}
            className="text-green-600 hover:text-green-700 flex items-center gap-1"
          >
            Ver todos
            <ArrowRight size={20} />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onViewDetails={onViewProduct}
            />
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Lo que Dicen Nuestros Clientes</h2>
            <p className="text-gray-600">
              Testimonios reales de clientes satisfechos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="text-yellow-400 fill-yellow-400" size={20} />
                ))}
              </div>
              <Quote className="text-green-600 mb-3" size={32} />
              <p className="text-gray-700 mb-4">
                "Excelente servicio y productos de calidad. Mis pedidos siempre llegan a tiempo
                y en perfectas condiciones. ¡Totalmente recomendado!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="font-bold text-green-600">MC</span>
                </div>
                <div>
                  <p className="font-semibold">María Contreras</p>
                  <p className="text-sm text-gray-600">Cliente desde 2024</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="text-yellow-400 fill-yellow-400" size={20} />
                ))}
              </div>
              <Quote className="text-green-600 mb-3" size={32} />
              <p className="text-gray-700 mb-4">
                "Los precios son muy competitivos y la variedad de productos es increíble.
                El sistema de envío es muy eficiente. ¡Mi familia está encantada!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="font-bold text-blue-600">JR</span>
                </div>
                <div>
                  <p className="font-semibold">Jorge Ramírez</p>
                  <p className="text-sm text-gray-600">Cliente desde 2023</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className={star <= 4 ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} size={20} />
                ))}
              </div>
              <Quote className="text-green-600 mb-3" size={32} />
              <p className="text-gray-700 mb-4">
                "Comprar desde casa es muy conveniente. La atención al cliente es excelente
                y siempre resuelven cualquier duda rápidamente."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="font-bold text-purple-600">LH</span>
                </div>
                <div>
                  <p className="font-semibold">Laura Hernández</p>
                  <p className="text-sm text-gray-600">Cliente desde 2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shipping Instructions */}
      <section className="py-12 container mx-auto px-4">
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-center">Instrucciones de Envío</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Truck size={24} />
                Envío Estándar (5-7 días)
              </h3>
              <ul className="space-y-2 text-blue-100">
                <li>• Costo: $50 MXN</li>
                <li>• Disponible para toda la República Mexicana</li>
                <li>• Seguimiento en línea incluido</li>
                <li>• Entrega de lunes a sábado</li>
                <li>• Horario: 9:00 AM - 6:00 PM</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Truck size={24} />
                Envío Express (2-3 días)
              </h3>
              <ul className="space-y-2 text-blue-100">
                <li>• Costo: $150 MXN</li>
                <li>• Servicio prioritario</li>
                <li>• Seguimiento en tiempo real</li>
                <li>• Entrega todos los días</li>
                <li>• Horario extendido: 8:00 AM - 8:00 PM</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 text-center bg-white bg-opacity-20 rounded-lg p-4">
            <p className="font-semibold">
              🎁 ¡ENVÍO GRATIS en compras mayores a $500 MXN!
            </p>
          </div>
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            ¡Ofertas Especiales Esta Semana!
          </h2>
          <p className="text-xl mb-6">
            Hasta 30% de descuento en productos seleccionados
          </p>
          <button
            onClick={() => onNavigate('products')}
            className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors"
          >
            Aprovecha las ofertas
          </button>
        </div>
      </section>
    </div>
  );
}
