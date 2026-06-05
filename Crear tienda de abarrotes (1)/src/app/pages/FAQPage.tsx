import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      category: 'Pedidos y Compras',
      question: '¿Cómo puedo realizar un pedido?',
      answer: 'Para realizar un pedido, navega por nuestro catálogo de productos, agrega los artículos que desees a tu carrito, y procede al checkout. Necesitarás crear una cuenta o iniciar sesión para completar tu compra.',
    },
    {
      category: 'Pedidos y Compras',
      question: '¿Cuál es el monto mínimo de compra?',
      answer: 'No tenemos monto mínimo de compra. Sin embargo, las compras mayores a $500 pesos califican para envío gratuito.',
    },
    {
      category: 'Pedidos y Compras',
      question: '¿Puedo modificar mi pedido después de haberlo realizado?',
      answer: 'Puedes modificar tu pedido dentro de las primeras 2 horas después de haberlo realizado. Contáctanos inmediatamente al 55 1234 5678 o por correo a info@abarrotesahorro.com.mx',
    },
    {
      category: 'Envíos y Entregas',
      question: '¿Cuánto tiempo tarda en llegar mi pedido?',
      answer: 'El envío estándar tarda de 5 a 7 días hábiles. Si seleccionas envío express, tu pedido llegará en 2 a 3 días hábiles.',
    },
    {
      category: 'Envíos y Entregas',
      question: '¿Realizan envíos a toda la República Mexicana?',
      answer: 'Sí, realizamos envíos a toda la República Mexicana. Los tiempos de entrega pueden variar según tu ubicación.',
    },
    {
      category: 'Envíos y Entregas',
      question: '¿Cómo puedo rastrear mi pedido?',
      answer: 'Una vez que tu pedido sea enviado, recibirás un correo electrónico con el número de guía de rastreo. Podrás dar seguimiento a tu envío en tiempo real.',
    },
    {
      category: 'Pagos',
      question: '¿Qué métodos de pago aceptan?',
      answer: 'Aceptamos tarjetas de crédito y débito (Visa, Mastercard, American Express), pagos en efectivo en OXXO, transferencias bancarias y PayPal.',
    },
    {
      category: 'Pagos',
      question: '¿Es seguro pagar con tarjeta en su sitio?',
      answer: 'Sí, contamos con certificado SSL y encriptación de datos. Todos los pagos son procesados de manera segura a través de pasarelas de pago certificadas.',
    },
    {
      category: 'Pagos',
      question: '¿Emiten factura?',
      answer: 'Sí, emitimos facturas electrónicas. Solo necesitas proporcionarnos tus datos fiscales al momento de realizar tu pedido o solicitarla dentro de las 72 horas posteriores a tu compra.',
    },
    {
      category: 'Devoluciones',
      question: '¿Cuál es su política de devoluciones?',
      answer: 'Aceptamos devoluciones dentro de los 7 días posteriores a la recepción del pedido. Los productos deben estar en su empaque original y sin abrir. Los productos perecederos no son elegibles para devolución.',
    },
    {
      category: 'Devoluciones',
      question: '¿Cómo solicito una devolución?',
      answer: 'Contacta a nuestro servicio al cliente al 55 1234 5678 o envía un correo a info@abarrotesahorro.com.mx indicando tu número de pedido y el motivo de la devolución.',
    },
    {
      category: 'Cuenta',
      question: '¿Necesito crear una cuenta para comprar?',
      answer: 'Sí, necesitas crear una cuenta para realizar compras. Esto te permite dar seguimiento a tus pedidos, guardar tus direcciones de envío y acceder a ofertas exclusivas.',
    },
    {
      category: 'Productos',
      question: '¿Los productos tienen garantía de calidad?',
      answer: 'Todos nuestros productos cuentan con garantía de calidad. Verificamos las fechas de caducidad y condiciones de almacenamiento para asegurar que recibas productos en óptimas condiciones.',
    },
    {
      category: 'Promociones',
      question: '¿Cómo me entero de las promociones y ofertas?',
      answer: 'Puedes suscribirte a nuestro boletín de noticias, seguirnos en redes sociales (Facebook, Instagram, Twitter) o visitar regularmente nuestra sección de ofertas en el sitio web.',
    },
  ];

  const categories = Array.from(new Set(faqs.map(faq => faq.category)));

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <HelpCircle className="text-blue-600" size={40} />
        </div>
        <h1 className="text-4xl font-bold mb-4">Preguntas Frecuentes</h1>
        <p className="text-xl text-gray-600">
          Encuentra respuestas a las preguntas más comunes
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        {categories.map((category, catIndex) => (
          <div key={catIndex} className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-green-600">{category}</h2>
            <div className="space-y-3">
              {faqs
                .filter(faq => faq.category === category)
                .map((faq, index) => {
                  const globalIndex = faqs.findIndex(f => f === faq);
                  const isOpen = openIndex === globalIndex;

                  return (
                    <div
                      key={index}
                      className="bg-white rounded-lg shadow-md overflow-hidden"
                    >
                      <button
                        onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                      >
                        <span className="font-semibold pr-4">{faq.question}</span>
                        {isOpen ? (
                          <ChevronUp className="text-green-600 flex-shrink-0" size={24} />
                        ) : (
                          <ChevronDown className="text-gray-400 flex-shrink-0" size={24} />
                        )}
                      </button>
                      {isOpen && (
                        <div className="px-6 pb-4 text-gray-700 leading-relaxed">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-green-50 rounded-lg p-8 max-w-4xl mx-auto text-center">
        <h3 className="text-2xl font-bold mb-4">¿No encontraste lo que buscabas?</h3>
        <p className="text-gray-700 mb-6">
          Nuestro equipo de atención al cliente está listo para ayudarte
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="tel:+525512345678"
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold"
          >
            Llamar: 55 1234 5678
          </a>
          <a
            href="mailto:info@abarrotesahorro.com.mx"
            className="bg-white text-green-600 border-2 border-green-600 px-6 py-3 rounded-lg hover:bg-green-50 transition-colors font-semibold"
          >
            Enviar Email
          </a>
        </div>
      </div>
    </div>
  );
}
