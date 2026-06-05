import { X, ShoppingCart, Package, Tag } from 'lucide-react';
import { Product } from '../contexts/CartContext';
import { useCart } from '../contexts/CartContext';
import { toast } from 'sonner';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export function ProductModal({ product, onClose }: ProductModalProps) {
  const { addToCart } = useCart();

  if (!product) return null;

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.name} agregado al carrito`);
    onClose();
  };

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        {/* Modal */}
        <div
          className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b sticky top-0 bg-white">
            <h2 className="font-bold text-xl">Detalles del Producto</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Image */}
              <div className="bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-80 object-cover"
                />
              </div>

              {/* Details */}
              <div>
                <div className="mb-3">
                  <span className="inline-flex items-center gap-1 text-sm text-green-600 font-medium bg-green-50 px-3 py-1 rounded-full">
                    <Tag size={14} />
                    {product.category}
                  </span>
                </div>

                <h1 className="text-2xl font-bold mb-4">{product.name}</h1>

                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl font-bold text-green-600">
                    ${product.price.toFixed(2)}
                  </span>
                  <span className="text-gray-500">MXN</span>
                </div>

                <div className="flex items-center gap-2 mb-6 text-gray-600">
                  <Package size={20} />
                  <span>
                    {product.stock > 0 ? (
                      <>
                        <span className="font-medium text-green-600">
                          {product.stock}
                        </span>{' '}
                        unidades disponibles
                      </>
                    ) : (
                      <span className="font-medium text-red-600">
                        Agotado
                      </span>
                    )}
                  </span>
                </div>

                <div className="mb-6">
                  <h3 className="font-semibold mb-2">Descripción:</h3>
                  <p className="text-gray-700 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                <div className="mb-6 bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2 text-blue-900">
                    Información adicional:
                  </h3>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>✓ Envío gratis en compras mayores a $500</li>
                    <li>✓ Garantía de calidad</li>
                    <li>✓ Devoluciones dentro de 7 días</li>
                  </ul>
                </div>

                <button
                  onClick={handleAddToCart}
                  disabled={product.stock === 0}
                  className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold flex items-center justify-center gap-2 disabled:bg-gray-300 disabled:cursor-not-allowed"
                >
                  <ShoppingCart size={20} />
                  Agregar al carrito
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
