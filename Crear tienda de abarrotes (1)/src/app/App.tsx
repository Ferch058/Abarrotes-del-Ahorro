import { useState } from 'react';
import { Toaster } from 'sonner';
import { CartProvider } from './contexts/CartContext';
import { AuthProvider } from './contexts/AuthContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { ProductModal } from './components/ProductModal';
import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';
import { AboutPage } from './pages/AboutPage';
import { FAQPage } from './pages/FAQPage';
import { BlogPage } from './pages/BlogPage';
import { ContactPage } from './pages/ContactPage';
import { LoginPage } from './pages/LoginPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { CustomerServicePage } from './pages/CustomerServicePage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';
import { ReturnPolicyPage } from './pages/ReturnPolicyPage';
import { Product } from './contexts/CartContext';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const navigateTo = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={navigateTo} onViewProduct={setSelectedProduct} />;
      case 'products':
        return <ProductsPage onViewProduct={setSelectedProduct} />;
      case 'about':
        return <AboutPage />;
      case 'faq':
        return <FAQPage />;
      case 'blog':
        return <BlogPage />;
      case 'contact':
        return <ContactPage />;
      case 'customer-service':
        return <CustomerServicePage />;
      case 'privacy':
        return <PrivacyPolicyPage />;
      case 'terms':
        return <TermsPage />;
      case 'returns':
        return <ReturnPolicyPage />;
      case 'login':
        return <LoginPage onNavigate={navigateTo} />;
      case 'checkout':
        return <CheckoutPage onNavigate={navigateTo} />;
      default:
        return <HomePage onNavigate={navigateTo} onViewProduct={setSelectedProduct} />;
    }
  };

  return (
    <div className="w-full h-full">
      <AuthProvider>
        <CartProvider>
          <div className="min-h-screen flex flex-col bg-gray-50">
            <Header
              onNavigate={setCurrentPage}
              currentPage={currentPage}
              onCartOpen={() => setIsCartOpen(true)}
            />

            <main className="flex-1">
              {renderPage()}
            </main>

            <Footer onNavigate={navigateTo} />

            <CartDrawer
              isOpen={isCartOpen}
              onClose={() => setIsCartOpen(false)}
              onCheckout={() => setCurrentPage('checkout')}
            />

            <ProductModal
              product={selectedProduct}
              onClose={() => setSelectedProduct(null)}
            />

            <Toaster position="top-right" richColors />
          </div>
        </CartProvider>
      </AuthProvider>
    </div>
  );
}