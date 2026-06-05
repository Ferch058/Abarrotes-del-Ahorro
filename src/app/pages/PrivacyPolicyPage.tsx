import { Shield, Lock, Eye, UserCheck, FileText } from 'lucide-react';

export function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Shield className="text-blue-600" size={40} />
          </div>
          <h1 className="text-4xl font-bold mb-4">Política de Privacidad</h1>
          <p className="text-gray-600">Última actualización: 5 de Junio de 2026</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 space-y-8">
          <section>
            <div className="flex items-center gap-3 mb-4">
              <FileText className="text-green-600" size={28} />
              <h2 className="text-2xl font-bold">1. Introducción</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              En Abarrotes El Ahorro, nos comprometemos a proteger su privacidad y garantizar la
              seguridad de su información personal. Esta Política de Privacidad explica cómo
              recopilamos, usamos, divulgamos y protegemos su información cuando visita nuestro
              sitio web www.abarrotesahorro.com.mx y utiliza nuestros servicios.
            </p>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <Eye className="text-green-600" size={28} />
              <h2 className="text-2xl font-bold">2. Información que Recopilamos</h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <div>
                <h3 className="font-semibold mb-2">2.1 Información Personal:</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Nombre completo</li>
                  <li>Dirección de correo electrónico</li>
                  <li>Número de teléfono</li>
                  <li>Dirección de envío y facturación</li>
                  <li>Información de pago (procesada de forma segura)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">2.2 Información de Navegación:</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Dirección IP</li>
                  <li>Tipo de navegador</li>
                  <li>Páginas visitadas</li>
                  <li>Tiempo de permanencia en el sitio</li>
                  <li>Cookies y tecnologías similares</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <UserCheck className="text-green-600" size={28} />
              <h2 className="text-2xl font-bold">3. Uso de la Información</h2>
            </div>
            <p className="text-gray-700 mb-3">Utilizamos su información para:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Procesar y gestionar sus pedidos</li>
              <li>Comunicarnos con usted sobre su cuenta y pedidos</li>
              <li>Mejorar nuestros productos y servicios</li>
              <li>Personalizar su experiencia de compra</li>
              <li>Enviar ofertas promocionales (con su consentimiento)</li>
              <li>Prevenir fraudes y garantizar la seguridad</li>
              <li>Cumplir con obligaciones legales</li>
            </ul>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <Lock className="text-green-600" size={28} />
              <h2 className="text-2xl font-bold">4. Protección de Datos</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Implementamos medidas de seguridad técnicas, administrativas y físicas para proteger
              su información personal contra acceso no autorizado, alteración, divulgación o
              destrucción. Utilizamos encriptación SSL para todas las transacciones y almacenamos
              sus datos en servidores seguros.
            </p>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <h2 className="text-2xl font-bold">5. Compartir Información</h2>
            </div>
            <p className="text-gray-700 mb-3">
              No vendemos ni alquilamos su información personal. Podemos compartir sus datos con:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Proveedores de servicios de pago (para procesar transacciones)</li>
              <li>Empresas de mensajería (para entregar pedidos)</li>
              <li>Proveedores de servicios tecnológicos (hosting, análisis)</li>
              <li>Autoridades legales (cuando sea requerido por ley)</li>
            </ul>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <h2 className="text-2xl font-bold">6. Cookies</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Utilizamos cookies para mejorar su experiencia en nuestro sitio web. Las cookies son
              pequeños archivos de texto que se almacenan en su dispositivo. Puede configurar su
              navegador para rechazar cookies, aunque esto puede limitar algunas funcionalidades
              del sitio.
            </p>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <h2 className="text-2xl font-bold">7. Sus Derechos</h2>
            </div>
            <p className="text-gray-700 mb-3">Usted tiene derecho a:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Acceder a su información personal</li>
              <li>Rectificar datos inexactos</li>
              <li>Cancelar su cuenta</li>
              <li>Oponerse al procesamiento de sus datos</li>
              <li>Solicitar la portabilidad de sus datos</li>
              <li>Retirar su consentimiento en cualquier momento</li>
            </ul>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <h2 className="text-2xl font-bold">8. Retención de Datos</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Conservamos su información personal solo durante el tiempo necesario para cumplir con
              los fines descritos en esta política, a menos que la ley requiera o permita un
              período de retención más largo.
            </p>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <h2 className="text-2xl font-bold">9. Menores de Edad</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Nuestros servicios no están dirigidos a menores de 18 años. No recopilamos
              intencionalmente información personal de menores. Si descubrimos que hemos recopilado
              datos de un menor, eliminaremos esa información de inmediato.
            </p>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <h2 className="text-2xl font-bold">10. Cambios a esta Política</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Nos reservamos el derecho de modificar esta Política de Privacidad en cualquier
              momento. Los cambios serán efectivos inmediatamente después de su publicación en
              nuestro sitio web. Le notificaremos sobre cambios significativos por correo
              electrónico.
            </p>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <h2 className="text-2xl font-bold">11. Contacto</h2>
            </div>
            <p className="text-gray-700 mb-3">
              Si tiene preguntas sobre esta Política de Privacidad, contáctenos:
            </p>
            <div className="bg-green-50 rounded-lg p-4">
              <p className="text-gray-700"><strong>Email:</strong> privacidad@abarrotesahorro.com.mx</p>
              <p className="text-gray-700"><strong>Teléfono:</strong> +52 55 1234 5678</p>
              <p className="text-gray-700"><strong>Dirección:</strong> Av. Insurgentes Sur 1234, Del Valle, CDMX</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
