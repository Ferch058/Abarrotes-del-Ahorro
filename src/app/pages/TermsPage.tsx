import { FileText, CheckCircle } from 'lucide-react';

export function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <FileText className="text-purple-600" size={40} />
          </div>
          <h1 className="text-4xl font-bold mb-4">Términos y Condiciones</h1>
          <p className="text-gray-600">Última actualización: 5 de Junio de 2026</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 space-y-8">
          <section>
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle className="text-green-600" size={28} />
              <h2 className="text-2xl font-bold">1. Aceptación de los Términos</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Al acceder y utilizar el sitio web www.abarrotesahorro.com.mx y realizar compras a
              través de nuestra plataforma, usted acepta estar sujeto a estos Términos y
              Condiciones, todas las leyes y regulaciones aplicables. Si no está de acuerdo con
              alguno de estos términos, no utilice nuestros servicios.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. Uso del Sitio Web</h2>
            <div className="space-y-3 text-gray-700">
              <p><strong>2.1</strong> Debe ser mayor de 18 años para realizar compras en nuestro sitio.</p>
              <p><strong>2.2</strong> Es responsable de mantener la confidencialidad de su cuenta y contraseña.</p>
              <p><strong>2.3</strong> No puede usar nuestro sitio para fines ilegales o no autorizados.</p>
              <p><strong>2.4</strong> Nos reservamos el derecho de rechazar el servicio a cualquier persona por cualquier motivo.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">3. Productos y Precios</h2>
            <div className="space-y-3 text-gray-700">
              <p><strong>3.1</strong> Nos esforzamos por mostrar con precisión los colores y detalles de nuestros productos, pero no garantizamos que la visualización sea exacta.</p>
              <p><strong>3.2</strong> Los precios están sujetos a cambios sin previo aviso.</p>
              <p><strong>3.3</strong> Nos reservamos el derecho de limitar las cantidades de productos vendidos.</p>
              <p><strong>3.4</strong> Todos los precios están en pesos mexicanos (MXN) e incluyen IVA.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. Pedidos y Pagos</h2>
            <div className="space-y-3 text-gray-700">
              <p><strong>4.1</strong> Un pedido constituye una oferta para comprar un producto.</p>
              <p><strong>4.2</strong> Nos reservamos el derecho de rechazar o cancelar cualquier pedido.</p>
              <p><strong>4.3</strong> El pago debe realizarse al momento de realizar el pedido.</p>
              <p><strong>4.4</strong> Aceptamos tarjetas de crédito/débito, OXXO, transferencias bancarias y PayPal.</p>
              <p><strong>4.5</strong> Todos los pagos se procesan de forma segura a través de pasarelas certificadas.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">5. Envíos y Entregas</h2>
            <div className="space-y-3 text-gray-700">
              <p><strong>5.1</strong> Los tiempos de entrega son estimados y pueden variar.</p>
              <p><strong>5.2</strong> Envío estándar: 5-7 días hábiles</p>
              <p><strong>5.3</strong> Envío express: 2-3 días hábiles</p>
              <p><strong>5.4</strong> Envío gratuito en compras mayores a $500 MXN</p>
              <p><strong>5.5</strong> El riesgo de pérdida pasa al comprador al momento de la entrega.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">6. Garantías</h2>
            <div className="space-y-3 text-gray-700">
              <p><strong>6.1</strong> Garantizamos la calidad de nuestros productos.</p>
              <p><strong>6.2</strong> Todos los productos perecederos tienen fecha de caducidad vigente al momento de la entrega.</p>
              <p><strong>6.3</strong> No nos hacemos responsables por el mal uso de los productos.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">7. Limitación de Responsabilidad</h2>
            <p className="text-gray-700 leading-relaxed">
              Abarrotes El Ahorro no será responsable de daños indirectos, incidentales, especiales
              o consecuentes que resulten del uso o la imposibilidad de usar nuestros productos o
              servicios, incluso si hemos sido advertidos de la posibilidad de tales daños.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">8. Propiedad Intelectual</h2>
            <p className="text-gray-700 leading-relaxed">
              Todo el contenido de este sitio web, incluyendo textos, gráficos, logos, imágenes y
              software, es propiedad de Abarrotes El Ahorro y está protegido por las leyes de
              propiedad intelectual de México.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">9. Modificaciones</h2>
            <p className="text-gray-700 leading-relaxed">
              Nos reservamos el derecho de modificar estos Términos y Condiciones en cualquier
              momento. Los cambios serán efectivos inmediatamente después de su publicación en el
              sitio web.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">10. Ley Aplicable</h2>
            <p className="text-gray-700 leading-relaxed">
              Estos Términos y Condiciones se rigen por las leyes de México. Cualquier disputa será
              resuelta en los tribunales competentes de la Ciudad de México.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">11. Contacto</h2>
            <p className="text-gray-700 mb-3">
              Para preguntas sobre estos Términos y Condiciones:
            </p>
            <div className="bg-purple-50 rounded-lg p-4">
              <p className="text-gray-700"><strong>Email:</strong> legal@abarrotesahorro.com.mx</p>
              <p className="text-gray-700"><strong>Teléfono:</strong> +52 55 1234 5678</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
