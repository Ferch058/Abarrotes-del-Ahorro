import { Store, Users, Award, Heart } from 'lucide-react';

export function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Acerca de Nosotros</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Conoce la historia de Abarrotes El Ahorro, tu tienda de confianza desde 2020
        </p>
      </div>

      {/* Mission & Vision Section */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-green-50 rounded-lg p-8">
          <div className="text-center">
            <Store className="w-16 h-16 text-green-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">Nuestra Misión</h2>
            <p className="text-gray-700 leading-relaxed text-left">
              En Abarrotes El Ahorro nos dedicamos a proporcionar productos de la más alta calidad
              a precios accesibles para todas las familias. Creemos que cada hogar merece acceso a
              alimentos frescos, productos de limpieza confiables y artículos esenciales sin
              comprometer su presupuesto. Nuestro compromiso es ofrecer excelencia en servicio,
              variedad de productos y comodidad en cada compra.
            </p>
          </div>
        </div>

        <div className="bg-blue-50 rounded-lg p-8">
          <div className="text-center">
            <Award className="w-16 h-16 text-blue-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">Nuestra Visión</h2>
            <p className="text-gray-700 leading-relaxed text-left">
              Ser la tienda de abarrotes en línea líder en México, reconocida por nuestra
              excelencia en servicio al cliente, calidad de productos y compromiso con la
              comunidad. Aspiramos a transformar la experiencia de compra de abarrotes,
              haciéndola más accesible, conveniente y satisfactoria para cada familia mexicana,
              mientras contribuimos al desarrollo sostenible de nuestras comunidades.
            </p>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Users className="text-blue-600" size={32} />
          </div>
          <h3 className="font-semibold text-xl mb-3">Enfoque en el Cliente</h3>
          <p className="text-gray-600">
            Tu satisfacción es nuestra prioridad. Trabajamos cada día para brindarte el mejor
            servicio y productos de calidad.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Award className="text-green-600" size={32} />
          </div>
          <h3 className="font-semibold text-xl mb-3">Calidad Garantizada</h3>
          <p className="text-gray-600">
            Seleccionamos cuidadosamente cada producto para asegurar que cumpla con nuestros
            estándares de calidad.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Heart className="text-red-600" size={32} />
          </div>
          <h3 className="font-semibold text-xl mb-3">Compromiso Social</h3>
          <p className="text-gray-600">
            Nos preocupamos por nuestra comunidad y el medio ambiente, trabajando con
            proveedores responsables.
          </p>
        </div>
      </div>

      {/* Story Section */}
      <div className="bg-white rounded-lg shadow-md p-8 mb-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Nuestra Historia</h2>
        <div className="max-w-3xl mx-auto space-y-4 text-gray-700">
          <p>
            Abarrotes El Ahorro nació en 2020 con un sueño simple: crear una tienda donde las
            familias pudieran encontrar todo lo que necesitan para su hogar a precios justos y
            accesibles.
          </p>
          <p>
            Lo que comenzó como una pequeña tienda de barrio ha crecido hasta convertirse en
            una tienda en línea que sirve a miles de familias en todo México. Nuestro éxito se
            debe a la confianza que nuestros clientes han depositado en nosotros.
          </p>
          <p>
            Hoy en día, continuamos expandiendo nuestro catálogo de productos mientras
            mantenemos nuestros valores fundamentales: calidad, precio justo y servicio
            excepcional.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-bold mb-8 text-center">Nuestros Logros</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-4xl font-bold mb-2">5000+</div>
            <div className="text-green-100">Clientes Satisfechos</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">500+</div>
            <div className="text-green-100">Productos</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">24/7</div>
            <div className="text-green-100">Soporte</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">4.8★</div>
            <div className="text-green-100">Calificación</div>
          </div>
        </div>
      </div>

      {/* Contact Info & Map */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold mb-6">Visítanos</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Dirección:</h3>
              <p className="text-gray-700">
                Av. Insurgentes Sur 1234<br />
                Col. Del Valle<br />
                Ciudad de México, CDMX<br />
                CP 03100, México
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Teléfono:</h3>
              <p className="text-gray-700">+52 55 1234 5678</p>
              <p className="text-gray-700">+52 55 8765 4321</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Email:</h3>
              <p className="text-gray-700">info@abarrotesahorro.com.mx</p>
              <p className="text-gray-700">ventas@abarrotesahorro.com.mx</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Horario:</h3>
              <p className="text-gray-700">Lunes a Sábado: 8:00 AM - 9:00 PM</p>
              <p className="text-gray-700">Domingo: 9:00 AM - 6:00 PM</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="h-full min-h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.9397935774395!2d-99.17878492475858!3d19.40190994158576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff35f5bd1563%3A0x6c366f0e2de02ff7!2sAv.%20Insurgentes%20Sur%201234%2C%20Del%20Valle%2C%2003100%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses!2smx!4v1685000000000!5m2!1ses!2smx"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Abarrotes El Ahorro"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
