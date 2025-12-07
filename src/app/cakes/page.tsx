'use client';

import { ProductCard } from '@/components/products/product-card';
import { getProductsByCategory } from '@/lib/data/products';
import { useCart } from '@/lib/cart-context';
import { toast } from 'sonner';
import { Cake } from 'lucide-react';

export default function CakesPage() {
  const { addToCart } = useCart();
  const cakes = getProductsByCategory('cakes');

  const handleQuickAdd = (product: any) => {
    addToCart(product, 1);
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-3 mb-4">
            <Cake className="w-12 h-12 text-primary" />
            <h1 className="text-5xl font-heading font-bold">Custom Cakes</h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Delicious, beautifully designed cakes for every celebration. Fully customizable to make your special moments even sweeter.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {cakes.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={handleQuickAdd} />
          ))}
        </div>
      </div>
    </div>
  );
}
