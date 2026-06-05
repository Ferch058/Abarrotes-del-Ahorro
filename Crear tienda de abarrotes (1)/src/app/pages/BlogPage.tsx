import { useState } from 'react';
import { Calendar, User, ArrowRight, Tag, ArrowLeft, Clock, BookOpen } from 'lucide-react';
import { toast } from 'sonner';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  fullContent: React.ReactNode;
  author: string;
  authorRole: string;
  date: string;
  category: string;
  image: string;
  readTime: string;
  tags: string[];
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: '10 Consejos para Ahorrar en tus Compras de Abarrotes',
    excerpt: 'Descubre estrategias efectivas para reducir tus gastos en el supermercado sin sacrificar la calidad de tus alimentos.',
    author: 'María González',
    authorRole: 'Especialista en Finanzas del Hogar',
    date: '2026-06-01',
    category: 'Consejos',
    image: 'https://images.unsplash.com/photo-1534723452862-4c874018d66d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    readTime: '5 min',
    tags: ['ahorro', 'compras', 'finanzas'],
    fullContent: (
      <div className="space-y-6 text-gray-700 leading-relaxed">
        <p>
          Ahorrar en las compras del supermercado es uno de los cambios más impactantes que puedes hacer en tu presupuesto familiar. Con las estrategias correctas, puedes reducir tu gasto mensual hasta en un 30% sin sacrificar la calidad o variedad de tus alimentos.
        </p>

        <h3 className="text-xl font-bold text-gray-900">1. Planifica tu menú semanal</h3>
        <p>
          Antes de ir al super, diseña un menú para toda la semana. Esto te permitirá comprar exactamente lo que necesitas, evitando compras impulsivas y desperdicio de alimentos. Dedica 15 minutos cada domingo para planificar tus comidas y elaborar tu lista.
        </p>

        <h3 className="text-xl font-bold text-gray-900">2. Compara precios por unidad</h3>
        <p>
          No te dejes engañar por el tamaño del empaque. Siempre compara el precio por kilogramo o litro. Muchas veces los productos de presentación grande ofrecen mejor precio por unidad, aunque si no los vas a consumir antes de que venzan, no representan ahorro real.
        </p>

        <h3 className="text-xl font-bold text-gray-900">3. Aprovecha las ofertas y promociones</h3>
        <p>
          Identifica el ciclo de ofertas de tu tienda de confianza. La mayoría de los supermercados tienen ofertas recurrentes en días específicos o por temporada. Compra en mayor cantidad cuando los productos no perecederos que consumes frecuentemente estén en promoción.
        </p>

        <h3 className="text-xl font-bold text-gray-900">4. Compra a granel cuando sea posible</h3>
        <p>
          Arroz, frijoles, lentejas, avena y otros granos básicos suelen ser más baratos cuando se compran a granel. Además de ahorrar dinero, reduces el uso de empaques y contribuyes al medio ambiente.
        </p>

        <h3 className="text-xl font-bold text-gray-900">5. Lleva siempre tu lista de compras</h3>
        <p>
          Estudios demuestran que las personas que van al supermercado sin lista gastan en promedio 20% más. Una lista clara te ayuda a mantenerte enfocado y resistir la tentación de los productos en exhibición estratégica.
        </p>

        <h3 className="text-xl font-bold text-gray-900">6. Usa las marcas propias del supermercado</h3>
        <p>
          Las marcas de tienda suelen costar entre 20% y 40% menos que las marcas líderes, con calidad muy similar. Para productos como sal, azúcar, aceite, papel higiénico y detergente, las diferencias son mínimas.
        </p>

        <h3 className="text-xl font-bold text-gray-900">7. No hagas el súper con hambre</h3>
        <p>
          Este consejo suena simple pero tiene un gran impacto. Cuando tienes hambre, todo parece apetecible y terminas comprando snacks, dulces y productos que no estaban en tu lista. Come antes de ir de compras.
        </p>

        <h3 className="text-xl font-bold text-gray-900">8. Usa aplicaciones de cupones y cashback</h3>
        <p>
          Existen aplicaciones móviles que ofrecen cupones de descuento y devolución de efectivo en tus compras. Algunos ejemplos populares en México son las promociones de tarjetas bancarias, programas de lealtad y aplicaciones especializadas.
        </p>

        <h3 className="text-xl font-bold text-gray-900">9. Reduce el desperdicio de alimentos</h3>
        <p>
          Organiza tu refrigerador con el método PEPS (Primero en Entrar, Primero en Salir). Los alimentos más próximos a vencer deben estar al frente. Aprovecha sobras para crear nuevas recetas y usa las verduras menos frescas en sopas o guisos.
        </p>

        <h3 className="text-xl font-bold text-gray-900">10. Compra en línea con ofertas exclusivas</h3>
        <p>
          Tiendas como Abarrotes El Ahorro ofrecen descuentos exclusivos para compras en línea, además de la comodidad de recibir tus productos en casa. Aprovecha las promociones digitales y programa tus pedidos recurrentes para no quedarte sin básicos.
        </p>

        <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded-lg">
          <p className="font-semibold text-green-800">💡 Dato importante</p>
          <p className="text-green-700">
            Aplicando estos consejos de forma consistente, una familia promedio puede ahorrar entre $800 y $1,500 pesos al mes en sus compras de abarrotes.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    title: 'Guía Completa de Conservación de Alimentos',
    excerpt: 'Aprende las mejores técnicas para mantener tus productos frescos por más tiempo y evitar el desperdicio.',
    author: 'Carlos Ramírez',
    authorRole: 'Nutriólogo y Chef',
    date: '2026-05-28',
    category: 'Guías',
    image: 'https://images.unsplash.com/photo-1506617420156-8e4536971650?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    readTime: '7 min',
    tags: ['conservación', 'alimentos', 'refrigerador'],
    fullContent: (
      <div className="space-y-6 text-gray-700 leading-relaxed">
        <p>
          La conservación adecuada de alimentos no solo te ahorra dinero al reducir el desperdicio, sino que también garantiza que tu familia consuma productos seguros y nutritivos. En México, se desperdicia aproximadamente el 37% de los alimentos producidos, y una gran parte ocurre en el hogar.
        </p>

        <h3 className="text-xl font-bold text-gray-900">Temperatura: La clave de todo</h3>
        <p>
          La mayoría de las bacterias que arruinan los alimentos crecen entre 4°C y 60°C (conocida como la "zona de peligro"). Mantén tu refrigerador a 4°C o menos, y tu congelador a -18°C o menos.
        </p>

        <h3 className="text-xl font-bold text-gray-900">Conservación en el refrigerador</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Carnes y pescados:</strong> En la parte más fría (fondo o cajón especial), bien envueltos. Máximo 2-3 días.</li>
          <li><strong>Lácteos:</strong> No en la puerta (temperatura fluctúa). En el estante central.</li>
          <li><strong>Frutas y verduras:</strong> En los cajones específicos, separados (las frutas producen etileno que acelera la maduración de las verduras).</li>
          <li><strong>Sobras:</strong> En recipientes herméticos, máximo 3-4 días.</li>
        </ul>

        <h3 className="text-xl font-bold text-gray-900">Alimentos que NO van en el refrigerador</h3>
        <p>Estos productos se conservan mejor a temperatura ambiente:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Papas y camotes (el frío los endurece)</li>
          <li>Cebollas y ajos (la humedad los pudre)</li>
          <li>Pan (el frío lo reseca, mejor congelarlo)</li>
          <li>Tomates (el frío destruye su sabor y textura)</li>
          <li>Plátanos no maduros</li>
          <li>Aceite de oliva</li>
        </ul>

        <h3 className="text-xl font-bold text-gray-900">Técnicas de conservación prolongada</h3>

        <h4 className="text-lg font-semibold text-gray-800">Congelación</h4>
        <p>
          El congelador es tu mejor aliado. Puedes congelar pan, carne, verduras blanqueadas, frutas para smoothies e incluso leche. Etiqueta siempre con la fecha de congelación. La mayoría de alimentos conservan su calidad por 3-6 meses.
        </p>

        <h4 className="text-lg font-semibold text-gray-800">Escabechado y marinado</h4>
        <p>
          El vinagre crea un ambiente ácido que inhibe el crecimiento bacteriano. Chiles en escabeche, cebollas encurtidas y vegetales marinados pueden durar semanas refrigerados.
        </p>

        <h4 className="text-lg font-semibold text-gray-800">Vacío</h4>
        <p>
          Los selladores al vacío eliminan el oxígeno, reduciendo la oxidación y el crecimiento de bacterias aeróbicas. Son especialmente útiles para carnes y quesos.
        </p>

        <h3 className="text-xl font-bold text-gray-900">Señales de que un alimento ya no es seguro</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Cambio de color (especialmente en carnes)</li>
          <li>Olor desagradable o inusual</li>
          <li>Textura viscosa o babosa</li>
          <li>Presencia de moho visible</li>
          <li>Recipientes abombados o con gas</li>
        </ul>

        <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4 rounded-lg">
          <p className="font-semibold text-yellow-800">⚠️ Importante</p>
          <p className="text-yellow-700">
            "Cuando tengas duda, tíralo a la basura." La intoxicación alimentaria puede ser muy grave. Nunca pruebes alimentos que no estés seguro de que están en buen estado.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    title: 'Recetas Rápidas y Económicas para la Familia',
    excerpt: 'Deliciosas recetas que puedes preparar con ingredientes básicos de tu despensa.',
    author: 'Ana Martínez',
    authorRole: 'Chef y Blogger Culinaria',
    date: '2026-05-25',
    category: 'Recetas',
    image: 'https://images.unsplash.com/photo-1556767576-cf0a4a80e5b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    readTime: '6 min',
    tags: ['recetas', 'económico', 'familia'],
    fullContent: (
      <div className="space-y-6 text-gray-700 leading-relaxed">
        <p>
          No necesitas ingredientes exóticos ni mucho tiempo para preparar comidas deliciosas y nutritivas. Con los básicos de una buena despensa mexicana, puedes crear platos increíbles que toda la familia disfrutará.
        </p>

        <div className="bg-gray-50 rounded-xl p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-3">🍲 Sopa de Fideo Seco</h3>
          <p className="text-sm text-gray-500 mb-3">Tiempo: 20 min | Costo aprox: $25 | Porciones: 4</p>
          <h4 className="font-semibold mb-2">Ingredientes:</h4>
          <ul className="list-disc pl-6 space-y-1 text-sm">
            <li>200g de fideo delgado</li>
            <li>3 jitomates</li>
            <li>1/4 de cebolla</li>
            <li>2 dientes de ajo</li>
            <li>1 taza de caldo de pollo</li>
            <li>Aceite, sal y pimienta</li>
          </ul>
          <h4 className="font-semibold mt-4 mb-2">Preparación:</h4>
          <ol className="list-decimal pl-6 space-y-1 text-sm">
            <li>Dora el fideo en aceite hasta que esté dorado.</li>
            <li>Licúa jitomate, cebolla y ajo con un poco de caldo.</li>
            <li>Agrega la salsa al fideo y mezcla bien.</li>
            <li>Añade el resto del caldo y cocina a fuego medio 12 minutos.</li>
            <li>Sirve con crema y queso rallado.</li>
          </ol>
        </div>

        <div className="bg-gray-50 rounded-xl p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-3">🫘 Frijoles de la Olla Perfectos</h3>
          <p className="text-sm text-gray-500 mb-3">Tiempo: 90 min | Costo aprox: $20 | Porciones: 6</p>
          <h4 className="font-semibold mb-2">Ingredientes:</h4>
          <ul className="list-disc pl-6 space-y-1 text-sm">
            <li>500g de frijoles negros o bayos</li>
            <li>1/2 cebolla</li>
            <li>3 dientes de ajo</li>
            <li>1 rama de epazote (opcional pero recomendado)</li>
            <li>Sal al gusto</li>
          </ul>
          <h4 className="font-semibold mt-4 mb-2">Preparación:</h4>
          <ol className="list-decimal pl-6 space-y-1 text-sm">
            <li>Remoja los frijoles desde la noche anterior.</li>
            <li>Cuécelos con cebolla y ajo en suficiente agua.</li>
            <li>A los 60 minutos, agrega el epazote y la sal.</li>
            <li>Continúa cocinando hasta que estén suaves.</li>
          </ol>
        </div>

        <div className="bg-gray-50 rounded-xl p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-3">🥚 Huevos a la Mexicana</h3>
          <p className="text-sm text-gray-500 mb-3">Tiempo: 10 min | Costo aprox: $15 | Porciones: 2</p>
          <h4 className="font-semibold mb-2">Ingredientes:</h4>
          <ul className="list-disc pl-6 space-y-1 text-sm">
            <li>4 huevos</li>
            <li>2 jitomates picados</li>
            <li>1/4 cebolla picada</li>
            <li>1 chile serrano (opcional)</li>
            <li>Sal, pimienta y aceite</li>
          </ul>
          <h4 className="font-semibold mt-4 mb-2">Preparación:</h4>
          <ol className="list-decimal pl-6 space-y-1 text-sm">
            <li>Acitrona la cebolla y el chile en aceite caliente.</li>
            <li>Agrega el jitomate y cocina 3 minutos.</li>
            <li>Vierte los huevos batidos y revuelve constantemente.</li>
            <li>Sazona y sirve con frijoles y tortillas calientes.</li>
          </ol>
        </div>

        <h3 className="text-xl font-bold text-gray-900">Consejos de Preparación Inteligente</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Batch cooking:</strong> Cocina grandes cantidades de frijoles, arroz o pollo los domingos y refrigéralos para usar durante la semana.</li>
          <li><strong>Usa las sobras creativamente:</strong> El arroz sobrante se convierte en arroz frito, los frijoles en refritos, y la carne en tacos al día siguiente.</li>
          <li><strong>Congela porciones individuales:</strong> Sopas, caldos y guisos se congelan perfectamente en bolsas o recipientes.</li>
        </ul>
      </div>
    ),
  },
  {
    id: 4,
    title: 'Beneficios de Comprar en Línea tus Abarrotes',
    excerpt: 'Conoce las ventajas de hacer tus compras desde casa y cómo aprovechar al máximo las tiendas en línea.',
    author: 'Roberto Silva',
    authorRole: 'Experto en E-commerce',
    date: '2026-05-20',
    category: 'Tendencias',
    image: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    readTime: '4 min',
    tags: ['compras online', 'tecnología', 'conveniencia'],
    fullContent: (
      <div className="space-y-6 text-gray-700 leading-relaxed">
        <p>
          El comercio electrónico de abarrotes ha crecido un 180% en México en los últimos tres años. Cada vez más familias descubren las múltiples ventajas de hacer sus compras desde la comodidad de su hogar, y las razones son contundentes.
        </p>

        <h3 className="text-xl font-bold text-gray-900">1. Ahorro de tiempo significativo</h3>
        <p>
          Un viaje típico al supermercado toma entre 45 minutos y 2 horas si incluyes traslado, espera en cajas y regreso. Comprar en línea toma entre 10 y 20 minutos, y puedes hacerlo en cualquier momento: mientras trabajas, durante el recreo de los niños, o a medianoche.
        </p>

        <h3 className="text-xl font-bold text-gray-900">2. Comparación de precios instantánea</h3>
        <p>
          En una tienda física tienes que recordar precios o anotar para comparar. En línea puedes abrir múltiples pestañas, comparar precios por unidad, y el sistema te muestra automáticamente las mejores ofertas disponibles.
        </p>

        <h3 className="text-xl font-bold text-gray-900">3. Evita compras impulsivas</h3>
        <p>
          Los supermercados físicos están diseñados para maximizar tus compras con productos de alto margen en zonas estratégicas. Al comprar en línea, ves exactamente lo que buscas, tu carrito es transparente y puedes revisar tu gasto en tiempo real antes de pagar.
        </p>

        <h3 className="text-xl font-bold text-gray-900">4. Mayor variedad de productos</h3>
        <p>
          Las tiendas en línea pueden ofrecer catálogos mucho más amplios sin las limitaciones de espacio físico. En Abarrotes El Ahorro tenemos más de 25 categorías de productos que incluyen marcas especializadas difíciles de encontrar en supermercados convencionales.
        </p>

        <h3 className="text-xl font-bold text-gray-900">5. Ofertas y descuentos exclusivos digitales</h3>
        <p>
          La competencia en e-commerce es intensa, lo que beneficia al consumidor. Las tiendas en línea ofrecen cupones de bienvenida, descuentos por primera compra, programas de puntos, y promociones exclusivas que no existen en tiendas físicas.
        </p>

        <h3 className="text-xl font-bold text-gray-900">6. Historial de compras y listas guardadas</h3>
        <p>
          Tu tienda en línea recuerda qué compraste antes. Puedes repetir pedidos anteriores con un clic, crear listas de compras para diferentes miembros del hogar, y recibir sugerencias basadas en tus preferencias.
        </p>

        <h3 className="text-xl font-bold text-gray-900">7. Múltiples métodos de pago</h3>
        <p>
          Paga con tarjeta, transferencia bancaria, OXXO, o PayPal. La flexibilidad de pago es una ventaja real para quienes no siempre disponen de efectivo o prefieren ciertos métodos de pago.
        </p>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-green-50 p-4 rounded-lg text-center">
            <p className="text-3xl font-bold text-green-600">85%</p>
            <p className="text-sm text-gray-600">de usuarios reportan ahorro de tiempo</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg text-center">
            <p className="text-3xl font-bold text-blue-600">15%</p>
            <p className="text-sm text-gray-600">menos gasto promedio vs. tienda física</p>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg text-center">
            <p className="text-3xl font-bold text-purple-600">92%</p>
            <p className="text-sm text-gray-600">satisfacción con entregas a domicilio</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 5,
    title: 'Productos Orgánicos vs Convencionales: ¿Cuál Elegir?',
    excerpt: 'Analizamos las diferencias entre productos orgánicos y convencionales para ayudarte a tomar la mejor decisión.',
    author: 'Laura Hernández',
    authorRole: 'Nutrióloga Certificada',
    date: '2026-05-15',
    category: 'Salud',
    image: 'https://images.unsplash.com/photo-1586090643003-b2bfb4fbd833?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    readTime: '8 min',
    tags: ['orgánico', 'salud', 'nutrición'],
    fullContent: (
      <div className="space-y-6 text-gray-700 leading-relaxed">
        <p>
          La pregunta de si vale la pena pagar más por productos orgánicos es una de las más frecuentes entre quienes se preocupan por su salud y la de su familia. La respuesta, como suele pasar con la nutrición, no es simple.
        </p>

        <h3 className="text-xl font-bold text-gray-900">¿Qué significa "orgánico"?</h3>
        <p>
          Un producto orgánico es cultivado sin pesticidas sintéticos, herbicidas artificiales, fertilizantes químicos ni semillas modificadas genéticamente. Los animales en ganadería orgánica no reciben antibióticos ni hormonas de crecimiento artificiales.
        </p>

        <h3 className="text-xl font-bold text-gray-900">Diferencias nutricionales: ¿hay evidencia?</h3>
        <p>
          Estudios recientes sugieren que algunos productos orgánicos contienen niveles ligeramente más altos de ciertos antioxidantes y omega-3. Sin embargo, las diferencias no son tan dramáticas como a veces se afirma. La calidad nutricional depende más de la frescura, variedad y método de preparación.
        </p>

        <h3 className="text-xl font-bold text-gray-900">¿Cuándo SÍ vale la pena comprar orgánico?</h3>
        <p>La "Docena Sucia" son los 12 productos con mayor concentración de pesticidas donde el orgánico marca la diferencia:</p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-red-50 p-4 rounded-lg">
            <h4 className="font-semibold text-red-800 mb-2">🚨 Alta prioridad orgánico</h4>
            <ul className="text-sm space-y-1">
              <li>• Fresas</li>
              <li>• Espinacas</li>
              <li>• Manzanas</li>
              <li>• Uvas</li>
              <li>• Pimientos</li>
              <li>• Duraznos</li>
            </ul>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-semibold text-green-800 mb-2">✅ Convencional está bien</h4>
            <ul className="text-sm space-y-1">
              <li>• Aguacate</li>
              <li>• Maíz dulce</li>
              <li>• Piña</li>
              <li>• Cebolla</li>
              <li>• Papaya</li>
              <li>• Brócoli</li>
            </ul>
          </div>
        </div>

        <h3 className="text-xl font-bold text-gray-900">Impacto ambiental</h3>
        <p>
          La agricultura orgánica beneficia la biodiversidad, mejora la calidad del suelo y reduce la contaminación de mantos acuíferos. Si tu motivación es ambiental más que de salud personal, el orgánico tiene argumentos sólidos.
        </p>

        <h3 className="text-xl font-bold text-gray-900">Estrategia práctica y económica</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Prioriza orgánico en los productos de la "docena sucia" que más consume tu familia.</li>
          <li>Compra en mercados locales: a veces los pequeños productores practican agricultura limpia sin certificación formal.</li>
          <li>Lava muy bien los productos convencionales con agua y vinagre.</li>
          <li>No sacrifiques variedad ni cantidad por comprar todo orgánico si no está en tu presupuesto.</li>
        </ul>

        <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-lg">
          <p className="font-semibold text-blue-800">💙 Conclusión de la nutrióloga</p>
          <p className="text-blue-700">
            Comer más frutas y verduras es más importante que si son orgánicas o no. Una dieta rica en vegetales convencionales supera a una dieta pobre en vegetales orgánicos. Prioriza según tu presupuesto y no dejes que el costo del orgánico te aleje de consumir más plantas.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 6,
    title: 'Cómo Organizar tu Despensa como un Profesional',
    excerpt: 'Tips y trucos para mantener tu despensa ordenada, accesible y bien aprovisionada.',
    author: 'Pedro López',
    authorRole: 'Organizador del Hogar',
    date: '2026-05-10',
    category: 'Organización',
    image: 'https://images.unsplash.com/photo-1605371924599-2d0365da1ae0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    readTime: '5 min',
    tags: ['organización', 'hogar', 'despensa'],
    fullContent: (
      <div className="space-y-6 text-gray-700 leading-relaxed">
        <p>
          Una despensa bien organizada no solo es estética: te ahorra tiempo, dinero y el estrés de buscar ingredientes. Los chefs profesionales y los hoteleros saben que la organización de su almacén es la base de una cocina eficiente.
        </p>

        <h3 className="text-xl font-bold text-gray-900">Principio 1: PEPS (Primero en Entrar, Primero en Salir)</h3>
        <p>
          Cada vez que compras, coloca los productos nuevos detrás y trae al frente los más antiguos. Este sistema de rotación garantiza que nada venza sin ser usado y es el estándar en la industria alimentaria.
        </p>

        <h3 className="text-xl font-bold text-gray-900">Principio 2: Zonas por categorías</h3>
        <div className="space-y-3">
          {[
            { zone: 'Zona 1 - Granos y cereales', items: 'Arroz, frijoles, lentejas, avena, pasta, harina' },
            { zone: 'Zona 2 - Enlatados y conservas', items: 'Atún, sardinas, chiles, salsas, puré de tomate' },
            { zone: 'Zona 3 - Condimentos', items: 'Sal, pimienta, especias, consomé, aceites, vinagres' },
            { zone: 'Zona 4 - Snacks y botanas', items: 'Galletas, papas, nueces, frutos secos' },
            { zone: 'Zona 5 - Bebidas', items: 'Jugos, refrescos, agua, café, té' },
          ].map(({ zone, items }) => (
            <div key={zone} className="flex gap-3 p-3 bg-gray-50 rounded-lg">
              <div className="w-2 bg-green-500 rounded-full flex-shrink-0"></div>
              <div>
                <p className="font-semibold text-sm">{zone}</p>
                <p className="text-sm text-gray-600">{items}</p>
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-xl font-bold text-gray-900">Principio 3: Contenedores herméticos</h3>
        <p>
          Los granos, harinas y cereales duran mucho más en recipientes herméticos de vidrio o plástico de buena calidad. Además de conservar mejor, permiten ver el contenido de un vistazo y son más fáciles de limpiar que los empaques originales.
        </p>

        <h3 className="text-xl font-bold text-gray-900">Principio 4: El inventario mental o digital</h3>
        <p>
          Mantén una lista de tu despensa (en papel en el refrigerador o en una app de notas) con los productos que tienes y su fecha de vencimiento aproximada. Actualízala cuando compres y cuando uses algo. Esto evita comprar doble y olvidar que tienes algo.
        </p>

        <h3 className="text-xl font-bold text-gray-900">Los 10 básicos que nunca deben faltar</h3>
        <div className="grid md:grid-cols-2 gap-2">
          {['Arroz blanco', 'Frijoles negros o bayos', 'Aceite vegetal', 'Sal y pimienta', 'Ajo y cebolla', 'Jitomates en lata', 'Pasta o fideo', 'Huevos', 'Avena', 'Consomé en polvo'].map((item, i) => (
            <div key={i} className="flex items-center gap-2 p-2 bg-green-50 rounded">
              <span className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">{i + 1}</span>
              <span className="text-sm">{item}</span>
            </div>
          ))}
        </div>

        <h3 className="text-xl font-bold text-gray-900">Herramientas recomendadas</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Canastas o cajas de almacenamiento para agrupar categorías</li>
          <li>Etiquetas adhesivas para identificar contenido y fechas</li>
          <li>Tabletas giratorias (lazy susan) para aprovechar esquinas</li>
          <li>Organizadores de puerta para especias y condimentos pequeños</li>
          <li>Estantes adicionales si el espacio lo permite</li>
        </ul>
      </div>
    ),
  },
];

export function BlogPage() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  if (selectedPost) {
    return <BlogPostDetail post={selectedPost} onBack={() => setSelectedPost(null)} />;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Blog y Noticias</h1>
        <p className="text-xl text-gray-600">
          Consejos, recetas y novedades sobre el mundo de los abarrotes
        </p>
      </div>

      {/* Featured Post */}
      <div className="mb-12 bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="grid md:grid-cols-2 gap-0">
          <div className="h-64 md:h-auto">
            <img
              src={blogPosts[0].image}
              alt={blogPosts[0].title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-8 flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-4">
              <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium">
                Destacado
              </span>
              <span className="flex items-center gap-1 text-sm text-gray-600">
                <Tag size={16} />
                {blogPosts[0].category}
              </span>
            </div>
            <h2 className="text-3xl font-bold mb-4">{blogPosts[0].title}</h2>
            <p className="text-gray-700 mb-6">{blogPosts[0].excerpt}</p>
            <div className="flex items-center gap-6 text-sm text-gray-600 mb-6">
              <span className="flex items-center gap-2">
                <User size={16} />
                {blogPosts[0].author}
              </span>
              <span className="flex items-center gap-2">
                <Calendar size={16} />
                {new Date(blogPosts[0].date).toLocaleDateString('es-MX', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
            </div>
            <button
              onClick={() => setSelectedPost(blogPosts[0])}
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold inline-flex items-center gap-2 w-fit"
            >
              Leer artículo completo
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.slice(1).map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow flex flex-col"
          >
            <div className="h-48 overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-medium">
                  {post.category}
                </span>
                <span className="text-xs text-gray-500 flex items-center gap-1">
                  <Clock size={12} />
                  {post.readTime} de lectura
                </span>
              </div>
              <h3 className="font-bold text-lg mb-3 line-clamp-2">
                {post.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4 flex-1">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                <span className="flex items-center gap-1">
                  <User size={14} />
                  {post.author}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar size={14} />
                  {new Date(post.date).toLocaleDateString('es-MX', {
                    day: 'numeric',
                    month: 'short',
                  })}
                </span>
              </div>
              <button
                onClick={() => setSelectedPost(post)}
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors font-semibold flex items-center justify-center gap-2 text-sm w-full"
              >
                <BookOpen size={16} />
                Ver artículo completo
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Newsletter Subscription */}
      <NewsletterSubscription />
    </div>
  );
}

function BlogPostDetail({ post, onBack }: { post: BlogPost; onBack: () => void }) {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-green-600 hover:text-green-700 font-semibold mb-8 transition-colors"
      >
        <ArrowLeft size={20} />
        Volver al Blog
      </button>

      <article>
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium">
              {post.category}
            </span>
            <span className="text-sm text-gray-500 flex items-center gap-1">
              <Clock size={14} />
              {post.readTime} de lectura
            </span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
            {post.title}
          </h1>
          <p className="text-xl text-gray-600 mb-6">{post.excerpt}</p>

          {/* Author and date */}
          <div className="flex items-center gap-6 pb-6 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                <User className="text-white" size={24} />
              </div>
              <div>
                <p className="font-semibold text-gray-900">{post.author}</p>
                <p className="text-sm text-gray-500">{post.authorRole}</p>
              </div>
            </div>
            <span className="flex items-center gap-2 text-sm text-gray-500">
              <Calendar size={16} />
              {new Date(post.date).toLocaleDateString('es-MX', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
          </div>
        </div>

        {/* Featured Image */}
        <div className="mb-8 rounded-xl overflow-hidden shadow-lg">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-80 object-cover"
          />
        </div>

        {/* Content */}
        <div className="prose max-w-none">
          {post.fullContent}
        </div>

        {/* Tags */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-3">Etiquetas:</p>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Back button at bottom */}
        <div className="mt-10">
          <button
            onClick={onBack}
            className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold"
          >
            <ArrowLeft size={20} />
            Volver al Blog
          </button>
        </div>
      </article>
    </div>
  );
}

function NewsletterSubscription() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error('Por favor ingresa tu correo electrónico');
      return;
    }

    console.log('Suscripción guardada:', { email, date: new Date() });

    toast.success('¡Suscripción exitosa! Revisa tu correo para confirmar.');
    setSubscribed(true);
    setEmail('');

    setTimeout(() => setSubscribed(false), 5000);
  };

  return (
    <div className="mt-16 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg p-8 text-center">
      <h2 className="text-3xl font-bold mb-4">Suscríbete a Nuestro Boletín</h2>
      <p className="text-green-100 mb-6 max-w-2xl mx-auto">
        Recibe consejos, recetas y ofertas exclusivas directamente en tu correo electrónico
      </p>
      {subscribed ? (
        <div className="max-w-md mx-auto bg-white text-green-600 py-4 px-6 rounded-lg">
          <p className="font-semibold">¡Gracias por suscribirte!</p>
          <p className="text-sm">Revisa tu correo para confirmar tu suscripción.</p>
        </div>
      ) : (
        <form onSubmit={handleSubscribe} className="max-w-md mx-auto flex gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Tu correo electrónico"
            required
            className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
          />
          <button
            type="submit"
            className="bg-white text-green-600 px-6 py-3 rounded-lg hover:bg-green-50 transition-colors font-semibold"
          >
            Suscribirse
          </button>
        </form>
      )}
    </div>
  );
}
