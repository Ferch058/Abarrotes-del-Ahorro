import { useState } from 'react';
import { Headphones, Send, CheckCircle2 } from 'lucide-react';
import { toast } from 'sonner';

export function CustomerServicePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    orderNumber: '',
    subject: '',
    category: '',
    message: '',
    subscribe: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simular guardado de datos
    console.log('Formulario enviado:', formData);

    toast.success('¡Solicitud enviada con éxito! Le responderemos en 24-48 horas.');

    setSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        orderNumber: '',
        subject: '',
        category: '',
        message: '',
        subscribe: false,
      });
      setSubmitted(false);
    }, 3000);
  };

  if (submitted) {
    return (
      <div className="min-h-[calc(100vh-200px)] flex items-center justify-center px-4 py-8 bg-gray-50">
        <div className="max-w-md w-full text-center">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="text-green-600" size={60} />
          </div>
          <h2 className="text-3xl font-bold mb-4">¡Solicitud Enviada!</h2>
          <p className="text-gray-600 mb-2">
            Gracias por contactarnos. Hemos recibido su mensaje.
          </p>
          <p className="text-gray-600 mb-6">
            Nuestro equipo le responderá en un plazo de 24-48 horas.
          </p>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="font-semibold mb-3">Información de su solicitud:</h3>
            <div className="text-left space-y-2 text-sm">
              <p><strong>Nombre:</strong> {formData.name}</p>
              <p><strong>Email:</strong> {formData.email}</p>
              <p><strong>Categoría:</strong> {formData.category}</p>
              <p><strong>Asunto:</strong> {formData.subject}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Headphones className="text-green-600" size={40} />
          </div>
          <h1 className="text-4xl font-bold mb-4">Atención al Cliente</h1>
          <p className="text-xl text-gray-600">
            Estamos aquí para ayudarte. Completa el formulario y te responderemos pronto.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-blue-50 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">24-48h</div>
            <p className="text-gray-700">Tiempo de respuesta</p>
          </div>
          <div className="bg-green-50 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">24/7</div>
            <p className="text-gray-700">Disponibilidad</p>
          </div>
          <div className="bg-purple-50 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">98%</div>
            <p className="text-gray-700">Satisfacción</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Nombre Completo *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Juan Pérez"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Correo Electrónico *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="tu@email.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Teléfono
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="55 1234 5678"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Número de Pedido (opcional)
                </label>
                <input
                  type="text"
                  value={formData.orderNumber}
                  onChange={(e) => setFormData({ ...formData, orderNumber: e.target.value })}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="#ORD-123456"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Categoría de Consulta *
              </label>
              <select
                required
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="">Seleccione una categoría</option>
                <option value="pedido">Seguimiento de Pedido</option>
                <option value="producto">Información de Producto</option>
                <option value="devolucion">Devolución/Cambio</option>
                <option value="pago">Problemas de Pago</option>
                <option value="tecnico">Soporte Técnico</option>
                <option value="sugerencia">Sugerencia</option>
                <option value="queja">Queja</option>
                <option value="otro">Otro</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Asunto *
              </label>
              <input
                type="text"
                required
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Breve descripción de su consulta"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Mensaje *
              </label>
              <textarea
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={6}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Describa su consulta con el mayor detalle posible..."
              />
              <p className="text-sm text-gray-500 mt-1">
                Mínimo 20 caracteres. Caracteres actuales: {formData.message.length}
              </p>
            </div>

            <div className="bg-blue-50 rounded-lg p-4">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.subscribe}
                  onChange={(e) => setFormData({ ...formData, subscribe: e.target.checked })}
                  className="mt-1 w-5 h-5 text-green-600 focus:ring-2 focus:ring-green-500 rounded"
                />
                <div>
                  <p className="font-medium">Suscribirme al boletín</p>
                  <p className="text-sm text-gray-600">
                    Recibe ofertas exclusivas, consejos y novedades directamente en tu correo.
                    Puedes cancelar en cualquier momento.
                  </p>
                </div>
              </label>
            </div>

            <div className="flex gap-4">
              <button
                type="submit"
                className="flex-1 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Enviar Solicitud
              </button>
            </div>

            <p className="text-sm text-gray-500 text-center">
              Al enviar este formulario, acepta nuestra{' '}
              <a href="#" className="text-green-600 hover:text-green-700 underline">
                Política de Privacidad
              </a>
            </p>
          </form>
        </div>

        <div className="mt-8 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4 text-center">Otras Formas de Contacto</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <h3 className="font-semibold mb-2">Teléfono</h3>
              <p>+52 55 1234 5678</p>
              <p className="text-sm text-green-100">Lun-Sáb: 8AM-9PM</p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold mb-2">Email</h3>
              <p>ayuda@abarrotesahorro.com.mx</p>
              <p className="text-sm text-green-100">Respuesta en 24-48h</p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold mb-2">WhatsApp</h3>
              <p>+52 55 8765 4321</p>
              <p className="text-sm text-green-100">Lun-Dom: 9AM-8PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
