'use client';

import { ProductCard } from '@/components/products/product-card';
import { getProductsByCategory } from '@/lib/data/products';
import { useCart } from '@/lib/cart-context';
import { toast } from 'sonner';
import { Gift } from 'lucide-react';

export default function GiftsPage() {
  const { addToCart } = useCart();
  const gifts = getProductsByCategory('gifts');

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
            <Gift className="w-12 h-12 text-primary" />
            <h1 className="text-5xl font-heading font-bold">Gift Items</h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Personalized gifts that show you care. From photo frames to jewelry boxes, find the perfect gift for your loved ones.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {gifts.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={handleQuickAdd} />
          ))}
        </div>
      </div>
    </div>
  );
}
