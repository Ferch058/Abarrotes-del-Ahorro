import { RotateCcw, PackageX, CheckCircle2, AlertCircle } from 'lucide-react';

export function ReturnPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <RotateCcw className="text-orange-600" size={40} />
          </div>
          <h1 className="text-4xl font-bold mb-4">Política de Cancelación y Devolución</h1>
          <p className="text-gray-600">Última actualización: 5 de Junio de 2026</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 space-y-8">
          <section>
            <div className="flex items-center gap-3 mb-4">
              <PackageX className="text-green-600" size={28} />
              <h2 className="text-2xl font-bold">1. Política de Cancelación</h2>
            </div>

            <div className="space-y-4">
              <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
                <h3 className="font-semibold mb-2">1.1 Cancelación antes del envío</h3>
                <p className="text-gray-700">
                  Puede cancelar su pedido sin costo alguno dentro de las <strong>2 horas</strong> posteriores
                  a su realización, siempre que el pedido no haya sido procesado para envío.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">1.2 Cómo cancelar</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Llame a nuestro servicio al cliente: +52 55 1234 5678</li>
                  <li>Envíe un correo a: cancelaciones@abarrotesahorro.com.mx</li>
                  <li>Indique su número de pedido y motivo de cancelación</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2">1.3 Reembolso por cancelación</h3>
                <p className="text-gray-700">
                  Si su pedido es cancelado antes del envío, recibirá un reembolso completo en un
                  plazo de <strong>5 a 7 días hábiles</strong>, dependiendo de su institución bancaria.
                </p>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4 rounded">
                <div className="flex items-start gap-2">
                  <AlertCircle className="text-yellow-600 flex-shrink-0 mt-1" size={20} />
                  <p className="text-gray-700">
                    <strong>Importante:</strong> Una vez que el pedido ha sido enviado, no se puede
                    cancelar. En este caso, debe seguir el proceso de devolución.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <RotateCcw className="text-green-600" size={28} />
              <h2 className="text-2xl font-bold">2. Política de Devolución</h2>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">2.1 Plazo de devolución</h3>
                <p className="text-gray-700 mb-2">
                  Aceptamos devoluciones dentro de los <strong>7 días</strong> posteriores a la
                  recepción del pedido.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">2.2 Condiciones para devoluciones</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="border rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <CheckCircle2 className="text-green-600" size={24} />
                      <h4 className="font-semibold">Productos elegibles</h4>
                    </div>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>✓ Productos no perecederos sellados</li>
                      <li>✓ Artículos de limpieza sin abrir</li>
                      <li>✓ Productos de higiene sellados</li>
                      <li>✓ Productos defectuosos</li>
                      <li>✓ Productos incorrectos enviados</li>
                    </ul>
                  </div>

                  <div className="border rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <PackageX className="text-red-600" size={24} />
                      <h4 className="font-semibold">NO elegibles</h4>
                    </div>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>✗ Productos perecederos (frutas, lácteos)</li>
                      <li>✗ Alimentos abiertos o consumidos</li>
                      <li>✗ Productos sin empaque original</li>
                      <li>✗ Artículos personalizados</li>
                      <li>✗ Productos en oferta especial</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2">2.3 Proceso de devolución</h3>
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">1</div>
                    <div>
                      <h4 className="font-semibold">Contacte a servicio al cliente</h4>
                      <p className="text-gray-700 text-sm">
                        Llame al +52 55 1234 5678 o envíe email a devoluciones@abarrotesahorro.com.mx
                        con su número de pedido.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">2</div>
                    <div>
                      <h4 className="font-semibold">Aprobación de devolución</h4>
                      <p className="text-gray-700 text-sm">
                        Nuestro equipo revisará su solicitud y le proporcionará instrucciones
                        dentro de 24-48 horas.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">3</div>
                    <div>
                      <h4 className="font-semibold">Empaque y envío</h4>
                      <p className="text-gray-700 text-sm">
                        Empaque el producto en su caja original con todos los accesorios.
                        Usaremos mensajería prepagada para recoger el paquete.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">4</div>
                    <div>
                      <h4 className="font-semibold">Inspección y reembolso</h4>
                      <p className="text-gray-700 text-sm">
                        Inspeccionaremos el producto y procesaremos su reembolso en 5-7 días hábiles.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">3. Productos Defectuosos o Incorrectos</h2>
            <div className="bg-red-50 border-l-4 border-red-600 p-4 rounded">
              <p className="text-gray-700 mb-3">
                Si recibió un producto defectuoso, dañado o incorrecto:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Contáctenos inmediatamente (dentro de 48 horas de recibir el pedido)</li>
                <li>Envíe fotografías del producto y empaque</li>
                <li>Reemplazo o reembolso completo garantizado</li>
                <li>Recogida gratuita del producto defectuoso</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. Métodos de Reembolso</h2>
            <div className="space-y-3 text-gray-700">
              <p><strong>Tarjeta de crédito/débito:</strong> Reembolso a la tarjeta original en 5-7 días hábiles</p>
              <p><strong>OXXO/Transferencia:</strong> Reembolso por transferencia bancaria en 7-10 días hábiles</p>
              <p><strong>PayPal:</strong> Reembolso a cuenta PayPal en 3-5 días hábiles</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">5. Gastos de Envío</h2>
            <div className="space-y-3 text-gray-700">
              <p><strong>Productos defectuosos/incorrectos:</strong> Todos los gastos de envío son reembolsados</p>
              <p><strong>Cambio de opinión:</strong> El costo de envío original NO es reembolsable</p>
              <p><strong>Envío de devolución:</strong> Cubierto por nosotros si el producto es defectuoso</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">6. Cambios por Otro Producto</h2>
            <p className="text-gray-700 mb-3">
              Actualmente no ofrecemos cambios directos. Para obtener un producto diferente:
            </p>
            <ol className="list-decimal pl-6 space-y-2 text-gray-700">
              <li>Solicite la devolución del producto original</li>
              <li>Espere el reembolso</li>
              <li>Realice un nuevo pedido con el producto deseado</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">7. Contacto</h2>
            <p className="text-gray-700 mb-3">
              Para cualquier duda sobre cancelaciones o devoluciones:
            </p>
            <div className="bg-orange-50 rounded-lg p-4">
              <p className="text-gray-700"><strong>Email:</strong> devoluciones@abarrotesahorro.com.mx</p>
              <p className="text-gray-700"><strong>Teléfono:</strong> +52 55 1234 5678</p>
              <p className="text-gray-700"><strong>Horario:</strong> Lunes a Sábado, 8:00 AM - 9:00 PM</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
